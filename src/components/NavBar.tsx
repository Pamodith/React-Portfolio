// NavBar.tsx
import React from 'react';
import Grid from "@mui/material/Grid2";
import TypographyText from "./TypographyText";
import '../assets/styles/sass/navbar/_navbar.scss';
import { navtextProp } from "../types/type";

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
    {
      id: 5,
      routeName: "side-gigs",
      name: "Side Gigs",
    },
  ];
  
  return (
    <Grid className="navbar-outer">
      {navtext.map((item) => (
        <TypographyText 
          key={item.id} 
          content={item.name} 
          className="navbar-outer-text" 
          routename={item.routeName} 
        />
      ))}
    </Grid>
  );
};

export default NavBar;
