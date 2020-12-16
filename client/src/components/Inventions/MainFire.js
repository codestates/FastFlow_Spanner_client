import { Link } from "react-router-dom";
import interFire from "../images/Fire/interFire.jpg";
import readyFire from "../images/Fire/readyFire.jpg";
import danceFire from "../images/Fire/danceFire.gif";
import Fade from "react-reveal/Fade";

const MainFire = () => {
  return (
    <div className="MainFires">
      <Fade fraction={1} duration={3000}>
        <img className="MainFires__interFirePic" src={interFire} alt="" />
      </Fade>
      <Fade top fraction={1} duration={3000}>
        <div className="MainFires__text">Fire</div>
      </Fade>
      <Fade fraction={1} duration={3000}>
        <img className="MainFires__readyFirePic" src={readyFire} alt="" />
      </Fade>
      <Fade fraction={0.7} duration={3000}>
        <img className="MainFires__danceFirePic" src={danceFire} alt="" />
      </Fade>
      <Fade fraction={0.5} duration={5000}>
        <span className="MainFire__BCtext">B.C 600,000</span>
      </Fade>
      <Fade fraction={0.5} duration={5000}>
        <div className="MainFire__textBody">There are many theories about when mankind began to use fire.</div>
      </Fade>
      <Link to="/fire" className={`MainFires__link`}>
        Click Me
      </Link>
    </div>
  );
};

export default MainFire;
