import { Link } from "react-router-dom";
import train from "../../TestPic/steamengine2.png";
import smoke from "../../TestPic/smoke.png";
import railRoad from "../../TestPic/railroad_BLmod.png";
import useScrollStatus from '../hooks/useScrollStatus';
import Fade from "react-reveal/Fade";


const MainSteamEngine = () => {
  const scrollState = useScrollStatus();
  const position = scrollState.position;
  return (
    <div className="MainSteamEngines">
      <Fade top fraction={1} duration={3000}>
        <div className="mainSteamEngine__title">Steam Engine</div>
      </Fade>
      <Fade>
        <img className="mainSteamEngine__railRoad" src={railRoad} alt="" />
      </Fade>
      <div>
        <img className={`${position}`<56.3||`${position}`>61.5?"mainSteamEngine__img":"mainSteamEngine__img_2"} src={train} alt="" />
        <img className={`${position}`<56.3||`${position}`>61.5?"mainSteamEngine__smoke":"mainSteamEngine__smoke_2"} src={smoke} alt="" />
      </div>
      <div className="MainSteamEngines__text">증기 기관 페이지입니다.</div>
      <Link to="/SteamEngine" className={`MainSteamEngines__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainSteamEngine;
