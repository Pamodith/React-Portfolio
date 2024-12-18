
import NavBar from "../components/NavBar";
import "../assets/styles/sass/homepage/_homepage.scss";
import HeroImage from '../assets/images/2.png';
import SmallscreenHeroImage from '../assets/images/Pamodith(1).png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CV from '../assets/pdfs/Pamodith_CV.pdf';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const socialMedia = [
  { component: LinkedInIcon, label: 'LinkedIn', link: 'https://www.linkedin.com/in/pamodith-maduwantha/' },
  { component: GitHubIcon, label: 'GitHub', link: 'https://github.com/Pamodith' },
  { component: InstagramIcon, label: 'Instagram', link: 'https://www.instagram.com/pamodith.69/' }
];

// Animation variants for the left section
const leftSectionVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

// Animation variants for the right section
const rightSectionVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const HomePage = () => {
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
  // const [dragMessage, setDragMessage] = useState("Not feeling it? Just drag me aside 😉");
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]);

  // const handleDragEnd = (info: any) => {
  //   if (Math.abs(info.point.x) > 200) {
  //     setDragMessage("Okay then, I'll try another image.😒");
  //   } else {
  //     x.set(0);
  //   }
  // };

  return (
    <div className="homepage">
      <NavBar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="homepage-outer">
          <motion.div
            className="homepage-inner-left"
            variants={leftSectionVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="homepage-inner-left-title">
              <div className="first">Hi, I am</div>
              <h1 className="second">Pamodith Maduwantha</h1>
              <h5 className="third">Front-end Developer / BSc(Hons) Computer Science</h5>
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
                  className="download-cv-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const newTab = window.open(CV, "_blank", "noopener,noreferrer");
                    const link = document.createElement("a");
                    link.href = CV;
                    link.download = "Pamodith_CV.pdf"; // Specify the file name
                    document.body.appendChild(link); // Append the link to the document
                    link.click(); // Programmatically click the link to start download
                    document.body.removeChild(link); // Remove the link element

                    // Ensure the new tab is focused
                    if (newTab) {
                      newTab.focus();
                    }
                  }}
                >
                  Download my CV
                </a>

              </div>
            </div>
          </motion.div>
          <motion.div
            className="homepage-inner-right"
            variants={rightSectionVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              src={isSmallScreen ? SmallscreenHeroImage : HeroImage}
              alt="Pamodith Maduwantha"
              className="hero-image"
              style={{ x, opacity }}
              drag="x"
              dragConstraints={{ left: -300, right: 300 }}
              dragElastic={0.5}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
