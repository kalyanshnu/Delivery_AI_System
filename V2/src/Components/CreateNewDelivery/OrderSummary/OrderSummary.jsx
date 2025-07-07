import React from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
    return (
        <div className="order-summary">
        <h2>Order Summary</h2>

        <div className="summary-section">
            <div className="summary-row">
            <span className="label">Total Addresses:</span>
            <span className="value">5</span>
            </div>

            <div className="summary-row">
            <span className="label">Route Type:</span>
            <span className="value">AI-Optimized</span>
            </div>

            <div className="summary-row">
            <span className="label">Estimated Distance:</span>
            <span className="value">12.4 miles</span>
            </div>

            <div className="summary-row">
            <span className="label">Estimated Duration:</span>
            <span className="value">1h 45m</span>
            </div>

            <div className="summary-row">
            <span className="label">Vehicle Type:</span>
            <span className="value">Electric Van</span>
            </div>
        </div>

        <div className="cost-breakdown">
            <div className="cost-row">
            <span className="label">Base Delivery Fee:</span>
            <span className="value">$45.0</span>
            </div>

            <div className="cost-row">
            <span className="label">Per Address Fee (5):</span>
            <span className="value">$15.0</span>
            </div>

            <div className="cost-row">
            <span className="label">Route Optimization:</span>
            <span className="value">$10.0</span>
            </div>

            <div className="cost-row total">
            <span className="label">Total Cost:</span>
            <span className="value">$70.00</span>
            </div>
        </div>

        <button className="create-order-btn">Create Delivery Order</button>
        </div>
    );
};

export default OrderSummary;
