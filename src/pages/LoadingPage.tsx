import { Grid2 } from "@mui/material";
import "../assets/styles/sass/loadingpage/_loadingpage.scss";
import TypographyText from "../components/TypographyText";
import BackgroundVideo from '../assets/videos/3822008-uhd_3840_2160_30fps.mp4';

const LoadingPage = () => {
  return (
    <Grid2 className="loadingPage-outer">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="loadingPage-background-video"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Grid2 className="loadingPage-inner">
        <TypographyText className="loadingPage-text-one" content="console."  />
        <TypographyText className="loadingPage-text-two" content="log" />
        <TypographyText className="loadingPage-text-three" content="(" />
        <TypographyText
          className="loadingPage-text-four"
          content='"Welcome!! but wait mate!!"'
        />
        <TypographyText className="loadingPage-text-five" content=")" />
      </Grid2>
    </Grid2>
  );
};

export default LoadingPage;
