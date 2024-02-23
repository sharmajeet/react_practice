import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <>
      <div className="services">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          interval={3000}
          showArrows={false}
          showThumbs={false}
          // showIndicators={false}
        >
          <div>
            <img src={img1} alt="Item1" />
            <p className="legend">Full Stack</p>
          </div>
          <div>
            <img src={img2} alt="Item1" />
            <p className="legend">Peer To Peer Support</p>
          </div>
        </Carousel>
      </div>
      {/* <div className="detail" style={{textAlign:"center" , marginTop:'3rem' , color:"dark-gray" , }}>
        <h2> Customized Development</h2>
        <h2> Mobile Excellence</h2>
        <h2>E-commerce Prowess</h2>
        <h2> UI/UX Brilliance</h2>
        <h2> Digital Transformation</h2>
      </div> */}
    </>
  );
};

export default Services;
