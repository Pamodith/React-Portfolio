import { motion } from "framer-motion";
import RoundCard from "../components/RoundCard";
import '../assets/styles/sass/aboutme/_aboutme.scss'
import NavBar from "../components/NavBar";


// Define animation variants for left-to-right and right-to-left
const leftToRight = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 100, damping: 25 },
};

const rightToLeft = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 100, damping: 25 },
};

const AboutPage = () => {
  return (
    <>
      <div className="aboutmepage">
        {/* Animated Navbar */}
        <motion.div 
          className="aboutmepage-navbar" 
          variants={leftToRight} 
          initial="initial" 
          animate="animate"
        >
          <NavBar />
        </motion.div>

        <div className="aboutme-outer">
          <div className="heading">
            <motion.h1 
              variants={leftToRight} 
              initial="initial" 
              animate="animate"
              className="heading-left"
            >
              About 
            </motion.h1>
            <motion.h1 
             
              variants={rightToLeft} 
              initial="initial" 
              animate="animate"
              className="heading-right"
            >
              me 
            </motion.h1> 
          </div>
          
          <div className="aboutme-inner">
            {/* Animated RoundCard */}
            <motion.div 
              variants={rightToLeft} 
              initial="initial" 
              animate="animate"
            >
              <RoundCard componentName='' />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
