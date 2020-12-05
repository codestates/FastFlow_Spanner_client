import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import primitiveImg from "./images/1.primitive.png";

const ScrollTracker = props => {

  const style = useSpring({        
    left: `${(props.position)}%`
  });

  return (
    <>      
    <div className="scroll-tracker">
      <animated.div 
      className="scroll-tracker__gauge"
      style={style}       
      >         
        <img src={primitiveImg} alt="" width="30px"/> 
      </animated.div>                 
    </div>
    </>
  );
};

export default ScrollTracker;
