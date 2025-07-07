import React from "react";
import "./AdminSidebar.css";

const AdminSidebar = ({ activeSection, onSectionChange }) => {
  const sidebarItems = [
    {
      id: "profile",
      icon: "👤",
      label: "Profile Information",
      description: "",
    },
    {
      id: "security",
      icon: "🔒",
      label: "Security Settings",
      description: "",
    },
    {
      id: "team",
      icon: "👥",
      label: "Team Management",
      description: "",
    },
    {
      id: "delivery",
      icon: "📦",
      label: "Delivery Preferences",
      description: "",
    },
    {
      id: "billing",
      icon: "💳",
      label: "Billing Information",
      description: "",
    },
    {
      id: "notifications",
      icon: "🔔",
      label: "Notification Settings",
      description: "",
    },
    {
      id: "api",
      icon: "🔧",
      label: "API Access",
      description: "",
    },
    {
      id: "dashboard",
      icon: "📊",
      label: "Back to Dashboard",
      description: "",
    },
    {
      id: "support",
      icon: "❓",
      label: "Get Support",
      description: "",
    },
  ];

  const handleSectionClick = (sectionId) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="admin-sidebar">
      <div className="admin-profile-card">
        <div className="profile-avatar">
          <img
            src="/src/Components/Home/testimonial/Sarah.png"
            alt="Alex Morgan"
          />
        </div>
        <div className="profile-info">
          <h3>Alex Morgan</h3>
          <p>Vendor Account Manager</p>
          <span className="profile-id">V001-023324</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${
              activeSection === item.id ? "active" : ""
            }`}
            onClick={() => handleSectionClick(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sign-out-btn">Sign Out</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
