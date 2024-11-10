import React from "react";
import NavBar from "../components/NavBar";
import Availability from "../components/Availability";
import "../assets/styles/sass/homepage/_homepage.scss";
import BackgroundVideo from "../assets/videos/7319401-uhd_4096_2160_25fps.mp4";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HeroImage from '../assets/images/FullSizeRender (1)-Photoroom.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMedia = [
  { component: LinkedInIcon, label: 'LinkedIn' , link:'https://www.linkedin.com/in/pamodith-maduwantha/' },
  { component: GitHubIcon, label: 'GitHub' ,link:'https://github.com/Pamodith'},
  { component: InstagramIcon, label: 'Instagram' , link:'https://www.instagram.com/pamodith.69/' }
];
const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-outer">
        <div className="homepage-inner">
        <div className="homepage-inner-left">
          <div className="homepage-inner-left-title">
            <div className="first">Hi,I am</div>
            <h1 className="second">Pamodith Maduwantha</h1>
            <div className="third">Front-end Developer</div>
            <div className="social-media">
            {socialMedia.map((item)=> <a style={{color:'black'}} href={item.link} target="_blank"><div className="social-media-icons"><item.component/></div></a> )}
            </div>
            
          </div>
        </div>
          <div className="homepage-inner-right">
          <img src={HeroImage} alt="" className="hero-image"/>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
