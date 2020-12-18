// import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import human0 from "../TestPic/human0.png";
import human1 from "../TestPic/human1.png";
import human2 from "../TestPic/human2.png";
import human3 from "../TestPic/human3.png";
import human4 from "../TestPic/human4.png";
import human5 from "../TestPic/human5.png";
import human_desk from "../TestPic/human_desk.png";

const ScrollTracker = props => {
  // const style = useSpring({
  //   margin-left: `${props.position}`
  // })
  // const style = useSpring({
  //   left: `${(props.position)}%`
  // });
  const style = {
    left: `${props.position}%`
  }
  return (     
    <div className="scroll-tracker">
      <animated.div className="scroll-tracker__gauge" style={style}>
        <img className={`${(props.position)}`<20?"scrollTracker__first_1":"scrollTracker__first_2"} src={human0} alt="" />
        <img className={`${(props.position)}`<20 || `${(props.position)}`>=40?"scrollTracker__second_1":"scrollTracker__second_2"} src={human1} alt="" />
        <img className={`${(props.position)}`<40 || `${(props.position)}`>=60?"scrollTracker__second_1":"scrollTracker__second_2"} src={human2} alt="" />
        <img className={`${(props.position)}`<60 || `${(props.position)}`>=80?"scrollTracker__second_1":"scrollTracker__second_2"} src={human3} alt="" />
        <img className={`${(props.position)}`<80 || `${(props.position)}`>=95?"scrollTracker__second_1":"scrollTracker__second_2"} src={human4} alt="" />
      </animated.div>
      <div className="scrollTracker__deskContainer" >
        <img className={`${(props.position)}`<95?"scrollTracker__second_1":"scrollTracker__human5"} src={human5} alt="" />
        <img className="scrollTracker__desk" src={human_desk} alt="" />
      </div>
    </div>
  );
};
export default ScrollTracker;
