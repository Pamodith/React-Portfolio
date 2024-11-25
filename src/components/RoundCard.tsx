import React, { useRef, useState , useEffect, Dispatch, SetStateAction } from "react";
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
import { ExperienceProp } from "../types/interface";
import fatbeehive from '../assets/images/fatbeehive-Photoroom.png'
import alphabeticalIT from '../assets/images/alphabetical_it_cover-Photoroom.png'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import { useTypewriter, Cursor } from 'react-simple-typewriter';



const transitionVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const spring = {
  type: "spring",
  damping: 30,
  stiffness: 300
};

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
  const [isSkills, setIsSkills] = useState(skills);
  const [text] :any = useTypewriter({
    words: [
      "Experienced Software Developer, specializing in crafting immersive user experiences with React.js, TypeScript, and SCSS. With two years of hands-on experience, I'm diving into the MERN stack to deepen my expertise. Passionate about using technology to tackle real-world challenges, I'm on a mission to make meaningful contributions. I bring a relentless drive for innovation and commitment to code excellence. Let's build something extraordinary together."
    ],
    loop: 0, 
    typeSpeed: 10, 
    deleteSpeed: 0, 
    delaySpeed: 10000, 
  });
  
  const nextIndex = () => {
    setCurrentIndex((currentstate) => (currentstate + 1) % projects.length)
  }

  const prevIndex = () => {
    setCurrentIndex((prevState) => (prevState - 1 + projects.length) % projects.length)
  }
  

  useEffect(() => {
    setTimeout(() => setIsSkills(shuffle(isSkills)), 3000);
  }, [isSkills]);

  const experiences: ExperienceProp[] = [
    {
      titleName: "Fatbeehive - London",
      year: "2024-Present",
      jobTitle: ["Front-end Developer"],
      description: `
        Specializes in JavaScript and SCSS, primarily focusing on bug fixing and enhancements in web
  applications developed using React.js, particularly in the context of the DIVI framework. Adept at
  leveraging SASS for clean, maintainable styling and resolving issues to improve application performance
  and user experience.
  
      `,
      languages: ["HTML", "CSS", "JavaScript", "jQuery"],
      Image: fatbeehive,
    },
    {
      titleName: "Alphabetical IT - Houston Tx(Remote)",
      year: "2022-2024",
      jobTitle: ["Front-end Developer", "Trainee Front-end Developer"],
      description: `
        Proficient in developing dynamic web applications utilizing React.js, Redux, and JavaScript. Experienced
  in creating user-friendly interfaces with Material-UI (MUI) and styling components using SCSS. Committed
  to delivering high-quality, maintainable code and enhancing user experience through responsive design
  and efficient state management
      `,
      languages: ["JavaScript", "HTML", "CSS", "React", "SCSS"],
      Image: alphabeticalIT,
    },
  ];

  const handleContent = (props: { componentName: string, setAlert: Dispatch<SetStateAction<boolean>> }) => {
    

    const form: any = useRef();

    const sendEmail = (e: any) => {
      e.preventDefault();
      emailjs
        .sendForm('service_sw6yhsf', 'template_acm135n', form.current, {
          publicKey: 'PQMwy8MMCewH0aZAP',
        })
        .then(
          () => {
            props.setAlert(true);
            setTimeout(() => {
              props.setAlert(false);
            }, 5000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    switch (props.componentName) {
      case "experience":
        const currentExperienceIndex = experiences[currentIndex]
        return (
          
              <div className="experience-container">
                <div className="experience-content" >
                  <div className="experience-content-left">
                    <div className="experience-content-left-heading">
                      <div className="title">
                        {currentExperienceIndex.jobTitle.map((item) =>
                          <div className="title-jobname">
                            {item}
                          </div>
                        )}

                      </div>
                      <div className="year">
                        {currentExperienceIndex.year}
                      </div>
                    </div>
                    <div className="description">{currentExperienceIndex.description}</div>
                    <div className="languages">
                      {currentExperienceIndex.languages.map((item) =>
                        <div className="languages-circle">
                          {item}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="experience-content-right">
                    <div className="companyName">{currentExperienceIndex.titleName}</div>
                    <img src={currentExperienceIndex.Image} />
                  </div>
                </div>
              </div>
           
        );
      case "contact":
        return (
          <>
              
                <form ref={form} onSubmit={sendEmail}>
                  <div className="contactme-container">
                    <div className="contactme-content" >
                      <div className="contactme-content-left">
                        <div className="contactme-content-left-text">
                          <label className="contactme-content-left-text-lable">Name</label>
                          <input className="contactme-content-left-text-input" type="text" name="user_name" placeholder="Please add your name" required/>
                        </div>
                        <div className="contactme-content-left-email">
                          <label className="contactme-content-left-email-lable" >Email</label>
                          <input className="contactme-content-left-email-input" type="email" name="user_email" placeholder="Add your email"  required/>
                        </div>
                        {/* {alert ? <Alert className="contactme-content-left-alert" severity="success">Message sent successfuly.</Alert> : ''} */}
                      </div>
                      <div className="contactme-content-right">
                        <div className="contactme-content-right">
                          <label className="contactme-content-right-lable">Message</label>
                          <textarea className="contactme-content-right-textarea" name="message" required/>
                          <input className="contactme-content-right-input" type="submit" value="Send" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              
          </>

        );
      case "projects":
        const currentProjectIndex = projects[currentIndex]
        return (
          <>

            
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
             
          </>
        );
      default:
        return (
          <div className="default-content">
            <div className="default-content-left">
              {text}
              <Cursor/>
            </div>
            <div className="default-content-right">
              <div className="title">Professional Skills :</div>
              <div className="skills">
                {isSkills.map((item) => (
                  <motion.li style={{listStyle:'none'}} key={item.name} layout transition={spring}>
                    <img src={item.logo} alt={item.name} />
                  </motion.li>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {props.componentName === "experience" || props.componentName === "projects" ? (
        <div className="roundcard-container">
          {/* Left Navigation */}
          <div className="roundcard-nav-left" onClick={prevIndex}>
            <img src={left} alt="Previous" />
          </div>

          {/* Animated Carousel */}
          <motion.div
            key={currentIndex} // Helps Framer Motion detect content change
            className="roundcard-outer"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="roundcard-inner">{handleContent({
              componentName: props.componentName || '',
              setAlert: props.setAlert
            })}</div>
          </motion.div>

          {/* Right Navigation */}
          <div className="roundcard-nav-right" onClick={nextIndex}>
            <img src={right} alt="Next" />
          </div>
        </div>
      ) : (
        <div className="roundcard-container">
        <div className="roundcard-outer">
          <div className="roundcard-inner">{handleContent({
            componentName: props.componentName || '',
            setAlert: props.setAlert
          })}</div>
        </div>
        </div>
      )}

    </>
  );
  
};

export default RoundCard;
