# Dance Map - History of Dance and Music Across America

An interactive map showcasing the history and evolution of dance forms throughout the United States.

## Features

- **Interactive Map**: Explore dance locations across the US with clickable pins
- **Detailed Information Cards**: Learn about each dance form, its music origins, and notable figures
- **Timeline Filter**: Filter locations by decade to see how dance evolved over time
- **Easy Data Management**: Each location is a standalone Markdown file, editable in any text editor
- **Responsive Design**: Clean, modern interface with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Adding New Locations

Location data is stored as Markdown files in `src/data/locations/`. Each file has YAML frontmatter for structured fields and markdown body sections for prose content.

To add a new location, create a `.md` file in `src/data/locations/`:

```markdown
---
id: 26
city: City Name
state: State Name
coordinates: [latitude, longitude]
danceStyle: Dance Form Name
type: dance
year: 1990
---

## Description

Description of the dance form...

## Music

Information about the music...

## Notable Figures

- Figure 1 - Description
- Figure 2 - Description
```

**Fields:**
- `id` — unique number
- `type` — `"dance"` (red pins) or `"music"` (blue pins)
- `year` — decade/year of origin (used by timeline filter)
- `relatedLocationId` — optional, links to another location's id
- `coordinates` — use the true city coordinates; pins in the same city are automatically offset to avoid overlap

## Project Structure

```
dance-map/
├── src/
│   ├── components/
│   │   ├── DanceMap.jsx         # Interactive map with pins
│   │   ├── DanceCard.jsx        # Location info card
│   │   ├── DecadeSlider.jsx     # Timeline filter UI
│   │   └── IntroModal.jsx       # Welcome modal
│   ├── data/
│   │   ├── locations/*.md       # One markdown file per location
│   │   ├── loadLocations.js     # Loads and parses all location files
│   │   ├── parseFrontmatter.js  # YAML frontmatter parser
│   │   └── parseLocationBody.js # Markdown body section parser
│   ├── assets/
│   │   └── us-states.json       # GeoJSON for US state boundaries
│   ├── theme.config.js          # Centralized theme configuration
│   ├── App.jsx                  # Main application component
│   └── main.jsx
└── package.json
```

## Technologies Used

- **React 19** — UI framework
- **Vite** — Build tool and development server
- **react19-simple-maps** — React components for SVG map rendering

## Future Enhancements

- Add more dance forms from different cities
- Include video examples of each dance form
- Search and filter functionality
- Mobile-optimized touch interactions

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
