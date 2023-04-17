import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      
      <div className="n-left">
        <div className="n-name">AYUSH</div>
        <Toggle />
      </div>
      
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" >
                Home
              </Link>
            </li>
            <li>
              <Link to="services">
                About
              </Link>
            </li>
            <li>
              <Link to="works" >
                Training
              </Link>
            </li>
            <li>
              <Link to="projects" >
                Projects
              </Link>
            </li>
            <li>
              <Link to="certification" >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" >
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
