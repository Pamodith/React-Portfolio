import Grid from "@mui/material/Grid2";
import TypographyText from "./TypographyText";
import '../assets/styles/sass/navbar/_navbar.scss';
import { navtextProp } from "../types/type";
import Image from '../assets/images/202064914-Photoroom.png'
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      id: 4,
      routeName: "experience",
      name: "Experience",
    },
    {
      id: 3,
      routeName: "contact-me",
      name: "Contact Me",
    }
  ];

  const handleToggle = () => {
    console.log('first')
    setIsOpen(!isOpen)
    
  }
  
  return (
    isSmallScreen ? (
      isOpen ? (
        <Grid className="active-mobile-navbar-outer">
        <Grid>
          <Link to='/'>
            <img className="active-mobile-navbar-outer-profile-image" src={Image} alt="Profile" />
          </Link>
        </Grid>
        <Grid className='active-mobile-navbar-outer-text'>
          
          <div className="dropdown">
          {navtext.map((item) => (
            <TypographyText
              key={item.id}
              content={item.name}
              className="active-mobile-navbar-outer-text-links"
              routename={item.routeName}
            />
          ))}
            </div>
            <MenuRoundedIcon className="active-mobile-navbar-outer-text-hamburger" onClick={handleToggle} />
        </Grid>
      </Grid>
      ) : (
<Grid className="mobile-navbar-outer">
        <Grid>
          <Link to='/'>
            <img className="mobile-navbar-outer-profile-image" src={Image} alt="Profile" />
          </Link>
        </Grid>
        <Grid className='mobile-navbar-outer-text'>
            <MenuRoundedIcon className="mobile-navbar-outer-text-hamburger" onClick={handleToggle} />
        </Grid>
      </Grid>
      )
    ) : (
      <Grid className="navbar-outer">
        <Grid>
          <Link to='/'>
            <img className="navbar-outer-profile-image" src={Image} alt="Profile" />
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
    )
  );
}  
export default NavBar;

