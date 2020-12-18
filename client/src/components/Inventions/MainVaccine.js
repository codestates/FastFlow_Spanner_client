import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Fade from "react-reveal/Fade";
import syringe from "../../TestPic/syringe.png";
import arm from "../../TestPic/arm.png";
import arm_mod from "../../TestPic/arm_mod.png";

const MainVaccine = () => {
  return (
    <div className="MainVaccines">
      <Fade top fraction={1} duration={3000}>
        <div className="mainVaccine__title">Vaccine</div>
      </Fade>
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
