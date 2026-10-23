import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import HomePage from '@/pages/HomePage';
import { storageService } from '@/services/storageService';

beforeEach(() => {
  storageService.loadDemoData();
});

function renderHome() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
}

/** Waits for the demo list to load, then returns the restaurant cards. */
async function findCards() {
  return screen.findAllByRole('article');
}

const searchBox = () => screen.getByRole('searchbox', { name: 'Search restaurants or dishes' });

describe('HomePage', () => {
  it('shows the hero, categories, listing and owner call-to-action', async () => {
    renderHome();
    await findCards();

    expect(screen.getByRole('heading', { level: 1, name: /Discover the Best Food in Gorakhpur/ })).toBeInTheDocument();
    expect(screen.getByText('Gorakhpur, Uttar Pradesh')).toBeInTheDocument();
    expect(searchBox()).toHaveAttribute('placeholder', 'Search restaurants or dishes');
    expect(screen.getByRole('heading', { name: 'Explore Restaurants in Gorakhpur' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Own a Restaurant in Gorakhpur?' })).toBeInTheDocument();

    for (const label of ['North Indian', 'Chinese', 'Fast Food', 'Cafe', 'Sweets', 'Street Food']) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    }
  });

  it('lists six restaurants and labels them as demo data', async () => {
    renderHome();

    expect(await findCards()).toHaveLength(6);
    expect(screen.getByText(/Demo preview\./)).toBeInTheDocument();
    expect(screen.getByText('Showing 6 of 6 sample restaurants')).toBeInTheDocument();
    expect(screen.getAllByText('Sample listing')).toHaveLength(6);
    expect(screen.getByText('(214 sample reviews)')).toBeInTheDocument();
  });

  it('filters by search text as you type', async () => {
    const user = userEvent.setup();
    renderHome();
    await findCards();

    await user.type(searchBox(), 'momos');

    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Lotus Wok House' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Remove filter: Search: "momos"' })).toBeInTheDocument();
  });

  it('clears the search with the clear button, which only shows while there is text', async () => {
    const user = userEvent.setup();
    renderHome();
    await findCards();

    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();

    await user.type(searchBox(), 'momos');
    expect(screen.getAllByRole('article')).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(searchBox()).toHaveValue('');
    expect(searchBox()).toHaveFocus();
    expect(screen.getAllByRole('article')).toHaveLength(6);
    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
  });

  it('filters by category and clears it when clicked again', async () => {
    const user = userEvent.setup();
    renderHome();
    await findCards();

    const cafe = screen.getByRole('button', { name: 'Cafe' });
    await user.click(cafe);
    expect(cafe).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByRole('article')).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Chai & Chapters Café' })).toBeInTheDocument();

    await user.click(cafe);
    expect(cafe).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getAllByRole('article')).toHaveLength(6);
  });

  it('filters by cuisine, budget and rating', async () => {
    const user = userEvent.setup();
    renderHome();
    await findCards();

    await user.selectOptions(screen.getByLabelText('Cuisine'), 'Pizza');
    expect(screen.getAllByRole('article')).toHaveLength(1);

    await user.selectOptions(screen.getByLabelText('Cuisine'), '');
    await user.selectOptions(screen.getByLabelText('Budget for two'), 'budget');
    expect(screen.getAllByRole('article')).toHaveLength(2);

    await user.selectOptions(screen.getByLabelText('Minimum rating'), '4.5');
    expect(screen.getByText('No restaurants match your filters')).toBeInTheDocument();
  });

  it('shows an empty state and recovers from it', async () => {
    const user = userEvent.setup();
    renderHome();
    await findCards();

    await user.type(searchBox(), 'sushi');
    expect(screen.queryAllByRole('article')).toHaveLength(0);
    expect(screen.getByText('No restaurants match your filters')).toBeInTheDocument();

    const clearButtons = screen.getAllByRole('button', { name: 'Clear all filters' });
    await user.click(clearButtons[clearButtons.length - 1]!);

    expect(screen.getAllByRole('article')).toHaveLength(6);
    expect(searchBox()).toHaveValue('');
  });

  it('links each card to its details route', async () => {
    renderHome();
    await findCards();

    expect(screen.getByRole('link', { name: 'View details for Kesar Darbar Kitchen' })).toHaveAttribute(
      'href',
      '/restaurants/demo-kesar-darbar-kitchen',
    );
  });
});
