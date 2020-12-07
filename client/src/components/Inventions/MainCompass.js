import { Link } from "react-router-dom";
const MainCompass = () => {
  return (
    <div className="MainCompasss">
      <div className="MainCompasss__text">나침반 페이지입니다.</div>
      <Link to="/Compass" className={`MainCompasss__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainCompass;
