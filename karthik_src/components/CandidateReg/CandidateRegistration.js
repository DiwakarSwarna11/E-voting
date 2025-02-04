import React, {useState} from "react";

import "./CandidateStyles.css";

function Candidate() {
  // State management
  const [isActive, setIsActive] = useState(false);
  const [iscandidateFormGlassy, setIscandidateFormGlassy] = useState(false);
  const [isAdminFormGlassy, setIsAdminFormGlassy] = useState(true);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  // Validation functions
  const validateIDField = (value) => {
    const idRegex =
      /^([Nn]20(0[0-9]{3}|1(0[0-9]{2}|100))|[Nn]21(0[0-9]{3}|1(0[0-9]{2}|100))|[Nn]22(0[0-9]{3}|1(0[0-9]{2}|100)))$/;
    return idRegex.test(value);
  };

  const validateEmail = (value) => {
    const emailRegex =
      /^([Nn]20(0[0-9]{3}|1(0[0-9]{2}|100))|[Nn]21(0[0-9]{3}|1(0[0-9]{2}|100))|[Nn]22(0[0-9]{3}|1(0[0-9]{2}|100)))@rguktn\.ac\.in$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[^a-zA-Z0-9]){2,}).{6,}$/;
    return passwordRegex.test(value);
  };

  // Event handlers
  const handleContinue = () => {
    setIsActive(true);
    setIscandidateFormGlassy(true);
    setIsAdminFormGlassy(false);
  };

  const handleBack = () => {
    setIsActive(false);
    setIsAdminFormGlassy(true);
    setIscandidateFormGlassy(false);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleIdValidation = (e) => {
    const input = e.target;
    if (!validateIDField(input.value)) {
      input.setCustomValidity(
        "Invalid ID number. Must be in the format N2XXXXX"
      );
    } else {
      input.setCustomValidity("");
    }
    input.reportValidity();
  };

  const handleEmailValidation = (e) => {
    const input = e.target;
    if (!validateEmail(input.value)) {
      input.setCustomValidity(
        "Invalid email. Must match the format: N2XXXXX@rguktn.ac.in"
      );
    } else {
      input.setCustomValidity("");
    }
    input.reportValidity();
  };

  const handlePasswordValidation = (e) => {
    const input = e.target;
    if (!validatePassword(input.value)) {
      input.setCustomValidity(
        "Password must contain at least 1 uppercase, 1 lowercase, and 2 special characters."
      );
    } else {
      input.setCustomValidity("");
    }
    input.reportValidity();
  };

  return (
    <div className="candidate">
      <div className={`candidate-container ${isActive ? "active" : ""}`} id="candidate-container">
        <div
          className={`form-container candidate-out ${
            iscandidateFormGlassy ? "glassy" : ""
          }`}
          id="candidate-form"
        >
          <form>
            <h1>CANDIDATE REGISTRATION</h1>
            <div className="input-box acc">
              <div className="input-candidate-container">
                <input
                  type="text"
                  name="username"
                  id="candidate-username"
                  placeholder="Username"
                  maxLength="20"
                />
                <i className="fa fa-user" id="icon-1"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <input
                  type={showPassword.password ? "text" : "password"}
                  name="userpassword"
                  id="candidate-password"
                  placeholder="Password"
                  maxLength="10"
                  onInput={handlePasswordValidation}
                />
                <i
                  className={`fas fa-eye${
                    showPassword.password ? "-slash" : ""
                  } toggle-password`}
                  onClick={() => togglePasswordVisibility("password")}
                ></i>
              </div>
            </div>

            <div className="input-box acc1">
              <div className="input-candidate-container">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  id="candidate-confirmpassword"
                  placeholder="Confirm Password"
                  maxLength="10"
                />
                <i
                  className={`fas fa-eye${
                    showPassword.confirmPassword ? "-slash" : ""
                  } toggle-password`}
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                ></i>
              </div>
            </div>

            <button type="submit">Register</button>
          </form>
        </div>

        <div
          className={`form-container candidate-in ${
            isAdminFormGlassy ? "glassy" : ""
          }`}
          id="admin-form"
        >
          <form>
            <h1>CANDIDATE REGISTRATION</h1>
            <div className="input-box">
              <div className="input-candidate-container">
                <input
                  type="text"
                  name="username"
                  id="candidate-username"
                  placeholder="Name"
                  required
                />
                <i className="fa fa-user"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <input
                  type="text"
                  name="idnum"
                  id="candidate-id"
                  placeholder="ID No."
                  required
                  onInput={handleIdValidation}
                />
                <i className="fa fa-lock"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <select name="branch" id="candidate-branch" required>
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MECH">MECH</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="CHEM">CHEM</option>
                  <option value="MME">MME</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <select name="year" id="candidate-year" required>
                  <option value="">Select Studying Year</option>
                  <option value="E-01">E-01</option>
                  <option value="E-02">E-02</option>
                  <option value="E-03">E-03</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <input
                  type="email"
                  name="email"
                  id="candidate-email"
                  placeholder="Email ID"
                  required
                  onInput={handleEmailValidation}
                />
                <i className="fa fa-envelope"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="otp"
                  id="candidate-otp"
                  placeholder="Enter OTP"
                  maxLength="6"
                  required
                />
                <i className="fa-solid fa-key" id="key-icon"></i>
                <button id="candidate-btn-otp">Send OTP</button>
              </div>
              
            </div>

            <div className="input-box">
              <div className="input-candidate-container">
                <span className="country-code">+91 </span>
                <input
                  type="tel"
                  name="phone"
                  id="candidate-phone"
                  placeholder="  Phone number"
                  maxLength="10"
                  required
                />
                <i className="fa fa-phone"></i>
              </div>
            </div>

            

            <div className="input-box-Gender">
              <h4 className="Heading-four">Gender: </h4>
              <div className="Gender-options">
                <label>
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>PREVIOUS PAGE</h1>
              <p>Switch to see your details in previous page.</p>
              <button id="Back" onClick={handleBack}>
                Back..
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>NEXT PAGE</h1>
              <p>Switch to register as candidate in elections.</p>
              <button id="Continue" onClick={handleContinue}>
                Continue..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
