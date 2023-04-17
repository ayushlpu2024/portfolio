import React from "react";
import "./Certification.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Certification = () => {
  const clients = [
    {
      img: profilePic1,
      
      review:
      
        "Esports in India ---Esports in India is a booming industry, driven by the country's youth population and growing access to gaming devices. The Indian Gaming League and other tournaments have attracted top teams and players, while content creators and investors have helped popularize the industry. However, challenges remain, such as a lack of infrastructure and regulatory framework.",
    },
    {
      img: profilePic2,
      review:
        "The Future of Remote Work--With many businesses shifting to remote work in the wake of the COVID-19 pandemic, this blog post could explore the future of remote work and discuss the benefits and challenges of working from home.",
      },
    {
      img: profilePic3,
      review:
        "If the Indian Rupee were to equal the US Dollar, it would have a significant impact on the Indian economy. While Indian exporters would benefit from increased competitiveness, imports would become more expensive, leading to higher prices for goods and services. The effects on foreign investment, inflation, and overall economic growth would also need to be considered.",
    },
    {
      img: profilePic4,
      review:
        "Life of a Web developer ?? The typical day of a web developer requires meeting with clients and/or management to discuss website needs, writing code using programming languages, testing applications and interfaces, and working with other team members to determine website layout.",
    },
  ];

  return (
    <div className="t-wrapper" id="certification">
    
      <div className="t-heading">
        <span>Welcome to the </span>
        <span>Tiny Wonders </span>
        <span>...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="certification">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Certification;
