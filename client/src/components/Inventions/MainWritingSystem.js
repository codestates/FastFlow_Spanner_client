// import { Link } from "react-router-dom";
import mesopotamia from "../images/WritingSystem/mesopotamia.jpg";
import uruk from "../images/WritingSystem/uruk.jpg";
import Fade from "react-reveal/Fade";

const MainWritingSystem = () => {
  return (
    <div className="MainWritingSystemss">
      <Fade fraction={0.4} duration={5000}>
        <img className="MainWritingSystems__mesopotamia" src={mesopotamia} />
      </Fade>
      <Fade bottom fraction={0.2} duration={3000}>
        <img className="MainWritingSystems__uruk" src={uruk} />
      </Fade>
      {/* <div className="MainWritingSystems__textBodyPic">
          <div className="MainWritingSystems__text" style={{ animation: writingTitle }}>
            Writing System
          </div>
          <span className="MainWritingSystems__BCtext" style={{ animation: typingBC }}>
            B.C 3,500
          </span>
          <div className="MainWritingSystems__textBody" style={{ animation: typingText }}>
            문자의 발명과 함께 인류의 지식을 <br />
            형태가 있는 방식으로 전할 수 있게 <br />
            되었다.
          </div>

          <Link to="/WritingSystem" className={`MainWritingSystems__link`} style={{ animation: linkEffect }}>
            Click Me
          </Link>
        </div> */}
    </div>
  );
};

export default MainWritingSystem;
