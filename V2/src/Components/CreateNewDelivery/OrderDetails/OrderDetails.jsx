import React, { useState } from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
    const [orderName, setOrderName] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("AM");
    const [driverAssignment, setDriverAssignment] = useState("optimal");
    const [vehicleType, setVehicleType] = useState("van");
    const [specialInstructions, setSpecialInstructions] = useState("");

    return (
        <div className="order-details">
        <h2>Order Details</h2>

        <div className="order-form">
            <div className="form-row">
            <div className="form-group">
                <label>Order Name</label>
                <input
                type="text"
                placeholder="Enter a name for this delivery order"
                value={orderName}
                onChange={(e) => setOrderName(e.target.value)}
                />
            </div>
            </div>

            <div className="form-row">
            <div className="form-group">
                <label>Delivery Date</label>
                <div className="date-input-container">
                <span className="calendar-icon">📅</span>
                <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                />
                </div>
            </div>

            <div className="form-group">
                <label>Delivery Time Window</label>
                <div className="time-window-options">
                <label className="time-option">
                    <input
                    type="radio"
                    name="timeWindow"
                    value="AM"
                    checked={deliveryTime === "AM"}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    AM
                </label>
                <label className="time-option">
                    <input
                    type="radio"
                    name="timeWindow"
                    value="PM"
                    checked={deliveryTime === "PM"}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    PM
                </label>
                </div>
            </div>
            </div>

            <div className="form-row">
            <div className="form-group">
                <label>Driver Assignment</label>
                <div className="driver-assignment">
                <span className="driver-icon">👤</span>
                <select
                    value={driverAssignment}
                    onChange={(e) => setDriverAssignment(e.target.value)}
                >
                    <option value="optimal">Assign optimal driver</option>
                    <option value="specific">Choose specific driver</option>
                    <option value="team">Assign to team</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label>Vehicle Type</label>
                <div className="vehicle-type">
                <span className="vehicle-icon">🚐</span>
                <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                >
                    <option value="van">Van (Standard)</option>
                    <option value="truck">Truck (Large)</option>
                    <option value="bike">Bike (Small)</option>
                    <option value="electric">Electric Vehicle</option>
                </select>
                </div>
            </div>
            </div>

            <div className="form-row">
            <div className="form-group full-width">
                <label>Special Instructions</label>
                <textarea
                placeholder="Enter any special instructions for the driver"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                rows="4"
                />
            </div>
            </div>
        </div>
        </div>
    );
};

export default OrderDetails;
