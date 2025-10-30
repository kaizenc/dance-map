# Dance Map - History of Dance and Music Across America

An interactive map showcasing the history and evolution of dance forms throughout the United States.

## Features

- **Interactive Map**: Explore dance locations across the US with clickable pins
- **Detailed Information Cards**: Learn about each dance form, its music origins, and notable figures
- **Easy Data Management**: Simple JavaScript data structure to add new dance locations
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

### Adding Dance Forms

To add a new dance form, edit `src/data/danceLocations.js` (red pins by default):

```javascript
{
  id: 3, // Increment the ID
  city: "City Name",
  state: "State Name",
  coordinates: [latitude, longitude], // Get from Google Maps
  danceStyle: "Dance Form Name",
  type: "dance",
  pinColor: "red", // Default for dance, or specify custom color
  description: "Description of the dance form...",
  music: "Information about the music...",
  notableFigures: [
    "Figure 1 - Description",
    "Figure 2 - Description",
    // Add more figures
  ]
}
```

### Adding Music Origins

To add a music origin, edit `src/data/musicLocations.js` (blue pins by default):

```javascript
{
  id: 4, // Increment the ID
  city: "City Name",
  state: "State Name",
  coordinates: [latitude, longitude],
  danceStyle: "Music Genre Name",
  type: "music",
  pinColor: "blue", // Default for music, or specify custom color
  description: "Description of the music genre...",
  music: "Information about the musical characteristics...",
  notableFigures: [
    "Figure 1 - Description",
    // Add more figures
  ]
}
```

## Project Structure

```
dance-map/
├── src/
│   ├── components/
│   │   ├── DanceMap.jsx       # Interactive map component
│   │   ├── DanceMap.css
│   │   ├── DanceCard.jsx      # Information card component
│   │   ├── DanceCard.css
│   │   ├── IntroModal.jsx     # Welcome modal
│   │   └── IntroModal.css
│   ├── data/
│   │   ├── danceLocations.js  # Dance form locations (red pins)
│   │   └── musicLocations.js  # Music origin locations (blue pins)
│   ├── App.jsx                # Main application component
│   ├── App.css
│   └── main.jsx
└── package.json
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and development server
- **Leaflet** - Interactive map library
- **React-Leaflet** - React components for Leaflet
- **OpenStreetMap** - Map tiles

## Future Enhancements

- Add more dance forms from different cities
- Include video examples of each dance form
- Add timeline feature to show dance evolution
- Search and filter functionality
- Mobile-optimized touch interactions

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
