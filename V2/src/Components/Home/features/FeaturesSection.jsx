import React from "react";
import "./FeaturesSection.css";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const Navigate = useNavigate();
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Revolutionizing Delivery Management
          </h2>
          <p className="features-subtitle">
            Our AI-powered platform helps businesses manage deliveries more
            efficiently while reducing environmental impact.
          </p>
        </div>

        <div className="features-grid">
          {/* Vendor Dashboard */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>
            <h3 className="feature-title">Vendor Dashboard</h3>
            <p className="feature-description">
              Comprehensive analytics and management tools to track deliveries,
              monitor performance, and optimize operations.
            </p>
            <button onClick={() => Navigate("/vendor-dashboard")} className="feature-btn">Explore Dashboard</button>
          </div>

          {/* Bulk Delivery Management */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="feature-title">Bulk Delivery Management</h3>
            <p className="feature-description">
              Efficiently manage multiple deliveries with our batch processing
              system. Upload address lists or enter them manually.
            </p>
            <button onClick={() => Navigate("/create-new-delivery")} className="feature-btn">Create Delivery</button>
          </div>

          {/* AI Route Optimization */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="feature-title">AI Route Optimization</h3>
            <p className="feature-description">
              Our AI algorithms calculate the most efficient routes, saving
              time, fuel, and reducing environmental impact.
            </p>
            <button className="feature-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
