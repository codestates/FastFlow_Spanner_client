import { Link } from "react-router-dom";
const MainElectricMotor = () => {
  return (
    <div className="MainElectricMotors">
      <div className="MainElectricMotors__text">전동기 페이지입니다.</div>
      <Link to="/ElectricMotor" className={`MainElectricMotors__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainElectricMotor;
