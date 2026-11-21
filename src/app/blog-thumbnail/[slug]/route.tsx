import { ImageResponse } from "next/og";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-z0-9][a-z0-9-]{0,179}$/i.test(slug)) return new Response(null, { status: 404 });

  const seed = [...slug].reduce((value, letter) => (Math.imul(value, 31) + letter.charCodeAt(0)) >>> 0, 0);
  const palettes = [
    ["#f7f6f2", "#073bff", "#ff601c"],
    ["#073bff", "#e8edff", "#ff601c"],
    ["#11170f", "#f7f6f2", "#ff601c"],
    ["#ff601c", "#11170f", "#f7f6f2"],
  ];
  const [paper, ink, accent] = palettes[seed % palettes.length];
  const tilt = seed % 40 - 20;
  const offset = 475 + seed % 195;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", backgroundColor: paper, overflow: "hidden" }}>
      {Array.from({ length: 70 }, (_, index) => (
        <div key={index} style={{
          position: "absolute", left: 40 + (index % 14) * 85, top: 37 + Math.floor(index / 14) * 133,
          width: 7, height: 7, borderRadius: 7, backgroundColor: ink, opacity: 0.26,
        }} />
      ))}
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} style={{
          position: "absolute", left: 120 + index * 102, top: -170, width: 26, height: 970,
          backgroundColor: ink, opacity: 0.12, transform: `rotate(${24 + tilt}deg)`,
        }} />
      ))}
      <div style={{
        position: "absolute", left: offset - 218, top: 96, width: 436, height: 436, borderRadius: 220,
        border: `4px solid ${ink}`, display: "flex", alignItems: "center", justifyContent: "center",
        backgroundColor: paper,
      }}>
        {[0, 60, 120].map(angle => (
          <div key={angle} style={{
            position: "absolute", width: 340, height: 38, borderRadius: 19, backgroundColor: ink,
            transform: `rotate(${angle + tilt}deg)`,
          }} />
        ))}
        <div style={{ position: "absolute", width: 74, height: 74, borderRadius: 38, backgroundColor: accent }} />
      </div>
      <div style={{
        display: "flex", position: "absolute", bottom: 29, left: 40, backgroundColor: ink, color: paper,
        padding: "12px 18px", fontSize: 24, fontWeight: 700, letterSpacing: 2,
      }}>SPARKLINES STUDIO</div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" } },
  );
}
