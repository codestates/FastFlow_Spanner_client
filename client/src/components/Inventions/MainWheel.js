import { Link } from "react-router-dom";
import WheelPic from "../images/Wheel/Wheel.png";
import { useState } from "react";
const MainWheel = () => {
  const [wheelTitle, setWheelTitle] = useState("");
  const [wheel, setWheel] = useState("");
  const [wheelBC, setwheelBC] = useState("");
  const [wheelText, setwheelText] = useState("");
  const [linkEffect, setLinkEffect] = useState("");

  const runWheel = () => {
    if (window.scrollY >= 3800 && window.scrollY < 3900) {
      setWheelTitle("opacityTitle 5s 5s infinite forwards");
      setWheel("runWheel 10s linear forwards");
      setwheelBC("breakLetterUp 2.8s 7s ease-out forwards");
      setwheelText("breakLetterUp 2.8s 6.7s ease-out forwards");
      setLinkEffect("breakLetterDown 2s 7.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards");
    }
  };
  window.addEventListener("scroll", runWheel);
  return (
    <div className="MainWheels">
      <div className="MainWheels__text" style={{ animation: wheelTitle }}>
        Wheel
      </div>

      <img className="MainWheels__WheelPic" alt="" src={WheelPic} style={{ animation: wheel }} />
      <span className="MainWheels__BCtext" style={{ animation: wheelBC }}>
        B.C 3,500
      </span>
      <div className="MainWheels__textBody" style={{ animation: wheelText }}>
        자연계에 어떤 것도 모방하지 않은
        <br />
        인간이 스스로 만들어낸 첫 발명품
      </div>

      <Link to="/Wheel" className={`MainWheels__link`} style={{ animation: linkEffect }}>
        Click Me
      </Link>
    </div>
  );
};

export default MainWheel;
