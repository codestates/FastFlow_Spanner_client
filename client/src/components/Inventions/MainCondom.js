import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Condom0 from "../images/Condom/Condom0.png";
import Condom1 from "../images/Condom/Condom1.png";
import Condom2 from "../images/Condom/Condom2.png";
import Condom3 from "../images/Condom/Condom3.png";
import Condom4 from "../images/Condom/Condom4.png";
import acientSex from "../images/Condom/acientSex.jpg";

const MainCondom = () => {
  return (
    <div className="MainCondomss">
      <div className="MainCondoms">
        <Fade top fraction={0.5} duration={3000}>
          <div className="MainCondoms__text">Condom</div>
        </Fade>
        <Fade bottom fraction={0.7}>
          <img className="MainCondoms__acientSex" src={acientSex} />
        </Fade>
        <LightSpeed left big fraction={1}>
          <img className="MainCondoms__CondomPic0" src={Condom0} />
        </LightSpeed>
        <LightSpeed left big fraction={0.1}>
          <img className="MainCondoms__CondomPic1" src={Condom1} />
        </LightSpeed>
        <LightSpeed left big fraction={0.1} delay={500}>
          <img className="MainCondoms__CondomPic2" src={Condom2} />
        </LightSpeed>
        <LightSpeed left big fraction={1} delay={800}>
          <img className="MainCondoms__CondomPic3" src={Condom3} />
        </LightSpeed>
        <LightSpeed left big fraction={0.1}>
          <img className="MainCondoms__CondomPic4" src={Condom4} />
        </LightSpeed>
        <Fade fraction={0.5} duration={3000}>
          <span className="MainCondoms__BCtext">B.C 3,000</span>
        </Fade>
        <Fade fraction={0.5} duration={3000}>
          <div className="MainCondoms__textBody">Ancient condoms were aimed at increasing birth</div>
        </Fade>
        <Link to="/Condom" className={`MainCondoms__link`}>
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default MainCondom;
