/**
 * Utility to process images on offscreen canvas to cleanly remove dark noise or
 * solid background colors (e.g. Deadpool gray background), returning a transparent PNG.
 */

const processedCache = new Map<string, string>();

export async function processSeamlessImage(
  src: string,
  type: 'dark-cutout' | 'corner-chroma' = 'dark-cutout'
): Promise<string> {
  const cacheKey = `${src}_${type}`;
  if (processedCache.has(cacheKey)) {
    return processedCache.get(cacheKey)!;
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(src);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        if (type === 'dark-cutout') {
          // Removes dark gray noise/artifacts around dumbbells
          // Max RGB < 30 -> alpha = 0
          // Max RGB 30..65 -> smooth alpha fade
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const maxVal = Math.max(r, g, b);

            if (maxVal < 32) {
              data[i + 3] = 0; // Fully transparent
            } else if (maxVal < 70) {
              const alphaRatio = (maxVal - 32) / 38;
              data[i + 3] = Math.floor(data[i + 3] * alphaRatio);
            }
          }
        } else if (type === 'corner-chroma') {
          // Sample corner background color (e.g. Deadpool image gray background)
          const bgR = data[0];
          const bgG = data[1];
          const bgB = data[2];

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Color distance to background gray
            const dist = Math.sqrt(
              (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
            );

            if (dist < 35) {
              data[i + 3] = 0; // Completely remove background gray
            } else if (dist < 65) {
              const alphaRatio = (dist - 35) / 30;
              data[i + 3] = Math.floor(data[i + 3] * alphaRatio);
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        processedCache.set(cacheKey, resultUrl);
        resolve(resultUrl);
      } catch (err) {
        // SecurityError if CORS prevents getImageData -> fallback gracefully to src
        console.warn('Canvas processing fallback (CORS or canvas error):', err);
        resolve(src);
      }
    };

    img.onerror = () => {
      resolve(src);
    };
  });
}
