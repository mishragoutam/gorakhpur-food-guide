import fs from 'node:fs';

const filePath = 'src/pages/owner/OwnerDashboardPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace forest- tokens
content = content.replace(/bg-forest-600/g, 'bg-accent-600');
content = content.replace(/bg-forest-700/g, 'bg-accent-700');
content = content.replace(/bg-forest-800/g, 'bg-ink-950');
content = content.replace(/bg-forest-100/g, 'bg-accent-100');
content = content.replace(/bg-forest-50\/80/g, 'bg-accent-50/80');
content = content.replace(/bg-forest-50\/60/g, 'bg-accent-50/60');
content = content.replace(/bg-forest-50/g, 'bg-accent-50');

content = content.replace(/hover:bg-forest-700/g, 'hover:bg-accent-700');
content = content.replace(/hover:bg-forest-800/g, 'hover:bg-accent-800');
content = content.replace(/hover:bg-forest-200/g, 'hover:bg-accent-200');
content = content.replace(/hover:bg-forest-100/g, 'hover:bg-accent-100');

content = content.replace(/hover:text-forest-700/g, 'hover:text-accent-700');
content = content.replace(/hover:text-forest-800/g, 'hover:text-accent-800');

content = content.replace(/text-forest-600/g, 'text-accent-700');
content = content.replace(/text-forest-700/g, 'text-accent-700');
content = content.replace(/text-forest-800/g, 'text-accent-800');
content = content.replace(/text-forest-900\/80/g, 'text-ink-800');
content = content.replace(/text-forest-900/g, 'text-ink-900');

content = content.replace(/border-forest-600/g, 'border-accent-600');
content = content.replace(/border-forest-800/g, 'border-ink-900');
content = content.replace(/border-forest-200\/60/g, 'border-cream-200');
content = content.replace(/border-forest-200/g, 'border-cream-300');

content = content.replace(/focus:border-forest-600/g, 'focus:border-accent-600');
content = content.replace(/accent-forest-600/g, 'accent-accent-600');
content = content.replace(/#2f7d5f/g, '#b84221');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated OwnerDashboardPage.tsx theme!');
