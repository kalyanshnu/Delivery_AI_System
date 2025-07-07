import Header from "../Components/Common/Header";
import Footer from "../Components/Common/FooterSection";
import RecentOrders from "../Components/Vendor/RecentOrders/RecentOrders";
import AddDeliveryAddresses from "../Components/CreateNewDelivery/AddDeliveryAddresses/AddDeliveryAddresses";
import RoutePreferences from "../Components/CreateNewDelivery/RoutePreferences/RoutePreferences";
import OrderDetails from "../Components/CreateNewDelivery/OrderDetails/OrderDetails";
import OrderSummary from "../Components/CreateNewDelivery/OrderSummary/OrderSummary";
import "./CreateNewDelivery.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNewDelivery = () => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
        <Header />
        <div className="Delivery-header">
            <div className="Delivery-header-content">
            <h1>Create New Delivery Order</h1>
            <p>Enter delivery addresses and configure route preferences</p>
            </div>
            <div className="Delivery-actions">
            <button onClick={() => navigate("/vendor-dashboard")}>
                Back to Dashboard
            </button>
            <button onClick={()=> navigate("/driver-dashboard")}>View Active Orders</button>
            </div>
        </div>
        <div className="create-new-delivery-dashboard">
            <div className="create-new-delivery-content">
            <div className="left-column">
                <AddDeliveryAddresses />
                <RoutePreferences />
                <OrderDetails />
            </div>

            <div className="right-column">
                <OrderSummary />
                <RecentOrders />
                <div id="ProTips">
                <div className="tips-icon">💡</div>
                <h3>Pro Tips</h3>
                <ul>
                    <li>AI-optimized routes can save up to 30% on delivery time</li>
                    <li>Upload addresses in bulk to save time on data entry</li>
                    <li>Set time windows for more accurate delivery estimates</li>
                    <li>Use the mobile app to track deliveries in real-time</li>
                </ul>
                <a href="">View all delivery tips</a>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default CreateNewDelivery;
