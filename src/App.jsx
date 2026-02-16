import { useState, useEffect } from "react";
import DanceMap from "./components/DanceMap";
import DanceCard from "./components/DanceCard";
import IntroModal from "./components/IntroModal";
import DecadeSlider from "./components/DecadeSlider";
import { allLocations } from "./data/loadLocations";
import theme from "./theme.config";
import "./App.css";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showIntroModal, setShowIntroModal] = useState(true);
  const [selectedDecade, setSelectedDecade] = useState(1980);
  const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [zoomToLocation, setZoomToLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseCard = () => {
    setSelectedLocation(null);
  };

  const handleRelatedLocationClick = (relatedLocation) => {
    // Zoom to the related location on the map
    setZoomToLocation(relatedLocation);
    // Open the related location's card
    setSelectedLocation(relatedLocation);
  };

  // Find the related location for the currently selected location
  const relatedLocation = selectedLocation?.relatedLocationId
    ? allLocations.find((loc) => loc.id === selectedLocation.relatedLocationId)
    : null;

  const handleCloseIntro = () => {
    setShowIntroModal(false);
  };

  const handleDecadeChange = (decade) => {
    setSelectedDecade(decade);
    setSelectedLocation(null); // Close any open card when decade changes
  };

  const handleToggleFilter = () => {
    setIsFilterEnabled(!isFilterEnabled);
    setSelectedLocation(null); // Close any open card when toggling
  };

  const handleToggleSlider = () => {
    setShowSlider(!showSlider);
  };

  // Apply theme config as CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Fonts
    root.style.setProperty("--font-primary", theme.fonts.primary);

    // Map
    root.style.setProperty("--map-bg", theme.map.backgroundColor);
    root.style.setProperty("--map-states-fill", theme.map.statesFill);
    root.style.setProperty("--map-states-stroke", theme.map.statesStroke);

    // Pins
    root.style.setProperty("--pin-dance", theme.pins.dance);
    root.style.setProperty("--pin-music", theme.pins.music);
    root.style.setProperty("--pin-greyed", theme.pins.greyed);

    // Header
    root.style.setProperty("--header-bg-start", theme.header.backgroundStart);
    root.style.setProperty("--header-bg-end", theme.header.backgroundEnd);
    root.style.setProperty("--header-text", theme.header.textColor);
    root.style.setProperty("--header-title-size", theme.header.titleSize);
    root.style.setProperty("--header-subtitle-size", theme.header.subtitleSize);

    // Timeline Button
    root.style.setProperty("--btn-bg", theme.timelineButton.background);
    root.style.setProperty("--btn-text", theme.timelineButton.textColor);
    root.style.setProperty("--btn-border", theme.timelineButton.border);
    root.style.setProperty(
      "--btn-hover-bg",
      theme.timelineButton.hoverBackground,
    );

    // Slider
    root.style.setProperty("--slider-track", theme.slider.trackColor);
    root.style.setProperty("--slider-active", theme.slider.activeTrackColor);
    root.style.setProperty("--slider-thumb", theme.slider.thumbColor);

    // Card
    root.style.setProperty("--card-bg", theme.card.background);
    root.style.setProperty(
      "--card-dance-header",
      theme.card.danceHeaderBackground,
    );
    root.style.setProperty(
      "--card-music-header",
      theme.card.musicHeaderBackground,
    );
    root.style.setProperty("--card-text", theme.card.bodyTextColor);

    // Modal
    root.style.setProperty("--modal-overlay", theme.modal.overlayBackground);
    root.style.setProperty("--modal-bg", theme.modal.background);
    root.style.setProperty("--modal-text", theme.modal.textColor);
    root.style.setProperty("--modal-btn-bg", theme.modal.buttonBackground);

    // Tooltip
    root.style.setProperty("--tooltip-bg", theme.tooltip.background);
    root.style.setProperty("--tooltip-text", theme.tooltip.textColor);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Dance Across America</h1>
          </div>
          <button
            className="timeline-button"
            onClick={handleToggleSlider}
            aria-label={
              showSlider ? "Hide timeline filter" : "Show timeline filter"
            }
          >
            {showSlider ? "✕ Close Timeline" : "📅 Timeline Filter"}
          </button>
        </div>
      </header>

      {showSlider && (
        <DecadeSlider
          selectedDecade={selectedDecade}
          onDecadeChange={handleDecadeChange}
          isEnabled={isFilterEnabled}
          onToggle={handleToggleFilter}
        />
      )}

      <DanceMap
        locations={allLocations}
        onLocationClick={handleLocationClick}
        selectedDecade={isFilterEnabled ? selectedDecade : null}
        zoomToLocation={zoomToLocation}
        selectedLocation={selectedLocation}
      />

      {selectedLocation && (
        <>
          <div className="overlay" onClick={handleCloseCard} />
          <DanceCard
            location={selectedLocation}
            onClose={handleCloseCard}
            onRelatedClick={handleRelatedLocationClick}
            relatedLocation={relatedLocation}
          />
        </>
      )}

      {showIntroModal && <IntroModal onClose={handleCloseIntro} />}
    </div>
  );
}

export default App;
