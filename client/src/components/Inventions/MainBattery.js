import { Link } from "react-router-dom";
import { useState} from "react";
import battery_item1 from "./../images/Battery/battery_item1.jpg";
import battery_item2 from "./../images/Battery/battery_item2.jpg";
import battery_item3 from "./../images/Battery/battery_item3.jpg";
import battery_item4 from "./../images/Battery/battery_item4.gif";

const MainBattery = () => {

  const [isHovered, setIsHovered] = useState(false);

  const batteryRecharge = () => {
    
    
  }
  function throttle(fn, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
  window.addEventListener("scroll", throttle(batteryRecharge, 300));

  return (
    <div className="MainBatterys">
      <div className="MainBatterys__title">Battery</div>
      <div className="MainBatterys__body">
        <div className="body__contentsArea">
          <div className="contentsArea__grid">
            <div className="grid__item1">
              <div className="item1__title">
                배터리는 에너지의 상징!
              </div>
              <div className="item1__text">
                여러분의 배터리는 오늘도 무사하신가요ㅠㅠ
              </div>
              <img className="item1__pics" src={battery_item1} alt=""></img>
            </div>
            <div className="grid__item2">
              <div className="item2__title">
                현대 사회의 에너지 저장고
              </div>
              <div className="item2__text">
                언제 어디서나 에너지원을 공급받을 수 있게
                해주는 현대인들의 필수품
              </div>
              <img className="item2__pics" src={battery_item2} alt=""></img>
            </div>
            <div className="grid__item3">
              <div className="item3__title">
                미래가 배터리에 달려있다!
              </div>
              <div className="item3__text">
                로봇 잘 만들려면 일단 배터리 용량부터
                확보가 되야된대요
              </div>
              <img className="item3__pics" src={battery_item3} alt=""></img>
            </div>
            <div className="grid__item4">
              <div className="item4__title">
                배터리에 대한 질문들
              </div>
              <div className="item4__text">
                왜 리튬 이온 배터리를 쓸까요?<br></br>
                왜 "2차" 전지라고 할까요?
              </div>
              <img className="item4__pics" src={battery_item4} alt=""></img>
            </div>
          </div>
        </div>
        <div className="body__videoArea">
          <div className="videoArea__partitionLine"></div>
          <div className="videoArea__outline">
            <div className="outline__upper1"></div>
            <div className="outline__upper2"></div>
            <div className="outline__upperVert1"></div>
            <div className="outline__upperVert2"></div>
            <div className="outline__left"></div>
            <div className="outline__right"></div>
            <div className="outline__lower"></div>
          </div>
          <div className="videoArea__contents">
            <div className="contents__text"></div>
            <div className="contents__video"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBattery;
