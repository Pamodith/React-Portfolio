import React, { useState } from "react";
import "../assets/styles/sass/roundcard/_roundcard.scss";
import { RoundCardProp } from "../types/type";
import css from '../assets/icons/css.svg';
import javaScript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import sass from '../assets/icons/sass.svg';
import html from '../assets/icons/html.svg';
import mui from '../assets/icons/material-ui-1.svg';
import next from '../assets/icons/nextjs.svg';
import node from '../assets/icons/nodejs.svg';
import mongodb from '../assets/icons/mongodb.svg';
import Atlas from '../assets/images/atlas.png'
import Landaid from '../assets/images/landaid.png'
import right from '../assets/images/arrow-right.png'
import left from '../assets/images/left-arrow.png'


const skills = [
  { name: 'React', logo: react },
  { name: 'JavaScript', logo: javaScript },
  { name: 'CSS', logo: css },
  { name: 'HTML', logo: html },
  { name: 'Sass', logo: sass },
  { name: 'Material UI', logo: mui },
  { name: 'Next.js', logo: next },
  { name: 'Node.js', logo: node },
  { name: 'MongoDB', logo: mongodb },
];

const projects = [
  { name: 'Atlas', Image: Atlas, content: ' At ATLAS World, I served as the lead front-end developer, responsible for creating dynamic, responsive interfaces that provide a seamless user experience across all devices. Utilizing TypeScript and Redux for state management, I implemented Material-UI (MUI) for consistent and modern styling. The project’s target audience spanned the entire country, so maintaining design precision and sharpness was crucial to ensure the interface met the needs of a diverse user base. My work focused on delivering a highly responsive and visually cohesive platform that provides users with an intuitive and engaging experience.' },
  { name: 'Landaid', Image: Landaid, content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

const RoundCard: React.FC<RoundCardProp> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextIndex = () => {
    setCurrentIndex((currentstate) => (currentstate + 1) % projects.length)
  }

  const prevIndex = () => {
    setCurrentIndex((prevState) => (prevState - 1 + projects.length) % projects.length)
  }

  const handleContent = () => {
    switch (props.componentName) {
      case "reviews":
        return (
          <div className="reviews-content">This is the Reviews section.</div>
        );
      case "contact":
        return (
          <div className="contactme-content">
            This is the Contact Me section.
          </div>
        );
      case "projects":
        const currentProjectIndex = projects[currentIndex]
        return (
          <>  
            
            <div className="roundcard-outer">
              <div className="roundcard-inner">
                <div className="projects-container">
                  <div className="projects-content" >
                    <div className="projects-content-left">
                    {currentProjectIndex.content}
                    </div>
                    <div className="projects-content-right">
                      <img src={currentProjectIndex.Image} alt={currentProjectIndex.name} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="default-content">
            <div className="default-content-left">
              Experienced Software Developer, specializing in crafting immersive
              user experiences with React.js, TypeScript, and SCSS. With two
              years of hands-on experience, I'm diving into the MERN stack to
              deepen my expertise. Passionate about using technology to tackle
              real-world challenges, I'm on a mission to make meaningful
              contributions. I bring a relentless drive for innovation and
              commitment to code excellence. Let's build something extraordinary
              together.
            </div>
            <div className="default-content-right">
              <div className="title">Professional Skills :</div>
              <div className="skills">
                {skills.map((item) => (
                  <img key={item.name} src={item.logo} alt={item.name} />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="roundcard-container">
  <div className="roundcard-nav-left" onClick={prevIndex}>
    <img src={left} alt="Previous" />
  </div>
  
  <div className="roundcard-outer">
    <div className="roundcard-inner">{handleContent()}</div>
  </div>

  <div className="roundcard-nav-right" onClick={nextIndex}>
    <img src={right} alt="Next" />
  </div>
</div>

  );
};

export default RoundCard;
