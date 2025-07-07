import React from "react";
import "./TopPerformingRoutes.css";

const TopPerformingRoutes = () => {
    const routes = [
        {
        name: "North Side Route",
        deliveries: "45 deliveries/day",
        avgTime: "35 min",
        successRate: "98.5%",
        status: "on-time",
        },
        {
        name: "Downtown Express",
        deliveries: "32 deliveries/day",
        avgTime: "41 min",
        successRate: "97.2%",
        status: "on-time",
        },
        {
        name: "East Side Loop",
        deliveries: "18 deliveries/day",
        avgTime: "42 min",
        successRate: "96.8%",
        status: "on-time",
        },
        {
        name: "South Mall Route",
        deliveries: "28 deliveries/day",
        avgTime: "38 min",
        successRate: "95.8%",
        status: "on-time",
        },
    ];

    return (
        <div className="top-performing-routes">
        <div className="routes-header">
            <h3>Top Performing Routes</h3>
            <button className="view-all-btn">View All</button>
        </div>

        <div className="routes-list">
            {routes.map((route, index) => (
            <div key={index} className="route-item">
                <div className="route-info">
                <h4>{route.name}</h4>
                <p>{route.deliveries}</p>
                </div>
                <div className="route-metrics">
                <div className="metric">
                    <span className="metric-label">Avg Time:</span>
                    <span className="metric-value">{route.avgTime}</span>
                </div>
                <div className="metric">
                    <span className="metric-label">Success:</span>
                    <span className="metric-value success">
                    {route.successRate}
                    </span>
                </div>
                </div>
                <div className={`route-status ${route.status}`}>
                {route.status === "on-time" ? "✓" : "⚠"}
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default TopPerformingRoutes;
