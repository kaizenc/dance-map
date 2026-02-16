/**
 * Parse the markdown body into { description, music, notableFigures }.
 * Splits on ## headings and extracts content from each section.
 */
export function parseLocationBody(body) {
  const sections = {};
  let currentSection = null;
  const lines = body.split('\n');

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+)/);
    if (headingMatch) {
      currentSection = headingMatch[1].trim().toLowerCase();
      sections[currentSection] = [];
    } else if (currentSection) {
      sections[currentSection].push(line);
    }
  }

  const description = (sections['description'] || []).join('\n').trim();
  const music = (sections['music'] || []).join('\n').trim();

  const notableFigures = (sections['notable figures'] || [])
    .map(line => line.trim())
    .filter(line => line.startsWith('- '))
    .map(line => line.slice(2));

  return { description, music, notableFigures };
}
