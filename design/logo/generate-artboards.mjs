// Generates every artboard on the logo canvas (rounds 1 to 6) plus canvas.json.
// Run from this directory: node generate-artboards.mjs
// The seeded canvas (rgd-solutions-logo-mark.html) is built from these files and is not committed.
import { writeFileSync } from "node:fs";

const NAVY = "#070f1f", TEAL = "#3fd2c7", ROSE = "#f08fa0";
const OUTFIT = "Outfit, 'Avenir Next', 'Segoe UI', system-ui, sans-serif";

// Each option: viewBox size `vb`, stroke width `sw`, whether it sits in the glass tile.
const options = [
  { file: "Main", name: "Option A · Signal R", tile: true, vb: 24, sw: 2,
    why: "A geometric R drawn as strokes, the same 2px round-cap grammar as the site's icons. The leg breaks away in teal: the part of the R that goes somewhere.",
    tradeoff: "Closest to what is there today. Reads as a refined R, not a new symbol.",
    svg: `<path d="M7 20V4h5.5a4 4 0 0 1 0 8H7" stroke="#fff"/><path d="M12.5 12 18 20" stroke="${TEAL}"/>` },
  { file: "OptionB", name: "Option B · Three nodes", tile: true, vb: 24, sw: 2,
    why: "R, G, D as three connected nodes. An abstract graph for AI and systems work, with the output node in teal.",
    tradeoff: "Not tied to the name; the wordmark beside it carries the identity.",
    svg: `<path d="M5.5 17.5 12 6.5l6.5 11" stroke="#fff"/><circle cx="5.5" cy="17.5" r="2" fill="${NAVY}" stroke="#fff"/><circle cx="12" cy="6.5" r="2" fill="${NAVY}" stroke="#fff"/><circle cx="18.5" cy="17.5" r="2.4" fill="${TEAL}" stroke="${TEAL}"/>` },
  { file: "OptionC", name: "Option C · Solid tile", tile: false, vb: 24, sw: 2,
    why: "The tile becomes the mark: a teal rounded square with the R knocked out in navy. The only option with real color weight in the header.",
    tradeoff: "Louder than the glass chrome around it; the teal has to earn that spot.",
    svg: `<rect x="0" y="0" width="24" height="24" rx="7" fill="${TEAL}" stroke="none"/><path d="M8.5 18.5V5.5h4.5a3.5 3.5 0 0 1 0 7H8.5" stroke="${NAVY}" stroke-width="2.4"/><path d="M13 12.5 17 18.5" stroke="${NAVY}" stroke-width="2.4"/>` },
  { file: "OptionD", name: "Option D · Stack", tile: true, vb: 24, sw: 2,
    why: "Three offset bars: the layers of a full-stack build, stepping up and to the right. The top layer, the product people see, is teal.",
    tradeoff: "Most abstract of the four. Says 'stack' and 'shipped', not 'RGD'.",
    svg: `<path d="M5 18h8" stroke="#fff"/><path d="M8 12h8" stroke="#fff"/><path d="M11 6h8" stroke="${TEAL}"/>` },

  // ---- Round two: 16 more ----
  { file: "OptionE", name: "Option E · Aurora monogram", tile: true, vb: 48, sw: 4,
    why: "A heavy Outfit R filled with the site's own aurora: teal fading into rose, the same two colors as the hero's drifting blobs. A soft glow sits behind it like light through glass.",
    tradeoff: "Gradient marks flatten badly in one-color contexts (print, embroidery, a monochrome favicon).",
    svg: `<defs><linearGradient id="gE" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fE" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter></defs><text x="24" y="38" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="40" fill="url(#gE)" opacity="0.55" filter="url(#fE)" stroke="none">R</text><text x="24" y="38" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="40" fill="url(#gE)" stroke="none">R</text>` },
  { file: "OptionF", name: "Option F · RGD ligature", tile: true, vb: 48, sw: 4,
    why: "All three letters, set so tight they touch and become one shape. The G is teal, so the eye reads the initials as a single unit with a pulse in the middle.",
    tradeoff: "Three letters at 16px is a smudge; the favicon would need a simplified cut.",
    svg: `<text x="24" y="33" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="25" letter-spacing="-3.2" fill="#fff" stroke="none">R<tspan fill="${TEAL}">G</tspan>D</text>` },
  { file: "OptionG", name: "Option G · Orbit", tile: true, vb: 48, sw: 4,
    why: "A ring with a comet tail: the bowl of an R read as an orbit, with a teal body riding the arc. Product in motion around a stable core.",
    tradeoff: "Reads Q or planet before it reads R. Distinctive, but the letter is a stretch.",
    svg: `<circle cx="22" cy="21" r="12" stroke="#fff"/><path d="M29 31 39 43" stroke="#fff"/><circle cx="31" cy="12.5" r="4.5" fill="${TEAL}" stroke="none"/>` },
  { file: "OptionH", name: "Option H · Bitmap R", tile: true, vb: 48, sw: 4,
    why: "An R rasterized onto a 5 by 7 dot grid, the way it would render on the smallest possible display. Data, pixels, systems. The final dot of the leg is teal.",
    tradeoff: "Retro by nature; it leans toward the terminal/8-bit aesthetic the site otherwise avoids.",
    svg: (() => {
      const rows = ["XXXX.","X...X","X...X","XXXX.","X.X..","X..X.","X...X"];
      let s = "";
      rows.forEach((row, r) => [...row].forEach((ch, c) => {
        if (ch !== "X") return;
        const last = r === 6 && c === 4;
        s += `<circle cx="${10 + c * 7}" cy="${6 + r * 6}" r="2.6" fill="${last ? TEAL : "#fff"}" stroke="none"/>`;
      }));
      return s;
    })() },
  { file: "OptionI", name: "Option I · Circuit trace", tile: true, vb: 48, sw: 3.6,
    why: "The R drawn as a PCB trace: a routed line with a pad at each end and a via where the leg branches. The output pad is teal and filled, the input pad is hollow.",
    tradeoff: "Hardware vocabulary for a software shop; some will read 'electronics'.",
    svg: `<path d="M12 40V8h13a8 8 0 0 1 0 16H12" stroke="#fff"/><path d="M25 24 36 36" stroke="#fff"/><circle cx="12" cy="40" r="3.4" fill="${NAVY}" stroke="#fff"/><circle cx="25" cy="24" r="2.6" fill="${NAVY}" stroke="#fff" stroke-width="2.4"/><circle cx="36" cy="36" r="4" fill="${TEAL}" stroke="${TEAL}"/>` },
  { file: "OptionJ", name: "Option J · Arrow R", tile: true, vb: 48, sw: 4,
    why: "The leg of the R keeps going and becomes an arrowhead. The letter and the promise in one gesture: built, then shipped.",
    tradeoff: "Arrow marks are common in logistics and delivery brands; check it does not read 'courier'.",
    svg: `<path d="M12 40V8h12a8 8 0 0 1 0 16H12" stroke="#fff"/><path d="M24 24 38 40" stroke="${TEAL}"/><path d="M38 40h-8M38 40v-8" stroke="${TEAL}"/>` },
  { file: "OptionK", name: "Option K · Slash tile", tile: false, vb: 48, sw: 4,
    why: "No letter at all. The glass tile itself is cut by a diagonal teal band, a slash: RGD / Solutions. Quiet on the page and unmistakable once you have seen it.",
    tradeoff: "Purely abstract; it depends entirely on the wordmark for recognition at first.",
    svg: `<defs><clipPath id="cK"><rect x="0" y="0" width="48" height="48" rx="15"/></clipPath></defs><g clip-path="url(#cK)"><rect x="0" y="0" width="48" height="48" fill="rgba(255,255,255,0.07)" stroke="none"/><polygon points="27,0 39,0 21,48 9,48" fill="${TEAL}" stroke="none"/></g><rect x="0.5" y="0.5" width="47" height="47" rx="14.5" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1"/>` },
  { file: "OptionL", name: "Option L · Braces", tile: true, vb: 48, sw: 4,
    why: "A wink at the current [R]: the brackets become code braces, dimmed, and the R inside them turns teal. Says 'engineer' without a single icon.",
    tradeoff: "Very literal about code; less room to grow if the practice broadens beyond engineering.",
    svg: `<text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="rgba(255,255,255,0.5)" stroke="none">{<tspan fill="${TEAL}" font-weight="700">R</tspan>}</text>` },
  { file: "OptionM", name: "Option M · Broadcast", tile: true, vb: 48, sw: 4,
    why: "A point with three arcs radiating up and to the right. Something small going out into the world and getting bigger. The outermost arc is teal.",
    tradeoff: "Close cousin of the wifi and podcast glyphs; the rotation is what keeps it its own.",
    svg: `<circle cx="12" cy="36" r="4" fill="#fff" stroke="none"/><path d="M12 24A12 12 0 0 1 24 36" stroke="#fff"/><path d="M12 15A21 21 0 0 1 33 36" stroke="#fff"/><path d="M12 6A30 30 0 0 1 42 36" stroke="${TEAL}"/>` },
  { file: "OptionN", name: "Option N · Core", tile: true, vb: 48, sw: 3.5,
    why: "A hexagon with a solid teal core and three spokes: a chip, a cell, a hive. The mark for a systems builder who owns the middle of the stack.",
    tradeoff: "Hexagons are crowded territory in developer tooling.",
    svg: `<polygon points="42,24 33,39.6 15,39.6 6,24 15,8.4 33,8.4" fill="none" stroke="#fff"/><polygon points="30,24 27,29.2 21,29.2 18,24 21,18.8 27,18.8" fill="${TEAL}" stroke="none"/><path d="M24 18.8V12M18.5 27l-5.5 3.2M29.5 27l5.5 3.2" stroke="#fff"/>` },
  { file: "OptionO", name: "Option O · Waveform", tile: true, vb: 48, sw: 4,
    why: "Seven bars, rising then settling: a token stream, an audio wave, a sprint. The peak bar is teal.",
    tradeoff: "Voice and audio brands use this shape heavily.",
    svg: (() => {
      const h = [8, 16, 26, 36, 22, 12, 6];
      return h.map((v, i) => `<path d="M${6 + i * 6} ${24 - v / 2}V${24 + v / 2}" stroke="${i === 3 ? TEAL : "#fff"}"/>`).join("");
    })() },
  { file: "OptionP", name: "Option P · Split disc", tile: true, vb: 48, sw: 3.5,
    why: "One circle cut on the diagonal and pulled slightly apart: a hollow half and a solid teal half. Two sides of the same work, discovery and delivery, held in one shape.",
    tradeoff: "Abstract; it says 'balance' more than it says 'RGD'.",
    svg: `<path d="M11.27 36.73A18 18 0 0 1 36.73 11.27Z" fill="none" stroke="#fff" transform="translate(-1.6 -1.6)"/><path d="M11.27 36.73A18 18 0 0 0 36.73 11.27Z" fill="${TEAL}" stroke="none" transform="translate(1.6 1.6)"/>` },
  { file: "OptionQ", name: "Option Q · Layered glass", tile: true, vb: 48, sw: 2.5,
    why: "Two translucent rounded squares, one teal and one clear, overlapping. Where they meet the color deepens. Depth and layering, the language of the site's glass cards.",
    tradeoff: "Soft-edged and quiet; it can disappear at 16px.",
    svg: `<rect x="6" y="6" width="26" height="26" rx="8" fill="${TEAL}" fill-opacity="0.45" stroke="${TEAL}"/><rect x="16" y="16" width="26" height="26" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.85)"/>` },
  { file: "OptionR", name: "Option R · North star", tile: true, vb: 48, sw: 4,
    why: "A slim four-point star with a small teal companion. Direction and clarity: the thing a client hires a senior engineer for.",
    tradeoff: "The sparkle has become the default AI glyph everywhere; this one is drawn thinner and paired, but the association is there.",
    svg: `<path d="M22 6C23 20 28 25 42 26C28 27 23 32 22 46C21 32 16 27 2 26C16 25 21 20 22 6Z" fill="#fff" stroke="none"/><path d="M24 4C25 18 30 23 44 24C30 25 25 30 24 44C23 30 18 25 4 24C18 23 23 18 24 4Z" fill="${TEAL}" stroke="none" transform="translate(36 10) scale(0.3) translate(-24 -24)"/>` },
  { file: "OptionS", name: "Option S · Route", tile: true, vb: 48, sw: 3.5,
    why: "A dotted path from a small start to a teal destination pin. The story of the site in one glyph: from zero to shipped.",
    tradeoff: "Maps and travel apps own the pin; the dotted line is doing the heavy lifting.",
    svg: `<path d="M9 39C9 20 39 28 39 9" stroke="#fff" stroke-dasharray="0.1 7"/><circle cx="9" cy="39" r="3.5" fill="#fff" stroke="none"/><circle cx="39" cy="9" r="5.5" fill="${TEAL}" stroke="none"/><circle cx="39" cy="9" r="2" fill="${NAVY}" stroke="none"/>` },
  { file: "OptionT", name: "Option T · Knot", tile: true, vb: 48, sw: 4,
    why: "A tilted figure eight, half white and half teal. End to end, no seam: the loop a single engineer closes by owning both ends of the product.",
    tradeoff: "Infinity marks carry 'forever' connotations that may read as generic.",
    svg: `<g transform="rotate(-22 24 24)"><path d="M5 24C5 13 19 13 24 24C29 35 43 35 43 24C43 13 29 13 24 24C19 35 5 35 5 24Z" fill="none" stroke="#fff"/><path d="M24 24C29 35 43 35 43 24C43 13 29 13 24 24" fill="none" stroke="${TEAL}"/></g>` },

  // ---- Round three: mixes of E (aurora), F (ligature), L (braces) ----
  { file: "Mix01", name: "Mix 1 · {RGD} aurora", tile: true, vb: 48, sw: 4, page: "round3",
    why: "All three: dimmed braces, the tight RGD ligature, and the aurora running across the letters. The fullest expression of the family.",
    tradeoff: "Five characters in a 22px tile is dense; the favicon needs a cut-down version.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="32" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="19" letter-spacing="-0.8" fill="rgba(255,255,255,0.5)" stroke="none"><tspan font-weight="500">{</tspan><tspan fill="url(#gA)" letter-spacing="-2.6">RGD</tspan><tspan font-weight="500">}</tspan></text>` },
  { file: "Mix02", name: "Mix 2 · {R} aurora", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The braces from L with the aurora R from E inside them, glow included. Code frame, warm core.",
    tradeoff: "The glow blurs at 16px; the crisp braces carry the tab icon.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="none" stroke="none">{<tspan fill="url(#gA)" font-weight="700" filter="url(#fA)" opacity="0.4">R</tspan>}</text><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="rgba(255,255,255,0.5)" stroke="none">{<tspan fill="url(#gA)" font-weight="700">R</tspan>}</text>` },
  { file: "Mix03", name: "Mix 3 · RGD aurora", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The ligature from F with the gradient from E flowing across all three letters, teal at the R and rose by the D. No braces.",
    tradeoff: "Loses the single-color pulse that made F read as one unit.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="33" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="25" letter-spacing="-3.2" fill="url(#gA)" filter="url(#fA)" opacity="0.55" stroke="none">RGD</text><text x="24" y="33" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="25" letter-spacing="-3.2" fill="url(#gA)" stroke="none">RGD</text>` },
  { file: "Mix04", name: "Mix 4 · RGD, aurora G", tile: true, vb: 48, sw: 4, page: "round3",
    why: "F as drawn, but the G alone carries the teal-to-rose gradient. The accent letter becomes the aurora.",
    tradeoff: "Subtle: at header size the gradient inside one letter reads as plain teal.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="33" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="25" letter-spacing="-3.2" fill="#fff" stroke="none">R<tspan fill="url(#gA)">G</tspan>D</text>` },
  { file: "Mix05", name: "Mix 5 · Aurora braces", tile: true, vb: 48, sw: 4, page: "round3",
    why: "L inverted: the braces carry the gradient and the R stays solid white. The frame is the color, the letter is the anchor.",
    tradeoff: "Colored braces compete with the white wordmark next to them.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="url(#gA)" stroke="none">{<tspan fill="#fff" font-weight="700">R</tspan>}</text>` },
  { file: "Mix06", name: "Mix 6 · Teal / rose braces", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The ligature in white between a teal opening brace and a rose closing brace. The aurora as two solid bookends instead of a blend.",
    tradeoff: "Two accent colors on one small mark can look busy against the glass.",
    svg: `<text x="24" y="32" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="19" fill="#fff" stroke="none"><tspan fill="${TEAL}" font-weight="500">{</tspan><tspan letter-spacing="-2.4">RGD</tspan><tspan fill="${ROSE}" font-weight="500">}</tspan></text>` },
  { file: "Mix07", name: "Mix 7 · Aurora tile R", tile: false, vb: 48, sw: 4, page: "round3",
    why: "The gradient from E becomes the tile itself: a teal-to-rose rounded square with the heavy R knocked out in navy.",
    tradeoff: "The strongest color in the header by far; it changes the header's balance.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><rect x="0" y="0" width="48" height="48" rx="15" fill="url(#gA)" stroke="none"/><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="34" fill="${NAVY}" stroke="none">R</text>` },
  { file: "Mix08", name: "Mix 8 · Aurora tile {RGD}", tile: false, vb: 48, sw: 4, page: "round3",
    why: "Same aurora tile, with the full {RGD} in navy. Everything the three picks share, on one solid surface.",
    tradeoff: "Densest of the set; the navy characters get thin at 16px.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><rect x="0" y="0" width="48" height="48" rx="15" fill="url(#gA)" stroke="none"/><text x="24" y="31" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="17" letter-spacing="-0.6" fill="${NAVY}" stroke="none"><tspan font-weight="500">{</tspan><tspan letter-spacing="-2.4">RGD</tspan><tspan font-weight="500">}</tspan></text>` },
  { file: "Mix09", name: "Mix 9 · RGD outline", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The ligature drawn as a hollow gradient outline instead of a fill. Lighter on the page, with the glass showing through the letters.",
    tradeoff: "Thin outlines lose the gradient at small sizes and can look like a wireframe.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="33" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="25" letter-spacing="-3.2" fill="none" stroke="url(#gA)" stroke-width="1.6" paint-order="stroke" stroke="none">RGD</text>` },
  { file: "Mix10", name: "Mix 10 · R with gd", tile: true, vb: 48, sw: 4, page: "round3",
    why: "A large aurora R from E with a small white GD tucked against its leg. The monogram leads, the initials follow.",
    tradeoff: "The small letters vanish at favicon size, leaving just the R, which may be fine.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="17" y="38" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="40" fill="url(#gA)" stroke="none">R</text><text x="37" y="43" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="13" letter-spacing="-1" fill="#fff" stroke="none">GD</text>` },
  { file: "Mix11", name: "Mix 11 · Halo braces", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The braces exist only as a blurred aurora glow around a crisp white R. The code frame is felt rather than read.",
    tradeoff: "A halo is fragile: it disappears on light backgrounds and in one-color use.",
    svg: `<defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TEAL}"/><stop offset="1" stop-color="${ROSE}"/></linearGradient><filter id="fA" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2"/></filter></defs><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="url(#gA)" filter="url(#fA)" opacity="0.95" stroke="none">{<tspan fill="none">R</tspan>}</text><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="700" font-size="32" fill="#fff" stroke="none">R</text>` },
  { file: "Mix12", name: "Mix 12 · Split R", tile: true, vb: 48, sw: 4, page: "round3",
    why: "The aurora as a hard cut instead of a blend: the R is teal on the left and rose on the right, inside dimmed braces.",
    tradeoff: "A hard color split can read as a glitch if the seam is not exactly centered.",
    svg: `<defs><linearGradient id="gS" x1="0" y1="0" x2="1" y2="0"><stop offset="0.5" stop-color="${TEAL}"/><stop offset="0.5" stop-color="${ROSE}"/></linearGradient></defs><text x="24" y="36" text-anchor="middle" font-family="${OUTFIT}" font-weight="500" font-size="32" fill="rgba(255,255,255,0.5)" stroke="none">{<tspan fill="url(#gS)" font-weight="700">R</tspan>}</text>` },
];

const glass = `background: rgba(255,255,255,0.055); border: 1px solid rgba(255,255,255,0.13); box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 60px rgba(0,0,0,0.28);`;

function mark(o, px) {
  return `<svg width="${px}" height="${px}" viewBox="0 0 ${o.vb} ${o.vb}" fill="none" stroke-width="${o.sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${o.svg}</svg>`;
}
function tileAt(o, box, icon, radius) {
  if (!o.tile) return `<span style="display: flex; width: ${box}px; height: ${box}px; align-items: center; justify-content: center;">${mark(o, box)}</span>`;
  return `<span style="display: flex; width: ${box}px; height: ${box}px; align-items: center; justify-content: center; border-radius: ${radius}px; ${glass}">${mark(o, icon)}</span>`;
}
const navLink = (t) => `<span style="font-family: Manrope, 'Avenir Next', 'Segoe UI', system-ui, sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.78);">${t}</span>`;

for (const o of options) {
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap">
  <style>
    body { margin: 0; background: ${NAVY}; color: #fff; font-family: Manrope, 'Avenir Next', 'Segoe UI', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    a { color: ${TEAL}; } a:hover { color: #fff; }
  </style>
</helmet>
<div style="display: flex; flex-direction: column; width: 960px; height: 600px; background: ${NAVY}; overflow: hidden;">

  <div style="display: flex; align-items: center; justify-content: space-between; padding: 28px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(7,15,31,0.7);">
    <div style="display: flex; align-items: center; gap: 14px;">
      ${tileAt(o, 44, 22, 14)}
      <span style="font-family: ${OUTFIT}; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: #fff;">RGD Solutions</span>
    </div>
    <div style="display: flex; align-items: center; gap: 36px;">
      ${navLink("Services")}${navLink("Work")}${navLink("About")}${navLink("Testimonials")}
    </div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; font-size: 15px; font-weight: 600; color: #fff; ${glass}">Resume</span>
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; background: #fff; color: ${NAVY}; font-size: 15px; font-weight: 700; box-shadow: 0 0 0 1px rgba(255,255,255,0.4), 0 12px 40px rgba(63,210,199,0.35);">Book a call</span>
    </div>
  </div>

  <div style="display: flex; flex-grow: 1; gap: 48px; padding: 40px;">
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${TEAL};">${o.name}</div>
        <p style="margin: 0; max-width: 420px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.86); text-wrap: pretty;">${o.why}</p>
        <p style="margin: 0; max-width: 420px; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.55); text-wrap: pretty;">Tradeoff: ${o.tradeoff}</p>
      </div>
      <div style="display: flex; align-items: flex-end; gap: 28px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          ${tileAt(o, 44, 22, 14)}
          <span style="font-size: 12px; color: rgba(255,255,255,0.5);">44 header</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          ${tileAt(o, 32, 16, 10)}
          <span style="font-size: 12px; color: rgba(255,255,255,0.5);">32 favicon</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          ${tileAt(o, 16, 12, 5)}
          <span style="font-size: 12px; color: rgba(255,255,255,0.5);">16 tab</span>
        </div>
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; width: 320px; border-radius: 24px; ${glass}">
      ${o.tile ? mark(o, 160) : mark(o, 200)}
    </div>
  </div>
</div>
</x-dc>
</body>
</html>
`;
  writeFileSync(`${o.file}.dc.html`, html);
}


// ---- Round four: custom-drawn monochrome marks ----
const PAPER = "#f6f5f2", INK = "#0b1120";
const marks4 = [
  { file: "Mark01", name: "Mark 1 · Open R", vbw: 48, vbh: 48,
    why: "A monoline R in two strokes on a 48-unit grid: a stem, and one continuous stroke that becomes bowl and leg. The bowl stops before it reaches the stem, so the counter breathes. Butt-cut terminals, no rounding.",
    tradeoff: "Quiet. It earns its keep through proportion rather than a gimmick, which some people read as plain.",
    svg: `<path d="M12 6V42" stroke="currentColor" stroke-width="5.5"/><path d="M12 8.75H25a9.25 9.25 0 0 1 0 18.5H18" stroke="currentColor" stroke-width="5.5"/><path d="M24.5 26.5 37 42" stroke="currentColor" stroke-width="5.5"/>` },
  { file: "Mark02", name: "Mark 2 · Ring R", vbw: 48, vbh: 48,
    why: "The bowl of the R replaced by a perfect circle that kisses the stem, with the leg thrown from the ring's lower edge. Geometry you can describe in one sentence, which is what makes a mark memorable.",
    tradeoff: "The circle pulls the eye up; the leg needs the exact angle drawn here or the letter tips over.",
    svg: `<path d="M12 6V42" stroke="currentColor" stroke-width="5.5"/><circle cx="24.5" cy="16" r="9" stroke="currentColor" stroke-width="5.5"/><path d="M27.5 24.5 38 42" stroke="currentColor" stroke-width="5.5"/>` },
  { file: "Mark03", name: "Mark 3 · Cut R", vbw: 48, vbh: 48,
    why: "A solid geometric R with one clean diagonal cut through the stem and bowl. The cut is the signature: a single deliberate incision in an otherwise heavy, calm letter.",
    tradeoff: "The cut needs a background color to exist, so this is two shapes, not one, when it goes into print.",
    svg: `<rect x="9" y="4" width="8" height="40" fill="currentColor" stroke="none"/><path d="M17 4H27a11 11 0 0 1 0 22H17ZM17 11H27a4 4 0 0 1 0 8H17Z" fill="currentColor" fill-rule="evenodd" stroke="none"/><polygon points="22,25 30,25 41,44 33,44" fill="currentColor" stroke="none"/><path d="M2 36 46 6" stroke="__BG__" stroke-width="2.6"/>` },
  { file: "Mark04", name: "Mark 4 · RGD ligature", vbw: 80, vbh: 48,
    why: "All three initials as one monoline drawing with a real shared stroke: the G's bar is the D's stem. The R's leg is angled so it clears the G by the same gap the letters keep everywhere else.",
    tradeoff: "A wide mark. In the 44px tile it sits at 18px tall, and at 16px it becomes a texture.",
    svg: `<path d="M7 6V42" stroke="currentColor" stroke-width="5.5"/><path d="M7 8.75H17a8.5 8.5 0 0 1 0 17H7" stroke="currentColor" stroke-width="5.5"/><path d="M17 25.75 26 42" stroke="currentColor" stroke-width="5.5"/><path d="M49.5 15.5A12 12 0 1 0 53 24" stroke="currentColor" stroke-width="5.5"/><path d="M53 24H45" stroke="currentColor" stroke-width="5.5"/><path d="M53 6V42" stroke="currentColor" stroke-width="5.5"/><path d="M53 8.75h4a15.25 15.25 0 0 1 0 30.5h-4" stroke="currentColor" stroke-width="5.5"/>` },
  { file: "Mark05", name: "Mark 5 · Wordmark", word: true, vbw: 48, vbh: 48,
    why: "No symbol at all. The name is the logo: RGD set heavy with tightened tracking, Solutions set light beside it. The most restrained option, and the one most premium consultancies actually use.",
    tradeoff: "Nothing to put in a favicon or a social avatar except a plain R, which is what you have today.",
    svg: `` },
  { file: "Mark06", name: "Mark 6 · Square R", vbw: 48, vbh: 48,
    why: "The R reduced to horizontals, verticals and a single 45 degree leg. Mitred corners, square terminals. Architectural rather than typographic.",
    tradeoff: "The squared bowl is unusual enough that some people read it as a P or a flag before an R.",
    svg: `<path d="M12 42V6H31V24H12" stroke="currentColor" stroke-width="5.5" stroke-linejoin="miter"/><path d="M27 24 39.5 42" stroke="currentColor" stroke-width="5.5"/>` },
];

function mark4(o, h, color, bg) {
  const w = Math.round(h * o.vbw / o.vbh * 100) / 100;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${o.vbw} ${o.vbh}" fill="none" stroke-linecap="butt" stroke-linejoin="miter" style="color: ${color}; display: block;" aria-hidden="true">${o.svg.replace(/__BG__/g, bg)}</svg>`;
}
function wordmark(size, color, faint) {
  return `<span style="display: flex; align-items: baseline; gap: ${Math.round(size * 0.45)}px;"><span style="font-family: ${OUTFIT}; font-size: ${size}px; font-weight: 700; letter-spacing: -0.04em; color: ${color}; line-height: 1;">RGD</span><span style="font-family: ${OUTFIT}; font-size: ${Math.round(size * 0.86)}px; font-weight: 500; letter-spacing: -0.005em; color: ${faint}; line-height: 1;">Solutions</span></span>`;
}
function wordmarkStacked(size, color, faint) {
  return `<span style="display: flex; flex-direction: column; align-items: flex-start; gap: ${Math.round(size * 0.18)}px;"><span style="font-family: ${OUTFIT}; font-size: ${size}px; font-weight: 700; letter-spacing: -0.04em; color: ${color}; line-height: 0.9;">RGD</span><span style="font-family: Manrope, 'Avenir Next', 'Segoe UI', system-ui, sans-serif; font-size: ${Math.round(size * 0.22)}px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: ${faint}; line-height: 1;">Solutions</span></span>`;
}
function header4(o, variant) {
  let logo;
  if (o.word) logo = wordmark(22, "#fff", "rgba(255,255,255,0.72)");
  else if (variant === "tile") logo = `<div style="display: flex; align-items: center; gap: 14px;"><span style="display: flex; width: 44px; height: 44px; align-items: center; justify-content: center; border-radius: 14px; ${glass}">${mark4(o, o.vbw > o.vbh ? 18 : 24, "#fff", "rgba(13,21,37,1)")}</span><span style="font-family: ${OUTFIT}; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: #fff;">RGD Solutions</span></div>`;
  else logo = `<div style="display: flex; align-items: center; gap: 12px;">${mark4(o, o.vbw > o.vbh ? 22 : 28, "#fff", NAVY)}<span style="font-family: ${OUTFIT}; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: #fff;">RGD Solutions</span></div>`;
  return `<div style="display: flex; align-items: center; justify-content: space-between; padding: 28px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(7,15,31,0.7);">
    ${logo}
    <div style="display: flex; align-items: center; gap: 36px;">${navLink("Services")}${navLink("Work")}${navLink("About")}${navLink("Testimonials")}</div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; font-size: 15px; font-weight: 600; color: #fff; ${glass}">Resume</span>
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; background: #fff; color: ${NAVY}; font-size: 15px; font-weight: 700; box-shadow: 0 0 0 1px rgba(255,255,255,0.4), 0 12px 40px rgba(63,210,199,0.35);">Book a call</span>
    </div>
  </div>`;
}
const sizeLabel = (t) => `<span style="font-size: 12px; color: rgba(255,255,255,0.5);">${t}</span>`;
for (const o of marks4) {
  const big = o.word
    ? { navy: wordmarkStacked(96, "#fff", "rgba(255,255,255,0.7)"), paper: wordmarkStacked(96, INK, "rgba(11,17,32,0.6)") }
    : { navy: mark4(o, o.vbw > o.vbh ? 100 : 140, "#fff", NAVY), paper: mark4(o, o.vbw > o.vbh ? 100 : 140, INK, PAPER) };
  const sizes = o.word
    ? `${wordmark(16, "#fff", "rgba(255,255,255,0.72)")}`
    : [44, 32, 16].map((px) => `<div style="display: flex; flex-direction: column; align-items: center; gap: 10px;"><span style="display: flex; width: ${px}px; height: ${px}px; align-items: center; justify-content: center;">${mark4(o, o.vbw > o.vbh ? Math.round(px * 0.62) : px, "#fff", NAVY)}</span>${sizeLabel(px + (px === 44 ? " header" : px === 32 ? " favicon" : " tab"))}</div>`).join("");
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap">
  <style>
    body { margin: 0; background: ${NAVY}; color: #fff; font-family: Manrope, 'Avenir Next', 'Segoe UI', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    a { color: ${TEAL}; } a:hover { color: #fff; }
  </style>
</helmet>
<div style="display: flex; flex-direction: column; width: 960px; height: 680px; background: ${NAVY}; overflow: hidden;">
  ${header4(o, "tile")}
  ${header4(o, "bare")}
  <div style="display: flex; flex-grow: 1; gap: 40px; padding: 36px 40px 40px;">
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${TEAL};">${o.name}</div>
        <p style="margin: 0; max-width: 400px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.86); text-wrap: pretty;">${o.why}</p>
        <p style="margin: 0; max-width: 400px; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.55); text-wrap: pretty;">Tradeoff: ${o.tradeoff}</p>
      </div>
      <div style="display: flex; align-items: flex-end; gap: 28px;">${sizes}</div>
    </div>
    <div style="display: flex; gap: 16px;">
      <div style="display: flex; align-items: center; justify-content: center; width: 208px; height: 208px; border-radius: 20px; background: ${NAVY}; border: 1px solid rgba(255,255,255,0.13);">${big.navy}</div>
      <div style="display: flex; align-items: center; justify-content: center; width: 208px; height: 208px; border-radius: 20px; background: ${PAPER};">${big.paper}</div>
    </div>
  </div>
</div>
</x-dc>
</body>
</html>
`;
  writeFileSync(`${o.file}.dc.html`, html);
}

// ---- Round five: wordmark iterations of Mark 5 ----
const MANROPE = "Manrope, 'Avenir Next', 'Segoe UI', system-ui, sans-serif";
const words5 = [
  { file: "Word01", name: "Word 1 · Left stack", align: "left", sub: "caps", subColor: "faint", rule: "none",
    why: "Mark 5 as picked: RGD heavy and tight, SOLUTIONS in tracked small caps hung from the left edge. The asymmetry gives it an editorial, masthead feel.",
    tradeoff: "Left-aligned lockups sit awkwardly in centered contexts like a social avatar." },
  { file: "Word02", name: "Word 2 · Centered stack", align: "center", sub: "caps", subColor: "faint", rule: "none",
    why: "The same two lines centered on a shared axis, with SOLUTIONS tracked out to sit under the full width of RGD. Symmetrical, calm, made for a square.",
    tradeoff: "Symmetry reads more corporate and less editorial than the left stack." },
  { file: "Word03", name: "Word 3 · Hairline", align: "center", sub: "caps", subColor: "faint", rule: "hair",
    why: "Centered, with a one-pixel rule between the name and the descriptor. The rule is the only ornament, and it gives the stack a tailored, engraved quality.",
    tradeoff: "Hairlines vanish at small sizes; below about 60px wide the rule has to go." },
  { file: "Word04", name: "Word 4 · Teal descriptor", align: "center", sub: "caps", subColor: "teal", rule: "none",
    why: "Centered stack with SOLUTIONS in the site's teal. The name stays white; color lives only in the small word, so it reads as a considered accent rather than a paint job.",
    tradeoff: "Teal small caps on paper lose contrast; the print version would want a darker teal." },
  { file: "Word05", name: "Word 5 · Full stop", align: "left", sub: "caps", subColor: "faint", rule: "none", dot: true,
    why: "RGD followed by a teal full stop. A period says finished, shipped, done. One glyph of color, placed where punctuation belongs.",
    tradeoff: "The period competes with the descriptor line below it for the eye." },
  { file: "Word06", name: "Word 6 · Aurora rule", align: "center", sub: "caps", subColor: "faint", rule: "aurora",
    why: "The hairline from Word 3 becomes a two-pixel teal-to-rose line. The site's aurora survives as a single thread instead of a fill.",
    tradeoff: "Gradients are still gradients; in one-color print the rule flattens to grey." },
  { file: "Word07", name: "Word 7 · Teal D", align: "center", sub: "caps", subColor: "faint", rule: "none", dColor: true,
    why: "RG in white, D in teal. The color falls on the last letter, the one that closes the name, and the descriptor stays quiet beneath.",
    tradeoff: "A colored final letter can read as a typo or a link at small sizes." },
  { file: "Word08", name: "Word 8 · Seal", align: "center", sub: "caps", subColor: "faint", rule: "none", frame: true,
    why: "The centered stack inside a thin square frame, like a maker's stamp. Self-contained, so it works as an avatar or a footer mark without any tile.",
    tradeoff: "The frame adds a fourth element; it wants generous padding or it feels boxed in." },
  { file: "Word09", name: "Word 9 · Rose, title case", align: "center", sub: "title", subColor: "rose", rule: "none",
    why: "Centered, with Solutions set light in title case and in rose. Warmer and more human than the tracked caps, and a color the site already carries.",
    tradeoff: "Rose on navy is softer than teal; it reads as a mood more than a signal." },
  { file: "Word10", name: "Word 10 · Slash", align: "left", sub: "caps", subColor: "faint", rule: "none", slash: true,
    why: "RGD over a teal slash and SOLUTIONS. The slash is a path separator, a fraction, a beat between the name and what it does.",
    tradeoff: "The slash is the most 'developer' of the set." },
];

function cols5(ctx) {
  return ctx === "paper"
    ? { main: INK, faint: "rgba(11,17,32,0.6)", hair: "rgba(11,17,32,0.22)", teal: "#1a9c93", rose: "#d4657a", frame: "rgba(11,17,32,0.3)" }
    : { main: "#fff", faint: "rgba(255,255,255,0.7)", hair: "rgba(255,255,255,0.25)", teal: TEAL, rose: ROSE, frame: "rgba(255,255,255,0.3)" };
}
function rgd5(o, size, c) {
  const grad = `background: linear-gradient(135deg, ${c.teal}, ${c.rose}); -webkit-background-clip: text; background-clip: text; color: transparent;`;
  const letter = (ch, mode) => mode === "aurora" ? `<span style="${grad}">${ch}</span>` : mode ? `<span style="color: ${mode === "rose" ? c.rose : c.teal};">${ch}</span>` : ch;
  const d = letter("R", o.rColor) + "G" + letter("D", o.dColor === true ? "teal" : o.dColor);
  const dot = o.dot ? `<span style="color: ${c.teal};">.</span>` : "";
  return `<span style="font-family: ${OUTFIT}; font-size: ${size}px; font-weight: 700; letter-spacing: -0.04em; color: ${c.main}; line-height: 0.9; white-space: nowrap;">${d}${dot}</span>`;
}
function sub5(o, size, c, inline) {
  const color = o.subColor === "teal" ? c.teal : o.subColor === "rose" ? c.rose : c.faint;
  const slash = o.slash ? `<span style="color: ${c.teal};">/ </span>` : "";
  if (o.sub === "title") return `<span style="font-family: ${OUTFIT}; font-size: ${inline ? Math.round(size * 0.86) : Math.max(10, Math.round(size * 0.3))}px; font-weight: 500; letter-spacing: 0; color: ${color}; line-height: 1; white-space: nowrap;">${slash}Solutions</span>`;
  const px = inline ? Math.round(size * 0.5) : Math.max(8, Math.round(size * 0.22));
  return `<span style="font-family: ${MANROPE}; font-size: ${px}px; font-weight: 600; letter-spacing: ${o.align === "center" && !inline ? "0.3em" : "0.22em"}; text-transform: uppercase; color: ${color}; line-height: 1; white-space: nowrap;${o.align === "center" && !inline ? " margin-right: -0.3em;" : ""}">${slash}Solutions</span>`;
}
function rule5(o, c) {
  if (o.rule === "hair") return `<span style="align-self: stretch; height: 1px; background: ${c.hair};"></span>`;
  if (o.rule === "aurora") return `<span style="align-self: stretch; height: 2px; background: linear-gradient(90deg, ${c.teal}, ${c.rose});"></span>`;
  if (o.rule === "teal") return `<span style="align-self: stretch; height: 2px; background: ${c.teal};"></span>`;
  if (o.rule === "aurora-short") return `<span style="align-self: center; width: 36%; height: 2px; background: linear-gradient(90deg, ${c.teal}, ${c.rose});"></span>`;
  return "";
}
function stack5(o, size, ctx) {
  const c = cols5(ctx);
  const inner = `<span style="display: flex; flex-direction: column; align-items: ${o.align === "center" ? "center" : "flex-start"}; gap: ${Math.round(size * 0.16)}px;">${rgd5(o, size, c)}${o.rulePos === "bottom" ? "" : rule5(o, c)}${sub5(o, size, c, false)}${o.rulePos === "bottom" ? rule5(o, c) : ""}</span>`;
  if (o.frame) return `<span style="display: flex; padding: ${Math.round(size * 0.28)}px ${Math.round(size * 0.3)}px; border: 1px solid ${c.frame};">${inner}</span>`;
  return inner;
}
function inline5(o, size, ctx) {
  const c = cols5(ctx);
  return `<span style="display: flex; align-items: baseline; gap: ${Math.round(size * 0.45)}px;">${rgd5(o, size, c)}${sub5(o, size, c, true)}</span>`;
}
function header5(o, variant) {
  const logo = variant === "inline" ? inline5(o, 22, "navy") : stack5(o, 24, "navy");
  return `<div style="display: flex; align-items: center; justify-content: space-between; padding: 28px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(7,15,31,0.7);">
    ${logo}
    <div style="display: flex; align-items: center; gap: 36px;">${navLink("Services")}${navLink("Work")}${navLink("About")}${navLink("Testimonials")}</div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; font-size: 15px; font-weight: 600; color: #fff; ${glass}">Resume</span>
      <span style="display: flex; align-items: center; height: 44px; padding: 0 20px; border-radius: 999px; background: #fff; color: ${NAVY}; font-size: 15px; font-weight: 700; box-shadow: 0 0 0 1px rgba(255,255,255,0.4), 0 12px 40px rgba(63,210,199,0.35);">Book a call</span>
    </div>
  </div>`;
}

// ---- Round six: blends of Word 6 (aurora rule) and Word 7 (teal D) ----
const base6 = { align: "center", sub: "caps", subColor: "faint" };
const blends6 = [
  { ...base6, file: "Blend01", name: "Blend 1 · Word 6, as is", rule: "aurora",
    why: "Word 6 unchanged: centered stack, white RGD, a two-pixel teal-to-rose rule between the name and SOLUTIONS.",
    tradeoff: "The gradient flattens to grey in one-color print." },
  { ...base6, file: "Blend02", name: "Blend 2 · Word 7, as is", dColor: "teal",
    why: "Word 7 unchanged: centered stack, RG in white, D in teal, no rule.",
    tradeoff: "A colored final letter can read as a link at small sizes." },
  { ...base6, file: "Blend03", name: "Blend 3 · Teal D and aurora rule", dColor: "teal", rule: "aurora",
    why: "Both ideas at once. The teal D above, the teal-to-rose rule below; the rule's left end echoes the D's color.",
    tradeoff: "Two accents in one small lockup; the busiest of the set." },
  { ...base6, file: "Blend04", name: "Blend 4 · Rose D and aurora rule", dColor: "rose", rule: "aurora",
    why: "The D sits above the rose end of the rule, so it takes the rose. The color reads as one continuous sweep: teal on the left, rose where the name ends.",
    tradeoff: "Rose is softer than teal; the D is less of a signal." },
  { ...base6, file: "Blend05", name: "Blend 5 · Teal R and aurora rule", rColor: "teal", rule: "aurora",
    why: "The mirror of Blend 4: the R takes the teal from the rule's left end. The accent lands on the founder's initial.",
    tradeoff: "Color on the first letter can make RGD read as 'R' plus 'GD'." },
  { ...base6, file: "Blend06", name: "Blend 6 · Aurora D", dColor: "aurora",
    why: "Word 7's structure with Word 6's color: the D itself carries the teal-to-rose gradient. No rule.",
    tradeoff: "A gradient inside one letter reads as plain teal at header size." },
  { ...base6, file: "Blend07", name: "Blend 7 · Aurora D and hairline", dColor: "aurora", rule: "hair",
    why: "The gradient D with a neutral one-pixel rule beneath. The rule gives the stack structure while the color stays in the letter.",
    tradeoff: "Hairline plus gradient is two fine details that both vanish at small sizes." },
  { ...base6, file: "Blend08", name: "Blend 8 · Teal D and teal rule", dColor: "teal", rule: "teal",
    why: "Word 7's D with Word 6's rule, but the rule is solid teal. One accent color, used twice, no gradient anywhere.",
    tradeoff: "Loses the rose entirely; the aurora is gone." },
  { ...base6, file: "Blend09", name: "Blend 9 · Teal D and short aurora dash", dColor: "teal", rule: "aurora-short",
    why: "The rule shrinks to a short centered dash between the two lines. Lighter than the full-width rule, more of a punctuation mark than a divider.",
    tradeoff: "A short dash can look like a hyphen or a loading bar." },
  { ...base6, file: "Blend10", name: "Blend 10 · Teal D, rule below", dColor: "teal", rule: "aurora", rulePos: "bottom",
    why: "The aurora rule moves under SOLUTIONS, closing the lockup from beneath. The D carries the color at the top, the rule at the bottom.",
    tradeoff: "A rule under the descriptor can read as an underline or a link." },
];

for (const o of [...words5, ...blends6]) {
  const bigSize = o.frame ? 62 : 80;
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap">
  <style>
    body { margin: 0; background: ${NAVY}; color: #fff; font-family: ${MANROPE}; -webkit-font-smoothing: antialiased; }
    a { color: ${TEAL}; } a:hover { color: #fff; }
  </style>
</helmet>
<div style="display: flex; flex-direction: column; width: 960px; height: 680px; background: ${NAVY}; overflow: hidden;">
  ${header5(o, "inline")}
  ${header5(o, "stack")}
  <div style="display: flex; flex-grow: 1; gap: 40px; padding: 36px 40px 40px;">
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${TEAL};">${o.name}</div>
        <p style="margin: 0; max-width: 400px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.86); text-wrap: pretty;">${o.why}</p>
        <p style="margin: 0; max-width: 400px; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.55); text-wrap: pretty;">Tradeoff: ${o.tradeoff}</p>
      </div>
      <div style="display: flex; align-items: flex-end; gap: 28px;">
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">${inline5(o, 16, "navy")}${sizeLabel("16 inline")}</div>
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">${stack5(o, 32, "navy")}${sizeLabel("32 footer stack")}</div>
      </div>
    </div>
    <div style="display: flex; gap: 16px;">
      <div style="display: flex; align-items: center; justify-content: center; width: 208px; height: 208px; border-radius: 20px; background: ${NAVY}; border: 1px solid rgba(255,255,255,0.13);">${stack5(o, bigSize, "navy")}</div>
      <div style="display: flex; align-items: center; justify-content: center; width: 208px; height: 208px; border-radius: 20px; background: ${PAPER};">${stack5(o, bigSize, "paper")}</div>
    </div>
  </div>
</div>
</x-dc>
</body>
</html>
`;
  writeFileSync(`${o.file}.dc.html`, html);
}

const r3 = options.filter((o) => o.page === "round3");
const r12 = options.filter((o) => o.page !== "round3");
function grid(list, page) {
  return list.map((o, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const a = { file: `${o.file}.dc.html`, x: col * 1060, y: row * 740, w: 960, h: 600, page };
    if (o.file === "Main") a.title = o.name;
    return a;
  });
}
const canvas = {
  pages: [
    { id: "round-6", name: "Round 6 · blends of Word 6 and 7" },
    { id: "round-5", name: "Round 5 · wordmark iterations" },
    { id: "round-4", name: "Round 4 · drawn, one color" },
    { id: "round-3", name: "Round 3 · mixes of E, F, L" },
    { id: "rounds-1-2", name: "Rounds 1 and 2 · A to T" },
  ],
  artboards: [...blends6.map((o, i) => ({ file: `${o.file}.dc.html`, x: (i % 3) * 1060, y: Math.floor(i / 3) * 820, w: 960, h: 680, page: "round-6" })), ...words5.map((o, i) => ({ file: `${o.file}.dc.html`, x: (i % 3) * 1060, y: Math.floor(i / 3) * 820, w: 960, h: 680, page: "round-5" })), ...marks4.map((o, i) => ({ file: `${o.file}.dc.html`, x: (i % 3) * 1060, y: Math.floor(i / 3) * 820, w: 960, h: 680, page: "round-4" })), ...grid(r3, "round-3"), ...grid(r12, "rounds-1-2")],
  annotations: [
    { id: "brief-r6", x: 0, y: -190, w: 600, page: "round-6", text: "RGD Solutions wordmark, round 6: blends of Word 6 (aurora rule) and Word 7 (teal D).\nBlends 1 and 2 are Words 6 and 7 unchanged. Blends 3 to 10 move the color between the D, the R and the rule, and vary the rule's length, position and whether it is a gradient." },
    { id: "brief-r5", x: 0, y: -190, w: 600, page: "round-5", text: "RGD Solutions wordmark, round 5: ten iterations of Mark 5.\nWords 2, 3, 4, 6, 7, 8 and 9 center the descriptor under RGD; Words 1, 5 and 10 keep it left-aligned.\nWords 4, 5, 6, 7, 9 and 10 carry one accent of color; the rest stay one color.\nEach board shows the inline header, the stacked header, the lockup in a navy and a paper square, and small sizes." },
    { id: "brief-r4", x: 0, y: -190, w: 600, page: "round-4", text: "RGD Solutions logo mark, round 4: six custom-drawn, single-color marks.\nEvery path is built on a 48-unit grid with one stroke weight and square terminals. No gradients, no glow.\nEach board shows the real header with the glass tile and without it, the mark flat on navy and on paper, and the favicon sizes.\nRounds 1 to 3 are on the other pages." },
    { id: "brief-r3", x: 0, y: -170, w: 560, page: "round-3", text: "RGD Solutions logo mark, round 3: 12 mixes of the three picks.\nE gave the aurora gradient, F the tight RGD ligature, L the code braces.\nEach board shows the mark in the real header at 1:1, at favicon sizes, and large.\nThe earlier 20 options are on the second page." },
    { id: "brief", x: 0, y: -170, w: 560, page: "rounds-1-2", text: "Rounds 1 and 2: the original 20 directions (A to T), kept for reference." },
  ],
  launch: { view: "canvas", page: "round-6" },
};
writeFileSync("canvas.json", JSON.stringify(canvas, null, 2));
console.log("wrote", options.length + marks4.length + words5.length + blends6.length, "artboards");
