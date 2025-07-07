import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const location = useLocation();

const Navigate = useNavigate();

  return (
    <>
      {/* Main Header */}
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="logo-section">
            <img id="logo" src={logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <Link
              to="/home"
              className={`nav-link ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/vendor-dashboard"
              className={`nav-link ${
                location.pathname === "/vendor-dashboard" ? "active" : ""
              }`}
            >
              Vendor Module
            </Link>
            <Link
              to="/driver-dashboard"
              className={`nav-link ${
                location.pathname === "/driver-dashboard" ? "active" : ""
              }`}>
              Driver Module
            </Link>
            <Link to="/admin-dashboard"
              className={`nav-link ${
                location.pathname === "/admin-dashboard" ? "active" : ""
              }`}>
              Admin Dashboard
            </Link>
            <Link to="/reports"
              className={`nav-link ${
                location.pathname === "/reports" ? "active" : ""
              }`}>
              Reports
            </Link>
          </nav>

          {/* Right Section */}
          <div className="header-right">
            {/* Search */}
            <div className="search-container">
              <img id="search_icon" src={search} alt="search" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>

            {/* Notifications */}
            <button className="notification-btn">
              <svg
                width="20"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <span className="notification-badge">3</span>
            </button>

            <div className="export-new-order-container">
              {/* Export Data Button */}
              <button className="export-btn">Export Data</button>

              {/* New Order Button */}
              <button onClick={() => Navigate("/create-new-delivery")}  className="new-order-btn">New Order +</button>
            </div>

            {/* Profile Section */}
            <div className="profile-section">
              <div className="profile-avatar">AM</div>
              <div className="profile-info">
                <div className="profile-name">Alex Morgan</div>
                <div className="profile-role">System Admin</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <a href="#dashboard" className="breadcrumb-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Dashboard
          </a>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item active">Overview</span>
        </div>
      </div>
    </>
  );
};

export default Header;
