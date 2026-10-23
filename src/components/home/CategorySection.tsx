import { Check } from 'lucide-react';
import { CATEGORY_ICONS } from '@/components/home/categoryIcons';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/cn';
import type { CategoryId } from '@/types/restaurant';

interface CategorySectionProps {
  selected: CategoryId | null;
  /** Called with the clicked category; the parent decides whether that selects or clears it. */
  onSelect: (category: CategoryId) => void;
}

export function CategorySection({ selected, onSelect }: CategorySectionProps) {
  return (
    <section aria-labelledby="categories-heading" className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          id="categories-heading"
          title="Browse by Category"
          description="Pick a category to filter the restaurant list below."
        />

        <ul role="list" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            const isSelected = selected === category.id;

            return (
              <li key={category.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(category.id)}
                  className={cn(
                    'group relative flex h-full w-full flex-col items-center gap-3 rounded-2xl px-3 py-5 text-center shadow-card',
                    'transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover',
                    isSelected ? 'bg-accent-50 ring-2 ring-accent-600' : 'bg-white ring-1 ring-ink-900/5',
                  )}
                >
                  {isSelected ? (
                    <span className="absolute top-2.5 right-2.5 grid size-5 place-items-center rounded-full bg-accent-600 text-white">
                      <Check aria-hidden="true" size={13} strokeWidth={3} />
                    </span>
                  ) : null}

                  <span
                    className={cn(
                      'grid size-12 place-items-center rounded-2xl transition-colors duration-200',
                      isSelected
                        ? 'bg-accent-600 text-white'
                        : 'bg-accent-50 text-accent-700 group-hover:bg-accent-100',
                    )}
                  >
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <span className="text-sm font-semibold text-ink-900 sm:text-base">{category.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
