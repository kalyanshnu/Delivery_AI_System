import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        company: "",
        phone: "",
        userType: "vendor", // vendor, admin, driver
        agreeToTerms: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
        }

        if (!formData.agreeToTerms) {
        alert("Please agree to the terms and conditions!");
        return;
        }

        // Handle registration logic here
        console.log("Registration submitted:", formData);
    };

    return (
        <div className="register-container">
        <div className="left-section">
            <div className="truck-illustration">
            <img
                src="src/assets/logo.png"
                alt="Delivery Fleet"
                className="truck-image"
            />
            <div className="illustration-text">
                <h2>Join the Future of Delivery</h2>
                <p>AI-powered route optimization for efficient bulk deliveries</p>
            </div>
            </div>
        </div>

        <div className="right-section">
            <div className="register-form">
            <div className="logo-section">
                <div className="logo-icon">🚚</div>
                <span className="logo-text">Delivery AI</span>
            </div>

            <div className="welcome-text">
                <h1>Create Your Account</h1>
                <p>Join Delivery AI and streamline your delivery operations</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                <div className="form-group half">
                    <label htmlFor="firstName">First Name</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="userType">Account Type</label>
                <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    required
                >
                    <option value="vendor">Vendor</option>
                    <option value="admin">Admin</option>
                    <option value="driver">Driver</option>
                </select>
                </div>

                <div className="form-row">
                <div className="form-group half">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                </div>

                <div className="terms-agreement">
                <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="agreeToTerms">
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                </label>
                </div>

                <button type="submit" className="register-btn">
                Create Account
                </button>
            </form>

            <div className="login-link">
                <span>Already have an account?</span>
                <Link to="/">Sign in here</Link>
            </div>

            <div className="footer-text">
                <p>© 2025 Delivery AI. All rights reserved.</p>
                <p>
                Streamlining bulk order delivery using electric vehicles with
                AI-powered route optimization.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
