import { Link } from "react-router-dom";
import { useState } from "react";
import FistAxePic from "../images/FistAxePic/FistAxe.png";
import RunMan from "../images/FistAxePic/runMan.gif";

const MainFistAxe = () => {
  const [opacity, setOpacity] = useState(0);
  const [attackAxe, setAttackAxe] = useState("");
  const [runMan, setRunMan] = useState("");
  const [dropText, setDropText] = useState("");

  const changeBackGround = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 770 && window.scrollY < 870) {
      setOpacity(1);
      setAttackAxe("attack 5s 1s linear alternate forwards");
      setRunMan("runMan 5s 2s linear alternate forwards");
      setDropText("DownText 5s linear alternate both");
    }
  };
  window.addEventListener("scroll", changeBackGround);

  return (
    <div className="MainFistAxess">
      <div className="MainFistAxes" style={{ opacity: opacity }}>
        <div className="MainFistAxes__text">Fist Axe</div>
        <img className="MainFistAxes__FistAxePic" alt="" src={FistAxePic} style={{ animation: attackAxe }} />
        <img className="MainFistAxes__RunManPic" alt="" src={RunMan} style={{ animation: runMan }} />

        <Link to="/fistaxe" className={`MainFistAxes__link`} style={{ animation: dropText }}>
          Click Me
        </Link>
        <span className="MainFistAxes__BCtext" style={{ animation: dropText }}>
          B.C 1.6 million
        </span>
        <div className="MainFistAxes__textBody" style={{ animation: dropText }}>
          주먹도끼는 구석기시대에 사용된 대표적인 도구이다. <br />한 손에 쥐고 쓸 수 있어서 짐승을 사냥하고 가죽을 벗기며, <br />
          땅을 파서 풀이나 나무를 캐는 등 다양한 용도로 사용되었다.
        </div>
      </div>
    </div>
  );
};

export default MainFistAxe;
