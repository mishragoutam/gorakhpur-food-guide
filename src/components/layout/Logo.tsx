import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/lib/routes';

export const BRAND_NAME = 'VYORA';

export function Logo() {
  return (
    <Link to={ROUTES.home} className="group inline-flex items-center gap-2.5 rounded-xl">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-600 text-white shadow-card transition-transform duration-200 group-hover:-rotate-6">
        <UtensilsCrossed aria-hidden="true" size={22} />
      </span>
      <div className="flex flex-col">
        <span className="font-display text-xl leading-none font-extrabold tracking-tight text-ink-900 sm:text-2xl">
          VYORA
        </span>
        <span className="text-[10px] font-semibold tracking-wider uppercase text-accent-700">
          Gorakhpur Food Guide
        </span>
      </div>
    </Link>
  );
}
