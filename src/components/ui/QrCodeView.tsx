import { Download, Link as LinkIcon, Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import { generateQrMatrix, renderQrSvgString } from '@/lib/qrCode';

interface QrCodeViewProps {
  value: string;
  size?: number;
  className?: string;
  title?: string;
  showActions?: boolean;
}

export function QrCodeView({
  value,
  size = 220,
  className = '',
  title = 'Scan to review',
  showActions = true,
}: QrCodeViewProps) {
  const [copied, setCopied] = useState(false);

  const matrix = useMemo(() => {
    try {
      return generateQrMatrix(value);
    } catch {
      return [];
    }
  }, [value]);

  const svgString = useMemo(() => {
    if (!matrix.length) return '';
    return renderQrSvgString(matrix, size);
  }, [matrix, size]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const downloadSvg = () => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rateit-qr-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPng = () => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size * 2;
      canvas.height = size * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `rateit-qr-${Date.now()}.png`;
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className="rounded-2xl border-2 border-forest-800/15 bg-white p-4 shadow-sm"
        dangerouslySetInnerHTML={{ __html: svgString }}
        aria-label={title}
        role="img"
      />
      <p className="text-center text-xs font-semibold text-ink-600 max-w-[240px] truncate" title={value}>
        {value}
      </p>

      {showActions ? (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 transition hover:border-forest-600 hover:text-forest-700"
          >
            {copied ? <Check size={14} className="text-forest-600" /> : <LinkIcon size={14} />}
            {copied ? 'Copied Link' : 'Copy Link'}
          </button>
          <button
            type="button"
            onClick={downloadPng}
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 transition hover:border-forest-600 hover:text-forest-700"
          >
            <Download size={14} />
            Download PNG
          </button>
          <button
            type="button"
            onClick={downloadSvg}
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 transition hover:border-forest-600 hover:text-forest-700"
          >
            <Download size={14} />
            SVG
          </button>
        </div>
      ) : null}
    </div>
  );
}
