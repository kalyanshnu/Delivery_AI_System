import React, { useState } from "react";
import "./DeliveryAnalytics.css";
import DAI from "./deliveryanalyticsgraph.png"; // Placeholder for the chart image

const DeliveryAnalytics = () => {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div className="delivery-analytics">
      <div className="analytics-header">
        <h2>Delivery Analytics</h2>
        <div className="time-filters">
          <button
            className={`filter-btn ${activeTab === "Today" ? "active" : ""}`}
            onClick={() => setActiveTab("Today")}
          >
            Today
          </button>
          <button
            className={`filter-btn ${
              activeTab === "This Week" ? "active" : ""
            }`}
            onClick={() => setActiveTab("This Week")}
          >
            This Week
          </button>
          <button
            className={`filter-btn ${
              activeTab === "This Month" ? "active" : ""
            }`}
            onClick={() => setActiveTab("This Month")}
          >
            This Month
          </button>
        </div>
      </div>

      <div className="metrics-cards">
        <div className="metric-card">
          <div className="metric-number">87</div>
          <div className="metric-label">Deliveries</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">94%</div>
          <div className="metric-label">Success Rate</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">20</div>
          <div className="metric-label">On-time</div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-area">
          <img src={DAI} alt="Graph"/>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAnalytics;
