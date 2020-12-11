import { useState } from "react";
import { Link } from "react-router-dom";
import StartFire from "../images/Fire/StartFire.gif";
import MiddleFire from "../images/Fire/MiddleFire.gif";
import FinalFire from "../images/Fire/FinalFire.gif";

const MainFire = () => {
  const [startFire, setStartFire] = useState("");
  const [middleFire, setMiddleFire] = useState(0);
  const [finalFire, setFinalfire] = useState(0);
  const [textFire, setTextFire] = useState("");
  const [linkFire, setLinkFire] = useState("");

  const dropFire = () => {
    if (window.scrollY >= 1300 && window.scrollY < 1400) {
      setStartFire("StartFire 4s ease-in normal forwards");
      setMiddleFire(1);
      setFinalfire(1);
      setTextFire("FireText 3s 10s linear alternate forwards");
      setLinkFire("DownText 3s 10s linear alternate both");
      setTimeout(() => {
        setMiddleFire(0);
        setFinalfire(0);
      }, 5000);
    }
  };

  window.addEventListener("scroll", dropFire);
  return (
    <div className="MainFires">
      <img className="MainFires__StartFirePic" src={StartFire} style={{ animation: startFire }} alt="" />
      <div className="MainFires__text">Fire</div>
      <img className="MainFires__MiddleFirePic" src={MiddleFire} style={{ opacity: middleFire }} alt="" />
      <img className="MainFires__LastFirePic" src={FinalFire} style={{ opacity: finalFire }} alt="" />
      <span className="MainFire__BCtext" style={{ animation: textFire }}>
        B.C 600,000
      </span>
      <div className="MainFire__textBody" style={{ animation: textFire }}>
        인류가 언제부터 불을 쓰게 되었는지에 대해서는 여러 설이 있다.
      </div>
      <Link to="/fire" className={`MainFires__link`} style={{ animation: linkFire }}>
        Click Me
      </Link>
    </div>
  );
};

export default MainFire;
