import React from "react";
import "./ResultCard.css";
const ResultCard = ({ image, name, details }) => {
  return (
    <div className="result-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{details}</p>
    </div>
  );
};

export default ResultCard;
