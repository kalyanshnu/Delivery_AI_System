import "./SigninLogin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SigninLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login submitted:", { email, password, rememberMe });
    };

    return (
        <div className="signin-login-container">
        <div className="left-section">
            <div className="truck-illustration">
            <img
                src="/src/assets/fleet.jpg"
                alt="Delivery Truck"
                className="truck-image"
            />
            </div>
        </div>

        <div className="right-section">
            <div className="login-form">
            <div className="logo-section">
                <div className="logo-icon">🚚</div>
                <span className="logo-text">Delivery AI</span>
            </div>

            <div className="welcome-text">
                <h1>Welcome Back</h1>
                <p>Sign in to access your Delivery AI dashboard</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>

                <div className="form-group">
                <div className="password-header">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-password">
                    Forgot password?
                    </a>
                </div>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>

                <div className="remember-me">
                <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
                </div>

                <button onClick={()=>Navigate("/home")} type="submit" className="sign-in-btn">
                Sign In
                </button>
            </form>

            <div className="login-options">
                <button className="admin-login-btn">Admin Login</button>
                <button className="vendor-login-btn">Vendor Login</button>
            </div>

            <div className="register-link">
                <span>Don't have an account?</span>
                <Link to="/register">Register now</Link>
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

export default SigninLogin;
