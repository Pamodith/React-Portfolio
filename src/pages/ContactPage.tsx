import React from 'react';
import { motion } from 'framer-motion';
import RoundCard from '../components/RoundCard';
import NavBar from '../components/NavBar';
import '../assets/styles/sass/contactme/_contactme.scss';

// Define animation variants for left-to-right and right-to-left with slower transition
const leftToRight = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 60, damping: 30 }, // Slower transition
};

const rightToLeft = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 60, damping: 30 }, // Slower transition
};

const ContactPage = () => {
  return (
    <div className="contactmepage">
      {/* Animated Navbar */}
      <motion.div
        className="contactmepage-navbar"
        variants={leftToRight}
        initial="initial"
        animate="animate"
      >
        <NavBar />
      </motion.div>

      <div className="contactme-outer">
        <div className="heading">
          <motion.h1
            style={{ color: '#31473A' , paddingLeft:'130px' }}
            variants={leftToRight}
            initial="initial"
            animate="animate"
          >
            I'm Just a
          </motion.h1>
          <motion.h1
            style={{ color: '#EDF4F2' ,marginLeft:'10px' }}
            variants={rightToLeft}
            initial="initial"
            animate="animate"
          >
            massage away !!
          </motion.h1>
        </div>

        <div className="contactme-inner">
          {/* Animated RoundCard */}
          <motion.div
            variants={rightToLeft}
            initial="initial"
            animate="animate"
          >
            <RoundCard componentName="contact" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
