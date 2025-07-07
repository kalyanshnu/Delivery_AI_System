import React, { useState } from "react";
import "./RouteEfficiencyComparison.css";

const RouteEfficiencyComparison = () => {
  const [activeTab, setActiveTab] = useState("AI Optimized");

  const data = [
    { label: "Route 1", optimized: 85, vendor: 65 },
    { label: "Route 2", optimized: 92, vendor: 70 },
    { label: "Route 3", optimized: 78, vendor: 55 },
    { label: "Route 4", optimized: 88, vendor: 75 },
    { label: "Route 5", optimized: 95, vendor: 80 },
  ];

  return (
    <div className="route-efficiency-comparison">
      <div className="chart-header">
        <h3>Route Efficiency Comparison</h3>
        <div className="comparison-tabs">
          <button
            className={`comparison-tab ${
              activeTab === "AI Optimized" ? "active" : ""
            }`}
            onClick={() => setActiveTab("AI Optimized")}
          >
            AI Optimized
          </button>
          <button
            className={`comparison-tab ${
              activeTab === "Vendor Specified" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Vendor Specified")}
          >
            Vendor Specified
          </button>
        </div>
      </div>

      <div className="chart-container">
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar-group">
              <div className="bar-stack">
                <div
                  className="bar optimized"
                  style={{ height: `${item.optimized}%` }}
                ></div>
                <div
                  className="bar vendor"
                  style={{ height: `${item.vendor}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteEfficiencyComparison;
