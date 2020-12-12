import { Link } from "react-router-dom";
import React, { useState } from "react";
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
        <div className="body__title">LightBulb
          <img className="title__switchBtn" src={isLightOn ? switchOnImg : switchOffImg} alt="" onClick={() => setIsLightOn(!isLightOn)}></img>
            <Link to="/LightBulb" className="title__link">
              상세 페이지
            </Link>
          <div className="title_icon-guide"> 버튼 클릭!</div>
        </div>
        <img className="body__background" src={isLightOn ? backgroundImg : backgroundBlackImg} alt=""></img>
        <div className={isLightOn ? "background__texts-on" : "background__texts-off"}>
          <div className="text1">일반 전구는 전기에너지의 <br></br>90% 이상이 열로 손실됩니다!</div>
          <div className="text2">한국 최초의 전구는 <br></br>경복궁에 설치됬던 거 아시죠?</div>
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
