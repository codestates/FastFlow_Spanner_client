import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

const MainElectricMotor = () => {
  const [ isDragHovered, setIsDragHovered ] = useState(false);
  const [ isLineTouched, setIsLineTouched ] = useState(false);  
  const [ lightCondition, setLightCondition ] = useState(false);  

  useEffect(()=> {
    // console.log(`------------`)
    // console.log(`linetouch===${isLineTouched}`)
    // console.log(`draghover===${isDragHovered}`)
    // console.log(`lightcondition===${lightCondition}`)    
    if(isLineTouched && !isDragHovered) {
      setLightCondition(true)      
    } else{
      setTimeout(()=> {
        setLightCondition(false)
      }, 500)      
    }
  },[isLineTouched, isDragHovered])

  return (        
    <div className="MainElectricMotors">                  
      <div className="MainElectricMotors__background"></div>
      <div className="MainElectricMotors__title">ElectricMotor</div>
      <div className="MainElectricMotors__expriment">
        <div className="experiment__module">
          <Draggable handle="strong" axis="y" >            
            <div className="drag">
            <div className="drag__spolar"></div>
            <strong className="cursor">
              <div className="drag__handler" onMouseOver={()=>{setIsDragHovered(true)}} onMouseLeave={()=>{setIsDragHovered(false)}}>
                손잡이 Drag
              </div>
            </strong>            
          </div>            
          </Draggable>
          <div className="module__touch-line" onMouseOver={()=>{setIsLineTouched(true)}} onMouseLeave={()=>{setIsLineTouched(false)}}></div>
          <div className={lightCondition ? "module__light-bulb-on" : "module__light-bulb-off"}></div>
        </div>
        <div className="expriment__text">
          전자기 유도의 법칙!<br></br>
          움직이는 자석이 전류를 만듭니다.<br></br>
          자석을 위아래로 움직여보세요.
        </div>
      </div>
      <div className="MainElectricMotors__link">
        <Link to="/ElectricMotor" className="link__text">
          반대로 전류를 바꾸면<br></br>
          자석이 회전합니다<br></br>
          :상세페이지
      </Link>            
      </div>
      
    </div>
  );
};

export default MainElectricMotor;
