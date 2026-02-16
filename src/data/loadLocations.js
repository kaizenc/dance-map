import { parseFrontmatter } from './parseFrontmatter';
import { parseLocationBody } from './parseLocationBody';

// Eagerly import all markdown files as raw strings at build time
const locationFiles = import.meta.glob('./locations/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function addJitter(lat, lng, index = 0, total = 1) {
  if (total === 1) return [lat, lng];
  const jitterAmount = 0.08;
  const angle = (index / total) * 2 * Math.PI;
  const radius = jitterAmount * (1 + Math.floor(index / 8) * 0.5);
  return [
    lat + radius * Math.cos(angle),
    lng + radius * Math.sin(angle),
  ];
}

function applyJitter(locations) {
  // Group locations by their base coordinates
  const groups = {};
  for (const loc of locations) {
    const key = loc.coordinates.join(',');
    if (!groups[key]) groups[key] = [];
    groups[key].push(loc);
  }

  // Apply jitter to each group
  for (const locs of Object.values(groups)) {
    const total = locs.length;
    locs.forEach((loc, index) => {
      loc.coordinates = addJitter(
        loc.coordinates[0],
        loc.coordinates[1],
        index,
        total,
      );
    });
  }

  return locations;
}

// Parse all markdown files into location objects
const rawLocations = Object.values(locationFiles).map(raw => {
  const { attributes, body } = parseFrontmatter(raw);
  const { description, music, notableFigures } = parseLocationBody(body);
  return { ...attributes, description, music, notableFigures };
});

// Sort by id for deterministic jitter ordering, then apply jitter
rawLocations.sort((a, b) => a.id - b.id);

export const allLocations = applyJitter(rawLocations);
