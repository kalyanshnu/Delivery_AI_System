import React, { useState } from "react";
import "./RouteEfficiency.css";

const RouteEfficiency = () => {
  const [activeTab, setActiveTab] = useState("delivered");

  return (
    <div className="route-efficiency">
      <h2>Route Efficiency</h2>

      <div className="efficiency-tabs">
        <button
          className={`efficiency-tab ${
            activeTab === "delivered" ? "active" : ""
          }`}
          onClick={() => setActiveTab("delivered")}
        >
          Delivered Today
        </button>
        <button
          className={`efficiency-tab ${
            activeTab === "specified" ? "active" : ""
          }`}
          onClick={() => setActiveTab("specified")}
        >
          Vendor Specified
        </button>
      </div>

      <div className="efficiency-content">
        <div className="efficiency-chart">
          <div className="chart-container">
            {/* Bar Chart */}
            <div className="bar-chart">
              <div className="bars">
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "50%" }}></div>
                <div className="bar" style={{ height: "30%" }}></div>
              </div>
              <div className="chart-labels">
                <span>Fuel Saved</span>
                <span>Time Saved</span>
                <span>CO₂ Reduction</span>
              </div>
            </div>
          </div>

          <div className="efficiency-stats">
            <div className="stat-item">
              <span className="stat-label">Fuel Saved</span>
              <span className="stat-value">18%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Time Saved</span>
              <span className="stat-value">22%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CO₂ Reduction</span>
              <span className="stat-value">15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteEfficiency;
