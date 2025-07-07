import React from "react";
import "./ActiveDeliveries.css";
import ActiveDeliveriesIcon from "./ActiveDeliveries.png";
import CompletedTodayIcon from "./CompletedToday.png";
import SuccessRateIcon from "./SuccessRate.png";

const ActiveDeliveries = () => {
  return (
    <div className="active-deliveries">
      <div className="stats-grid">
        <div className="stat-card active">
          <h2>Active Deliveries</h2>
          <div className="stat-icon">
            <img src={ActiveDeliveriesIcon} alt="AD" />
          </div>
          <div className="stat-content">
            <h3>12</h3>
            <p>Orders in transit</p>
          </div>
          <div className="stat-badge">3 Batches</div>
        </div>

        <div className="stat-card completed">
          <h2>Completed Today</h2>
          <div className="stat-icon">
            <img src={CompletedTodayIcon} alt="CT" />
          </div>
          <div className="stat-content">
            <h3>87</h3>
            <p>Successful deliveries</p>
          </div>
          <div className="stat-badge">20 Deliveries</div>
        </div>

        <div className="stat-card success">
          <h2>Success Rate</h2>
          <div className="stat-icon">
            <img src={SuccessRateIcon} alt="SR" />
          </div>
          <div className="stat-content">
            <h3>94%</h3>
            <p>On-time deliveries</p>
          </div>
          <div className="stat-badge">This Week</div>
        </div>
      </div>

      <div className="filter-tabs">
        <button className="filter-tab active">All Batches</button>
        <button className="filter-tab">In Progress</button>
        <button className="filter-tab">Completed</button>
        <button className="filter-tab">Issues</button>

        <div className="sort-section">
          <span>Sort by:</span>
          <select className="sort-select">
            <option value="recent">Most Recent</option>
            <option value="status">Status</option>
            <option value="driver">Driver</option>
            <option value="time">Delivery Time</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ActiveDeliveries;
