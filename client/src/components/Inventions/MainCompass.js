import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import compass from "../../TestPic/compass.png";
import compass_ from "../../TestPic/compass_.png";
import polaris from "../../TestPic/bigdipperpolaris_cut.jpg"
import starlight1 from "../../TestPic/starlight1.png";
import starlight2 from "../../TestPic/starlight2.png";

const MainCompass = () => {
  return (
    <div className="MainCompasss">
      <Fade top fraction={1} duration={3000}>
        <div className="mainCompass__title">Compass</div>
      </Fade>
      <Fade right duration={1000}>
        <div className="mainCompass__polarisPic">
          <img className="mainCompass__polaris" src={polaris} alt="" />
            <div className="mainCompass__starLight">
              <img className="starlight1" src={starlight1} alt="" />
              <img className="starlight2" src={starlight2} alt="" />
            </div>
          </div>
      </Fade>
      <Fade >
      <div className="mainCompass__container">
        <img className="compass" src={compass} alt="" />
        <img className="compass_" src={compass_} alt="" />
      </div>
      </Fade>
      <Fade left>
      <div className="MainCompasss__text">This article is about the direction finding instrument used in navigation. For other uses, see Compass.</div>
      </Fade>
      <Link to="/Compass" className="mainCompass__link">
        Click Me
      </Link>
    </div>
  );
};

export default MainCompass;
