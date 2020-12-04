import { Link } from "react-router-dom";
const MainSteamEngine = () => {
  return (
    <div className="MainSteamEngines">
      <div className="MainSteamEngines__text">증기 기관 페이지입니다.</div>
      <Link to="/SteamEngine" className={`MainSteamEngines__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainSteamEngine;
