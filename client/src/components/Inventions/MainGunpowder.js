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
      <img alt="" className="static"/>
      <div className="MainGunpowders__text">화약 페이지입니다.</div>
      <Link to="/GunPowder" className="mainGunpowder__link">
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainGunpowder;
