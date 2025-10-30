import './IntroModal.css';

function IntroModal({ onClose }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="intro-modal">
        <div className="modal-content">
          <h2>Welcome to Dance History Across America</h2>
          
          <div className="modal-body">
            <p>
              This interactive map explores the rich history and evolution of dance 
              forms throughout the United States. Click on any pin to learn about 
              different dance forms, their musical origins, and the pioneering figures 
              who shaped them.
            </p>
            
            <div className="disclaimer">
              <strong>⚠️ Note:</strong> This website and its information are still being 
              actively updated. We're continuously adding new dance forms, locations, 
              and historical details. If you notice any inaccuracies or have suggestions, 
              we welcome your contributions!
            </div>

            <p className="instruction">
              Click anywhere on the map to explore, or select a pin to view detailed 
              information about that dance form.
            </p>
          </div>

          <button className="modal-button" onClick={onClose}>
            Start Exploring
          </button>
        </div>
      </div>
    </>
  );
}

export default IntroModal;
