import React from "react";
import "./CardStyles.css";

function Card(props) {
  const voteButtonClass = props.isVoted
    ? "voted" // Green color for the voted candidate
    : props.disabled
    ? "disabled" // Red color for the disabled candidates
    : "vote"; // Default color for available candidates

  return (
    <div className="card">
      <img
        src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${props.id}.jpg`}
        alt="Candidate profile picture"
        id="img-id"
      />
      <div id="card-details">
        <p className="card-name">{props.name}</p>
        <p>
          {props.id},<span>{props.year}</span>,<span>{props.branch}</span>
        </p>
      </div>
      <div>
        <button
          className={voteButtonClass}
          disabled={props.disabled}
          onClick={() => props.handleVote(props.name)}
        >
          {props.isVoted ? "Voted" : "Vote"}
        </button>
      </div>
    </div>
  );
}

export default Card;