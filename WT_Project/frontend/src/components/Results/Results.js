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
          name="Tejesh"
          id="N210594"
          position="President"
        />
        <WinnerCard
          rank="2nd"
          name="Nagamani"
          id="N210101"
          position="Vice President"
          image="./diwakar.png"
        />
        <WinnerCard
          rank="3rd"
          name="Maruthi"
          id="N210379"
          position="Vice President"
        />
        <WinnerCard
          rank="4th"
          name="Siddartha"
          id="N210023"
          position="Secretary"
        />
      </div>
    </div>
  );
};

export default Results;
