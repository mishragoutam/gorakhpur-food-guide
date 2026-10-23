import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/lib/routes';

export const BRAND_NAME = 'Gorakhpur Food Guide';

export function Logo() {
  return (
    <Link to={ROUTES.home} className="group inline-flex items-center gap-2.5 rounded-xl">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-600 text-white shadow-card transition-transform duration-200 group-hover:-rotate-6">
        <UtensilsCrossed aria-hidden="true" size={22} />
      </span>
      <span className="font-display text-[1.0625rem] leading-none font-bold tracking-tight text-ink-900 sm:text-xl">
        {BRAND_NAME}
      </span>
    </Link>
  );
}
