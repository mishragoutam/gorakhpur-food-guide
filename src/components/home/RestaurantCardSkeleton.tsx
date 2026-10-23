/** Placeholder shown while the restaurant list loads (instant for demo data, real for an API). */
export function RestaurantCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full animate-pulse flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-900/5"
    >
      <div className="aspect-[16/10] bg-cream-200" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="h-6 w-3/4 rounded-lg bg-cream-200" />
        <div className="h-4 w-1/2 rounded-lg bg-cream-200" />
        <div className="h-4 w-2/5 rounded-lg bg-cream-200" />
        <div className="mt-4 flex items-center justify-between">
          <div className="h-4 w-1/3 rounded-lg bg-cream-200" />
          <div className="h-10 w-28 rounded-full bg-cream-200" />
        </div>
      </div>
    </div>
  );
}
