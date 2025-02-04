import React, { useState } from "react";
import "./VoterStyles.css";
import axios from "axios";

function Voter() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/send-otp", { email });
      setStep(2);
      alert("OTP sent to your email!");
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
      alert(res.data.message);
    } catch (error) {
      alert("Invalid OTP");
    }
  };
  // State management
  const [isActive, setIsActive] = useState(false);
  const [isVoterFormGlassy, setIsVoterFormGlassy] = useState(false);
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
      /^(?=.[a-z])(?=.[A-Z])(?=(.*[^a-zA-Z0-9]){2,}).{6,}$/;
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
      <div className={voter-container ${isActive ? "active" : ""}} id="vote-container">
        <div
          className={`form-container Voter-out ${
            isVoterFormGlassy ? "glassy" : ""
          }`}
          id="Voter-form"
        >
          <form>
            <h1>VOTER REGISTRATION</h1>
            <div className="input-box acc">
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
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type={showPassword.password ? "text" : "password"}
                  name="userpassword"
                  id="Voter-password"
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
                  name="username"
                  id="Voter-username"
                  placeholder="Name"
                  required
                />
                <i className="fa fa-user"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <input
                  type="text"
                  name="idnum"
                  id="Voter-id"
                  placeholder="ID No."
                  required
                  onInput={handleIdValidation}
                />
                <i className="fa fa-lock"></i>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
                <select name="branch" id="Voter-branch" required>
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
                <select name="year" id="Voter-year" required>
                  <option value="">Select Studying Year</option>
                  <option value="E-01">E-01</option>
                  <option value="E-02">E-02</option>
                  <option value="E-03">E-03</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
              {step === 1 && (
        <>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                  name="email"
                  id="Voter-email"
                  placeholder="Email ID"
                  required
                  onInput={handleEmailValidation} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}
              </div>
            </div>

            <div className="input-box">
              <div className="input-voter-container">
              {step === 2 && (
        <>
          
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} name="otp"
                  id="Voter-otp"
                  placeholder="Enter OTP"
                  maxLength="6"
                  required
 />
          <button onClick={verifyOtp} >Verify OTP</button>
        </>
      )}
                
              </div>
              
            </div>

            <div className="input-box">
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