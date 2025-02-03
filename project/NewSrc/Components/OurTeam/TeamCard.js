//TeamCard.js
import React from "react";
import "./Team";

const TeamCard = ({ name, title, imgSrc }) => {
  return (
    <div className="team-card">
      <img src={imgSrc} alt={name} className="team-image" />  
      <h3>{name}</h3>
      <h4>{title}</h4>
      <div className="social-icons">
      <a href="https://instagram.com" target="_blank" className="icon" id="icon-1"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" className="icon" id="icon-3"><i class="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" className="icon" id="icon-4"><i class="fab fa-facebook"></i></a>
            <a href="https://github.com" target="_blank" className="icon" id="icon-2">
  <i class="fab fa-github"></i>
</a>

            <a href="https://in.linkedin.com/in/pandi-srinivas-siddartha-256767316" target="_blank" className="icon" id="icon-5"><i class="fab fa-linkedin fa-1.5x"></i></a>
            <a href="https://wa.me/919059533659" target="_blank" class="icon" id="icon-7"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  );
};

export default TeamCard;