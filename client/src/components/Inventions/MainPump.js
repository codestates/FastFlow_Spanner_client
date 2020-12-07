import { Link } from "react-router-dom";
const MainPump = () => {
  return (
    <div className="MainPumps">
      <div className="MainPumps__text">펌프 페이지입니다.</div>
      <Link to="/Pump" className={`MainPumps__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainPump;
