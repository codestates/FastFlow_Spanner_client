import { Link } from "react-router-dom";
const MainCamera = () => {
  return (
    <div className="MainCameras">
      <div className="MainCameras__text">카메라 페이지입니다.</div>
      <Link to="/Camera" className={`MainCameras__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainCamera;
