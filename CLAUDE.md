# Dance Map

React 19 + Vite 7 app showing dance and music history across America on an interactive map. Uses `@vnedyalk0v/react19-simple-maps` for map rendering.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint

No test framework is installed.

## Architecture

```
src/
  App.jsx              — root component, passes allLocations to DanceMap
  components/
    DanceMap.jsx       — renders map with pins from locations prop
    DanceCard.jsx      — info card for a selected location
    DecadeSlider.jsx   — timeline filter UI
    IntroModal.jsx     — welcome modal
  data/
    locations/*.md     — one markdown file per location (25 files)
    loadLocations.js   — loads all .md files via import.meta.glob, parses, applies jitter
    parseFrontmatter.js — custom YAML frontmatter parser (no dependencies)
    parseLocationBody.js — extracts Description/Music/Notable Figures from markdown body
  theme.config.js      — centralized theme (colors, fonts, pin colors)
  assets/
    us-states.json     — GeoJSON for US state boundaries
```

## Data flow

`src/data/locations/*.md` → parsed by `loadLocations.js` at build time → exported as `allLocations` array → `App.jsx` imports it → passes to `DanceMap` (pins) and `DanceCard` (info display).

## Location object shape

Each markdown file produces an object with these fields:

- `id` (number) — unique identifier
- `city` (string)
- `state` (string)
- `coordinates` ([lat, lng]) — true city coordinates in markdown; jitter applied automatically at load time
- `danceStyle` (string) — name of the dance/music form
- `type` ("dance" | "music")
- `year` (number) — decade/year of origin
- `description` (string) — from markdown body
- `music` (string) — from markdown body
- `notableFigures` (string[]) — from markdown list items in body
- `relatedLocationId` (number, optional) — links to another location

Pin colors are derived from `type` via `theme.config.js`, not stored on the data.

## Conventions

- No external dependencies for simple utilities — prefer custom parsers
- Jitter (coordinate offset for same-city pins) is a display concern handled in `loadLocations.js`, not stored in markdown
- Location markdown files use YAML frontmatter for structured fields and `## Heading` sections for prose
