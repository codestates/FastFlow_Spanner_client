import { Link } from "react-router-dom";
const MainGlasses = () => {
  return (
    <div className="MainGlassess">
      <div className="MainGlassess__text">안경 페이지입니다.</div>
      <Link to="/Glasses" className={`MainGlassess__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainGlasses;
