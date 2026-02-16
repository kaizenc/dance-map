import { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./DanceMap.css";
import theme from "../theme.config";

// Component to handle map panning/zooming when a location is selected
function MapController({ locationToZoom }) {
  const map = useMap();

  useEffect(() => {
    if (locationToZoom) {
      const coordinates = locationToZoom.coordinates;
      const isLargeScreen = window.innerWidth >= 768;

      let targetCoords = coordinates;
      if (isLargeScreen) {
        // Offset the center to the right to shift the pin to the left side
        // This accounts for the modal appearing on the right
        const offsetLng = coordinates[1] + 2; // lng offset
        targetCoords = [coordinates[0], offsetLng];
      }

      map.flyTo(targetCoords, 8, {
        duration: 0.8,
        easeLinearity: 0.25,
      });
    }
  }, [locationToZoom, map]);

  return null;
}

// Component to handle responsive map recentering
function ResizeHandler({ selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    const handleResize = () => {
      if (selectedLocation) {
        // Recenter the map based on new screen size
        const isLargeScreen = window.innerWidth >= 768;
        const coordinates = selectedLocation.coordinates;
        const offsetLng = isLargeScreen ? coordinates[1] + 2 : coordinates[1];
        map.flyTo([coordinates[0], offsetLng], map.getZoom(), {
          duration: 0.3,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedLocation, map]);

  return null;
}

// Create custom teardrop marker icon
function createCustomIcon(location, isGreyedOut, isSelected) {
  const color = isGreyedOut
    ? theme.pins.greyed
    : location.type === "dance"
      ? theme.pins.dance
      : theme.pins.music;

  const opacity = isGreyedOut ? theme.pins.greyedOpacity : 1;

  // Calculate dimensions based on configurable size
  const baseWidth = 30;
  const baseHeight = 40;
  const scaleFactor = theme.pins.size / baseWidth;

  const width = theme.pins.size;
  const height = baseHeight * scaleFactor;
  const halfWidth = width / 2;
  const viewBoxWidth = baseWidth;
  const viewBoxHeight = baseHeight;
  const viewBoxX = -baseWidth / 2;
  const viewBoxY = -20;

  const html = `
    <svg width="${width}" height="${height}" viewBox="${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}" xmlns="http://www.w3.org/2000/svg">
      <g opacity="${opacity}">
        <path
          d="M0,-15 C-4,-15 -7,-12 -7,-8 C-7,-6 -6,-4 -4,-2 L0,5 L4,-2 C6,-4 7,-6 7,-8 C7,-12 4,-15 0,-15 Z"
          fill="${color}"
          stroke="#fff"
          stroke-width="1.5"
        />
        <circle cx="0" cy="-8" r="3" fill="#fff" />
      </g>
    </svg>
  `;

  return L.divIcon({
    className: `custom-marker ${isSelected ? "selected" : ""}`,
    html: html,
    iconSize: [width, height],
    iconAnchor: [halfWidth, height],
    popupAnchor: [0, -height],
  });
}

function DanceMap({
  locations,
  onLocationClick,
  selectedDecade,
  zoomToLocation,
  selectedLocation,
}) {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Update tooltip position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredMarker) {
        setTooltipPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredMarker]);

  // Determine which location should trigger a zoom
  const locationToZoomTo = zoomToLocation || selectedLocation;

  // Filter and process locations
  const processedLocations = useMemo(() => {
    return locations.map((location) => {
      const locationDecade = Math.floor(location.year / 10) * 10;
      const isGreyedOut =
        selectedDecade !== null && locationDecade !== selectedDecade;
      const isSelected = selectedLocation?.id === location.id;

      return {
        ...location,
        isGreyedOut,
        isSelected,
      };
    });
  }, [locations, selectedDecade, selectedLocation]);

  const handleMarkerClick = (location) => {
    if (!location.isGreyedOut) {
      onLocationClick(location);
    }
  };

  return (
    <div className="dance-map-container">
      <MapContainer
        center={[38, -96]}
        zoom={5}
        minZoom={4}
        maxZoom={18}
        className="dance-map"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <MapController locationToZoom={locationToZoomTo} />
        <ResizeHandler selectedLocation={selectedLocation} />

        {processedLocations.map((location) => {
          const icon = createCustomIcon(
            location,
            location.isGreyedOut,
            location.isSelected,
          );

          return (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={icon}
              eventHandlers={{
                click: () => handleMarkerClick(location),
                mouseover: () => setHoveredMarker(location),
                mouseout: () => setHoveredMarker(null),
              }}
            >
              <Popup>
                <div className="marker-popup">
                  <strong>{location.danceStyle}</strong>
                  <br />
                  {location.city}, {location.state}
                  <br />
                  <em>{location.year}s</em>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {hoveredMarker && (
        <div
          className="marker-tooltip"
          style={{
            left: tooltipPos.x + 10,
            top: tooltipPos.y + 10,
          }}
        >
          <strong>{hoveredMarker.danceStyle}</strong>
          <br />
          {hoveredMarker.city}, {hoveredMarker.state}
          <br />
          <em>{hoveredMarker.year}s</em>
        </div>
      )}
    </div>
  );
}

export default DanceMap;
