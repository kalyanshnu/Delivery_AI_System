import React from "react";
import "./DeliveryMetrics.css";

const DeliveryMetrics = () => {
    const metrics = [
        {
        title: "Total Deliveries",
        value: "1,248",
        change: "+12.3%",
        changeType: "positive",
        period: "vs last period",
        },
        {
        title: "On-time Rate",
        value: "94.2%",
        change: "+3.1%",
        changeType: "positive",
        period: "vs last period",
        },
        {
        title: "Avg. Delivery Time",
        value: "42 min",
        change: "+5.2%",
        changeType: "negative",
        period: "vs last period",
        },
        {
        title: "Fuel Efficiency",
        value: "2.8%",
        change: "+2.1%",
        changeType: "positive",
        period: "vs last period",
        },
    ];

    return (
        <div className="delivery-metrics">
        <div className="metrics-grid">
            {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
                <div className="metric-header">
                <h3>{metric.title}</h3>
                <div className="metric-icon">
                    {index === 0 && "📦"}
                    {index === 1 && "✅"}
                    {index === 2 && "⏱️"}
                    {index === 3 && "⛽"}
                </div>
                </div>
                <div className="metric-value">{metric.value}</div>
                <div className={`metric-change ${metric.changeType}`}>
                <span className="change-indicator">
                    {metric.changeType === "positive" ? "↗" : "↘"}
                </span>
                <span className="change-value">{metric.change}</span>
                <span className="change-period">{metric.period}</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default DeliveryMetrics;
