import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '@/App';
import { storageService } from '@/services/storageService';

beforeEach(() => {
  storageService.loadDemoData();
  window.history.pushState({}, '', '/');
});

describe('App routing', () => {
  it('shows the header navigation and owner links', async () => {
    render(<App />);
    await screen.findAllByRole('article');

    const main = screen.getByRole('navigation', { name: 'Main' });
    expect(main).toHaveTextContent('Home');
    expect(main).toHaveTextContent('Explore Restaurants');
    expect(main).toHaveTextContent('About');
    expect(screen.getByRole('link', { name: /Restaurant Owner\? Login/ })).toHaveAttribute('href', '/owner/login');
    expect(screen.getAllByRole('link', { name: /Register Your Restaurant/ })[0]).toHaveAttribute(
      'href',
      '/owner/register',
    );
  });

  it('opens the owner registration placeholder', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findAllByRole('article');

    await user.click(screen.getAllByRole('link', { name: /Register Your Restaurant/ })[0]!);

    expect(await screen.findByRole('heading', { level: 1, name: 'Register your restaurant' })).toBeInTheDocument();
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });

  it('opens the owner login placeholder', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findAllByRole('article');

    await user.click(screen.getByRole('link', { name: /Restaurant Owner\? Login/ }));

    expect(await screen.findByRole('heading', { level: 1, name: 'Restaurant owner login' })).toBeInTheDocument();
  });

  it('opens a restaurant details placeholder from a card', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findAllByRole('article');

    await user.click(screen.getByRole('link', { name: 'View details for Lotus Wok House' }));

    expect(await screen.findByRole('heading', { level: 1, name: 'Lotus Wok House' })).toBeInTheDocument();
    expect(screen.getByText('Full details and reviews are coming soon')).toBeInTheDocument();
    expect(document.title).toBe('Lotus Wok House | Gorakhpur Food Guide');
  });

  it('says so when a restaurant does not exist', async () => {
    window.history.pushState({}, '', '/restaurants/not-a-real-id');
    render(<App />);

    expect(await screen.findByText('Restaurant not found')).toBeInTheDocument();
  });

  it('shows a not-found page for unknown routes', async () => {
    window.history.pushState({}, '', '/nope');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
  });

  it('opens the contact page with contact form and office details', async () => {
    window.history.pushState({}, '', '/contact');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Contact Gorakhpur Food Guide' })).toBeInTheDocument();
    expect(screen.getByText('Gorakhpur Office')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('opens the privacy policy page with comprehensive data protection sections', async () => {
    window.history.pushState({}, '', '/privacy');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText('Zero Data Selling')).toBeInTheDocument();
    expect(screen.getByText('Information We Collect')).toBeInTheDocument();
  });

  it('opens the terms of use page with legal terms', async () => {
    window.history.pushState({}, '', '/terms');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Terms of Use' })).toBeInTheDocument();
    expect(screen.getByText('Authentic Reviews')).toBeInTheDocument();
    expect(screen.getByText('Governing Law & Jurisdiction')).toBeInTheDocument();
  });

  it('opens the about page with Gorakhpur culinary story and pillars', async () => {
    window.history.pushState({}, '', '/about');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: /Celebrating the Flavors & Culinary Heritage of Gorakhpur/ })).toBeInTheDocument();
    expect(screen.getByText('Table QR Standees')).toBeInTheDocument();
    expect(screen.getByText('Deep Local Discovery')).toBeInTheDocument();
  });

  it('lists the footer links', async () => {
    render(<App />);
    await screen.findAllByRole('article');

    const footer = screen.getByRole('navigation', { name: 'Footer' });
    for (const label of ['About', 'Contact', 'Privacy Policy', 'Terms']) {
      expect(footer).toHaveTextContent(label);
    }
    expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument();
  });
});
