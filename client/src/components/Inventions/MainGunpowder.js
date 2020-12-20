import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import img from "../../TestPic/gunpowder1.gif"
const MainGunpowder = () => {
  return (
    <div className="MainGunpowders">
      <Fade top fraction={1} duration={3000}>
        <div className="mainGunpowder__title">Gunpowder</div>
      </Fade>
      <Fade>
        <img className="mainGunpowder__img1" src={img} alt="" />
      </Fade>
      <Fade right>
      <div className="MainGunpowders__text">Gunpowder, also known as the retronym black powder to distinguish it from modern smokeless powder, is the earliest known chemical explosive.</div>
      </Fade>
      <Link to="/GunPowder" className="mainGunpowder__link">
        Click Me
      </Link>
    </div>
  );
};

export default MainGunpowder;
