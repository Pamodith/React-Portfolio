import heroImage from "../assets/styles/images/FullSizeRender.jpg";
import '../assets/styles/sass/card/_heroCard.scss';

const HeroCard = () => {
    return (
        <div className="herocard">
            <img className='herocard-image' src={heroImage} ></img>
          
        </div>
      );
    };


export default HeroCard;
