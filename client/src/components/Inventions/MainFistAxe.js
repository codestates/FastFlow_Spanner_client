import { Link } from "react-router-dom";
// import { useState } from "react";
import Fade from "react-reveal/Fade";
import HomoAcient from "../images/FistAxePic/HomoAcient.png";
import FistAxe1 from "../images/FistAxePic/FistAxe1.jpg";
import FistAxe2 from "../images/FistAxePic/FistAxe2.jpg";

const MainFistAxe = () => {
  return (
    <div className="MainFistAxess">
      <Fade left fraction={0.7} duration={5000}>
        <img className="MainFistAxes__homoAcientPic" src={HomoAcient} alt="" />
      </Fade>
      <div className="MainFistAxes">
        <div className="MainFistAxes__text">
          <Fade top fraction={0.2} duration={3000}>
            Fist Axe
          </Fade>
        </div>
        <Fade fraction={1} duration={1000}>
          <img className="MainFistAxes__FistAxePicOne" src={FistAxe1} alt="" />
        </Fade>
        <Fade fraction={0.9} duration={1000}>
          <img className="MainFistAxes__FistAxePicTwo" src={FistAxe2} alt="" />
        </Fade>

        <Link to="/fistaxe" className={`MainFistAxes__link`}>
          Click Me
        </Link>
        <Fade fraction={0.9} duration={5000}>
          <span className="MainFistAxes__BCtext">B.C 1.6 million</span>
        </Fade>
        <Fade fraction={0.9} duration={5000}>
          <div className="MainFistAxes__textBody">
            The fist ax was a representative tool used in the Paleolithic period. <br />
            It can be held in one hand, so it can hunt and skin beasts, <br />
            It was used for a variety of purposes, such as digging the ground to dig grass and trees.
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainFistAxe;
