import { Link } from "react-router-dom";
const MainRobot = () => {
  return (
    <div className="MainRobots">
      <div className="MainRobots__text">로봇 페이지입니다.</div>
      <Link to="/Robot" className={`MainRobots__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainRobot;
