import React from "react";
import "./DeliveryIssues.css";

const DeliveryIssues = () => {
    const issues = [
        {
        type: "Address Not Found",
        percentage: 22,
        color: "#ef4444",
        count: "45 issues",
        },
        {
        type: "Traffic Delays",
        percentage: 35,
        color: "#f59e0b",
        count: "72 issues",
        },
        {
        type: "Vehicle Breakdown",
        percentage: 18,
        color: "#6b7280",
        count: "37 issues",
        },
        {
        type: "Weather Conditions",
        percentage: 14,
        color: "#3b82f6",
        count: "29 issues",
        },
        {
        type: "Other Issues",
        percentage: 9,
        color: "#8b5cf6",
        count: "18 issues",
        },
    ];

    return (
        <div className="delivery-issues">
        <div className="issues-header">
            <h3>Delivery Issues</h3>
            <button className="view-all-btn">View All</button>
        </div>

        <div className="issues-list">
            {issues.map((issue, index) => (
            <div key={index} className="issue-item">
                <div className="issue-info">
                <div className="issue-type">{issue.type}</div>
                <div className="issue-count">{issue.count}</div>
                </div>
                <div className="issue-progress">
                <div className="progress-bar">
                    <div
                    className="progress-fill"
                    style={{
                        width: `${issue.percentage}%`,
                        backgroundColor: issue.color,
                    }}
                    ></div>
                </div>
                <span className="issue-percentage">{issue.percentage}%</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default DeliveryIssues;
