import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/FooterSection";
import ActiveDeliveries from "../Components/DriverDashboard/ActiveDeliveries/ActiveDeliveries";
import DeliveryBatches from "../Components/DriverDashboard/DeliveryBatches/DeliveryBatches";
import DeliveryAnalytics from "../Components/Vendor/DeliveryAnalytics/DeliveryAnalytics";
import RouteEfficiency from "../Components/DriverDashboard/RouteEfficiency/RouteEfficiency";
import { useNavigate } from "react-router-dom";
import "./DriverDashboard.css";

const DriverDashboard = () => {
    const Navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
        <Header />
        <div className="driver-header">
            <div className="driver-header-content">
            <h1>Orders Tracking</h1>
            <p>Monitor and manage your delivery batches in real-time</p>
            </div>
            <div className="driver-actions">
            <button onClick={()=> Navigate("/vendor-dashboard")}className="action-btn secondary">Vendor Dashboard</button>
            <button className="action-btn primary">Delivery Analytics</button>
            </div>
        </div>
        <div className="driver-dashboard">
            <ActiveDeliveries />
            <DeliveryBatches />
            <div className="analytics-row">
            <DeliveryAnalytics />
            <RouteEfficiency />
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default DriverDashboard;
