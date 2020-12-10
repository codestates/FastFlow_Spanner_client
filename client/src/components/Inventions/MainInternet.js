import { Link } from "react-router-dom";
const MainInternet = () => {
  return (
    <div className="MainInternets">            
      <iframe className="MainInternets__background" src="https://elgoog.im/t-rex/"
      scrolling="no"></iframe>
      <div className="MainInternets__title">Internet</div>                        
      <div className="MainInternets__desc">크롬 브라우저에서 chrome://dino에 접속하여 space key를 눌러보세요!<br></br>
      아래 화면에서 space key를 눌러도 게임을 하실 수 있어요</div>      
      <div className="MainInternets__link">
        <Link to="/Internet" className={`MainInternets__link LinkedDetail`}>
          인터넷 : 상세 페이지로 이동
        </Link>
      </div>
      
    </div>
  );
};

export default MainInternet;
