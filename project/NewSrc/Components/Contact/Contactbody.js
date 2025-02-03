import React from "react";
import "./ContactStyle.css";
import ev from "./ev.png";
import person from "./person123.jpg";
import eligo from "./eligo.png";
import pp from "./pp.jpg";

function Contact() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="contact">
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-head">Get in Touch with US</h1>
            <p>We're here to help you</p>
          </div>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-icon-grid">
          <div className="contact-icon-item">
            <i className="fas fa-map-marker-alt" id="one"></i>
            <h3>Visit Us</h3>
            <p>Nuzvid</p>
            <p>RGUKT students</p>
          </div>
          <div className="contact-icon-item">
            <i className="fas fa-phone" id="one"></i>
            <h3>Call Us</h3>
            <p>+91 7893489771</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>
          <div className="contact-icon-item">
            <i className="fas fa-envelope" id="one"></i>
            <h3>Email Us</h3>
            <p>info@edupit.com</p>
            <p>NXXXXXX@rguktn.ac.in</p>
          </div>
        </div>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2 className="contact-Head2">Send us a Message</h2>
              <form id="contactForm">
                <div className="contact-form-group">
                  <label htmlFor="name" className="Contact-label">Full Name</label>
                  <input type="text" id="name"  placeholder="username" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="file" className="Contact-label">File</label>
                  <input type="file" id="contact-file" className="contact-file-input" required />
                  <label htmlFor="contact-file" className="contact-file-label" >Choose File</label>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message" className="Contact-label">Your Message</label>
                  <textarea id="contact-message" required placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" class="contact-message">Send Message</button>
              </form>
            </div>
            <div className="contact-image">
              <img src={person} alt="Contact illustration" />
            </div>
          </div>
        </section>

        <h1 className="contact-head">FOR MORE INFORMATION<br />eVoting</h1>
        <br />

        <div className="contact-image-cards">
          <div className="contact-card" onClick={() => openLink('https://right2vote.in/what-we-do/student-voting/college-elections/')}> 
            <img src={ev} alt="Education image 1" className="card" />
            <div className="contact-card-content">
              <h3>Explore more - Online Voting</h3>
              <p>right2vote.in</p>
            </div>
          </div>
          <div className="contact-card" onClick={() => openLink('https://eligovoting.com/universities/')}> 
            <img src={eligo} alt="Education image 2" className="contact-card" />
            <div className="contact-card-content">
              <h3>Explore more - Online Voting</h3>
              <p>eligovoting.com</p>
            </div>
          </div>
          <div className="contact-card" onClick={() => openLink('https://www.polyas.com/universities/university-elections/online')}> 
            <img src={pp} alt="Education image 3" className="contact-card" />
            <div className="contact-card-content">
              <h3>Explore more - Online Voting</h3>
              <p>polyas.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;