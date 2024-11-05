import React from "react";
import NavBar from "../components/NavBar";
import Availability from "../components/Availability";
import Heroimage from '../assets/styles/images/FullSizeRender.jpg';
import "../assets/styles/sass/homepage/_homepage.scss";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-outer">
        <div className="homepage-inner-left">
          <div className="hero">
            <img src={Heroimage} alt="Hero Image" className="hero-image" />
            <div className="circular-text">
              <svg viewBox="0 0 300 300">
                <defs>
                  <path id="text-path" d="M 150, 150 m -120, 0 a 120, 120 0 1,1 240,0 a 120, 120 0 1,1 -240,0" />
                </defs>
                <text>
                  <textPath href="#text-path" startOffset="0%">
                  - Hi! I’m Pamodith, a Front-end Developer passionate about crafting dynamic user experiences.- Pamodith42@gmail.com. -
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="homepage-inner-right">
          <Availability />
        </div>
      </div>
    </>
  );
};

export default HomePage;
