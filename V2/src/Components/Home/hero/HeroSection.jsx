import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const Navigate = useNavigate();
return (
    <section className="hero-section">
    <div className="hero-background">
        <div className="hero-overlay">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title"> Smart Delivery Management Powered by AI </h1>
                    <p className="hero-subtitle">
                    Streamline your logistics operations with our intelligent admin
                    panel. Optimize routes, manage bulk deliveries, and reduce
                        carbon footprint with our eco-friendly electric vehicle fleet.
                </p>
                <div className="hero-buttons">
                <button onClick={() => Navigate("/vendor-dashboard")} className="hero-btn hero-btn-primary">
                    Vendor Dashboard
                </button>
                <button onClick={() => Navigate("/create-new-delivery")} className="hero-btn hero-btn-secondary">
                    Create New Delivery
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
);
};

export default HeroSection;
