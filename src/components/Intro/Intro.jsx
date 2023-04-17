import React, { useContext } from "react";
import "./Intro.css";

import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";


import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Ayush</span>
          <span>
           A Frontend developer, utilizing my knowledge of HTML, CSS ,JavaScript  and ReactJs to develop innovative and user-friendly web applications. I am passionate about creating responsive designs and constantly improving my skills to stay up-to-date with the latest technologies and trends in web development. I am a team player with strong communication skills and a desire to collaborate with others to create exceptional digital experiences.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href ="https://github.com/ayushlpu2024">
          <img src={Github} alt="" /></a>
          <a href ="https://www.linkedin.com/in/ayush--/">
          <img src={LinkedIn} alt="" /></a>
          <a href ="https://www.instagram.com/ayush_rama/">
          <img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

      

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
