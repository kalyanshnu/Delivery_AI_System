import React, { useState } from "react";
import "./RoutePreferences.css";
import Route from "./Route.png"; // Placeholder for the route preview image

const RoutePreferences = () => {
    const [routeType, setRouteType] = useState("ai-optimized");

    return (
        <div className="route-preferences">
        <h2>Route Preferences</h2>

        <div className="route-selection">
            <div className="route-type-section">
            <h3>Select Route Type</h3>
            <div className="route-options">
                <label className="route-option">
                <input
                    type="radio"
                    name="routeType"
                    value="ai-optimized"
                    checked={routeType === "ai-optimized"}
                    onChange={(e) => setRouteType(e.target.value)}
                />
                <span className="radio-custom"></span>
                AI-Optimized Route (Recommended)
                </label>

                <label className="route-option">
                <input
                    type="radio"
                    name="routeType"
                    value="custom"
                    checked={routeType === "custom"}
                    onChange={(e) => setRouteType(e.target.value)}
                />
                <span className="radio-custom"></span>
                Custom Route Sequence
                </label>

                <label className="route-option">
                <input
                    type="radio"
                    name="routeType"
                    value="time-window"
                    checked={routeType === "time-window"}
                    onChange={(e) => setRouteType(e.target.value)}
                />
                <span className="radio-custom"></span>
                Time-Window Optimized
                </label>
            </div>

            <div className="additional-preferences">
                <h4>Additional Preferences</h4>
                <div className="preference-checkboxes">
                <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    Avoid highways
                </label>

                <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    Avoid toll roads
                </label>

                <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    Include EV charging stops
                </label>
                </div>
            </div>
            </div>

            <div className="route-preview-section">
            <h3>Route Preview</h3>
            <div className="map-preview">
                <img src={Route} alt="Route Preview Map" />
                <div className="route-info">
                <div className="route-points">
                    <div className="point starting">📍 Starting Point</div>
                    <div className="point delivery">📍 Delivery Points (4)</div>
                    <div className="point optimized">📍 Optimized Route</div>
                </div>
                </div>
            </div>
            <div className="route-stats">
                <p>
                Estimated distance: <strong>12.4 miles</strong>
                </p>
                <button className="view-full-btn">View full map</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RoutePreferences;
