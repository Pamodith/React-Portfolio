import Grid from "@mui/material/Grid2";
import TypographyText from "./TypographyText";
import '../assets/styles/sass/navbar/_navbar.scss'

const NavBar = () => {
  const navtext = ["About Me", "Projects", "Contact Me", "Reviews","Side Gigs"];
  

  return (
    <>
      <Grid className="navbar-outer">
        {navtext.map((item, key) => (
          <TypographyText key={key} content={item} className="navbar-outer-text" />
        ))}
      </Grid>
    </>
  );
};

export default NavBar;
