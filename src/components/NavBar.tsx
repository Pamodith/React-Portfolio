// NavBar.tsx
import React from 'react';
import Grid from "@mui/material/Grid2";
import TypographyText from "./TypographyText";
import '../assets/styles/sass/navbar/_navbar.scss';
import { navtextProp } from "../types/type";
import Image from '../assets/images/202064914-Photoroom.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navtext: navtextProp[] = [
    {
      id: 1,
      routeName: "about-me",
      name: "About Me",
    },
    {
      id: 2,
      routeName: "projects",
      name: "Projects",
    },
    {
      id: 3,
      routeName: "contact-me",
      name: "Contact Me",
    },
    {
      id: 4,
      routeName: "reviews",
      name: "Reviews",
    },
  ];
  
  return (
    <Grid  className="navbar-outer">
      <Grid >
        <Link to='/'>
        <img className="navbar-outer-profile-image" src={Image}/>
        </Link>
      
      </Grid>
      <Grid className='navbar-outer-text'>
      {navtext.map((item) => (
        <TypographyText 
          key={item.id} 
          content={item.name} 
          className="navbar-outer-text-links" 
          routename={item.routeName} 
        />
      ))}
      </Grid>
    </Grid>
  );
};

export default NavBar;
