import React from "react";
const WinnerCard = ({ rank, name, id, position}) => {
  return (
    <div className="winner-card">
      <div className="rank">{rank}</div>
      <img src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${id}.jpg`} alt={name} className="winner-image" />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Position: {position}</p>
    </div>
  );
};

export default WinnerCard;
