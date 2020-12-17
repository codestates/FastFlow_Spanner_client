import { Link } from "react-router-dom";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import backgroundImg from "./../images/LightBulb/lightbulb_background.jpg";
import backgroundBlackImg from "./../images/LightBulb/lightbulb_black.png";
import switchOnImg from "./../images/LightBulb/light_bulb_icon_on.png";
import switchOffImg from "./../images/LightBulb/light_bulb_icon_off.png";
import colorImg from "./../images/LightBulb/lightbulb_color.png";

const MainLightBulb = () => {

  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="MainLightBulbs">
      <div className="MainLightBulbs__body">
      <Fade top fraction={0.5} duration={1000}>
        <div className="body__title">
          <div className="title__text">LightBulb</div> 
          <img className="title__switchBtn" src={isLightOn ? switchOnImg : switchOffImg} alt="" onClick={() => setIsLightOn(!isLightOn)}></img>
            <Link to="/LightBulb" className="title__link">
              Click Me
            </Link>
            <div className="title__bulbClick__msg">click</div>          
        </div>
      </Fade>
        <img className="body__background" src={isLightOn ? backgroundImg : backgroundBlackImg} alt=""></img>
        <div className={isLightOn ? "background__texts-on" : "background__texts-off"}>
          <div className="text1">More than 90% of electric-energy <br></br>are consumed as heat-energy</div>
          <div className="text2">You know that <br></br>the very first lightbulb has been installed in GyeongBokGung?</div>
          <img className="text3-img" src={colorImg}></img>
          <div className="text3">
            주광색(6500K) : 새하얀 형광등색<br></br>
          주백색(5000K) : 살짝 아이보리색<br></br>
          백색(4100K) : 주광색과 전구색의 중간<br></br>
          전구색(2700K) : 백열 전구색<br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLightBulb;
