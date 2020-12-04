import { Link } from "react-router-dom";
const MainInternet = () => {
  return (
    <div className="MainInternets">
      <div className="MainInternets__text">인터넷 페이지입니다.</div>
      <Link to="/Internet" className={`MainInternets__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainInternet;
