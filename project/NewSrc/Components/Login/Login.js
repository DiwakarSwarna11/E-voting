import React, { useState } from "react";
import "./LoginStyles.css";
import reg from "./register.svg";
import logo from "./log.svg";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [voterPassword, setVoterPassword] = useState("");
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [showVoterPassword, setShowVoterPassword] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const togglePasswordVisibility = (isAdmin) => {
    if (isAdmin) {
      setShowAdminPassword(!showAdminPassword);
    } else {
      setShowVoterPassword(!showVoterPassword);
    }
  };

  const handleSubmit = (e, isAdmin) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(isAdmin ? "Admin login" : "Voter login");
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Voter Login Form */}
          <form
            onSubmit={(e) => handleSubmit(e, false)}
            className="sign-in-form"
          >
            <h2 className="title">VOTER LOGIN</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={showVoterPassword ? "text" : "password"}
                id="participant-password"
                placeholder="Password"
                maxLength="10"
                value={voterPassword}
                onChange={(e) => setVoterPassword(e.target.value)}
              />
              <i
                className={`fas ${
                  showVoterPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-password`}
                onClick={() => togglePasswordVisibility(false)}
              ></i>
            </div>

            <input type="submit" value="Login" className="btn_solid" />
            <a href="participant_forgot_password.php">
              <h4>Forgot Your Password?</h4>
            </a>
          </form>

          {/* Admin Login Form */}
          <form
            onSubmit={(e) => handleSubmit(e, true)}
            className="sign-up-form"
          >
            <h2 className="title">ADMIN LOGIN</h2>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={showAdminPassword ? "text" : "password"}
                id="admin-password"
                placeholder="Password"
                maxLength="10"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <i
                className={`fas ${
                  showAdminPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-password`}
                onClick={() => togglePasswordVisibility(true)}
              ></i>
            </div>

            <input type="submit" className="btn_solid" value="Login" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are you Admin?</h3>
            <p>if yes click below to enter the Admin Login portal.</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Login
            </button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Are you Voter?</h3>
            <p>if yes click below to enter the Voter Login portal.</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              login
            </button>
          </div>
          <img src={reg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
