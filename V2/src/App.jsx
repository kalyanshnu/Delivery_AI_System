import "./App.css";
import SigninLogin from "./pages/SigninLogin";
import Register from "./pages/Register";
import Home from "./pages/Home";
import VendorDashboard from "./pages/VendorDashboard";
import CreateNewDelivery from "./pages/CreateNewDelivery";
import Reports from "./pages/Reports";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DriverDashboard from "./pages/DriverDashboard";

// Simple 404 Not Found component
const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SigninLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signinlogin" element={<SigninLogin />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/create-new-delivery" element={<CreateNewDelivery />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
