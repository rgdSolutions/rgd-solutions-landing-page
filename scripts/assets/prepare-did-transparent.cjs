// Remove only the border-connected neutral background from the supplied original.
// Working from the light original avoids confusing black phone frames with a black backdrop.
const path = require("node:path");
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next")] }));
(async () => {
  const root = path.resolve(__dirname, "../..");
  const input = path.join(root, "design/assets/d-id/mobile-studio-overview.png");
  const output = path.join(root, "design/assets/d-id/mobile-studio-transparent.png");
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const count = width * height;
  const visited = new Uint8Array(count);
  const queue = new Int32Array(count);
  let head = 0,
    tail = 0;
  const add = (i) => {
    if (visited[i]) return;
    visited[i] = 1;
    const p = i * 4;
    const channels = [data[p], data[p + 1], data[p + 2]];
    if (Math.min(...channels) < 170 || Math.max(...channels) - Math.min(...channels) > 18) return;
    queue[tail++] = i;
  };
  for (let x = 0; x < width; x++) {
    add(x);
    add((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    add(y * width);
    add(y * width + width - 1);
  }
  while (head < tail) {
    const i = queue[head++];
    data[i * 4 + 3] = 0;
    if (i % width) add(i - 1);
    if (i % width < width - 1) add(i + 1);
    if (i >= width) add(i - width);
    if (i < count - width) add(i + width);
  }
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(output);
  console.log({ width, height, transparentPixels: tail, output });
})();
