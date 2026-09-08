import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { hero } from "@/content/site";

export const alt =
  "RGD Solutions: AI, web and mobile development team led by Ricardo D’Alessandro.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const wordmarkPath = path.join(process.cwd(), "public/brand/rgd-solutions-logo-on-dark.svg");

export default async function OpenGraphImage() {
  const wordmark = await readFile(wordmarkPath);
  const wordmarkSrc = `data:image/svg+xml;base64,${wordmark.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "radial-gradient(circle at 12% 8%, rgba(63,210,199,0.38) 0%, rgba(63,210,199,0) 42%), radial-gradient(circle at 92% 30%, rgba(240,143,160,0.32) 0%, rgba(240,143,160,0) 40%), #070f1f",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* The SVG is 184x120 with outlined glyphs, so no font needs loading here. */}
      <img src={wordmarkSrc} alt="" width={166} height={108} />
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#3fd2c7",
          }}
        >
          {hero.eyebrow}
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
          {hero.headline}
        </div>
      </div>
      <div style={{ fontSize: 22, color: "rgba(255,255,255,0.62)" }}>{hero.proofLine}</div>
    </div>,
    size,
  );
}
