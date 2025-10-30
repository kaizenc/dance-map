import { useState, useMemo, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from '@vnedyalk0v/react19-simple-maps';
import './DanceMap.css';
import geoUrl from '../assets/us-states.json';
import theme from '../theme.config';

function DanceMap({ locations, onLocationClick, selectedDecade, zoomToLocation, selectedLocation }) {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ coordinates: [-96, 38], zoom: 1 });
  const [topMarkerId, setTopMarkerId] = useState(null);

  // Handle zoom to location when triggered or when location is selected
  useEffect(() => {
    const locationToZoom = zoomToLocation || selectedLocation;
    if (locationToZoom) {
      // Coordinates are [lat, lng] in data, but simple-maps uses [lng, lat]
      const coordinates = [locationToZoom.coordinates[1], locationToZoom.coordinates[0]];
      
      // Check if we're on a larger screen to offset the map center
      const isLargeScreen = window.innerWidth >= 768;
      
      if (isLargeScreen && selectedLocation) {
        // Offset the center to the right to shift the pin to the left side
        // Since we're moving the center right, the pin appears on the left
        const offsetLng = coordinates[0]+2; // Shift map center to the right
        setPosition({ coordinates: [offsetLng, coordinates[1]], zoom: 6 });
      } else {
        setPosition({ coordinates, zoom: 6 });
      }
    }
  }, [zoomToLocation, selectedLocation]);

  const handleMarkerMouseEnter = (location) => {
    setTopMarkerId(location.id);
  };

  const handleMarkerMouseMove = (event, location) => {
    setTooltipPos({ x: event.clientX, y: event.clientY });
    setHoveredMarker(location);
  };

  const handleMarkerMouseLeave = () => {
    setHoveredMarker(null);
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  // Reorder markers so the top marker is rendered last (on top)
  const orderedLocations = useMemo(() => {
    if (!topMarkerId) return locations;
    
    const topMarkerIndex = locations.findIndex(loc => loc.id === topMarkerId);
    if (topMarkerIndex === -1) return locations;
    
    // Move the hovered marker to the end of the array
    const reordered = [...locations];
    const [topMarker] = reordered.splice(topMarkerIndex, 1);
    reordered.push(topMarker);
    
    return reordered;
  }, [locations, topMarkerId]);

  // Calculate responsive stroke width based on zoom level
  const strokeWidth = theme.map.statesStrokeWidth / position.zoom;

  return (
    <div className="dance-map-container">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000,
        }}
        width={800}
        height={600}
        className="dance-map"
      >
        <ZoomableGroup 
          center={position.coordinates} 
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={20}
          transitionDuration={800}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={theme.map.statesFill}
                  stroke={theme.map.statesStroke}
                  strokeWidth={strokeWidth}
                  style={{
                    default: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
          
          {orderedLocations.map((location) => {
            // Determine if this location's decade matches the selected decade
            const locationDecade = Math.floor(location.year / 10) * 10;
            const isGreyedOut = selectedDecade !== null && locationDecade !== selectedDecade;
            
            // Use theme colors for pins
            const defaultColor = location.type === 'dance' ? theme.pins.dance : theme.pins.music;
            const fillColor = isGreyedOut ? theme.pins.greyed : defaultColor;
            const opacity = isGreyedOut ? theme.pins.greyedOpacity : 1;
            
            // Note: coordinates are [lat, lng] in the data, but simple-maps uses [lng, lat]
            const coordinates = [location.coordinates[1], location.coordinates[0]];
            
            // Calculate the scale to keep marker size constant
            const markerScale = 1 / position.zoom;
            
            const isTopMarker = location.id === topMarkerId;
            
            return (
              <Marker
                key={location.id}
                coordinates={coordinates}
                onClick={() => {
                  if (!isGreyedOut) {
                    // Smooth zoom to the clicked location
                    const isLargeScreen = window.innerWidth >= 768;
                    if (isLargeScreen) {
                      // Offset for modal on right side - shift map center right so pin shows on left
                      const offsetLng = coordinates[0] + 4;
                      setPosition({ coordinates: [offsetLng, coordinates[1]], zoom: 6 });
                    } else {
                      setPosition({ coordinates, zoom: 6 });
                    }
                    onLocationClick(location);
                  }
                }}
                onMouseEnter={() => handleMarkerMouseEnter(location)}
                onMouseMove={(event) => handleMarkerMouseMove(event, location)}
                onMouseLeave={handleMarkerMouseLeave}
                style={{ cursor: isGreyedOut ? 'default' : 'pointer' }}
              >
                <g opacity={opacity}>
                  {/* Large invisible hit area rendered outside the scaled group */}
                  <circle 
                    cx="0" 
                    cy="-1" 
                    r={8 * markerScale} 
                    fill="transparent" 
                    style={{ pointerEvents: 'all' }}
                    onMouseEnter={() => handleMarkerMouseEnter(location)}
                  />
                  <g 
                    className={`custom-marker ${isTopMarker ? 'top-marker' : ''}`}
                    transform={`scale(${markerScale})`}
                  >
                    <path
                      d="M0,-15 C-4,-15 -7,-12 -7,-8 C-7,-6 -6,-4 -4,-2 L0,5 L4,-2 C6,-4 7,-6 7,-8 C7,-12 4,-15 0,-15 Z"
                      fill={fillColor}
                      stroke="#fff"
                      strokeWidth={1}
                      style={{ pointerEvents: 'none' }}
                    />
                    <circle cx="0" cy="-8" r="3" fill="#fff" style={{ pointerEvents: 'none' }} />
                  </g>
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
      
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
