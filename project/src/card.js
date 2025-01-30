import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Candidate profile picture" id="img-id" />
      <div id="card-details">
        <p className="card-name">{props.name}</p>
        <p>
          {props.id},<span>{props.year}</span>,<span>{props.branch}</span>
        </p>
      </div>
      <div>
        <button>Vote</button>
      </div>
    </div>
  );
}

export default Card;
