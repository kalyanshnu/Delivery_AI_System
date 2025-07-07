import React from 'react';
import './RecentOrders.css';

const RecentOrders = () => {
    const orders = [
        {
            id: 1,
            title: "North Side Batch",
            addresses: 8,
            time: "Today, 8:15 AM",
            route: "VendorSpecified",
            status: "Delivered"
        },
        {
            id: 2,
            title: "West End Deliveries",
            addresses: 12,
            time: "Today, 10:30 AM",
            route: "Optimized",
            status: "Delivered"
        },
        {
            id: 3,
            title: "Downtown Deliveries",
            addresses: 15,
            time: "Yesterday, 2:45 PM",
            route: "Optimized",
            status: "Partial Delivery"
        },
        {
            id: 4,
            title: "South Mall Batch",
            addresses: 6,
            time: "Yesterday, 11:20 AM",
            route: "VendorSpecified",
            status: "Delivered"
        }
    ];

    const handleTrack = (orderId) => {
        console.log(`Track order ${orderId}`);
        // Add tracking logic here
    };

    const handleDetails = (orderId) => {
        console.log(`View details for order ${orderId}`);
        // Add details navigation logic here
    };

    const handleViewAll = () => {
        console.log('View all orders');
        // Add navigation to all orders page
    };

    const getStatusIcon = (status) => {
        if (status === "Delivered") {
            return <span className="status-icon delivered">✓</span>;
        } else if (status === "Partial Delivery") {
            return <span className="status-icon partial">!</span>;
        }
        return null;
    };

    const getStatusClass = (status) => {
        if (status === "Delivered") {
            return "status-delivered";
        } else if (status === "Partial Delivery") {
            return "status-partial";
        }
        return "";
    };

    return (
        <div className="recent-orders">
            <div className="orders-header">
                <h2 className="orders-title">Recent Orders</h2>
                <button className="view-all-btn" onClick={handleViewAll}>
                    View All
                </button>
            </div>

            <div className="orders-list">
                {orders.map((order) => (
                    <div key={order.id} className="order-item">
                        <div className="order-info">
                            <h3 className="order-title">{order.title}</h3>
                            <p className="order-details">
                                {order.addresses} addresses • {order.time}
                            </p>
                            <p className="order-route">Route: {order.route}</p>
                        </div>

                        <div className="order-actions">
                            <div className={`order-status ${getStatusClass(order.status)}`}>
                                {getStatusIcon(order.status)}
                                <span className="status-text">{order.status}</span>
                            </div>
                            <div className="action-buttons">
                                <button 
                                    className="action-btn track-btn"
                                    onClick={() => handleTrack(order.id)}
                                >
                                    Track
                                </button>
                                <button 
                                    className="action-btn details-btn"
                                    onClick={() => handleDetails(order.id)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;