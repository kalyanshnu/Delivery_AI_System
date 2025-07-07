import Eco from "../../../assets/EcoCars.png";
import "./EcoSection.css";

const EcoSection = () => {
  return (
    <section className="eco-section">
      <div className="eco-container">
        <div className="eco-content">
          <div className="eco-text">
            <h2 className="eco-title">Eco-Friendly Delivery Fleet</h2>
            <p className="eco-subtitle">
              Our delivery system exclusively uses electric vehicles, reducing
              carbon emissions while maintaining efficient delivery times.
            </p>

            <div className="eco-features">
              <div className="eco-feature">
                <div className="eco-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                  </svg>
                </div>
                <span className="eco-feature-text">
                  Zero-emission electric vehicle fleet
                </span>
              </div>

              <div className="eco-feature">
                <div className="eco-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="eco-feature-text">
                  Strategically placed charging stations
                </span>
              </div>

              <div className="eco-feature">
                <div className="eco-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="eco-feature-text">
                  Advanced battery management system
                </span>
              </div>

              <div className="eco-feature">
                <div className="eco-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="eco-feature-text">
                  Range-optimized route planning
                </span>
              </div>
            </div>

            <button className="eco-btn">Learn About Our Fleet</button>
          </div>

          <div className="eco-image">
            <img
              src={Eco}
              alt="Eco-friendly delivery fleet"
              className="fleet-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
