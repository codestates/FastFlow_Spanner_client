import { Link } from "react-router-dom";
import { useState} from "react";
import Fade from "react-reveal/Fade";
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
      <Fade top fraction={0.5} duration={1000}>
      <div className="MainBatterys__title">      
        Battery                
      </div>
      <Link to="/battery" className="MainBatterys__link">
        Click Me
      </Link>
      </Fade>
      <div className="MainBatterys__body">      
        <div className="body__contentsArea">
          <div className="contentsArea__grid">
            <div className="grid__item1">
              <img className="item1__pics" src={battery_item1} alt=""></img>
              <div className="item1__title">
                The symbol of energy!
              </div>
              <div className="item1__text">
                How about your battery today...?
              </div>
            </div>
            <div className="grid__item2">
              <img className="item2__pics" src={battery_item2} alt=""></img>
              <div className="item2__title">
                Storage for our society
              </div>
              <div className="item2__text">
                The necessity of modern people
              </div>
            </div>
            <div className="grid__item3">
              <img className="item3__pics" src={battery_item3} alt=""></img>
              <div className="item3__title">
                Battery for our future!
              </div>
              <div className="item3__text">
                Battery tech. is essential for robots
              </div>
            </div>
            <div className="grid__item4">
              <img className="item4__pics" src={battery_item4} alt=""></img>
              <div className="item4__title">
                Questions with battery
              </div>
              <div className="item4__text">
                Why "Litium" for battery?<br></br>
                Why "secondary" battery?
              </div>
            </div>
          </div>
        </div>        
        <Fade right fraction={0.5} duration={3000}>
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
            <div className="contents__text">
              <div className="text__title">
                Song for recharging you!
              </div>
              <div className="text__desc">
                (Crazy from 1min)
              </div>
            </div>
            <div className="contents__video-wrapper">
              <iframe className="contents__video"           
              src="https://www.youtube.com/embed/tRJxnxVu3C8" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>              
              </iframe>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainBattery;
