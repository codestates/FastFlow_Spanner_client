import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const MainLightBulb = () => {
  
  const [isLightOn, setIsLightOn] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    if(!isLightOn) {
      setIsSwitchOn(false);
    } else {
      setIsSwitchOn(true);
    }
  },
  [isLightOn, isSwitchOn]);

  return (
    <div className="MainLightBulbs">
      <div className=
      {isSwitchOn ? 
      "MainLightBulbs__background-color-1layer" : 
      "MainLightBulbs__background-color-3layer"}>        
      </div>
      <div className="MainLightBulbs__background-wrapper">
        <div className="MainLightBulbs__background">
          <div className="background__title">LightBulb!</div>
        </div>    
      </div> 
      <div className= {isLightOn ? "MainLightBulbs__switchBtn-on" : "MainLightBulbs__switchBtn-off"} onClick={() => setIsLightOn(!isLightOn)}>
      </div>
      <Link to="/LightBulb" className="MainLightBulbs__link">
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainLightBulb;
