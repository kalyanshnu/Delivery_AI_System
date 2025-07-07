import "./Reports.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/FooterSection";
import DeliveryMetrics from "../Components/Reports/DeliveryMetrics/DeliveryMetrics";
import DeliverySuccessRate from "../Components/Reports/DeliverySuccessRate/DeliverySuccessRate";
import RouteEfficiencyComparison from "../Components/Reports/RouteEfficiencyComparison/RouteEfficiencyComparison";
import DeliveryPerformanceMap from "../Components/Reports/DeliveryPerformanceMap/DeliveryPerformanceMap";
import DeliveryStatus from "../Components/Reports/DeliveryStatus/DeliveryStatus";
import TopPerformingRoutes from "../Components/Reports/TopPerformingRoutes/TopPerformingRoutes";
import DeliveryIssues from "../Components/Reports/DeliveryIssues/DeliveryIssues";
import VendorPerformanceComparison from "../Components/Reports/VendorPerformanceComparison/VendorPerformanceComparison";
import RecentOrders from "../Components/Vendor/RecentOrders/RecentOrders";

const Reports = () => {
    const navigate = useNavigate();

    return (
        <div className="delivery-analytics-container">
        <Header />
        <div className="delivery-analytics-header">
            <div className="delivery-analytics-header-content">
            <h1>Delivery Analytics</h1>
            <p>
                Comprehensive insights into your delivery performance and metrics
            </p>
            </div>
            <div className="delivery-analytics-actions">
            <div className="time-filter">
                <span>📅</span>
                <span>Last 30 Days</span>
                <span>▼</span>
            </div>
            <button className="filter-btn">Filter Data</button>
            <button className="generate-btn">Generate Report</button>
            </div>
        </div>
        <div className="reports-content">
            <DeliveryMetrics />

            <div className="analytics-grid">
            <div className="chart-section">
                <DeliverySuccessRate />
            </div>
            <div className="chart-section">
                <RouteEfficiencyComparison />
            </div>
            </div>

            <div className="analytics-grid">
            <div className="map-section">
                <DeliveryPerformanceMap />
            </div>
            <div className="status-section">
                <DeliveryStatus />
            </div>
            </div>

            <div className="analytics-grid">
            <div className="routes-section">
                <TopPerformingRoutes />
            </div>
            <div className="issues-section">
                <DeliveryIssues />
            </div>
            <div className="recent-section">
                <RecentOrders />
            </div>
            </div>

            <div className="vendor-performance-section">
            <VendorPerformanceComparison />
            </div>

            <div className="reports-action-buttons">
            <button className="reports-action-btn secondary">
                Manage Account Settings
            </button>
            <button className="reports-action-btn primary">
                Track Current Orders
            </button>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Reports;
