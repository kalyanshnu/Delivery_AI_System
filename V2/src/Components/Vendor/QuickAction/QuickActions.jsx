import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './QuickActions.css';

const QuickAction = () => {
    const Navigate = useNavigate();
    const [address, setAddress] = useState('');

    const handleRepeatOrder = () => {
        // Add navigation or modal logic here
        console.log('Repeat Last Order clicked');
    };

    const handleRoutes = () => {
        // Add navigation or modal logic here
        console.log('Routes clicked');
    };

    const handleScanAddresses = () => {
        // Add scan functionality here
        console.log('Scan Addresses clicked');
    };

    const handleUploadList = () => {
        // Add upload functionality here
        console.log('Upload List clicked');
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div className="quick-actions">
            <h2 className="quick-actions-title">Quick Actions</h2>
            
            <div className="actions-grid">
                <div className="actions-column">
                    <button className="action-button" onClick={()=> Navigate("/create-new-delivery")}>
                        New Order
                    </button>
                    <button className="action-button" onClick={()=> Navigate("/admin-dashboard")}>
                        Account
                    </button>
                    <button className="action-button large" onClick={handleRepeatOrder}>
                        Repeat Last Order
                    </button>
                </div>
                
                <div className="actions-column">
                    <button className="action-button" onClick={handleRoutes}>
                        Routes
                    </button>
                    <button className="action-button" onClick={()=> Navigate("/driver-dashboard")}>
                        Analytics
                    </button>
                    <button className="action-button" onClick={()=> Navigate("/reports")}>
                        Delivery Reports
                    </button>
                </div>
            </div>

            <div className="address-section">
                <h2 className="address-title">Add Delivery Addresses</h2>
                <input
                    type="text"
                    className="address-input"
                    placeholder="Enter address"
                    value={address}
                    onChange={handleAddressChange}
                />
                <div className="address-buttons">
                    <button className="address-button scan" onClick={handleScanAddresses}>
                        Scan Addresses
                    </button>
                    <button className="address-button upload" onClick={handleUploadList}>
                        Upload List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickAction;