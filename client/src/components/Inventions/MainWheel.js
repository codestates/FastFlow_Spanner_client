import { Link } from "react-router-dom";
const MainWheel = () => {
  return (
    <div className="MainWheels">
      <div className="MainWheels__text">바퀴 페이지입니다.</div>
      <Link to="/Wheel" className={`MainWheels__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainWheel;
