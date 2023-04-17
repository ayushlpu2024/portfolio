import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import New from "../../img/new.png";
import Quiz from "../../img/quiz.png";

import Todolist from "../../img/todolist.png";
import { themeContext } from "../../Context";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="Projects-slider"
      >
        <SwiperSlide>
          <img src={New} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Quiz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Todolist} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Projects;
