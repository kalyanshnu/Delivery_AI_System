import React from "react";
import "./ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">How It Works</h2>
          <p className="process-subtitle">
            Our streamlined process makes managing deliveries simple and
            efficient.
          </p>
        </div>

        <div className="process-steps">
          {/* Step 1: Upload Addresses */}
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Upload Addresses</h3>
              <p className="step-description">
                Bulk upload delivery addresses or enter them manually into our
                system.
              </p>
            </div>
          </div>

          {/* Step 2: AI Route Planning */}
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">AI Route Planning</h3>
              <p className="step-description">
                Our AI optimizes delivery routes based on traffic, distance, and
                delivery windows.
              </p>
            </div>
          </div>

          {/* Step 3: Driver Assignment */}
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Driver Assignment</h3>
              <p className="step-description">
                Drivers receive optimized routes and delivery instructions via
                mobile app.
              </p>
            </div>
          </div>

          {/* Step 4: Real-time Tracking */}
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">Real-time Tracking</h3>
              <p className="step-description">
                Monitor deliveries in real-time with precise location and
                delivery status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
