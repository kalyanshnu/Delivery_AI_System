import Header from "../Components/Common/Header";
import Footer from "../Components/Common/FooterSection";
import DeliveryAnalytics from "../Components/Vendor/DeliveryAnalytics/DeliveryAnalytics";
import DeliveryMap from "../Components/Vendor/DeliveryMap/DeliveryMap";
import QuickAction from "../Components/Vendor/QuickAction/QuickActions";
import RecentOrders from "../Components/Vendor/RecentOrders/RecentOrders";
import { useNavigate } from "react-router-dom";
import "./VendorDashboard.css";

const VendorDashboard = () => {
  const Navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <Header />
      <div className="vendor-header">
        <div className="vendor-header-content">
          <h1>Vendor Dashboard</h1>
          <p>Manage your bulk deliveries efficiently</p>
        </div>
        <div className="vendor-actions">
          <button onClick={() => Navigate("/create-new-delivery")}>Create New Delivery</button>
          <button onClick={() => Navigate("/driver-dashboard")}>Track Orders</button>
        </div>
      </div>
      <div className="vendor-dashboard">
        <div className="vendor-content">
          <div className="left-column">
            <DeliveryAnalytics />
            <RecentOrders />
          </div>

          <div className="right-column">
            <QuickAction />
            <DeliveryMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
