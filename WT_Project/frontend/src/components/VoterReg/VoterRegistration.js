import React, { useState } from "react";
import "./VoterStyles.css";
import { useNavigate } from "react-router-dom"; 

function Voter() {
  const [formData, setFormData] = useState({
    name: "",
    idNo: "",
    branch: "",
    year: "",
    gender: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      console.log("Form Data Sent:", formData);
      console.log("Response Status:", response.status);
    
      const data = await response.json();
    
      if (response.status === 201) { // ✅ Success: HTTP 201 Created
        alert("Registration successful!");
        navigate("/");
      } else if (response.status === 400) { // ✅ Bad Request
        alert(`Error: ${data.message || "Invalid input!"}`);
      } else if (response.status === 409) { // ✅ Conflict (User already exists)
        alert(`Error: ${data.message || "User already registered!"}`);
      } else {
        alert(`Error ${response.status}: ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Registration failed due to network issues. Please try again later.");
    }
    
  };
  // State management
  const [isActive, setIsActive] = useState(false);
  const [isVoterFormGlassy, setIsVoterFormGlassy] = useState(false);
  const [isAdminFormGlassy, setIsAdminFormGlassy] = useState(true);
  // const [showPassword, setShowPassword] = useState({
  //   password: false,
  //   confirmPassword: false,
  // });

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
    setIsVoterFormGlassy(true);
    setIsAdminFormGlassy(false);
  };

  const handleBack = () => {
    setIsActive(false);
    setIsAdminFormGlassy(true);
    setIsVoterFormGlassy(false);
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
    <div className="voter">
      <div
        className={`voter-container ${isActive ? "active" : ""}`}
        id="vote-container"
      >
        <div
          className={`form-container Voter-out ${
            isVoterFormGlassy ? "glassy" : ""
          }`}
          id="Voter-form"
        >
          <form onSubmit={handleSubmit}>
            <h1>VOTER REGISTRATION</h1>
            {/* <div className="input-box acc">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="username"
                  id="Voter-username"
                  placeholder="Username"
                  maxLength="20"
                />
                <i className="fa fa-user" id="icon-1"></i>
              </div>
            </div> */}

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="email"
                  name="email"
                  id="Voter-email"
                  placeholder="Email ID"
                  required
                  onInput={handleEmailValidation}
                  value={formData.email}
                  onChange={handleChange}
                />
                <i className="fa fa-envelope"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type={showPassword.password ? "text" : "password"}
                  name="password"
                  id="Voter-password"
                  placeholder="Password"
                  maxLength="10"
                  onInput={handlePasswordValidation}
                  value={formData.password}
                  onChange={handleChange}
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
              <div className="input-voter-container">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  id="Voter-confirmpassword"
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
          className={`form-container Voter-in ${
            isAdminFormGlassy ? "glassy" : ""
          }`}
          id="admin-form"
        >
          <form>
            <h1>VOTER REGISTRATION</h1>
            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="name"
                  id="Voter-username"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <i className="fa fa-user"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="idNo"
                  id="Voter-id"
                  placeholder="ID No."
                  required
                  value={formData.idNo}
                  onChange={handleChange}
                  onInput={handleIdValidation}
                />
                <i className="fa fa-lock"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <select
                  name="branch"
                  id="Voter-branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                >
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
              <div className="input-voter-container">
                <select
                  name="year"
                  id="Voter-year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Studying Year</option>
                  <option value="E-01">E-01</option>
                  <option value="E-02">E-02</option>
                  <option value="E-03">E-03</option>
                </select>
              </div>
            </div>

            {/* <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="otp"
                  id="Voter-otp"
                  placeholder="Enter OTP"
                  maxLength="6"
                  required
                />
                <i className="fa-solid fa-key" id="key-icon"></i>
                <button id="voter-btn-otp">Send OTP</button>
              </div>
              
            </div> */}

            {/* <div className="input-box">
              <div className="input-voter-container">
                <span className="country-code">+91 </span>
                <input
                  type="tel"
                  name="phone"
                  id="Voter-phone"
                  placeholder="  Phone number"
                  maxLength="10"
                  required
                />
                <i className="fa fa-phone"></i>
              </div>
            </div> */}

            <div className="input-box-Gender">
              <h4 className="Heading-four">Gender: </h4>
              <div className="Gender-options">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                  />
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
              <p>Switch to register as Voter in elections.</p>
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

export default Voter;
