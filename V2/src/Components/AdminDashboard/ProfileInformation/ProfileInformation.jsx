import React, { useState } from "react";
import "./ProfileInformation.css";

const ProfileInformation = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Alex Morgan",
    email: "alex.morgan@vendorcompany.com",
    phone: "(555) 123-4567",
    companyName: "Morgan Distribution Co.",
    businessAddress: "123 Commerce St, Suite 400",
    businessType: "Retail Distribution",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="profile-information-section">
      <div className="section-header">
        <h2>Profile Information</h2>
        <button
          className="edit-profile-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="profile-form">
        <div className="form-row">
          <div className="form-field">
            <label>Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
              />
            ) : (
              <div className="field-value">{profileData.fullName}</div>
            )}
          </div>

          <div className="form-field">
            <label>Company Name</label>
            {isEditing ? (
              <input
                type="text"
                name="companyName"
                value={profileData.companyName}
                onChange={handleInputChange}
              />
            ) : (
              <div className="field-value">{profileData.companyName}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <div className="field-value">{profileData.email}</div>
            )}
          </div>

          <div className="form-field">
            <label>Business Address</label>
            {isEditing ? (
              <input
                type="text"
                name="businessAddress"
                value={profileData.businessAddress}
                onChange={handleInputChange}
              />
            ) : (
              <div className="field-value">{profileData.businessAddress}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
              />
            ) : (
              <div className="field-value">{profileData.phone}</div>
            )}
          </div>

          <div className="form-field">
            <label>Business Type</label>
            {isEditing ? (
              <select
                name="businessType"
                value={profileData.businessType}
                onChange={handleInputChange}
              >
                <option value="Retail Distribution">Retail Distribution</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Wholesale">Wholesale</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Food & Beverage">Food & Beverage</option>
              </select>
            ) : (
              <div className="field-value">{profileData.businessType}</div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="form-actions">
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInformation;
