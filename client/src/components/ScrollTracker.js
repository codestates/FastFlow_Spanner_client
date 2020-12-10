import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
const ScrollTracker = props => {
  // const style = useSpring({
  //   margin-left: `${props.position}`
  // })
  const style = useSpring({
    left: `${(props.position)}%`
  });
  return (
    <>      
    <div className="scroll-tracker">
      <animated.div className="scroll-tracker__gauge" style={style}>
        <span className={`${(props.position)}`<50?"scrollTracker__first_1":"scrollTracker__first_2"}>처음</span>
        <span className={`${(props.position)}`<50?"scrollTracker__second_1":"scrollTracker__second_2"}>두번째</span>
      </animated.div>
    </div>
    </>
  );
};
export default ScrollTracker;
