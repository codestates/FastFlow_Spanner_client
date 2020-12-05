import { Link } from "react-router-dom";

const MainLightBulb = () => {
  return (
    <div className="MainLightBulbs">
      <div className="MainLightBulbs__text">전구 페이지입니다.</div>
      <Link to="/LightBulb" className={`MainLightBulbs__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainLightBulb;
