import React, { useState } from "react";
import reg from "./Login/register.svg";
import logo from "./Login/log.svg";

const Login1 = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [voterPassword, setVoterPassword] = useState("");
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [showVoterPassword, setShowVoterPassword] = useState(false);

  const handleSignUpClick = () => setIsSignUpMode(true);
  const handleSignInClick = () => setIsSignUpMode(false);

  const togglePasswordVisibility = (isAdmin) => {
    isAdmin
      ? setShowAdminPassword(!showAdminPassword)
      : setShowVoterPassword(!showVoterPassword);
  };

  const handleSubmit = (e, isAdmin) => {
    e.preventDefault();
    console.log(isAdmin ? "Admin login" : "Voter login");
  };

  return (
    <div
      className={`relative w-full h-screen bg-gradient-to-r from-[#0cd6fa] to-[#9cfa06] min-h-screen overflow-hidden ${
        isSignUpMode ? "sign-up-mode" : ""
      }`}
    >
      {/* Forms Container */}
      <div className="absolute w-full h-full top-0 left-0">
        <div
          className={`absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 transition-all duration-1000 ease-in-out grid grid-cols-1 z-5 ${
            isSignUpMode ? "left-1/4" : ""
          }`}
        >
          {/* Voter Login Form */}
          <form
            onSubmit={(e) => handleSubmit(e, false)}
            className={`flex flex-col items-center justify-center p-0 transition-all duration-200 ease-in-out overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 ${
              isSignUpMode ? "opacity-0 z-1" : "opacity-100 z-2"
            }`}
          >
            <h2 className="text-2.2rem text-gray-700 mb-2.5">VOTER LOGIN</h2>
            <div className="max-w-380 w-full bg-transparent border-2 border-white my-2.5 h-55 rounded-55 grid grid-cols-[15%_85%] p-0.4 relative hover:border-black">
              <i className="fas fa-user text-center leading-55 text-black transition duration-500 text-1.1rem"></i>
              <input
                type="text"
                placeholder="Username"
                className="bg-none outline-none border-none leading-1 font-semibold text-1.1rem text-gray-900"
              />
            </div>
            <div className="max-w-380 w-full bg-transparent border-2 border-white my-2.5 h-55 rounded-55 grid grid-cols-[15%_85%] p-0.4 relative hover:border-black">
              <i className="fas fa-lock text-center leading-55 text-black transition duration-500 text-1.1rem"></i>
              <input
                type={showVoterPassword ? "text" : "password"}
                placeholder="Password"
                value={voterPassword}
                onChange={(e) => setVoterPassword(e.target.value)}
                className="bg-none outline-none border-none leading-1 font-semibold text-1.1rem text-gray-900"
              />
              <i
                className={`fas ${
                  showVoterPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black`}
                onClick={() => togglePasswordVisibility(false)}
              ></i>
            </div>
            <button className="w-3/4 bg-[#55b4cc] border-none outline-none h-55 rounded-55 text-white uppercase font-semibold my-2.5 cursor-pointer transition duration-500">
              Login
            </button>
            <a href="participant_forgot_password.php" className="text-gray-700 text-sm mt-2">
              Forgot Your Password?
            </a>
          </form>

          {/* Admin Login Form */}
          <form
            onSubmit={(e) => handleSubmit(e, true)}
            className={`flex flex-col items-center justify-center p-0 transition-all duration-200 ease-in-out overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 ${
              isSignUpMode ? "opacity-100 z-2" : "opacity-0 z-1"
            }`}
          >
            <h2 className="text-2.2rem text-gray-700 mb-2.5">ADMIN LOGIN</h2>
            <div className="max-w-380 w-full bg-transparent border-2 border-white my-2.5 h-55 rounded-55 grid grid-cols-[15%_85%] p-0.4 relative hover:border-black">
              <i className="fas fa-envelope text-center leading-55 text-black transition duration-500 text-1.1rem"></i>
              <input
                type="email"
                placeholder="Email"
                className="bg-none outline-none border-none leading-1 font-semibold text-1.1rem text-gray-900"
              />
            </div>
            <div className="max-w-380 w-full bg-transparent border-2 border-white my-2.5 h-55 rounded-55 grid grid-cols-[15%_85%] p-0.4 relative hover:border-black">
              <i className="fas fa-lock text-center leading-55 text-black transition duration-500 text-1.1rem"></i>
              <input
                type={showAdminPassword ? "text" : "password"}
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="bg-none outline-none border-none leading-1 font-semibold text-1.1rem text-gray-900"
              />
              <i
                className={`fas ${
                  showAdminPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black`}
                onClick={() => togglePasswordVisibility(true)}
              ></i>
            </div>
            <button className="w-3/4 bg-[#55b4cc] border-none outline-none h-55 rounded-55 text-white uppercase font-semibold my-2.5 cursor-pointer transition duration-500">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Panels Container */}
      <div className="absolute h-full w-full top-0 left-0 grid grid-cols-2">
        {/* Left Panel */}
        <div
          className={`flex flex-col items-end justify-around text-center z-6 p-3rem-17%-2rem-12% ${
            isSignUpMode ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <div className="text-white transition-transform duration-900 ease-in-out delay-600">
            <h3 className="font-semibold leading-1 text-1.5rem">Are you Admin?</h3>
            <p className="text-0.95rem p-0.7rem-0">
              If yes, click below to enter the Admin Login portal.
            </p>
            <button
              className="bg-none border-2 border-white w-130 h-41 font-semibold text-0.8rem text-white"
              onClick={handleSignUpClick}
            >
              Login
            </button>
          </div>
          <img src={logo} className="w-full h-full transition-transform duration-1100 ease-in-out delay-400" alt="" />
        </div>

        {/* Right Panel */}
        <div
          className={`flex flex-col items-end justify-around text-center z-6 p-3rem-12%-2rem-17% ${
            isSignUpMode ? "pointer-events-all" : "pointer-events-none"
          }`}
        >
          <div className="text-white transition-transform duration-900 ease-in-out delay-600">
            <h3 className="font-semibold leading-1 text-1.5rem">Are you Voter?</h3>
            <p className="text-0.95rem p-0.7rem-0">
              If yes, click below to enter the Voter Login portal.
            </p>
            <button
              className="bg-none border-2 border-white w-130 h-41 font-semibold text-0.8rem text-white"
              onClick={handleSignInClick}
            >
              Login
            </button>
          </div>
          <img src={reg} className="w-full h-full transition-transform duration-1100 ease-in-out delay-400" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login1;