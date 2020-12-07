import { Link } from "react-router-dom";
const MainGunpowder = () => {
  return (
    <div className="MainGunpowders">
      <div className="MainGunpowders__text">화약 페이지입니다.</div>
      <Link to="/GunPowder" className={`MainGunpowders__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainGunpowder;
