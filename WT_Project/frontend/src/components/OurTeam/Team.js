// Team.js
import React from "react";
import TeamCard from "./TeamCard";
import memberImage from "./member.png"; // Importing the image
import "./Team.css";

const teamMembers = [
  { name: "Diwakar", title: "Scrum manager", id:"N210242" },
  { name: "Karthik", title: "Full Stack Developer",id:"N210803" },
  { name: "Siddartha", title: "Product Manager", id:"N210023" },
  { name: "Aditya", title: "Web Developer", id:"N210435" },
  { name: "Farhana", title: "Web Developer", id:"N210459" },
  { name: "Manoj", title: "Web Developer", id:"N210519" },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            id={member.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
