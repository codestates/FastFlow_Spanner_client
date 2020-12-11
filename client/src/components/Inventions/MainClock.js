import { Link } from "react-router-dom";

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();


const MainClock = () => {
  return (
    <div className="MainClocks">
      <div className="MainClocks__text">시계 페이지입니다.</div>
      <div className="MainClock__time"> 텍스트 {hours < 10 ? `0${hours}`:`${hours}`} : {minutes < 10 ? `0${minutes}`:`${minutes}`} : {seconds < 10 ? `0${seconds}`:`${seconds}`} </div>
      <Link to="/Clock" className={`MainClocks__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다{hours < 10 ? `0${hours}`:`${hours}`} : {minutes < 10 ? `0${minutes}`:`${minutes}`} : {seconds < 10 ? `0${seconds}`:`${seconds}`}
      </Link>
      <div>테스트</div>
    </div>
  );
};

export default MainClock;
