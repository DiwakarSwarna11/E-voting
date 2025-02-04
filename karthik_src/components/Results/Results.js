import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WinnerCard from "./WinnerCard";
import "./WinnerCard.css";
// import Dashboard from "./Dashboard"; // Make sure to import the updated Dashboard
import "./Results.css";

const Results = () => {
  return (
    <div className="result-container">
      <header className="winner-header">
        <h1>Voting Results - Winners Announcement</h1>
        <p>Celebrating the winners who lead us to a brighter tomorrow.</p>
      </header>

      <div className="winners-containers">
        <WinnerCard
          rank="1st"
          name="John Doe"
          id="12345"
          position="President"
          image="/puppy.jpg"
        />{" "}
        <WinnerCard
          rank="1st"
          name="John Doe"
          id="12345"
          position="President"
          image="/puppy.jpg"
        />
        <WinnerCard
          rank="2nd"
          name="Jane Smith"
          id="67890"
          position="Vice President"
          image="/puppy.jpg"
        />
        <WinnerCard
          rank="3rd"
          name="Emily Davis"
          id="11223"
          position="Secretary"
          image="/puppy.jpg"
        />
        <WinnerCard
          rank="1st"
          name="John Doe"
          id="12345"
          position="President"
          image="/puppy.jpg"
        />
        <WinnerCard
          rank="4th"
          name="Michael Brown"
          id="44556"
          position="Treasurer"
          image="/puppy.jpg"
        />
      </div>

      {/* <footer className="footer">
        <p>© 2025 Voting System. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Results;
