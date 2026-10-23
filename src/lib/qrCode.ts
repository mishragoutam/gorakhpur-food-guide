/**
 * Self-contained QR Code Generator (Pure TypeScript, Zero Dependencies)
 * Implements standard QR Code Model 2 with Byte mode and Reed-Solomon error correction.
 */

// Galois Field GF(256) tables with primitive polynomial 0x11d
const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);

(function initGaloisField() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) {
    GF_EXP[i] = GF_EXP[i - 255] ?? 0;
  }
})();

function gfMul(x: number, y: number): number {
  if (x === 0 || y === 0) return 0;
  const expIdx = (GF_LOG[x] ?? 0) + (GF_LOG[y] ?? 0);
  return GF_EXP[expIdx] ?? 0;
}

function polyMul(p1: number[], p2: number[]): number[] {
  const res: number[] = new Array<number>(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      const idx = i + j;
      res[idx] = (res[idx] ?? 0) ^ gfMul(p1[i] ?? 0, p2[j] ?? 0);
    }
  }
  return res;
}

function getGeneratorPoly(ecLen: number): number[] {
  let g: number[] = [1];
  for (let i = 0; i < ecLen; i++) {
    g = polyMul(g, [1, GF_EXP[i] ?? 0]);
  }
  return g;
}

function calcEcc(data: Uint8Array, ecLen: number): Uint8Array {
  const gen = getGeneratorPoly(ecLen);
  const res = new Uint8Array(ecLen);
  for (let i = 0; i < data.length; i++) {
    const factor = (data[i] ?? 0) ^ (res[0] ?? 0);
    for (let k = 0; k < ecLen - 1; k++) {
      res[k] = res[k + 1] ?? 0;
    }
    res[ecLen - 1] = 0;
    for (let j = 0; j < ecLen; j++) {
      res[j] = (res[j] ?? 0) ^ gfMul(gen[j + 1] ?? 0, factor);
    }
  }
  return res;
}

interface QrVersion {
  ver: number;
  dataCapacity: number;
  ecLen: number;
  size: number;
  alignPos: number[];
}

const VERSIONS: QrVersion[] = [
  { ver: 1, dataCapacity: 16, ecLen: 10, size: 21, alignPos: [] },
  { ver: 2, dataCapacity: 28, ecLen: 16, size: 25, alignPos: [6, 18] },
  { ver: 3, dataCapacity: 44, ecLen: 26, size: 29, alignPos: [6, 22] },
  { ver: 4, dataCapacity: 64, ecLen: 36, size: 33, alignPos: [6, 26] },
  { ver: 5, dataCapacity: 86, ecLen: 48, size: 37, alignPos: [6, 30] },
  { ver: 6, dataCapacity: 108, ecLen: 64, size: 41, alignPos: [6, 34] },
];

/**
 * Encodes text into a 2D boolean matrix (true = dark module, false = light module)
 */
export function generateQrMatrix(text: string): boolean[][] {
  const encoder = new TextEncoder();
  const rawBytes = encoder.encode(text);

  const requiredDataBytes = rawBytes.length + 2;
  const cfg: QrVersion =
    VERSIONS.find((v) => v.dataCapacity >= requiredDataBytes) ?? VERSIONS[VERSIONS.length - 1]!;

  const bits: number[] = [];
  function pushBits(val: number, len: number) {
    for (let i = len - 1; i >= 0; i--) {
      bits.push((val >>> i) & 1);
    }
  }

  // Byte mode: 0100
  pushBits(0b0100, 4);
  // Char count (8 bits)
  pushBits(rawBytes.length, 8);
  for (let i = 0; i < rawBytes.length; i++) {
    pushBits(rawBytes[i] ?? 0, 8);
  }

  // Terminator
  const maxDataBits = cfg.dataCapacity * 8;
  const termLen = Math.min(4, maxDataBits - bits.length);
  pushBits(0, termLen);

  while (bits.length % 8 !== 0) {
    bits.push(0);
  }

  const padPatterns = [0xec, 0x11];
  let padIdx = 0;
  while (bits.length < maxDataBits) {
    pushBits(padPatterns[padIdx % 2] ?? 0, 8);
    padIdx++;
  }

  const dataBytes = new Uint8Array(cfg.dataCapacity);
  for (let i = 0; i < cfg.dataCapacity; i++) {
    let byteVal = 0;
    for (let j = 0; j < 8; j++) {
      byteVal = (byteVal << 1) | (bits[i * 8 + j] ?? 0);
    }
    dataBytes[i] = byteVal;
  }

  const ecBytes = calcEcc(dataBytes, cfg.ecLen);

  const allCodewords = new Uint8Array(cfg.dataCapacity + cfg.ecLen);
  allCodewords.set(dataBytes, 0);
  allCodewords.set(ecBytes, cfg.dataCapacity);

  const size = cfg.size;
  const matrix: (boolean | null)[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null),
  );

  function setCell(r: number, c: number, val: boolean | null) {
    const row = matrix[r];
    if (row && c >= 0 && c < size) {
      row[c] = val;
    }
  }

  function getCell(r: number, c: number): boolean | null {
    const row = matrix[r];
    return row ? (row[c] ?? null) : null;
  }

  // 1. Finders
  function placeFinder(startX: number, startY: number) {
    for (let dy = -1; dy <= 7; dy++) {
      for (let dx = -1; dx <= 7; dx++) {
        const x = startX + dx;
        const y = startY + dy;
        if (x < 0 || x >= size || y < 0 || y >= size) continue;
        if (dx === -1 || dx === 7 || dy === -1 || dy === 7) {
          setCell(y, x, false);
        } else if (
          dx === 0 ||
          dx === 6 ||
          dy === 0 ||
          dy === 6 ||
          (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)
        ) {
          setCell(y, x, true);
        } else {
          setCell(y, x, false);
        }
      }
    }
  }
  placeFinder(0, 0);
  placeFinder(size - 7, 0);
  placeFinder(0, size - 7);

  // 2. Alignment patterns
  if (cfg.alignPos.length > 0) {
    for (const py of cfg.alignPos) {
      for (const px of cfg.alignPos) {
        if (getCell(py, px) !== null) continue;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const isDark = Math.max(Math.abs(dx), Math.abs(dy)) !== 1;
            setCell(py + dy, px + dx, isDark);
          }
        }
      }
    }
  }

  // 3. Timing
  for (let i = 8; i < size - 8; i++) {
    if (getCell(6, i) === null) setCell(6, i, i % 2 === 0);
    if (getCell(i, 6) === null) setCell(i, 6, i % 2 === 0);
  }

  // Dark module
  setCell(4 * cfg.ver + 9, 8, true);

  // 4. Reserve format
  for (let i = 0; i < 9; i++) {
    if (getCell(8, i) === null) setCell(8, i, false);
    if (getCell(i, 8) === null) setCell(i, 8, false);
  }
  for (let i = size - 8; i < size; i++) {
    if (getCell(8, i) === null) setCell(8, i, false);
    if (getCell(i, 8) === null) setCell(i, 8, false);
  }

  // 5. Data placement
  let bitIdx = 0;
  const totalBits = allCodewords.length * 8;
  let upwards = true;

  for (let rightCol = size - 1; rightCol > 0; rightCol -= 2) {
    if (rightCol === 6) rightCol--;
    const cols = [rightCol, rightCol - 1];

    const rowIndices = Array.from({ length: size }, (_, i) => (upwards ? size - 1 - i : i));
    for (const y of rowIndices) {
      for (const x of cols) {
        if (getCell(y, x) === null) {
          let bit = false;
          if (bitIdx < totalBits) {
            const bytePos = Math.floor(bitIdx / 8);
            const bitInByte = 7 - (bitIdx % 8);
            const cw = allCodewords[bytePos] ?? 0;
            bit = ((cw >>> bitInByte) & 1) === 1;
            bitIdx++;
          }
          const mask = (x + y) % 2 === 0;
          setCell(y, x, bit !== mask);
        }
      }
    }
    upwards = !upwards;
  }

  // 6. Format info
  const formatBits = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
  for (let i = 0; i < 6; i++) setCell(8, i, formatBits[i] === 1);
  setCell(8, 7, formatBits[6] === 1);
  setCell(8, 8, formatBits[7] === 1);
  setCell(7, 8, formatBits[8] === 1);
  for (let i = 9; i < 15; i++) setCell(14 - i, 8, formatBits[i] === 1);

  for (let i = 0; i < 7; i++) setCell(size - 1 - i, 8, formatBits[i] === 1);
  for (let i = 7; i < 15; i++) setCell(8, size - 15 + i, formatBits[i] === 1);

  return matrix.map((row) => row.map((cell) => cell ?? false));
}

/**
 * Converts a QR matrix into an SVG path or string
 */
export function renderQrSvgString(matrix: boolean[][], size = 200, margin = 2): string {
  const n = matrix.length;
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

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" width="${size}" height="${size}" shape-rendering="crispEdges">
    <rect width="${viewBoxSize}" height="${viewBoxSize}" fill="#ffffff" />
    <path d="${path.trim()}" fill="#16302a" />
  </svg>`;
}
