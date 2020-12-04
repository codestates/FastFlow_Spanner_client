import { Link } from "react-router-dom";
const MainFire = () => {
  return (
    <div className="MainFires">
      <div className="MainFires__text">불 페이지입니다.</div>
      <Link to="/Fire" className={`MainFires__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainFire;
