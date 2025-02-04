// Team.js
import React from "react";
import TeamCard from "./TeamCard";
import memberImage from "./member.png"; // Importing the image
import "./Team.css";

const teamMembers = [
  { name: "Nancy", title: "Scrum manager", imgSrc: memberImage },
  { name: "Alexa", title: "Full Stack Developer", imgSrc: memberImage },
  { name: "Sasha", title: "Product Manager", imgSrc: memberImage },
  { name: "Sunny", title: "Web Developer", imgSrc: memberImage },
  { name: "Tony", title: "Web Developer", imgSrc: memberImage },
  { name: "Sony", title: "Web Developer", imgSrc: memberImage },
];

const Team = () => {
  return (
    <section className="team-section">
      <h1 className="heading">OUR TEAM</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
