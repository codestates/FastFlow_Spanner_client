import { Link } from "react-router-dom";
const MainRefrigerator = () => {
  return (
    <div className="MainRefrigerators">
      <div className="MainRefrigerators__text">냉장고 페이지입니다.</div>
      <Link to="/Refrigerator" className={`MainRefrigerators__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainRefrigerator;
