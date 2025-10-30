# 🎨 Theme Configuration Guide

## Quick Start

All styling for the Dance Map app is now controlled through a single file:

**`src/theme.config.js`**

Simply open this file and modify the values to instantly change the app's appearance!

## How It Works

The theme configuration uses a combination of:
1. **JavaScript configuration** (`theme.config.js`) - Your single source of truth
2. **CSS Variables** - Automatically injected into the page
3. **React Components** - Read theme values directly

When you change a value in `theme.config.js`, the changes will be applied immediately when you save the file (thanks to Vite's hot module replacement).

## What You Can Customize

### 🔤 Fonts
```javascript
fonts: {
  primary: "your-font-family-here"
}
```

### 🗺️ Map Colors
- `map.backgroundColor` - Background behind the map
- `map.statesFill` - US states fill color
- `map.statesStroke` - State border color
- `map.statesStrokeWidth` - Border thickness

### 📍 Pin Colors
- `pins.dance` - Default color for dance pins (currently red)
- `pins.music` - Default color for music pins (currently blue)
- `pins.greyed` - Color when filtered out
- `pins.greyedOpacity` - Opacity when filtered

### 🎯 Header
- `header.backgroundStart` - Top gradient color
- `header.backgroundEnd` - Bottom gradient color
- `header.textColor` - Text color
- `header.titleSize` - Main title font size
- `header.subtitleSize` - Subtitle font size

### ⏱️ Timeline Button
- `timelineButton.background` - Button background
- `timelineButton.textColor` - Button text
- `timelineButton.border` - Button border
- `timelineButton.hoverBackground` - Hover state

### 📊 Decade Slider
- `slider.trackColor` - Slider track
- `slider.activeTrackColor` - Active portion
- `slider.thumbColor` - Draggable thumb

### 🃏 Dance Cards
- `card.background` - Card background
- `card.danceHeaderBackground` - Dance card header
- `card.musicHeaderBackground` - Music card header
- `card.bodyTextColor` - Text color

### 💬 Modal & Tooltips
- `modal.overlayBackground` - Dark overlay
- `modal.background` - Modal background
- `modal.buttonBackground` - Button color
- `tooltip.background` - Tooltip background
- `tooltip.textColor` - Tooltip text

## Example: Changing the Theme

Want a dark theme? Try these values in `theme.config.js`:

```javascript
map: {
  backgroundColor: '#1a1a1a',
  statesFill: '#2a2a2a',
  statesStroke: '#3a3a3a',
},

header: {
  backgroundStart: 'rgba(0, 0, 0, 0.95)',
  backgroundEnd: 'rgba(0, 0, 0, 0.8)',
  textColor: '#ffffff',
},

pins: {
  dance: '#ff6b6b',
  music: '#4ecdc4',
},
```

## Tips

1. **Save frequently** - Changes apply immediately on save
2. **Use comments** - The file includes many alternative color suggestions
3. **Hex or RGB** - Both color formats work fine
4. **Fallback values** - If something breaks, the CSS has fallback colors

## Troubleshooting

If changes aren't appearing:
1. Make sure you saved `theme.config.js`
2. Check the browser console for any errors
3. Try refreshing the page (Ctrl/Cmd + R)
4. Check that your syntax is valid JavaScript

Enjoy customizing your Dance Map! 🎉
