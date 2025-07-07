import React, { useState } from "react";
import "./AddDeliveryAddresses.css";

const AddDeliveryAddresses = () => {
    const [addresses, setAddresses] = useState("");
    const [selectedOption, setSelectedOption] = useState("manual");

    const handleAddressChange = (e) => {
        setAddresses(e.target.value);
    };

    const handleUpload = () => {
        // Handle file upload logic
        console.log("Upload file");
    };

    const handleScanAddresses = () => {
        // Handle scan addresses logic
        console.log("Scan addresses");
    };

    const handleUseDropoff = () => {
        // Handle use dropoff logic
        console.log("Use dropoff");
    };

    return (
        <div className="add-delivery-addresses">
        <h2>Add Delivery Addresses</h2>
        <p className="subtitle">Enter addresses manually</p>

        <div className="address-input-section">
            <div className="option-selector">
            <label>
                <input
                type="radio"
                name="inputMethod"
                value="manual"
                checked={selectedOption === "manual"}
                onChange={(e) => setSelectedOption(e.target.value)}
                />
                Enter address manually
            </label>
            </div>

            <div className="address-input-container">
            <div className="address-input-methods">
                <div className="manual-input">
                <textarea
                    placeholder="Enter addresses (one per line)"
                    value={addresses}
                    onChange={handleAddressChange}
                    rows="6"
                />
                </div>

                <div className="upload-section">
                <div className="upload-options">
                    <button className="upload-btn" onClick={handleUpload}>
                    Upload List
                    </button>
                    <button className="csv-btn" onClick={handleUpload}>
                    CSV
                    </button>
                </div>

                <div className="drag-drop-area">
                    <div className="drag-drop-icon">📎</div>
                    <p>Drag & drop files here or</p>
                    <button className="browse-btn">Browse files</button>
                </div>
                </div>
            </div>

            <div className="address-options">
                <p>Or use one of these options:</p>
                <div className="option-buttons">
                <button className="option-btn" onClick={handleScanAddresses}>
                    📍 Scan Addresses
                </button>
                <button className="option-btn" onClick={handleUseDropoff}>
                    📍 Use Dropoff
                </button>
                </div>

                <button className="add-more-btn">Add more addresses</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AddDeliveryAddresses;
