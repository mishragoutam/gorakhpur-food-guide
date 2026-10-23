export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatRupees(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/** Demo reviews are always labelled as samples so they are never mistaken for live ones. */
export function formatReviewCount(count: number, isDemo: boolean): string {
  const noun = count === 1 ? 'review' : 'reviews';
  return `${count.toLocaleString('en-IN')} ${isDemo ? 'sample ' : ''}${noun}`;
}
