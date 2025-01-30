import React, { useState } from "react";
import Card from "./card";
import Data from "./data"; // Assuming Data is an array of objects with `img` and `name` properties
import "./card.css";
import "./VotingPage.css";

function VotingPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <h1 id="heading">Candidates List</h1>
      <div id="searchdiv">
        <label for="search"> Search : </label>
        <div id="searchbar">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Candidate name"
          ></input>
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="cardsContainer">
        {Data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <Card img={item.img} name={item.name} {...item} />
        ))}
      </div>
    </>
  );
}

export default VotingPage;
