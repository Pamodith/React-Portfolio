import { Grid2 } from "@mui/material";
import "../assets/styles/sass/loadingpage/_loadingpage.scss";
import Typography from "../components/TypographyText";
import TypographyText from "../components/TypographyText";

const LoadingPage = () => {
  return (
    <Grid2 className="loadingPage-outer">
      <Grid2 className="loadingPage-inner">
        <TypographyText className="loadingPage-text-one" content="console." />
        <TypographyText className="loadingPage-text-two" content="log" />
        <TypographyText className="loadingPage-text-three" content="(" />
        <TypographyText
          className="loadingPage-text-four"
          content='"Welcome!! but wait mate 😎 "'
        />
        <TypographyText className="loadingPage-text-five" content=")" />
      </Grid2>
    </Grid2>
  );
};

export default LoadingPage;
