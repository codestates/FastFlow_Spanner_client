import { Link } from "react-router-dom";
const MainWritingSystem = () => {
  return (
    <div className="MainWritingSystems">
      <div className="MainWritingSystems__text">문자 페이지입니다.</div>

      <Link to="/WritingSystem" className={`MainWritingSystems__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainWritingSystem;
