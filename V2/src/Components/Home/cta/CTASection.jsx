import React from "react";
import "./CTASection.css";
import deliveryTruckImage from "../../../assets/CTA.png";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to optimize your delivery operations?
            </h2>
            <p className="cta-subtitle">
              Join thousands of businesses that have improved their delivery
              efficiency and reduced costs with our AI-powered system.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary">Get Started</button>
              <button className="cta-btn cta-btn-secondary">
                Contact Support
              </button>
            </div>
          </div>

          <div className="cta-illustration">
            <div className="delivery-scene">
              <div className="delivery-truck">
                <img src={deliveryTruckImage} alt="delivery" />
              </div>

              {/* Location pins */}
              <div className="location-pin pin-1">
                <div className="pin-icon">📍</div>
                <div className="pin-pulse"></div>
              </div>

              <div className="location-pin pin-2">
                <div className="pin-icon">📍</div>
                <div className="pin-pulse"></div>
              </div>

              <div className="location-pin pin-3">
                <div className="pin-icon">📍</div>
                <div className="pin-pulse"></div>
              </div>

              <div className="location-pin pin-4">
                <div className="pin-icon">📍</div>
                <div className="pin-pulse"></div>
              </div>

              {/* Route lines */}
              <svg className="route-lines" viewBox="0 0 400 300">
                <path
                  d="M 180 150 Q 220 120 280 140 Q 320 160 350 120"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="route-line"
                />
                <path
                  d="M 180 150 Q 200 180 240 200 Q 280 220 320 200"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="route-line"
                />
              </svg>

              {/* Central hub/eye icon */}
              <div className="central-hub">
                <div className="hub-icon">👁</div>
                <div className="hub-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
