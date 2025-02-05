import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DigiDemo's</h1>
        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button><Link to="/Team">Our Team</Link></button>
            </li>
            <li>
              <button>Vote</button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Registration</button>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
