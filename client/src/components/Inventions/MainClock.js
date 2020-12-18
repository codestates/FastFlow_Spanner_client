import { Link } from "react-router-dom";
import sunDial from "../../TestPic/sundial2.png";
import wallClock from "../../TestPic/clock.png";
import phoneBG from "../../TestPic/phoneBG.png";
import smartphone from "../../TestPic/clock_phone.webp";
import Fade from "react-reveal/Fade";

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDate();
const getTodayLabel = () => {
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = date.getDay();
  let todayLabel = week[today];
  return todayLabel;
};
const DOW = getTodayLabel();
const getMonthLabel = () => {
  let week = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let month = date.getMonth();
  let monthLabel = week[month];
  return monthLabel;
};
const month = getMonthLabel();

const MainClock = () => {
  return (
    <div className="MainClocks">
      <Fade top fraction={1} duration={3000}>
        <div className="mainClock__title">Clock</div>
      </Fade>
      <div className="mainClock__clocks">
      <Fade bottom fraction={0} duration={2000}>
        <div className="mainClock__sunDialContainer">
          <img className="mainClock__sundial" src={sunDial} alt="" />
        </div>
      </Fade>
        <div className="mainClock__wallClockContainer">
      <Fade top fraction={0.5} duration={1500}>
          <img className="mainClock__wallClock" src={wallClock} alt="" />
      </Fade>
        </div>
      <Fade bottom fraction={1} duration={1000}>
        <div className="mainClock__phoneContainer">
          <img className="mainClock__phoneBG" src={phoneBG} alt="" />
          <img className="mainClock__smartPhone" src={smartphone} alt="" />
          <div className="MainClock__time">
            {hours < 10 ? `0${hours}` : `${hours}`} : {minutes < 10 ? `0${minutes}` : `${minutes}`}
          </div>
          <div className="mainClock__date">
            {" "}
            {DOW} {day} {month}{" "}
          </div>
          <div className="mainClock__linkContainer">
            <Link to="/Clock" className="mainClock__link">
              Click Me
            </Link>
          </div>
        </div>
      </Fade>
      </div>
      <Fade left fraction={1} duration={1000}>
      <div className="MainClocks__text">Nothing is as far away as one minute ago.</div>
      </ Fade>
    </div>
  );
};

export default MainClock;
