/**
 * DANCE MAP - THEME CONFIGURATION
 * 
 * This is your central styling configuration file.
 * Modify these values to customize the look and feel of the entire app!
 */

export const theme = {
  // ========================================
  // FONTS
  // ========================================
  fonts: {
    // Main font family for the entire app
    primary: "'Fira Code', 'Courier New', monospace",
    
    // Alternative options to try:
    // default: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    // modern: "'Inter', 'Helvetica Neue', sans-serif",
    // playful: "'Nunito', 'Quicksand', sans-serif",
    // classic: "'Georgia', 'Times New Roman', serif",
    // monospace: "'Fira Code', 'Courier New', monospace",
    
    // Font sizes
    size: {
      small: '0.875rem',      // 14px
      medium: '1rem',         // 16px
      large: '1.125rem',      // 18px
      xlarge: '1.5rem',       // 24px
      xxlarge: '2rem',        // 32px
    }
  },

  // ========================================
  // MAP COLORS
  // ========================================
  map: {
    // Background color behind the map
    backgroundColor: '#1a1a1a',
    
    // Alternative options:
    // Default: '#f9f9f9'
    // Dark: '#1a1a1a'
    // Blue: '#e8f4f8'
    // Cream: '#f5f3ed'
    // White: '#ffffff'
    
    // US States fill color
    statesFill: '#1a1a1a',
    
    // Alternative options:
    // Light blue: '#d4e6f1'
    // Beige: '#f0ead6'
    // Light gray: '#f5f5f5'
    // Pale green: '#e8f5e9'
    
    // State borders/outline color
    statesStroke: '#eeeeee',
    
    // State border width
    statesStrokeWidth: 1,
    
    // Alternative stroke colors:
    // Default: '#D6D6DA'
    // Dark: '#999999'
    // Subtle: '#eeeeee'
    // Contrast: '#333333'
  },

  // ========================================
  // PIN COLORS
  // ========================================
  pins: {
    // Default color for DANCE pins
    dance: '#e74c3c',  // Red
    
    // Alternative dance pin colors:
    // Bright red: '#ff4444'
    // Purple: '#9b59b6'
    // Orange: '#e67e22'
    // Magenta: '#e91e63'
    
    // Default color for MUSIC pins
    music: '#3498db',  // Blue
    
    // Alternative music pin colors:
    // Green: '#2ecc71'
    // Teal: '#1abc9c'
    // Deep blue: '#2980b9'
    // Cyan: '#00bcd4'
    
    // Pin when greyed out (filtered by decade)
    greyed: '#cccccc',
    
    // Pin opacity when greyed out
    greyedOpacity: 0.5,
    
    // Pin shadow colors
    shadowNormal: 'rgba(0, 0, 0, 0.3)',
    shadowHover: 'rgba(0, 0, 0, 0.4)',
  },

  // ========================================
  // HEADER
  // ========================================
  header: {
    // Background gradient (top and bottom colors)
    backgroundStart: 'rgba(44, 62, 80, 0)',  // Dark blue-gray
    backgroundEnd: 'rgba(44, 62, 80, 0)',
    
    // Alternative header backgrounds:
    // Default: 'rgba(44, 62, 80, 0.95)' and 'rgba(44, 62, 80, 0.8)'
    // Black: 'rgba(0, 0, 0, 0.9)' and 'rgba(0, 0, 0, 0.7)'
    // Navy: 'rgba(23, 32, 42, 0.95)' and 'rgba(23, 32, 42, 0.8)'
    // Purple: 'rgba(76, 41, 81, 0.95)' and 'rgba(76, 41, 81, 0.8)'
    // Teal: 'rgba(22, 160, 133, 0.95)' and 'rgba(22, 160, 133, 0.8)'
    
    // Text color
    textColor: '#ffffff',
    
    // Title font size
    titleSize: '2rem',
    
    // Subtitle font size
    subtitleSize: '1rem',
    
    // Subtitle opacity
    subtitleOpacity: 0.9,
    
    // Header padding
    padding: '1.5rem 2rem',
    
    // Shadow under header
    shadow: '0 2px 10px rgba(0, 0, 0, 0)',
  },

  // ========================================
  // TIMELINE BUTTON
  // ========================================
  timelineButton: {
    // Background color
    background: 'rgba(52, 152, 219, 0.9)',  // Blue
    
    // Alternative button colors:
    // Green: 'rgba(46, 204, 113, 0.9)'
    // Purple: 'rgba(155, 89, 182, 0.9)'
    // Orange: 'rgba(230, 126, 34, 0.9)'
    // Red: 'rgba(231, 76, 60, 0.9)'
    
    // Text color
    textColor: '#ffffff',
    
    // Border
    border: '2px solid rgba(255, 255, 255, 0.3)',
    
    // Hover state background
    hoverBackground: 'rgba(41, 128, 185, 1)',
    
    // Padding
    padding: '12px 24px',
    
    // Border radius
    borderRadius: '25px',
    
    // Font size
    fontSize: '1rem',
  },

  // ========================================
  // DECADE SLIDER
  // ========================================
  slider: {
    // Track color
    trackColor: '#ddd',
    
    // Active track color
    activeTrackColor: '#3498db',
    
    // Thumb (handle) color
    thumbColor: '#3498db',
    
    // Thumb size
    thumbSize: '24px',
    
    // Selected decade button background
    decadeButtonActive: '#3498db',
    
    // Selected decade button text
    decadeButtonActiveText: 'white',
    
    // Unselected decade button background
    decadeButtonInactive: 'transparent',
    
    // Unselected decade button text
    decadeButtonInactiveText: '#666',
  },

  // ========================================
  // DANCE CARD (Info Panel)
  // ========================================
  card: {
    // Background color
    background: 'white',
    
    // Shadow
    shadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    
    // Border radius
    borderRadius: '12px',
    
    // Header background for dance cards
    danceHeaderBackground: '#e74c3c',
    
    // Header background for music cards
    musicHeaderBackground: '#3498db',
    
    // Header text color
    headerTextColor: 'white',
    
    // Body text color
    bodyTextColor: '#2c3e50',
    
    // Accent color (for icons, borders, etc)
    accentColor: '#3498db',
  },

  // ========================================
  // MODAL (Intro Modal)
  // ========================================
  modal: {
    // Overlay background
    overlayBackground: 'rgba(0, 0, 0, 0.7)',
    
    // Modal background
    background: 'white',
    
    // Border radius
    borderRadius: '12px',
    
    // Shadow
    shadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    
    // Text color
    textColor: '#2c3e50',
    
    // Button background
    buttonBackground: '#3498db',
    
    // Button text color
    buttonTextColor: 'white',
  },

  // ========================================
  // TOOLTIPS
  // ========================================
  tooltip: {
    // Background color
    background: 'white',
    
    // Text color
    textColor: '#2c3e50',
    
    // Shadow
    shadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    
    // Border radius
    borderRadius: '4px',
    
    // Padding
    padding: '8px 12px',
    
    // Font size
    fontSize: '0.9rem',
  },

  // ========================================
  // ANIMATIONS & TRANSITIONS
  // ========================================
  animations: {
    // Transition speed for most elements
    speed: '0.2s',
    
    // Easing function
    easing: 'ease',
    
    // Slide animation duration
    slideDuration: '0.3s',
  }
};

// Export individual sections for convenience
export const { fonts, map, pins, header, timelineButton, slider, card, modal, tooltip, animations } = theme;

export default theme;
