import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface StatePanelProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}

/** Centred message used for empty results and load errors. */
export function StatePanel({ icon: Icon, title, description, action }: StatePanelProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-cream-400 bg-cream-50 px-6 py-14 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
        <Icon aria-hidden="true" size={26} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-ink-900">{title}</h3>
      <p className="mt-2 max-w-md text-ink-600">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
