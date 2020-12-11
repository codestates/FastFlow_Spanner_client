import { useState } from "react";
import { Link } from "react-router-dom";
import Banana from "../images/Condom/Banana.png";
import Condom from "../images/Condom/Condom.png";
import WowMan from "../images/Condom/WowMan.gif";
const MainCondom = () => {
  const [condom, setCondom] = useState("");
  const changeCondom = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 4700 && window.scrollY < 4800) {
      setCondom("revael 7s ease-out forwards");
    }
  };
  window.addEventListener("scroll", changeCondom);
  return (
    <div className="MainCondomss">
      <div className="MainCondoms" style={{ animation: condom }}>
        <div className="MainCondoms__text">Condom ♥</div>
        <div className="MainCondoms__makeMotion">
          <img className="MainCondoms__likeDik" src={Banana} />
          <img className="MainCondoms__CondomPic" src={Condom} />
        </div>
        <img className="MainCondoms__WowMan" src={WowMan} />
        <span className="MainCondoms__BCtext">B.C 3,000</span>
        <div className="MainCondoms__textBody">고대의 콘돔은 출산을 늘리는 것이 목적이었다.</div>
        <Link to="/Condom" className={`MainCondoms__link`}>
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default MainCondom;
