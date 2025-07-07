import React, { useState } from "react";
import "./DeliveryPreferences.css";

const DeliveryPreferences = () => {
  const [preferences, setPreferences] = useState({
    // Route Preferences
    preferredRoutes: "efficient",
    avoidTollRoads: false,
    avoidHighways: false,
    optimizeForTime: true,
    optimizeForFuel: false,

    // Notification Preferences
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    notifyOnDelivery: true,
    notifyOnDelay: true,
    notifyOnCancellation: true,
    dailyReports: true,
    weeklyReports: false,

    // Vehicle Preferences
    defaultVehicleType: "standard",
    autoAssignVehicles: true,
    requireVehicleInspection: true,
    trackVehicleLocation: true,

    // Delivery Windows
    mondayStart: "08:00",
    mondayEnd: "18:00",
    tuesdayStart: "08:00",
    tuesdayEnd: "18:00",
    wednesdayStart: "08:00",
    wednesdayEnd: "18:00",
    thursdayStart: "08:00",
    thursdayEnd: "18:00",
    fridayStart: "08:00",
    fridayEnd: "18:00",
    saturdayStart: "09:00",
    saturdayEnd: "16:00",
    sundayStart: "",
    sundayEnd: "",

    // Advanced Settings
    maxDeliveryRadius: 50,
    deliveryTimeBuffer: 15,
    retryAttempts: 3,
    customerRatingThreshold: 3,
    enableEcoMode: false,
    prioritizeReturningCustomers: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    // Here you would typically make an API call to save preferences
    console.log("Delivery preferences saved:", preferences);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset preferences if needed
  };

  const weekdays = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  return (
    <div className="delivery-preferences">
      <div className="section-header">
        <h2>Delivery Preferences</h2>
        <p>
          Configure your delivery routes, notifications, and operational
          settings
        </p>
      </div>

      <div className="preferences-sections">
        {/* Route Optimization */}
        <div className="preference-section">
          <h3>Route Optimization</h3>
          <div className="preference-grid">
            <div className="preference-item">
              <label htmlFor="preferredRoutes">Route Priority</label>
              <select
                id="preferredRoutes"
                name="preferredRoutes"
                value={preferences.preferredRoutes}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="efficient">Most Efficient</option>
                <option value="fastest">Fastest Route</option>
                <option value="shortest">Shortest Distance</option>
                <option value="scenic">Scenic Route</option>
              </select>
            </div>

            <div className="preference-item">
              <label htmlFor="maxDeliveryRadius">
                Max Delivery Radius (km)
              </label>
              <input
                type="number"
                id="maxDeliveryRadius"
                name="maxDeliveryRadius"
                value={preferences.maxDeliveryRadius}
                onChange={handleInputChange}
                disabled={!isEditing}
                min="1"
                max="200"
              />
            </div>

            <div className="preference-item">
              <label htmlFor="deliveryTimeBuffer">Time Buffer (minutes)</label>
              <input
                type="number"
                id="deliveryTimeBuffer"
                name="deliveryTimeBuffer"
                value={preferences.deliveryTimeBuffer}
                onChange={handleInputChange}
                disabled={!isEditing}
                min="5"
                max="60"
              />
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="avoidTollRoads"
                checked={preferences.avoidTollRoads}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Avoid toll roads
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="avoidHighways"
                checked={preferences.avoidHighways}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Avoid highways
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="optimizeForTime"
                checked={preferences.optimizeForTime}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Optimize for time
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="optimizeForFuel"
                checked={preferences.optimizeForFuel}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Optimize for fuel efficiency
            </label>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="preference-section">
          <h3>Notification Settings</h3>
          <div className="notification-categories">
            <div className="notification-category">
              <h4>Communication Channels</h4>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={preferences.emailNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Email notifications
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={preferences.smsNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  SMS notifications
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="pushNotifications"
                    checked={preferences.pushNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Push notifications
                </label>
              </div>
            </div>

            <div className="notification-category">
              <h4>Event Notifications</h4>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="notifyOnDelivery"
                    checked={preferences.notifyOnDelivery}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Delivery completion
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="notifyOnDelay"
                    checked={preferences.notifyOnDelay}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Delivery delays
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="notifyOnCancellation"
                    checked={preferences.notifyOnCancellation}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Order cancellations
                </label>
              </div>
            </div>

            <div className="notification-category">
              <h4>Reports</h4>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="dailyReports"
                    checked={preferences.dailyReports}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Daily reports
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="weeklyReports"
                    checked={preferences.weeklyReports}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="checkmark"></span>
                  Weekly summaries
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Management */}
        <div className="preference-section">
          <h3>Vehicle Management</h3>
          <div className="preference-grid">
            <div className="preference-item">
              <label htmlFor="defaultVehicleType">Default Vehicle Type</label>
              <select
                id="defaultVehicleType"
                name="defaultVehicleType"
                value={preferences.defaultVehicleType}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="standard">Standard Vehicle</option>
                <option value="compact">Compact Vehicle</option>
                <option value="large">Large Vehicle</option>
                <option value="electric">Electric Vehicle</option>
                <option value="hybrid">Hybrid Vehicle</option>
              </select>
            </div>

            <div className="preference-item">
              <label htmlFor="retryAttempts">Max Retry Attempts</label>
              <input
                type="number"
                id="retryAttempts"
                name="retryAttempts"
                value={preferences.retryAttempts}
                onChange={handleInputChange}
                disabled={!isEditing}
                min="1"
                max="5"
              />
            </div>

            <div className="preference-item">
              <label htmlFor="customerRatingThreshold">
                Min Customer Rating
              </label>
              <select
                id="customerRatingThreshold"
                name="customerRatingThreshold"
                value={preferences.customerRatingThreshold}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="autoAssignVehicles"
                checked={preferences.autoAssignVehicles}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Automatically assign vehicles
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="requireVehicleInspection"
                checked={preferences.requireVehicleInspection}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Require vehicle inspection
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="trackVehicleLocation"
                checked={preferences.trackVehicleLocation}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Track vehicle location
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="enableEcoMode"
                checked={preferences.enableEcoMode}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Enable eco-friendly mode
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="prioritizeReturningCustomers"
                checked={preferences.prioritizeReturningCustomers}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <span className="checkmark"></span>
              Prioritize returning customers
            </label>
          </div>
        </div>

        {/* Delivery Windows */}
        <div className="preference-section">
          <h3>Delivery Windows</h3>
          <div className="delivery-schedule">
            {weekdays.map(({ key, label }) => (
              <div key={key} className="schedule-day">
                <div className="day-label">{label}</div>
                <div className="time-inputs">
                  <input
                    type="time"
                    name={`${key}Start`}
                    value={preferences[`${key}Start`]}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span className="time-separator">to</span>
                  <input
                    type="time"
                    name={`${key}End`}
                    value={preferences[`${key}End`]}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-actions">
        {!isEditing ? (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Delivery Preferences
          </button>
        ) : (
          <div className="action-buttons">
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryPreferences;
