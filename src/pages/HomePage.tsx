import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Availability from "../components/Availability";
import "../assets/styles/sass/homepage/_homepage.scss";
import BackgroundVideo from "../assets/videos/7319401-uhd_4096_2160_25fps.mp4";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HeroImage from '../assets/images/FullSizeRender (1)-Photoroom.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CV from '../assets/pdfs/Pamodith_Maduwantha_CV.pdf';
import { motion, useMotionValue, useTransform } from "framer-motion";


const socialMedia = [
  { component: LinkedInIcon, label: 'LinkedIn', link: 'https://www.linkedin.com/in/pamodith-maduwantha/' },
  { component: GitHubIcon, label: 'GitHub', link: 'https://github.com/Pamodith' },
  { component: InstagramIcon, label: 'Instagram', link: 'https://www.instagram.com/pamodith.69/' }
];

const HomePage = () => {
  const [dragMessage, setDragMessage] = useState("Not feeling it? Just drag me aside 😉");

  const handleDownloadClick = (event: any) => {
    const newTab: any = window.open(CV, '_blank');
    newTab.onload = () => {
      const link = document.createElement('a');
      link.href = CV;
      link.download = 'Pamodith_Maduwantha_CV.pdf';
      link.click();
    };
    event.preventDefault();
  };

  const x = useMotionValue(0); 
  const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]); 

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.point.x) > 200) {
      setDragMessage("Okay then, I'll try another image.😒");
    } else {
      x.set(0);
    }
  };


  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-outer">
        <div className="homepage-inner">
          <div className="homepage-inner-left">
            <div className="homepage-inner-left-title">
              <div className="first">Hi, I am</div>
              <h1 className="second">Pamodith Maduwantha</h1>
              <div className="third">Front-end Developer</div>
              <div className="social-media">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    style={{ color: 'black' }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-media-icons">
                      <item.component />
                    </div>
                  </a>
                ))}
              </div>
              <div className="fourth">
                <a
                  href={CV}
                  onClick={handleDownloadClick}
                  className="download-cv-button"
                >
                  Download my CV
                </a>
              </div>
            </div>
          </div>
          <div className="homepage-inner-right">
            <div className="homepage-inner-right-text">
            {dragMessage && (
              <p className="homepage-inner-right-text" style={{ position: 'absolute', top: '6%',  transform: 'translateX(30%)', color: 'white', fontSize: '13px' }}>
                {dragMessage}
              </p>
            )}
            </div>
            <motion.img
              src={HeroImage}
              alt="Pamodith Maduwantha"
              className="hero-image"
              style={{ x, opacity }}
              drag="x"
              dragConstraints={{ left: -300, right: 300 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
