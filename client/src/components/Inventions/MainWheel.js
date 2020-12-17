import { Link } from "react-router-dom";
import WheelPic from "../images/Wheel/wheel.gif";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const MainWheel = () => {
  return (
    <div className="MainWheels">
      <Fade top fraction={0.1} duration={3000}>
        <div className="MainWheels__text">Wheel</div>
      </Fade>
      {/* <Spin forever={true}> */}
      <Slide right big fraction={0.1} duration={7000}>
        <img className="MainWheels__WheelPic" alt="" src={WheelPic} />
      </Slide>
      {/* </Spin> */}
      <Fade fraction={0.5} duration={5000}>
        <span className="MainWheels__BCtext">B.C 3,500</span>
      </Fade>
      <Fade fraction={0.5} duration={5000}>
        <div className="MainWheels__textBody">The first invention created by humans who did not imitate anything in nature</div>
      </Fade>
      <Link to="/Wheel" className={`MainWheels__link`}>
        Click Me
      </Link>
    </div>
  );
};

export default MainWheel;
