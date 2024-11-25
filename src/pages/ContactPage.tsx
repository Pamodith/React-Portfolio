import { motion } from 'framer-motion';
import RoundCard from '../components/RoundCard';
import NavBar from '../components/NavBar';
import '../assets/styles/sass/contactme/_contactme.scss';
import { useState } from 'react';
import { Alert } from '@mui/material';

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
  const [alert , setAlert] = useState<boolean>(false)
  return (
    <div className="contactmepage">

      {alert && <Alert className="contactme-content-left-alert alert-free" severity="success">Message sent successfuly.</Alert>}

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
            variants={leftToRight}
            initial="initial"
            animate="animate"
          >
            I'm just a message away !!
          </motion.h1>
          {/* <motion.h1
            variants={rightToLeft}
            initial="initial"
            animate="animate"
          >
            
          </motion.h1> */}
        </div>

        <div className="contactme-inner">
          {/* Animated RoundCard */}
          <motion.div
            variants={rightToLeft}
            initial="initial"
            animate="animate"
            style = {{width:"100%"}}
          >
            <RoundCard alert={alert} setAlert={setAlert} componentName="contact" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
