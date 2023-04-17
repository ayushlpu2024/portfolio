import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import GFG from "../../img/gfg.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Done Training  With These
          </span>
          <span>Platforms</span>
          <spane>
            <h1 >Data Structure and Algorithm | GFG</h1>
            During this training enhanced the data structures and algorithms <br/>
            skills to solve real life 
            problems with more efficient<br/> ways and process the data in a meaningful sense.
            <br />
           <br></br>
           <h1>React | Coding Ninja</h1>
            
            During this training enhanced the html,css ,Js and react  <br/>
            skills to built attractive user interface
             in more efficient<br/> ways.
            <br />
            <br></br>
           <h1>DevOps | Programming Pathshala</h1>
           During this training enhanced my technical skills for deploying,<br/> managing and 
monitoring cloud applications on AWS <br/>to review CI/CD pipelines and deployment 
methodologies.
            <br />
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Linkedin} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={GFG} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
