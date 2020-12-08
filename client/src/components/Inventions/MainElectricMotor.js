import { Link } from "react-router-dom";

const MainElectricMotor = () => {
  return (
    <div className="MainElectricMotors">      
      <div className="MainElectricMotors__background"></div>
      <div className="MainElectricMotors__grid">        
        <div className="MainElectricMotors__grid__item">
          <div className="MainElectricMotors__text">ElectricMotor</div>  
        </div>        
        <div className="MainElectricMotors__grid__item"></div>
        <div className="MainElectricMotors__grid__item"></div>
        <div className="MainElectricMotors__grid__item"></div>
      </div>    
      
      <Link to="/ElectricMotor" className={`MainElectricMotors__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainElectricMotor;
