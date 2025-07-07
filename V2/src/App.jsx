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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
