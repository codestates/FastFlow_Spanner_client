import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import internet_background from "./../images/Internet/internet_background.gif";

const MainInternet = () => {
  return (
    <div className="MainInternets">
      <img className="MainInternets__background" src={internet_background}>
      </img>
      <Fade top fraction={0.5} duration={1000}>
      <div className="MainInternets__title">Internet
      </div>
      </Fade>
      <div className="MainInternets__desc">"404 error page game" on Chrome browser<br></br>
      Space or Tap for jump!
      </div>      
      <Link to="/Internet" className="MainInternets__link">
        Click Me
      </Link>      
      <iframe className="MainInternets__game" src="https://elgoog.im/t-rex/"
      scrolling="no">
      </iframe>      
    </div>
  );
};
export default MainInternet;
