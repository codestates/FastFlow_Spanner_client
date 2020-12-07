import { Link } from "react-router-dom";
const MainAirplane = () => {
  return (
    <div className="MainAirplanes">
      <div className="MainAirplanes__text">비행기 페이지입니다.</div>
      <Link to="/Airplane" className={`MainAirplanes__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainAirplane;
