import React, { useState } from "react";
import "./DeliverySuccessRate.css";

const DeliverySuccessRate = () => {
    const [activeTab, setActiveTab] = useState("Daily");

    return (
        <div className="delivery-success-rate">
        <div className="chart-header">
            <h3>Delivery Success Rate</h3>
            <div className="time-tabs">
            {["Daily", "Weekly", "Monthly"].map((tab) => (
                <button
                key={tab}
                className={`time-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                >
                {tab}
                </button>
            ))}
            </div>
        </div>

        <div className="chart-container">
            <div className="chart-area">
            {/* Simple line chart representation */}
            <svg viewBox="0 0 400 200" className="line-chart">
                <defs>
                <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                </defs>

                {/* Grid lines */}
                <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="0" y1="40" x2="400" y2="40" />
                <line x1="0" y1="80" x2="400" y2="80" />
                <line x1="0" y1="120" x2="400" y2="120" />
                <line x1="0" y1="160" x2="400" y2="160" />
                </g>

                {/* Main trend line */}
                <path
                d="M 20 60 Q 80 40 120 50 Q 160 45 200 55 Q 240 50 280 65 Q 320 70 360 80"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                className="trend-line"
                />

                {/* Secondary line */}
                <path
                d="M 20 100 Q 80 85 120 90 Q 160 95 200 105 Q 240 110 280 120 Q 320 125 360 135"
                stroke="#94a3b8"
                strokeWidth="2"
                fill="none"
                className="secondary-line"
                />
            </svg>
            </div>
        </div>
        </div>
    );
};

export default DeliverySuccessRate;
