import { Link } from "react-router-dom";
const MainBattery = () => {
  return (
    <div className="MainBatterys">
      <div className="MainBatterys__text">배터리 페이지입니다.</div>
      <Link to="/Battery" className={`MainBatterys__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainBattery;
