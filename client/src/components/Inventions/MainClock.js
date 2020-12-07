import { Link } from "react-router-dom";
const MainClock = () => {
  return (
    <div className="MainClocks">
      <div className="MainClocks__text">시계 페이지입니다.</div>
      <Link to="/Clock" className={`MainClocks__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainClock;
