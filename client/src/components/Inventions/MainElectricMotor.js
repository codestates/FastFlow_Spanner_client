import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Draggable from "react-draggable";
import experimentImg from "./../images/ElectricMotor/electricmotor-module-changed.jpg";

import electricmotor_usage1 from "./../images/ElectricMotor/electricmotor_usage1.png";
import electricmotor_usage2 from "./../images/ElectricMotor/electricmotor_usage2.png";
import electricmotor_usage3 from "./../images/ElectricMotor/electricmotor_usage3.png";
import electricmotor_usage4 from "./../images/ElectricMotor/electricmotor_usage4.png";
import electricmotor_usage5 from "./../images/ElectricMotor/electricmotor_usage5.png";
import electricmotor_usage6 from "./../images/ElectricMotor/electricmotor_usage6.png";
import electricmotor_usage7 from "./../images/ElectricMotor/electricmotor_usage7.png";
import electricmotor_usage8 from "./../images/ElectricMotor/electricmotor_usage8.png";


const MainElectricMotor = () => {
  const [isDragHovered, setIsDragHovered] = useState(false);
  const [isLineTouched, setIsLineTouched] = useState(false);
  const [lightCondition, setLightCondition] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // console.log(`------------`)
    // console.log(`linetouch===${isLineTouched}`)
    // console.log(`draghover===${isDragHovered}`)
    // console.log(`lightcondition===${lightCondition}`)
    if (isLineTouched && !isDragHovered) {
      setLightCondition(true);
    } else {
      setTimeout(() => {
        setLightCondition(false);
      }, 500);
    }
  }, [isLineTouched, isDragHovered]);

  return (
    <div className="MainElectricMotors">
      <Fade top fraction={0.5} duration={1000}>
      <div className="MainElectricMotors__title">
        ElectricMotor
      </div>      
      </Fade>
      <div className="MainElectricMotors__rotatingMotor1">
        <div className="rotatingMotor1-wrapper">        
          <div className="rotatingMotor1-wrapper__wing">
            <img className="wing__img1" src={electricmotor_usage1} alt=""></img>
            <img className="wing__img5" src={electricmotor_usage5} alt=""></img>
          </div>
          <div className="rotatingMotor1-wrapper__wing">
          <img className="wing__img2" src={electricmotor_usage2} alt=""></img>
          <img className="wing__img6" src={electricmotor_usage6} alt=""></img>
          </div>
          <div className="rotatingMotor1-wrapper__wing">
          <img className="wing__img3" src={electricmotor_usage3} alt=""></img>
          <img className="wing__img7" src={electricmotor_usage7} alt=""></img>
          </div>
          <div className="rotatingMotor1-wrapper__wing">
          <img className="wing__img4" src={electricmotor_usage4} alt=""></img>
          <img className="wing__img8" src={electricmotor_usage8} alt=""></img>
          </div>
        </div>
      </div>
      <Fade right fraction={0.5} duration={3000}>
      <div className="MainElectricMotors__module">
        <div className="module__guide">Drag Handle ---(Only for PC)</div>
        <img className="module__pic" src={experimentImg} alt=""></img>
        <div className="drag">
          <Draggable handle="strong" axis="y" >
            <div className="drag__magnet">
              <div className="magnet__spolar"></div>
              <strong className="magnet__handler" onMouseOver={() => { setIsDragHovered(true) }} onMouseLeave={() => { setIsDragHovered(false) }}>
                Handler Drag
                </strong>
            </div>
          </Draggable>
        </div>
        <div className="module__touch-line" onMouseOver={() => { setIsLineTouched(true) }} onMouseLeave={() => { setIsLineTouched(false) }}>
        </div>
        <div className={lightCondition ? "module__lightBulb-on" : "module__lightBulb-off"}>
        </div>
      </div>
      </Fade>
      <Fade right fraction={0.5} duration={3000}>
      <div className="MainElectricMotors__text">
        <div className="text__desc-ElectricMotor">
          Electromagnetic Induction!<br></br>  
          Moving magnet can make current<br></br>
          <p>"TRY to drag magnet along Y-axis"</p>
        </div>        
        <div className="text__link-wrapper-ElectricMotor">
          <Link to="/ElectricMotor" className="text__link-ElectricMotor">
            Click Me            
          </Link>
        </div>
      </div>  
      </Fade>    

    </div>
  );
};

export default MainElectricMotor;
