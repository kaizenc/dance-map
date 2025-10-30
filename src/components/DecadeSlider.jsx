import './DecadeSlider.css';

function DecadeSlider({ onDecadeChange, selectedDecade, isEnabled, onToggle }) {
  const decades = [1960, 1970, 1980, 1990, 2000, 2010];

  return (
    <div className="decade-slider">
      <div className="slider-header">
        <h3>Timeline Filter</h3>
        <button 
          className={`toggle-button ${isEnabled ? 'enabled' : 'disabled'}`}
          onClick={onToggle}
          aria-label={isEnabled ? 'Disable timeline filter' : 'Enable timeline filter'}
        >
          {isEnabled ? '🔒 Filter On' : '🔓 Show All'}
        </button>
      </div>
      
      <div className={`slider-container ${!isEnabled ? 'disabled' : ''}`}>
        <input
          type="range"
          min="0"
          max={decades.length - 1}
          value={decades.indexOf(selectedDecade)}
          onChange={(e) => onDecadeChange(decades[parseInt(e.target.value)])}
          className="slider"
          disabled={!isEnabled}
        />
        <div className="decade-labels">
          {decades.map((decade) => (
            <span
              key={decade}
              className={`decade-label ${decade === selectedDecade ? 'active' : ''} ${!isEnabled ? 'disabled' : ''}`}
              onClick={() => isEnabled && onDecadeChange(decade)}
            >
              {decade}s
            </span>
          ))}
        </div>
      </div>
      
      {isEnabled && (
        <div className="current-decade">
          <strong>Current: {selectedDecade}s</strong>
        </div>
      )}
      
      {!isEnabled && (
        <div className="current-decade">
          <em>All decades visible</em>
        </div>
      )}
    </div>
  );
}

export default DecadeSlider;
