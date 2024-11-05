import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Grid2 } from "@mui/material";
import "../assets/styles/sass/homepage/_homepage.scss";
import Experience from "../components/Experience";
import Availability from "../components/Availability";
import HeroCard from "../components/HeroCard";

const HomePage = () => {

  return (
    <>
      <NavBar />
      <div className="homepage-outer">
        <div className="homepage-inner-left">
          {/* <HeroCard/> */}
          {/* <ul>
            <li className="experiance">Experiance</li>
          </ul> */}
          <Availability/>
        </div>
        <div className="homepage-inner-right">
          <Experience/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
