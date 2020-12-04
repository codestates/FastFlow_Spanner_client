import { Link } from "react-router-dom";
const MainCondom = () => {
  return (
    <div className="MainCondoms">
      <div className="MainCondoms__text">콘돔 페이지입니다.</div>
      <Link to="/Condom" className={`MainCondoms__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainCondom;
