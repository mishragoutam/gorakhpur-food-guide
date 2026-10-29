import QRCode from 'qrcode';

export interface QrOptions {
  size?: number;
  margin?: number;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  darkColor?: string;
  lightColor?: string;
}

/**
 * Encodes text into a standard 2D boolean matrix (true = dark module, false = light module)
 * Uses standard QR Code Model 2 with Reed-Solomon error correction and optimal mask penalty selection.
 */
export function generateQrMatrix(text: string, errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M'): boolean[][] {
  try {
    const qr = QRCode.create(text, { errorCorrectionLevel });
    const size = qr.modules.size;
    const matrix: boolean[][] = [];
    for (let r = 0; r < size; r++) {
      const row: boolean[] = [];
      for (let c = 0; c < size; c++) {
        row.push(Boolean(qr.modules.get(r, c)));
      }
      matrix.push(row);
    }
    return matrix;
  } catch (err) {
    console.error('Failed to generate QR matrix:', err);
    return [];
  }
}

/**
 * Converts a QR matrix into a clean, scalable SVG string with standard quiet zones.
 */
export function renderQrSvgString(
  matrix: boolean[][],
  size = 220,
  margin = 4,
  darkColor = '#16302a',
  lightColor = '#ffffff',
): string {
  const n = matrix.length;
  if (n === 0) return '';
  const viewBoxSize = n + margin * 2;
  let path = '';

  for (let y = 0; y < n; y++) {
    const row = matrix[y];
    if (!row) continue;
    for (let x = 0; x < n; x++) {
      if (row[x]) {
        path += `M${x + margin},${y + margin}h1v1h-1z `;
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="QR Code">
  <rect width="${viewBoxSize}" height="${viewBoxSize}" fill="${lightColor}" />
  <path d="${path.trim()}" fill="${darkColor}" />
</svg>`;
}

/**
 * Generates an SVG string representation of the QR code using standards-compliant QRCode library.
 */
export async function generateQrSvg(text: string, options?: QrOptions): Promise<string> {
  return QRCode.toString(text, {
    type: 'svg',
    margin: options?.margin ?? 4,
    width: options?.size ?? 240,
    errorCorrectionLevel: options?.errorCorrectionLevel ?? 'M',
    color: {
      dark: options?.darkColor ?? '#16302a',
      light: options?.lightColor ?? '#ffffff',
    },
  });
}

/**
 * Generates a high-resolution PNG data URL for the QR code.
 */
export async function generateQrDataUrl(text: string, options?: QrOptions): Promise<string> {
  return QRCode.toDataURL(text, {
    margin: options?.margin ?? 4,
    width: options?.size ?? 800,
    errorCorrectionLevel: options?.errorCorrectionLevel ?? 'M',
    color: {
      dark: options?.darkColor ?? '#16302a',
      light: options?.lightColor ?? '#ffffff',
    },
  });
}
