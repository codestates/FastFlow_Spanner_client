import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import img from "../../TestPic/glassesGD_cut.png";
import useScrollStatus from "../hooks/useScrollStatus";
import Heading from "../Heading";

const MainGlasses = () => {
  const scrollState = useScrollStatus();
  const position = scrollState.position;
  return (
    <div className="MainGlassess">
      <Fade top fraction={1} duration={3000}>
        <div className="mainGlasses__title">Glasses</div>
      </Fade>
      <div className="mainGlasses__glassesContainer">
        <div className={`${position}` < 50.3 || `${position}` > 54.4 ? "mainGlasses__temp_2_L" : "mainGlasses__temp_L"}></div>
        <img className={`${position}` < 50.3 || `${position}` > 54.4 ? "mainGlasses__glasses_2" : "mainGlasses__glasses"} src={img} alt="" />
        <div className={`${position}` < 50.3 || `${position}` > 54.4 ? "mainGlasses__linkContainer_2" : "mainGlasses__linkContainer"}>
          <div className="wrapper">
            <Link to="/Glasses">
              <Heading text="click me!" arc={130} radius={260} />
            </Link>
          </div>
        </div>
      </div>
      <div className="MainGlassess__text">안경</div>
    </div>
  );
};

export default MainGlasses;
