import { NextResponse } from "next/server";
import { resolve4 } from "node:dns/promises";
import { request as httpsRequest } from "node:https";
import { isIP } from "node:net";
import { authorize } from "@/lib/blog/api";

function publicAddress(address: string) {
  const [a, b] = address.split(".").map(Number);
  return !(
    a === 0 ||
    a === 10 ||
    a === 127 ||
    a >= 224 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 198 && (b === 18 || b === 19))
  );
}
export async function GET(request: Request) {
  const denied = await authorize(request);
  if (denied) return denied;
  try {
    const url = new URL(new URL(request.url).searchParams.get("url") || "");
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.port && url.port !== "443") ||
      isIP(url.hostname)
    )
      throw new Error("Use a public HTTPS website URL.");
    const addresses = await resolve4(url.hostname);
    if (!addresses.length || addresses.some((a) => !publicAddress(a)))
      throw new Error("Use a public website URL.");
    const html = await new Promise<string>((resolve, reject) => {
      const req = httpsRequest(
        url,
        {
          headers: {
            Accept: "text/html",
            "User-Agent": "SparklinesStudio/1.0",
          },
          lookup: (_host, options, callback) => {
            if (options.all)
              callback(null, [{ address: addresses[0], family: 4 }]);
            else callback(null, addresses[0], 4);
          },
        },
        (res) => {
          if (
            res.statusCode !== 200 ||
            !res.headers["content-type"]?.includes("text/html")
          ) {
            res.resume();
            resolve("");
            return;
          }
          let bytes = 0;
          const chunks: Buffer[] = [];
          res.on("data", (chunk: Buffer) => {
            bytes += chunk.length;
            if (bytes > 1024 * 1024) {
              res.destroy();
              reject(new Error("Page is too large."));
            } else chunks.push(chunk);
          });
          res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
          res.on("error", reject);
        },
      );
      req.setTimeout(6000, () => req.destroy(new Error("Preview timed out.")));
      req.on("error", reject);
      req.end();
    });
    const meta = (key: string) => {
      for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
        const attrs = Object.fromEntries(
          [...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [
            m[1].toLowerCase(),
            m[2],
          ]),
        );
        if (attrs.property === key || attrs.name === key)
          return attrs.content || "";
      }
      return "";
    };
    const imageValue = meta("og:image");
    let image: string | null = null;
    try {
      if (imageValue) {
        const candidate = new URL(imageValue, url);
        if (candidate.protocol === "https:") image = candidate.toString();
      }
    } catch {}
    return NextResponse.json({
      url: url.toString(),
      title:
        meta("og:title") ||
        html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ||
        url.hostname,
      description: meta("og:description") || meta("description"),
      image,
      siteName: meta("og:site_name") || url.hostname,
      favicon: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not load preview.",
      },
      { status: 400 },
    );
  }
}
