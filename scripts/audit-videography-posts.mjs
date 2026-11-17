import assert from 'node:assert/strict';
import fs from 'node:fs';
import { articles } from './data/videography-posts.mjs';

const origin = 'https://www.sparklinesstudio.com';
async function get(path) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(30000), headers: { 'Cache-Control': 'no-cache' } });
  assert(response.ok, `${path}: HTTP ${response.status}`);
  return response.text();
}
const [apiText, sitemap, listing] = await Promise.all([get('/api/blogs'), get('/sitemap.xml'), get('/blogs')]);
const published = JSON.parse(apiText).blogs;
const results = await Promise.all(articles.map(async article => {
  const path = '/blogs/' + article.slug;
  assert(published.some(post => post.slug === article.slug && post.status === 'published'), `${path}: missing from public API`);
  assert(sitemap.includes(origin + path), `${path}: missing from sitemap`);
  assert(listing.includes(path), `${path}: missing from blog listing`);
  const html = await get(path);
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, '');
  assert.equal(h1, article.title, `${path}: incorrect H1`);
  const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/i)?.[1];
  assert.equal(description, article.metaDescription, `${path}: incorrect meta description`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
  assert(title?.startsWith(article.metaTitle), `${path}: incorrect title`);
  assert(html.includes('rel="canonical" href="' + origin + path + '"'), `${path}: incorrect canonical`);
  assert(html.includes('id="section-1"'), `${path}: missing section anchor`);
  for (const href of [...html.matchAll(/href="(#section-\d+)"/g)].map(match => match[1])) {
    assert(html.includes('id="' + href.slice(1) + '"'), `${path}: broken anchor ${href}`);
  }
  assert(html.includes('Videography%20image%20placeholder'), `${path}: missing placeholder`);
  return { slug: article.slug, http: 200, h1: true, metadata: true, canonical: true, sectionLinks: true, publicApi: true, blogListing: true, sitemap: true };
}));
const file = new URL('./data/videography-publication-report.json', import.meta.url);
const report = JSON.parse(fs.readFileSync(file, 'utf8'));
report.publicVerification = { checkedAt: new Date().toISOString(), results };
fs.writeFileSync(file, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ verifiedLive: results.length, checks: 'HTTP, H1, metadata, canonical, anchors, placeholder, public API, blog listing, sitemap' }, null, 2));
