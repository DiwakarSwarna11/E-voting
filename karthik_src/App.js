// src/App.js
import React, { useState } from "react";
import Footer from "./components/OurTeam/Footer";
import Voter from "./components/VoterReg/VoterRegistration";
import Login from "./components/Login/Login";
import Contactbody from "./components/Contact/Contactbody";
import Candidate from "./components/CandidateReg/CandidateRegistration";
import Team from "./components/OurTeam/Team";
import Home from "./components/Home/Home";
import VoteCast from "./components/VoteCastPage/VoteCast";
import Results from "./components/Results/Results";
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  const toggleRegisterDropdown = () => {
    setShowRegisterDropdown((prevState) => !prevState);
  };

  return (
    <div className="app-header-container">
      <header className="App-header">
        <h1>DigiDemo's</h1>
        <nav>
          <ul>
            <li>
              <button>
                <Link to="/" className="link1">
                  Home
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/Team" className="link2">
                  Our Team
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/VoteCast" className="link3">
                  Vote
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/Contact" className="link5">
                  Contact Us
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/Results" className="link4">
                  Result
                </Link>
              </button>
            </li>
            <li style={{ position: "relative" }}>
              {/* Register button toggles the dropdown */}
              <button onClick={toggleRegisterDropdown} className="link5">
                Register
              </button>
              {showRegisterDropdown && (
                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "rgba(15, 0, 102, 0.9)",
                    border: "1px solid #ccc",
                    zIndex: 9000,
                    minWidth: "120px",
                    color:"white"
                  }}
                >
                  <Link
                    to="/Votereg"
                    style={{
                      display: "block",
                      padding: "10px",
                      color: "white",
                      textDecoration:"none",
                      size:"20px"
                   
                     
                    }}
                    onClick={() => setShowRegisterDropdown(false)}
                  >
                   <h4> Voter</h4>
                  </Link>
                  <Link
                    to="/CandidateReg"
                    style={{
                      display: "block",
                      padding: "10px",
                      color: "white",
                      textDecoration: "none"
                    }}
                    onClick={() => setShowRegisterDropdown(false)}
                  >
                    <h4>Candidate</h4>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <button>
                <Link to="/Login" className="link6">
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

const App = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/send-otp", { email });
      setStep(2);
      alert("OTP sent to your email!");
    } catch (error) {
      alert("Error sending OTP: " + error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
      alert(res.data.message);
    } catch (error) {
      alert("Invalid OTP: " + error.response.data.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/VoteCast" element={<VoteCast />} />
          <Route path="/Contact" element={<Contactbody />} />
          <Route path="/Votereg" element={<Voter />} />
          <Route path="/CandidateReg" element={<Candidate />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Results" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      {step === 1 && (
        <>
          <h2>Enter Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </>
  );
};

export default App;
