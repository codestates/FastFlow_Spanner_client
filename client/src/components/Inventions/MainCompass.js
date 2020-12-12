import { Link } from "react-router-dom";
import compass from "../../TestPic/compass.png";
import compass_ from "../../TestPic/compass_.png";
import starlight1 from "../../TestPic/starlight1.png";
import starlight2 from "../../TestPic/starlight2.png";

const MainCompass = () => {
  return (
    <div className="MainCompasss">
      <div className="mainCompass__container" >
        <img clasName="compass" src={compass} alt="" />
        <img className="compass_" src={compass_} alt="" />
      </div>
      <div className="mainCompass__starLight">
        <img className="starlight1" src={starlight1} alt="" />
        <img className="starlight2" src={starlight2} alt="" />
      </div>
      <div className="MainCompasss__text">나침반 페이지입니다.</div>
        <Link to="/Compass" className={`MainCompasss__link LinkedDetail`}>
          클릭 시 상세 페이지로 이동합니다
        </Link>
    </div>
  );
};

export default MainCompass;
