import React from "react";
import "./VendorPerformanceComparison.css";

const VendorPerformanceComparison = () => {
    const performanceData = [
        {
        metric: "On-Time Delivery",
        yourPerformance: 94.2,
        industryAverage: 87.5,
        },
        {
        metric: "Customer Satisfaction",
        yourPerformance: 4.8,
        industryAverage: 4.1,
        },
        {
        metric: "Cost Efficiency",
        yourPerformance: 88.7,
        industryAverage: 72.3,
        },
        {
        metric: "Route Optimization",
        yourPerformance: 92.4,
        industryAverage: 68.8,
        },
    ];

    return (
        <div className="vendor-performance-comparison">
        <div className="comparison-header">
            <h3>Vendor Performance Comparison</h3>
            <div className="legend">
            <div className="legend-item">
                <div className="legend-dot your-performance"></div>
                <span>Your Performance</span>
            </div>
            <div className="legend-item">
                <div className="legend-dot industry-average"></div>
                <span>Industry Average</span>
            </div>
            <button className="view-dashboard-btn">View Vendor Dashboard</button>
            </div>
        </div>

        <div className="metrics-grid">
            {performanceData.map((item, index) => (
            <div key={index} className="metric-card">
                <div className="metric-title">{item.metric}</div>
                <div className="metric-content">
                <div className="performance-bar">
                    <div className="bar-label">
                    Industry avg: {item.industryAverage}%
                    </div>
                    <div className="bar-track">
                    <div
                        className="bar-fill industry-average"
                        style={{ width: `${(item.industryAverage / 100) * 100}%` }}
                    ></div>
                    </div>
                </div>
                <div className="performance-bar">
                    <div className="bar-label">
                    Industry avg: {item.yourPerformance}%
                    </div>
                    <div className="bar-track">
                    <div
                        className="bar-fill your-performance"
                        style={{ width: `${(item.yourPerformance / 100) * 100}%` }}
                    ></div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default VendorPerformanceComparison;
