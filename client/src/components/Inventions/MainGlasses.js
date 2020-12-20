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
      <Fade bottom fraction={0.3} duration={2000}>
        <img className="mainGlasses__glasses" src={img} alt="" />
      </Fade>
        <div className="mainGlasses__linkContainer">
          <div className="wrapper">
            <Link to="/Glasses">
              <Heading text="click me!" arc={130} radius={160} />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/Glasses" className="mainGlasses__link">Click Me</Link>
      <Fade duration={1500}>
      <div className="MainGlassess__text">Glasses are typically used for vision correction, such as with reading glasses and glasses used for nearsightedness, however, without the specialized lenses, they are sometimes used for cosmetic purposes.</div>
      </Fade>
    </div>
  );
};

export default MainGlasses;
