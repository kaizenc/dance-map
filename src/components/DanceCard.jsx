import './DanceCard.css';

function DanceCard({ location, onClose, onRelatedClick, relatedLocation }) {
  if (!location) return null;

  return (
    <div className="dance-card">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>{location.danceStyle}</h2>
      <p className="location">{location.city}, {location.state}</p>
      
      <div className="card-section">
        <h3>About</h3>
        <p>{location.description}</p>
      </div>

      <div className="card-section">
        <h3>Music</h3>
        <p>{location.music}</p>
      </div>

      <div className="card-section">
        <h3>Notable Figures</h3>
        <ul>
          {location.notableFigures.map((figure, index) => (
            <li key={index}>{figure}</li>
          ))}
        </ul>
      </div>

      {relatedLocation && (
        <div className="card-section related-section">
          <h3>Related</h3>
          <button 
            className="related-link"
            onClick={() => onRelatedClick(relatedLocation)}
          >
            📍 Explore {relatedLocation.danceStyle} in {relatedLocation.city}
          </button>
        </div>
      )}
    </div>
  );
}

export default DanceCard;
