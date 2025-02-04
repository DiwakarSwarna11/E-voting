import React from "react";
const WinnerCard = ({ rank, name, id, position, image }) => {
  return (
    <div className="winner-card">
      <div className="rank">{rank}</div>
      <img src={image} alt={name} className="winner-image" />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Position: {position}</p>
    </div>
  );
};

export default WinnerCard;
