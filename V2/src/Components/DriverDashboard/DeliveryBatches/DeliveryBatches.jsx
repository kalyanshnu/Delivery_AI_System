import React from "react";
import "./DeliveryBatches.css";
import DownTownDeliveries from "./DownTownDeliveries.png";
import SouthMallBatch from "./SouthMallBatch.png";
import NorthSideBatch from "./NorthSideBatch.png";
import WestEndDeliveries from "./WestEndDeliveries.png";

const DeliveryBatches = () => {
  const batches = [
    {
      id: 1,
      name: "South Mall Batch",
      addresses: 12,
      status: "Delivered",
      time: "Today, 10:20 AM",
      routeType: "Optimized",
      deliveryTime: "1h 45m",
      driver: "Michael Chen",
      progress: 100,
      mapImage: SouthMallBatch,
      startTime: "Start: 10:20 AM",
      endTime: "End: 12:05 PM",
    },
    {
      id: 2,
      name: "North Side Batch",
      addresses: 8,
      status: "Delivered",
      time: "Today, 8:15 AM",
      routeType: "Vendor-Specified",
      deliveryTime: "1h 30m",
      driver: "Sarah Johnson",
      progress: 100,
      mapImage: NorthSideBatch,
      startTime: "Start: 8:15 AM",
      endTime: "End: 9:45 AM",
    },
    {
      id: 3,
      name: "Downtown Deliveries",
      addresses: 15,
      status: "Partial Delivery",
      time: "Yesterday, 2:45 PM",
      routeType: "Optimized",
      deliveryTime: "2h 10m",
      driver: "David Wilson",
      progress: 87,
      mapImage: DownTownDeliveries,
      startTime: "Start: 2:45 PM",
      endTime: "End: 4:55 PM",
    },
    {
      id: 4,
      name: "West End Deliveries",
      addresses: 6,
      status: "Delivered",
      time: "Yesterday, 11:25 AM",
      routeType: "Vendor-Specified",
      deliveryTime: "55m",
      driver: "Emily Rodriguez",
      progress: 100,
      mapImage: WestEndDeliveries,
      startTime: "Start: 11:25 AM",
      endTime: "End: 12:20 PM",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "#10b981";
      case "Partial Delivery":
        return "#f59e0b";
      case "In Progress":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="delivery-batches">
      <h2>Delivery Batches</h2>

      <div className="batches-list">
        {batches.map((batch) => (
          <div key={batch.id} className="batch-card">
            <div className="batch-header">
              <div className="batch-info">
                <h3>{batch.name}</h3>
                <p>
                  {batch.addresses} addresses • {batch.time}
                </p>
              </div>
              <div className="batch-actions">
                <button className="action-btn view-details">
                  View Details
                </button>
                <button className="action-btn request-retrack">
                  Request Retrack
                </button>
              </div>
            </div>

            <div className="batch-content">
              <div className="batch-map">
                <img src={batch.mapImage} alt={`${batch.name} route map`} />
                <div className="map-overlay">
                  <div className="progress-info"></div>
                  <div
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(batch.status) }}
                  >
                    {batch.status}
                  </div>
                </div>
              </div>

              <div className="batch-details">
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="label">Route Type</span>
                    <span className="value route-type">{batch.routeType}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Delivery Time</span>
                    <span className="value">{batch.deliveryTime}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Driver</span>
                    <span className="value">{batch.driver}</span>
                  </div>
                </div>

                <div className="progress-section-full">
                  <div className="progress-timeline">
                    <span className="start-time">{batch.startTime}</span>
                    <div className="progress-bar-full">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${batch.progress}%`,
                          backgroundColor: getStatusColor(batch.status),
                        }}
                      ></div>
                    </div>
                    <div className="progress-info-right">
                      <span className="progress-text">{batch.progress}%</span>
                      <span className="end-time">{batch.endTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span>Showing 4 of 24 delivery batches</span>
        <div className="pagination-controls">
          <button className="page-btn">1</button>
          <button className="page-btn active">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBatches;
