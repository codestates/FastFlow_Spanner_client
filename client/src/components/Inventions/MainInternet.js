import { Link } from "react-router-dom";
const MainInternet = () => {
  return (
    <div className="MainInternets">
      <div className="MainInternets__title">Internet
      </div>
      <div className="MainInternets__desc">크롬 브라우저 404 Error page 게임<br></br>
      아래에서 space key로 점프!
      </div>
      <iframe className="MainInternets__game" src="https://elgoog.im/t-rex/"
      scrolling="no">
      </iframe>
      <div className="MainInternets__link">
      <Link to="/Internet" className={`MainInternets__link LinkedDetail`}>
        인터넷 : 상세 페이지로 이동
      </Link>
      </div>
    </div>
  );
};
export default MainInternet;
