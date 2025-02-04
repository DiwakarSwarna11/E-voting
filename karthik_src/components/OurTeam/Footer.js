import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFooter(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={showFooter ? "show-footer" : ""}>
      
      <div className="footer-icons">
        <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope" id="icon-seven"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" id="icon-one"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" id="icon-four"></i>
        </a>
        <a href="tel:+1234567890">
          <i className="fas fa-phone" id="icon-six"></i>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp" id="icon-five"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" id="icon-two"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" id="icon-three"></i>
        </a>
      </div>
      <p className="copyright">&copy; 2025 DigiDemo's. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
