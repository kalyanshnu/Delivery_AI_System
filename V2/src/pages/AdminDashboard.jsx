import React, { useState } from "react";
import "./AdminDashboard.css";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/FooterSection";
import ProfileInformation from "../Components/AdminDashboard/ProfileInformation/ProfileInformation";
import SecuritySettings from "../Components/AdminDashboard/SecuritySettings/SecuritySettings";
import TeamManagement from "../Components/AdminDashboard/TeamManagement/TeamManagement";
import DeliveryPreferences from "../Components/AdminDashboard/DeliveryPreferences/DeliveryPreferences";
import AdminSidebar from "../Components/AdminDashboard/AdminSidebar/AdminSidebar";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileInformation />;
      case "security":
        return <SecuritySettings />;
      case "team":
        return <TeamManagement />;
      case "delivery":
        return <DeliveryPreferences />;
      case "billing":
        return (
          <div className="coming-soon">Billing Information - Coming Soon</div>
        );
      case "notifications":
        return (
          <div className="coming-soon">Notification Settings - Coming Soon</div>
        );
      case "api":
        return <div className="coming-soon">API Access - Coming Soon</div>;
      default:
        return <ProfileInformation />;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <Header />

      <div className="admin-dashboard-content">
        <div className="admin-dashboard-header">
          <h1>Account Management</h1>
          <p>Manage your profile, credentials, and delivery preferences</p>
        </div>

        <div className="admin-dashboard-main">
          <AdminSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="admin-dashboard-sections">
            {renderActiveSection()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
