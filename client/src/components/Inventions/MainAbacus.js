import { Link } from "react-router-dom";

const MainAbacus = () => {
  return (
    <div className="MainAbacuss">
      <div className="MainAbacuss__text">계산기 페이지입니다.</div>
      <Link to="/Abacus" className={`MainAbacuss__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainAbacus;
