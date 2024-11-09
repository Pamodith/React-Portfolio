import React from "react";
import NavBar from "../components/NavBar";
import Availability from "../components/Availability";
import "../assets/styles/sass/homepage/_homepage.scss";
import BackgroundVideo from '../assets/videos/7319401-uhd_4096_2160_25fps.mp4';
import Footer from "../components/Footer";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="homepage">
     {/* Background video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="homepage-background-video"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      
      {/* Overlay content */}
      <NavBar />
      <div className="homepage-outer">
        <div className="homepage-inner-left">
          {/* Content goes here */}
        </div>
        <div className="homepage-inner-right">
          {/* <Card content = { 'Hey, I am a Web Developer'} cardClassName='introcard'/> */}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
