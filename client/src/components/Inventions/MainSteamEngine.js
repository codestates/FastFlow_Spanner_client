import { Link } from "react-router-dom";
import train from "../../TestPic/steamengine2.png";
import smoke from "../../TestPic/smoke.png";
import useScrollStatus from '../hooks/useScrollStatus';


const MainSteamEngine = () => {
  const scrollState = useScrollStatus();
  const position = scrollState.position;
  return (
    <div className="MainSteamEngines">
      <div>
        <img className={`${position}`<57.3||`${position}`>59.5?"mainSteamEngine__img":"mainSteamEngine__img_2"} src={train} alt="" />
        <img className={`${position}`<57.3||`${position}`>59.5?"mainSteamEngine__smoke":"mainSteamEngine__smoke_2"} src={smoke} alt="" />
      </div>
      <div className="MainSteamEngines__text">증기 기관 페이지입니다.</div>
      <Link to="/SteamEngine" className={`MainSteamEngines__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainSteamEngine;
