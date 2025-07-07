import React, { useState } from "react";
import "./SecuritySettings.css";

const SecuritySettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    loginNotifications: true,
    securityAlerts: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the security settings
    console.log("Security settings saved:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="security-settings">
      <div className="section-header">
        <h2>Security Settings</h2>
        <p>Manage your account security and authentication preferences</p>
      </div>

      <div className="security-sections">
        {/* Password Management */}
        <div className="security-section">
          <h3>Password Management</h3>
          <div className="password-form">
            <div className="input-group">
              <label htmlFor="currentPassword">Current Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="newPassword">New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="password-requirements">
              <p>Password requirements:</p>
              <ul>
                <li>At least 8 characters long</li>
                <li>Contains uppercase and lowercase letters</li>
                <li>Contains at least one number</li>
                <li>Contains at least one special character</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="security-section">
          <h3>Two-Factor Authentication</h3>
          <div className="two-factor-settings">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Enable Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="twoFactorEnabled"
                  checked={formData.twoFactorEnabled}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="slider"></span>
              </label>
            </div>

            {formData.twoFactorEnabled && (
              <div className="two-factor-setup">
                <div className="qr-code-section">
                  <h4>Setup Authenticator App</h4>
                  <div className="qr-code-placeholder">
                    <div className="qr-code">
                      <p>QR Code</p>
                    </div>
                    <p>Scan this QR code with your authenticator app</p>
                  </div>
                </div>
                <div className="backup-codes">
                  <h4>Backup Codes</h4>
                  <p>Save these codes in a secure location</p>
                  <div className="backup-codes-list">
                    <span>1234-5678</span>
                    <span>9876-5432</span>
                    <span>1111-2222</span>
                    <span>3333-4444</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Preferences */}
        <div className="security-section">
          <h3>Security Preferences</h3>
          <div className="security-preferences">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Login Notifications</h4>
                <p>Get notified when someone logs into your account</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="loginNotifications"
                  checked={formData.loginNotifications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Security Alerts</h4>
                <p>Receive alerts about suspicious account activity</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="securityAlerts"
                  checked={formData.securityAlerts}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Recent Security Activity */}
        <div className="security-section">
          <h3>Recent Security Activity</h3>
          <div className="security-activity">
            <div className="activity-item">
              <div className="activity-icon">🔑</div>
              <div className="activity-details">
                <h4>Password changed</h4>
                <p>December 15, 2024 at 2:30 PM</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📱</div>
              <div className="activity-details">
                <h4>New device login</h4>
                <p>December 14, 2024 at 9:15 AM</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🔐</div>
              <div className="activity-details">
                <h4>Two-factor authentication enabled</h4>
                <p>December 10, 2024 at 4:45 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-actions">
        {!isEditing ? (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Security Settings
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

export default SecuritySettings;
