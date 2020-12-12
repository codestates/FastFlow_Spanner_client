import { useState } from "react";
import { Link } from "react-router-dom";
const MainWritingSystem = () => {
  const [writingBack, setWritingBack] = useState("");
  const [typingBC, setTypingBC] = useState("");
  const [typingText, setTypingText] = useState("");
  const [writingTitle, setWritingTitle] = useState("");
  const [linkEffect, setLinkEffect] = useState("");

  const changeBackWriting = () => {
    if (window.scrollY >= 2600 && window.scrollY < 2800) {
      setWritingTitle("appearBack 3s 1s forwards");
      setWritingBack("appearBack 4s both");
      setTypingBC("typing 6s 2s steps(30) both");
      setTypingText("typing 6s 4s steps(30) both");
      setLinkEffect("linkEffect 5s 6s both");
    }
  };
  window.addEventListener("scroll", changeBackWriting);
  return (
    <div className="MainWritingSystemss">
      <div className="MainWritingSystems" style={{ animation: writingBack }}>
        <div className="MainWritingSystems__textBodyPic">
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
        </div>
      </div>
    </div>
  );
};

export default MainWritingSystem;
