import assert from 'node:assert/strict';
import dns from 'node:dns';
import fs from 'node:fs';
import { MongoClient } from 'mongodb';
import sanitizeHtml from 'sanitize-html';
import { articles } from './data/videography-posts.mjs';

if (fs.existsSync('.env.local')) process.loadEnvFile('.env.local');
dns.setServers((process.env.MONGODB_DNS_SERVERS || '1.1.1.1,8.8.8.8').split(','));
const origin = 'https://www.sparklinesstudio.com';
// Use the existing deployed image endpoint, so placeholders need no deployment.
const placeholder = origin + '/og?title=Videography%20image%20placeholder';
const batch = 'videography-2026-11-17';
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const plain = html => sanitizeHtml(html.replace(/<\/(?:p|h[1-6]|li)>/gi, '$& '), { allowedTags: [], allowedAttributes: {} }).replace(/&[^;]+;/g, ' ');
const words = value => plain(value).trim().split(/\s+/).filter(Boolean).length;
const slugs = new Set(articles.map(article => article.slug));
assert.equal(articles.length, 10);
assert.equal(slugs.size, 10);

const posts = articles.map(article => {
  const paragraphs = [article.intro, ...article.sections.map(section => section[1])];
  const bodyWords = words(paragraphs.join(' '));
  assert(bodyWords >= 700 && bodyWords <= 900, `${article.slug}: ${bodyWords} body words`);
  assert(article.title.endsWith('?') && article.title.length <= 180);
  assert(article.metaTitle.endsWith('?') && article.metaTitle.length <= 60);
  assert(article.metaDescription.length >= 140 && article.metaDescription.length <= 160);
  assert(article.sections.every(([heading]) => heading.endsWith('?')));
  for (const value of [article.title, article.metaTitle, article.metaDescription, article.intro.split(/[.!?]/)[0]]) {
    assert(value.toLowerCase().includes(article.keyword), `${article.slug}: missing exact keyword`);
  }
  assert(article.slug.includes(article.keyword.replaceAll(' ', '-')));
  const contentHtml = '<p>' + article.intro + '</p>' + article.sections.map(([heading, text]) =>
    '<h2>' + escape(heading) + '</h2>' + text.split('\n').map(paragraph => '<p>' + paragraph + '</p>').join('')
  ).join('');
  const cleaned = sanitizeHtml(contentHtml, {
    allowedTags: ['p', 'h2', 'a'],
    allowedAttributes: { a: ['href', 'rel'] },
    allowedSchemes: ['https', 'http'],
    allowProtocolRelative: false,
    transformTags: { a: (tagName, attribs) => ({ tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } }) },
  });
  assert.equal(plain(cleaned), plain(contentHtml), `${article.slug}: sanitization changed text`);
  const links = [...cleaned.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
  const related = links.filter(link => link.startsWith('/blogs/'));
  assert(related.length >= 2, `${article.slug}: needs contextual cross-links`);
  for (const href of related) assert(slugs.has(href.slice('/blogs/'.length)), `Unknown article ${href}`);
  assert(links.some(link => /^#section-[1-6]$/.test(link)), `${article.slug}: missing self section link`);
  return {
    slug: article.slug, title: article.title, contentHtml: cleaned,
    metaTitle: article.metaTitle, metaDescription: article.metaDescription,
    targetKeyword: article.keyword, featuredImage: placeholder,
    imageAlt: 'Temporary videography image placeholder; replace with an article-specific photograph.',
    authorName: 'Sparklines Studio',
    authorBio: 'Sparklines Studio is a video production agency in Kolkata creating brand films, product videos and business stories.',
    categories: ['Videography', article.category], status: 'published', scheduledAt: null,
    publicationBatch: batch,
  };
});
// Every new article must receive at least one contextual link from another article.
for (const post of posts) assert(posts.some(other => other.slug !== post.slug && other.contentHtml.includes('href="/blogs/' + post.slug + '"')), `No inbound link: ${post.slug}`);
const report = posts.map(post => ({
  slug: post.slug, url: origin + '/blogs/' + post.slug, title: post.title,
  targetKeyword: post.targetKeyword, metaTitle: post.metaTitle, metaDescription: post.metaDescription,
  bodyWords: words([articles.find(article => article.slug === post.slug).intro, ...articles.find(article => article.slug === post.slug).sections.map(section => section[1])].join(' ')),
  totalWords: words(post.contentHtml),
}));

if (!process.argv.includes('--apply') && !process.argv.includes('--verify')) {
  console.log(JSON.stringify({ validated: posts.length, mode: 'dry-run', articles: report }, null, 2));
  process.exit(0);
}
assert(process.env.MONGODB_URI, 'MONGODB_URI is missing');
const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000, connectTimeoutMS: 10000 });
try {
  await client.connect();
  const collection = client.db(process.env.MONGODB_DB || 'sparklines_blog').collection('blogs');
  const filter = { slug: { $in: [...slugs] } };
  const existing = await collection.find(filter).toArray();
  // Refuse to overwrite an unrelated article or later editorial changes.
  for (const doc of existing) {
    const expected = posts.find(post => post.slug === doc.slug);
    assert.equal(doc.publicationBatch, batch, `Slug already belongs to another article: ${doc.slug}`);
    for (const [key, value] of Object.entries(expected)) assert.deepEqual(doc[key], value, `Existing ${doc.slug} differs in ${key}; preserved`);
  }
  let inserted = 0;
  if (process.argv.includes('--apply')) {
    const image = await fetch(placeholder, { signal: AbortSignal.timeout(20000) });
    assert(image.ok && image.headers.get('content-type')?.startsWith('image/'), 'Placeholder image is not available');
    await image.arrayBuffer();
    const now = new Date();
    const result = await collection.bulkWrite(posts.map(post => ({ updateOne: {
      filter: { slug: post.slug },
      update: { $setOnInsert: { ...post, publishedAt: now, createdAt: now, updatedAt: now, deletedAt: null } },
      upsert: true,
    } })));
    inserted = result.upsertedCount;
  }
  const saved = await collection.find(filter).toArray();
  assert.equal(saved.length, posts.length);
  for (const doc of saved) {
    const expected = posts.find(post => post.slug === doc.slug);
    for (const [key, value] of Object.entries(expected)) assert.deepEqual(doc[key], value, `Saved ${doc.slug} differs in ${key}`);
    assert.equal(doc.deletedAt, null);
    assert(doc.publishedAt instanceof Date);
  }
  fs.writeFileSync(new URL('./data/videography-publication-report.json', import.meta.url), JSON.stringify({
    verifiedAt: new Date().toISOString(), publicationBatch: batch, status: 'published', featuredImage: placeholder, articles: report,
  }, null, 2) + '\n');
  console.log(JSON.stringify({ verifiedPublished: saved.length, inserted, alreadyPresent: saved.length - inserted, articles: report }, null, 2));
} catch (error) {
  // Do not print driver connection details or credentials.
  console.error(error instanceof assert.AssertionError ? error.message : `Publication failed: ${error.name} ${error.code || ''}`);
  process.exitCode = 1;
} finally {
  await client.close();
}
