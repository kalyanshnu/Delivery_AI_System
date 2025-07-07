import React from "react";
import "./DeliveryMap.css";
import Map from "./Map.png";

const DeliveryMap = () => {
    return (
        <div className="DeliveryMap">
        <h2>Delivery Map</h2>

        <div className="map-container">
            <div className="map">
            <img src={Map} alt="Map" />
            </div>
        </div>

        <div className="map-info">
            <p className="map-stats">
            <span className="active-routes">4 Active Routes</span>
            <br />
            <span className="vehicles-count">12 Vehicles on Road</span>
            </p>
            <button className="view-full-map-btn">View Full Map</button>
        </div>
        </div>
    );
};

export default DeliveryMap;
