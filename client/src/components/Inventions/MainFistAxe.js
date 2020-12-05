import { Link } from "react-router-dom";
const MainFistAxe = () => {
  return (
    <div className="MainFistAxes">
      <div className="MainFistAxes__text">주먹도끼 페이지입니다.</div>
      <Link to="/fistaxe" className={`MainFistAxes__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainFistAxe;
