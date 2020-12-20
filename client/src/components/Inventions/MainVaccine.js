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
      <div className="MainVaccines__text">A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.</div>
      <div className="mainVaccine__linkContainer">
        <Link to="/Vaccine" className="mainVaccine__link">
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default MainVaccine;
