import { Link } from "react-router-dom";
import sunDial from "../../TestPic/sundial2.png";
import wallClock from "../../TestPic/clock.png";
import phoneBG from "../../TestPic/phoneBG.png";
import smartphone from "../../TestPic/clock_phone.webp";
import useScrollStatus from '../hooks/useScrollStatus';

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDate();
const getTodayLabel = () => {
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let today = date.getDay()
  let todayLabel = week[today];
  return todayLabel;
}
const DOW = getTodayLabel();
const getMonthLabel = () => {
  let week = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  let month = date.getMonth()
  let monthLabel = week[month];
  return monthLabel;
}
const month = getMonthLabel();

const MainClock = () => {
  const scrollState = useScrollStatus();
  const position = scrollState.position;
  const clockFirst = 30.4;
  const clockSecond = clockFirst+2;
  const clockThird = clockSecond+1;
  return (
    <div className="MainClocks">
      <div className="mainClock__clocks">
        <div className={`${position}`> `${clockFirst}` && `${position}`< `${clockThird+4}` ?"mainClock__sunDialContainer":"mainClock__sunDialContainer2"}>
          <img className="mainClock__sundial" src={sunDial} alt="" />
        </div>
        <div className={`${position}`> `${clockSecond}` && `${position}`< `${clockThird+4}` ?"mainClock__wallClockContainer":"mainClock__wallClockContainer2"}>
          <img className="mainClock__wallClock" src={wallClock} alt="" />
        </div>
        <div className={`${position}`> `${clockThird}` && `${position}`< `${clockThird+4}` ?"mainClock__phoneContainer":"mainClock__phoneContainer2"}>
          <img className="mainClock__phoneBG" src={phoneBG} alt="" />
          <img className="mainClock__smartPhone" src={smartphone} alt="" />
          <div className="MainClock__time">{hours < 10 ? `0${hours}`:`${hours}`} :   {minutes < 10 ? `0${minutes}`:`${minutes}`}</div>
          <div className="mainClock__date"> {DOW} {day} {month} </div>
            <div clasName="mainClock__linkContainer">
            <Link to="/Clock" className="mainClock__link">
              클릭 시 상세 페이지로 이동합니다
            </Link>
          </div>
        </div>
      </div>
      <div className="MainClocks__text">시계 페이지입니다.</div>
    </div>
  );
};

export default MainClock;
