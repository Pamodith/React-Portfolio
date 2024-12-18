import React, { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
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
import Atlas from '../assets/images/Atlas World (1).png'
import Landaid from '../assets/images/fatbeehive_projects.png'
import Qnet from '../assets/images/qnet.png'
import right from '../assets/images/arrow-right (1).png'
import smallscreenright from '../assets/images/arrow-right.png'
import left from '../assets/images/left-arrow.png'
import { ExperienceProp } from "../types/interface";
import fatbeehive from '../assets/images/fatbeehive-Photoroom.png'
import alphabeticalIT from '../assets/images/alphabetical_it_cover-Photoroom.png'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import { Link } from "react-router-dom";
// import { useTypewriter, Cursor } from 'react-simple-typewriter';



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
  { name: 'Atlas World',Link:'https://atlasworld.lk/', Image: Atlas, content: ' At Atlas World, I served as the lead front-end developer, crafting dynamic and responsive interfaces with TypeScript, Redux, and Material-UI (MUI). I focused on delivering a seamless user experience by ensuring design precision, sharpness, and consistency across all devices. With a nationwide target audience, my work emphasized creating an intuitive and visually cohesive platform that met the diverse needs of users while maintaining high performance and responsiveness.' },
  { name: '20+ International Projects',Link:'https://www.landaid.org/', Image: Landaid, content: ' I have contributed to the development and maintenance of over 20 UK-based web projects, including notable organizations such as LandAid, Dogstar Foundation, and Antibiotic Research UK. My primary role involved resolving bugs and optimizing functionality using Vanilla JavaScript and Sass, ensuring seamless user experiences and robust performance.' },
  { name: 'Q-Net Report (Sapphire)',Link:'https://www.qinfosys.com/index.html', Image: Qnet, content: "I played a key role in the development of Q-Net Report Sapphire, focusing on front-end features using React, Redux, and SCSS. I was responsible for designing and implementing new functionalities to enhance the platform's reporting and analysis capabilities. In addition, I addressed user feedback by fixing and improving user guides, ensuring a seamless and efficient user experience. I also worked on optimizing the performance of the platform, contributing to its scalability and smooth operation across various business levels."},
];

const RoundCard: React.FC<RoundCardProp> = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSkills, setIsSkills] = useState(skills);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const [text] :any = useTypewriter({
  //   words: [
  //     "Experienced Software Developer, specializing in crafting immersive user experiences with React.js, TypeScript, and SCSS. With two years of hands-on experience, I'm diving into the MERN stack to deepen my expertise. Passionate about using technology to tackle real-world challenges, I'm on a mission to make meaningful contributions. I bring a relentless drive for innovation and commitment to code excellence. Let's build something extraordinary together."
  //   ],
  //   loop: 0, 
  //   typeSpeed: 10, 
  //   deleteSpeed: 0, 
  //   delaySpeed: 10000, 
  // });
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
      languages: ["React", "SASS", "JavaScript", "jQuery"],
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
      languages: ["React","JavaScript", "Redux",  "SASS"],
      Image: alphabeticalIT,
    },
  ];

  const activeContent = props.componentName === "experience" ? experiences : projects;
  const nextIndex = () => {
    setCurrentIndex((currentstate) => (currentstate + 1) % activeContent.length)
  }

  const prevIndex = () => {
    setCurrentIndex((prevState) => (prevState - 1 + activeContent.length) % activeContent.length)
  }


  useEffect(() => {
    setTimeout(() => setIsSkills(shuffle(isSkills)), 3000);
  }, [isSkills]);



  const handleContent = (props: { componentName: string, setAlert?: Dispatch<SetStateAction<boolean>> }) => {


    const form: any = useRef();

    const sendEmail = (e: any) => {
      e.preventDefault();
      emailjs
        .sendForm('service_sw6yhsf', 'template_acm135n', form.current, {
          publicKey: 'PQMwy8MMCewH0aZAP',
        })
        .then(
          () => {
            if (props.setAlert) {
              props.setAlert(true);
              setTimeout(() => {
                if (props.setAlert) {
                  props.setAlert(false);
                }
              }, 5000);
            }
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
                      <input className="contactme-content-left-text-input" type="text" name="user_name" placeholder="Please add your name" required />
                    </div>
                    <div className="contactme-content-left-email">
                      <label className="contactme-content-left-email-lable" >Email</label>
                      <input className="contactme-content-left-email-input" type="email" name="user_email" placeholder="Add your email" required />
                    </div>
                    {/* {alert ? <Alert className="contactme-content-left-alert" severity="success">Message sent successfuly.</Alert> : ''} */}
                  </div>
                  <div className="contactme-content-right">
                    <div className="contactme-content-right">
                      <label className="contactme-content-right-lable">Message</label>
                      <textarea className="contactme-content-right-textarea" name="message" required />
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
                  <h1 className="project-title">{currentProjectIndex.name}</h1>
                    <div className="project-content">{currentProjectIndex.content}</div></div> 
                <div className="projects-content-right">
                  <Link className="projects-content-right-link" to={currentProjectIndex.Link}>
                  <img src={currentProjectIndex.Image} alt={currentProjectIndex.name} />
                  </Link>
                </div>
              </div>
            </div>

          </>
        );
      default:
        return (
          <div className="default-content">
            <div className="default-content-left">
              {/* {text}
              <Cursor/> */}
              Experienced Software Developer, specializing in crafting immersive user experiences with React.js, TypeScript, and SCSS. With two years of hands-on experience, I'm diving into the MERN stack to deepen my expertise. Passionate about using technology to tackle real-world challenges, I'm on a mission to make meaningful contributions. I bring a relentless drive for innovation and commitment to code excellence. Let's build something extraordinary together.
            </div>
            <div className="default-content-right">
              <div className="title">Professional Skills :</div>
              <div className="skills">
                {isSkills.map((item) => (
                  <motion.li style={{ listStyle: 'none' }} key={item.name} layout transition={spring}>
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
            <img src={isSmallScreen? smallscreenright : right} alt="Next" />
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
