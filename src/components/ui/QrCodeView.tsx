import { Download, Link as LinkIcon, Check, Share2, Printer } from 'lucide-react';
import { useMemo, useState } from 'react';
import { generateQrMatrix, renderQrSvgString, generateQrDataUrl } from '@/lib/qrCode';
import { getRestaurantQrFilename } from '@/lib/restaurantUrl';

interface QrCodeViewProps {
  value: string;
  size?: number;
  className?: string;
  title?: string;
  restaurantName?: string;
  filename?: string;
  showActions?: boolean;
  showPrint?: boolean;
  onPrint?: () => void;
}

export function QrCodeView({
  value,
  size = 220,
  className = '',
  title = 'Scan to view restaurant',
  restaurantName,
  filename,
  showActions = true,
  showPrint = false,
  onPrint,
}: QrCodeViewProps) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const matrix = useMemo(() => {
    try {
      return generateQrMatrix(value, 'M');
    } catch {
      return [];
    }
  }, [value]);

  const svgString = useMemo(() => {
    if (!matrix.length) return '';
    return renderQrSvgString(matrix, size, 4);
  }, [matrix, size]);

  const pngFilename = filename
    ? `${filename}.png`
    : getRestaurantQrFilename(restaurantName || 'restaurant', 'png');

  const svgFilename = filename
    ? `${filename}.svg`
    : getRestaurantQrFilename(restaurantName || 'restaurant', 'svg');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: restaurantName ? `${restaurantName} — Gorakhpur Food Guide` : 'Gorakhpur Food Guide',
          text: `Check out ${restaurantName || 'this restaurant'} on Gorakhpur Food Guide!`,
          url: value,
        });
        return;
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }
    // Fallback if Web Share is not supported or was aborted
    await copyLink();
  };

  const downloadSvg = () => {
    if (!svgString) return;
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = svgFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPng = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      // Generate crisp 1000px high-resolution PNG data URL directly
      const dataUrl = await generateQrDataUrl(value, {
        size: 1000,
        margin: 4,
        errorCorrectionLevel: 'M',
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = pngFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Fallback to canvas rasterization of SVG
      const img = new Image();
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const canvasData = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          a.href = canvasData;
          a.download = pngFilename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
        URL.revokeObjectURL(url);
      };
      img.src = url;
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className="rounded-3xl border-2 border-forest-800/15 bg-white p-4 shadow-sm"
        dangerouslySetInnerHTML={{ __html: svgString }}
        aria-label={title}
        role="img"
      />
      <p
        className="text-center text-xs font-semibold text-ink-600 max-w-[260px] truncate"
        title={value}
      >
        {value}
      </p>

      {showActions ? (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy destination URL"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-800 shadow-xs transition hover:border-forest-600 hover:text-forest-700"
          >
            {copied ? <Check size={14} className="text-forest-600" /> : <LinkIcon size={14} />}
            {copied ? 'Copied' : 'Copy Link'}
          </button>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Share restaurant URL"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-800 shadow-xs transition hover:border-forest-600 hover:text-forest-700"
          >
            <Share2 size={14} />
            Share
          </button>

          <button
            type="button"
            onClick={downloadPng}
            disabled={downloading}
            aria-label="Download PNG QR image"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-800 shadow-xs transition hover:border-forest-600 hover:text-forest-700 disabled:opacity-50"
          >
            <Download size={14} />
            PNG
          </button>

          <button
            type="button"
            onClick={downloadSvg}
            aria-label="Download vector SVG QR file"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-800 shadow-xs transition hover:border-forest-600 hover:text-forest-700"
          >
            <Download size={14} />
            SVG
          </button>

          {showPrint ? (
            <button
              type="button"
              onClick={onPrint || (() => window.print())}
              aria-label="Print QR standee card"
              className="inline-flex items-center gap-1.5 rounded-full bg-forest-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-forest-700"
            >
              <Printer size={14} />
              Print
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
