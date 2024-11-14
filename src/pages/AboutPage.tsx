import React, { useState } from "react";
import RoundCard from "../components/RoundCard";
import '../assets/styles/sass/aboutme/_aboutme.scss'
import NavBar from "../components/NavBar";
import { RoundCardProp } from "../types/type";
import { Button } from "@mui/material";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';





const AboutPage = () => {
 
  
  return (
    <>
    <div className="aboutmepage">
      <div className="aboutmepage-navbar">
        <NavBar/>
      </div>
    <div className="aboutme-outer">
      <div className="heading">
        <h1 style={{color:'black', marginRight:"10px"}}>About </h1>
        <h1 style={{color:'#D7D7D7'}}>me </h1> 
       </div>
      <div className="aboutme-inner">
        <RoundCard componentName = ''/>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutPage;
