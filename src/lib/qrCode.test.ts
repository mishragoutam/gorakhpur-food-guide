import { describe, expect, it } from 'vitest';
import jsQR from 'jsqr';
import {
  generateQrDataUrl,
  generateQrMatrix,
  generateQrSvg,
  renderQrSvgString,
} from '@/lib/qrCode';

describe('qrCode generation & scanner round-trip', () => {
  it('generates a non-empty 2D boolean matrix for a restaurant URL', () => {
    const payload = 'https://gorakhpurfoodguide.in/restaurants/demo-kesar-darbar-kitchen';
    const matrix = generateQrMatrix(payload, 'M');

    expect(matrix.length).toBeGreaterThan(20);
    expect(matrix[0]?.length).toBe(matrix.length);
    expect(typeof matrix[0]?.[0]).toBe('boolean');
  });

  it('renders a valid SVG string with standard quiet zone and crisp edges', () => {
    const payload = 'https://gorakhpurfoodguide.in/restaurants/demo-kesar-darbar-kitchen';
    const matrix = generateQrMatrix(payload, 'M');
    const svg = renderQrSvgString(matrix, 220, 4);

    expect(svg).toContain('<svg');
    expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
    expect(svg).toContain('viewBox="0 0');
    expect(svg).toContain('shape-rendering="crispEdges"');
    expect(svg).toContain('</svg>');
  });

  it('generates SVG and DataURL via async QRCode helpers', async () => {
    const payload = 'https://gorakhpurfoodguide.in/restaurants/demo-lotus-wok-house';
    const svg = await generateQrSvg(payload, { size: 240, margin: 4 });
    const dataUrl = await generateQrDataUrl(payload, { size: 600, margin: 4 });

    expect(svg).toContain('<svg');
    expect(dataUrl.startsWith('data:image/png;base64,')).toBe(true);
  });

  it('performs scanner round-trip verification: encoded QR decodes back to exact original URL using jsQR', () => {
    const originalUrl = 'https://gorakhpurfoodguide.in/restaurants/demo-kesar-darbar-kitchen?qr=table';
    const matrix = generateQrMatrix(originalUrl, 'M');

    const n = matrix.length;
    const margin = 4;
    const scale = 5; // 5x5 pixels per module
    const modulesAcross = n + margin * 2;
    const width = modulesAcross * scale;
    const height = modulesAcross * scale;

    const rgba = new Uint8ClampedArray(width * height * 4);

    for (let y = 0; y < height; y++) {
      const my = Math.floor(y / scale) - margin;
      for (let x = 0; x < width; x++) {
        const mx = Math.floor(x / scale) - margin;
        const isDark =
          my >= 0 && my < n && mx >= 0 && mx < n && Boolean(matrix[my]?.[mx]);

        const offset = (y * width + x) * 4;
        const color = isDark ? 0 : 255;
        rgba[offset] = color; // R
        rgba[offset + 1] = color; // G
        rgba[offset + 2] = color; // B
        rgba[offset + 3] = 255; // Alpha
      }
    }

    const decoded = jsQR(rgba, width, height);

    expect(decoded).not.toBeNull();
    expect(decoded?.data).toBe(originalUrl);
  });

  it('scanner round-trip passes for multiple distinct restaurant payloads', () => {
    const urls = [
      'https://gorakhpurfoodguide.in/restaurants/demo-lotus-wok-house',
      'https://gorakhpurfoodguide.in/restaurants/demo-stack-and-sizzle-eatery',
      'https://gorakhpurfoodguide.in/restaurants/demo-rasraj-sweets-and-snacks?table=12',
    ];

    for (const url of urls) {
      const matrix = generateQrMatrix(url, 'M');
      const n = matrix.length;
      const margin = 4;
      const scale = 4;
      const width = (n + margin * 2) * scale;
      const height = width;
      const rgba = new Uint8ClampedArray(width * height * 4);

      for (let y = 0; y < height; y++) {
        const my = Math.floor(y / scale) - margin;
        for (let x = 0; x < width; x++) {
          const mx = Math.floor(x / scale) - margin;
          const isDark =
            my >= 0 && my < n && mx >= 0 && mx < n && Boolean(matrix[my]?.[mx]);
          const offset = (y * width + x) * 4;
          const color = isDark ? 0 : 255;
          rgba[offset] = color;
          rgba[offset + 1] = color;
          rgba[offset + 2] = color;
          rgba[offset + 3] = 255;
        }
      }

      const decoded = jsQR(rgba, width, height);
      expect(decoded?.data).toBe(url);
    }
  });
});
