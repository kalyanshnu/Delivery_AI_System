import React from "react";
import "./DeliveryStatus.css";

const DeliveryStatus = () => {
    const statusData = [
        { label: "Completed", value: 65, color: "#10b981" },
        { label: "In Transit", value: 20, color: "#3b82f6" },
        { label: "Pending", value: 10, color: "#f59e0b" },
        { label: "Failed", value: 5, color: "#ef4444" },
    ];

    const total = statusData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="delivery-status">
        <div className="status-header">
            <h3>Delivery Status Breakdown</h3>
            <button className="export-btn">Export</button>
        </div>

        <div className="status-content">
            <div className="pie-chart-container">
            <svg viewBox="0 0 200 200" className="pie-chart">
                <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#10b981"
                strokeWidth="40"
                strokeDasharray={`${(statusData[0].value / total) * 502} 502`}
                transform="rotate(-90 100 100)"
                className="pie-slice"
                />
                <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="40"
                strokeDasharray={`${(statusData[1].value / total) * 502} 502`}
                strokeDashoffset={`-${(statusData[0].value / total) * 502}`}
                transform="rotate(-90 100 100)"
                className="pie-slice"
                />
                <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="40"
                strokeDasharray={`${(statusData[2].value / total) * 502} 502`}
                strokeDashoffset={`-${
                    ((statusData[0].value + statusData[1].value) / total) * 502
                }`}
                transform="rotate(-90 100 100)"
                className="pie-slice"
                />
                <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#ef4444"
                strokeWidth="40"
                strokeDasharray={`${(statusData[3].value / total) * 502} 502`}
                strokeDashoffset={`-${
                    ((statusData[0].value +
                    statusData[1].value +
                    statusData[2].value) /
                    total) *
                    502
                }`}
                transform="rotate(-90 100 100)"
                className="pie-slice"
                />
            </svg>
            </div>

            <div className="status-legend">
            {statusData.map((item, index) => (
                <div key={index} className="legend-item">
                <div
                    className="legend-dot"
                    style={{ backgroundColor: item.color }}
                ></div>
                <span className="legend-label">{item.label}</span>
                <span className="legend-value">{item.value}%</span>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default DeliveryStatus;
