/** Shrink a photo in the browser so it can be stored with the rest of the site. */
export async function compressImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Please choose a photo.");
  }
  if (file.size > 15 * 1024 * 1024) {
    throw new Error("That photo is too large. Try one under 15 MB.");
  }

  const bitmap = await createImageBitmap(file);
  const max = 1600;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    throw new Error("Could not read that photo.");
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  for (const quality of [0.82, 0.7, 0.58]) {
    const url = canvas.toDataURL("image/jpeg", quality);
    if (url.length <= 1_800_000) return url;
  }
  throw new Error("That photo is still too large. Try a smaller one.");
}
