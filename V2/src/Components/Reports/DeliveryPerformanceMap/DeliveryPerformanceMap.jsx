import React from "react";
import "./DeliveryPerformanceMap.css";

const DeliveryPerformanceMap = () => {
    return (
        <div className="delivery-performance-map">
        <div className="map-header">
            <h3>Delivery Performance by Region</h3>
            <button className="expand-btn">Expand View</button>
        </div>

        <div className="map-container">
            <div className="map-placeholder">
            <div className="map-regions">
                {/* Simulated map regions with different colors */}
                <div className="region region-1" title="North Region - 95% Success">
                <span className="region-label">North</span>
                </div>
                <div className="region region-2" title="South Region - 87% Success">
                <span className="region-label">South</span>
                </div>
                <div className="region region-3" title="East Region - 92% Success">
                <span className="region-label">East</span>
                </div>
                <div className="region region-4" title="West Region - 89% Success">
                <span className="region-label">West</span>
                </div>
                <div
                className="region region-5"
                title="Central Region - 94% Success"
                >
                <span className="region-label">Central</span>
                </div>
            </div>

            <div className="map-legend">
                <div className="legend-item">
                <div className="legend-color high"></div>
                <span>High Performance (90%+)</span>
                </div>
                <div className="legend-item">
                <div className="legend-color medium"></div>
                <span>Medium Performance (80-89%)</span>
                </div>
                <div className="legend-item">
                <div className="legend-color low"></div>
                <span>Low Performance (&lt;80%)</span>
                </div>
            </div>
            </div>

            <div className="performance-chart">
            <h4>Regional Performance</h4>
            <div className="chart-bars">
                {[
                { region: "North", value: 95, color: "#10b981" },
                { region: "Central", value: 94, color: "#10b981" },
                { region: "East", value: 92, color: "#10b981" },
                { region: "West", value: 89, color: "#f59e0b" },
                { region: "South", value: 87, color: "#f59e0b" },
                ].map((item, index) => (
                <div key={index} className="chart-bar">
                    <div className="bar-label">{item.region}</div>
                    <div className="bar-container">
                    <div
                        className="bar-fill"
                        style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                        }}
                    ></div>
                    <span className="bar-value">{item.value}%</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default DeliveryPerformanceMap;
