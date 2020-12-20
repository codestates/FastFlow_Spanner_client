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
      <Fade left>
      <div className="mainSteamEngine__train">
        <img className="mainSteamEngine__railRoad" src={railRoad} alt="" />
        <img className="mainSteamEngine__img" src={train} alt="" />
        <img className="mainSteamEngine__smoke" src={smoke} alt="" />
      </div>
      </Fade>
      <Fade>
      <div className="MainSteamEngines__text">A steam engine is a heat engine that performs mechanical work using steam as its working fluid. The steam engine uses the force produced by steam pressure to push a piston back and forth inside a cylinder.</div>
      </Fade>
      <Link to="/SteamEngine" className="mainSteamEngine__link">
        Click Me
      </Link>
    </div>
  );
};

export default MainSteamEngine;
