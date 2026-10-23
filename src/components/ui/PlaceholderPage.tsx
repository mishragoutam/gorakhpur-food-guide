import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';

interface PlaceholderPageProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Small label above the title, e.g. "Coming soon". */
  eyebrow?: string;
  actions?: ReactNode;
}

/** Shared layout for routes that exist so navigation works, but whose content is not built yet. */
export function PlaceholderPage({ icon: Icon, title, description, eyebrow, actions }: PlaceholderPageProps) {
  usePageTitle(title);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-accent-50 text-accent-700 ring-1 ring-accent-100">
            <Icon aria-hidden="true" size={30} />
          </span>
          {eyebrow ? (
            <Badge tone="accent" className="mt-6">
              {eyebrow}
            </Badge>
          ) : null}
          <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-ink-600">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
