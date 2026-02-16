/**
 * Parse a markdown string with YAML frontmatter.
 * Returns { attributes: {}, body: string }.
 * Handles: strings, numbers, arrays like [num, num], optional fields.
 */
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error('Invalid frontmatter format');

  const [, frontmatterBlock, body] = match;
  const attributes = {};

  for (const line of frontmatterBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // Parse arrays like [34.0522, -118.2437]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => Number(v.trim()));
    }
    // Parse numbers
    else if (!isNaN(value) && value !== '') {
      value = Number(value);
    }

    attributes[key] = value;
  }

  return { attributes, body };
}
