"""Build the RGD Solutions wordmark (Blend 1) as SVG files with real glyph outlines.

Reproduces the CSS layout used on the design canvas at a reference size of 80px:
  RGD        Outfit 700, 80px, letter-spacing -0.04em, line-height 0.9
  gap        round(0.16 * 80) = 13px
  rule       2px, teal -> rose
  gap        13px
  SOLUTIONS  Manrope 600, 18px, letter-spacing 0.3em, uppercase, line-height 1

Run from this directory with the variable fonts beside it:
  curl -L -o Outfit.ttf  "https://github.com/google/fonts/raw/main/ofl/outfit/Outfit%5Bwght%5D.ttf"
  curl -L -o Manrope.ttf "https://github.com/google/fonts/raw/main/ofl/manrope/Manrope%5Bwght%5D.ttf"
  python3 -m venv .venv && .venv/bin/pip install fonttools uharfbuzz
  .venv/bin/python build-brand-assets.py ../..
Writes public/brand/rgd-solutions-logo-on-{dark,light}.svg and app/icon.svg. The PNG, ICO and
apple-icon files are rasterised from those SVGs (headless Chrome + Pillow).
"""

import sys
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

HERE = Path(__file__).parent
OUT = Path(sys.argv[1])

TEAL, ROSE = "#3fd2c7", "#f08fa0"
TEAL_INK, ROSE_INK = "#178a82", "#c9566c"
INK = "#0b1120"


def load(path, wght):
    blob = hb.Blob.from_file_path(str(path))
    face = hb.Face(blob)
    font = hb.Font(face)
    font.set_variations({"wght": wght})
    return font


OUTFIT = load(HERE / "Outfit.ttf", 700)
MANROPE = load(HERE / "Manrope.ttf", 600)


def shape(font, text, size, tracking_em):
    """Return (paths, width) for `text` at `size` px with CSS-style letter-spacing."""
    upm = font.face.upem
    scale = size / upm
    tracking = tracking_em * size
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True, "liga": True})
    x = 0.0
    paths = []
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        pen = SVGPathPen(None, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        tpen = TransformPen(pen, (scale, 0, 0, -scale, x + pos.x_offset * scale, -pos.y_offset * scale))
        font.draw_glyph_with_pen(info.codepoint, tpen)
        paths.append(pen.getCommands())
        x += pos.x_advance * scale + tracking
    width = x - tracking  # no trailing letter-spacing
    return paths, width


def text_group(paths, dx, baseline_y, fill):
    d = " ".join(p for p in paths if p)
    return f'<path transform="translate({dx:.2f} {baseline_y:.2f})" fill="{fill}" d="{d}"/>'


def lockup(name, fill_main, fill_sub, c1, c2):
    S = 80
    rgd, w1 = shape(OUTFIT, "RGD", S, -0.04)
    sub_size = max(8, round(0.22 * S))
    sol, w2 = shape(MANROPE, "SOLUTIONS", sub_size, 0.3)
    gap = round(0.16 * S)
    rule_h = 2

    # CSS line boxes
    box1 = 0.9 * S
    asc1, desc1 = 1000 / 1000 * S, 260 / 1000 * S
    base1 = (box1 - (asc1 + desc1)) / 2 + asc1
    rule_y = box1 + gap
    box2_top = rule_y + rule_h + gap
    asc2, desc2 = 2132 / 2000 * sub_size, 600 / 2000 * sub_size
    base2 = box2_top + (sub_size - (asc2 + desc2)) / 2 + asc2

    cap1 = 676 / 1000 * S
    width = max(w1, w2)
    pad = 8
    top = base1 - cap1
    bottom = base2
    vb_w = width + 2 * pad
    vb_h = (bottom - top) + 2 * pad
    oy = pad - top

    gid = f"aurora-{name}"
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w:.2f} {vb_h:.2f}" width="{vb_w:.0f}" height="{vb_h:.0f}" role="img" aria-label="RGD Solutions">
  <defs>
    <linearGradient id="{gid}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="{c1}"/>
      <stop offset="1" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  {text_group(rgd, pad + (width - w1) / 2, oy + base1, fill_main)}
  <rect x="{pad:.2f}" y="{oy + rule_y:.2f}" width="{width:.2f}" height="{rule_h}" fill="url(#{gid})"/>
  {text_group(sol, pad + (width - w2) / 2, oy + base2, fill_sub)}
</svg>
"""
    path = OUT / "public" / "brand" / f"rgd-solutions-logo-{name}.svg"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(svg)
    print(f"{path.relative_to(OUT)}  {vb_w:.0f}x{vb_h:.0f}")


def favicon():
    """RGD over the aurora rule on a navy rounded square, 32-unit grid."""
    V = 32
    target_w = 23.0
    _, w_unit = shape(OUTFIT, "RGD", 1, -0.04)
    size = target_w / w_unit
    rgd, w = shape(OUTFIT, "RGD", size, -0.04)
    cap = 676 / 1000 * size
    rule_h = 2.2
    gap = 3
    total = cap + gap + rule_h
    top = (V - total) / 2
    base = top + cap
    rule_y = base + gap
    x = (V - w) / 2
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {V} {V}" width="{V}" height="{V}">
  <defs>
    <linearGradient id="aurora-icon" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="{TEAL}"/>
      <stop offset="1" stop-color="{ROSE}"/>
    </linearGradient>
  </defs>
  <rect width="{V}" height="{V}" rx="7" fill="#070f1f"/>
  {text_group(rgd, x, base, "#ffffff")}
  <rect x="{x:.2f}" y="{rule_y:.2f}" width="{w:.2f}" height="{rule_h}" fill="url(#aurora-icon)"/>
</svg>
"""
    path = OUT / "app" / "icon.svg"
    path.write_text(svg)
    print(f"{path.relative_to(OUT)}  {V}x{V} (RGD at {size:.1f}px)")


lockup("on-dark", "#ffffff", "rgba(255,255,255,0.7)", TEAL, ROSE)
lockup("on-light", INK, "rgba(11,17,32,0.6)", TEAL_INK, ROSE_INK)
favicon()
