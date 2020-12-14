import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import syringe from "../../TestPic/syringe.png";
import arm from "../../TestPic/arm.png";
import arm_mod from "../../TestPic/arm_mod.png";

const MainVaccine = () => {
  return (
    <div className="MainVaccines">
      <div className="mainVaccine_armContainer">
        <img className="mainVaccine_arm" src={arm} alt="" />
        <img className="mainVaccine_arm_mod" src={arm_mod} alt="" />
      </div>
      <Draggable>
        <div>
          <div className="handle">
            <img className="mainVaccine_syringe" src={syringe} alt="" />
          </div>
        </div>
      </Draggable>
      <div className="MainVaccines__text">백신 페이지입니다.</div>
      <div className="mainVaccine__linkContainer">
        <Link to="/Vaccine" className="mainVaccine__link">
          클릭 시 상세 페이지로 이동합니다
        </Link>
      </div>
    </div>
  );
};

export default MainVaccine;
