import { Link } from "react-router-dom";
const MainVaccine = () => {
  return (
    <div className="MainVaccines">
      <div className="MainVaccines__text">백신 페이지입니다.</div>
      <Link to="/Vaccine" className={`MainVaccines__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainVaccine;
