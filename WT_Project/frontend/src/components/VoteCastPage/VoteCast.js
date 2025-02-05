import React, { useState } from "react";
import Card from "./Card";
import Data from "./Data";
import "./CardStyles.css";
import "./VoteCastStyles.css";

function VotingPage() {
  const [search, setSearch] = useState("");
  const [votedCandidate, setVotedCandidate] = useState(null); // State to store voted candidate

  // Handle voting action
  const handleVote = (candidateName) => {
    setVotedCandidate(candidateName); // Update the voted candidate
  };

  return (
    <>
      <h1 id="heading9">Candidates List</h1>
      <div id="searchdiv">
        <div id="searchbar">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Candidate name🔍"
          />
          <div className="search-icon">
            <i className="fa-solid"></i>
          </div>
        </div>
      </div>

      <div className="cardsContainer">
        {Data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <Card
            key={item.id}
            img={item.img}
            name={item.name}
            id={item.id}
            year={item.year}
            branch={item.branch}
            disabled={votedCandidate && votedCandidate !== item.name} // Disable all other cards except the voted one
            handleVote={handleVote} // Pass the handleVote function to Card
            isVoted={votedCandidate === item.name} // Check if this card is voted
          />
        ))}
      </div>
    </>
  );
}

export default VotingPage;
