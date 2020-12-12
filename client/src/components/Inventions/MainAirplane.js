import { Link } from "react-router-dom";
import { useState } from "react";
import bluesky from "./../images/airplane-bluesky.jpg";
import earth from "./../images/airplane-earth.jpg";
import rocket from "./../images/airplane-rocket.png";
import airplaneImg1 from "./../images/airplane1.png";
import airplaneImg2 from "./../images/airplane2.png";
import airplaneImg3 from "./../images/airplane3.png";
import airplaneImg4 from "./../images/airplane4.png";


const MainAirplane = () => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);


  const aniTrigger = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 19200) {
      setImg1(true);
      setImg2(true);
      setImg3(true);
      setImg4(true);
    }
  }

  window.addEventListener("scroll", aniTrigger);

  return (
    <div className="MainAirplanes">
      <div className="MainAirplanes__title">
        Airplane
      </div>
      <div className="MainAirplanes__body">
        <img className={img1 ? "body__img1" : null} src= {img1 ? airplaneImg1 : null} alt=""></img>
        <img className={img2 ? "body__img2" : null} src= {img2 ? airplaneImg2 : null} alt=""></img>
        <img className={img3 ? "body__img3-background" : null} src= {img3 ? bluesky : null}></img>
        <img className={img3 ? "body__img3-airliner" : null} src= {img3 ? airplaneImg3 : null}></img>
        <img className={img3 ? "body__img3-jet" : null} src= {img3 ? airplaneImg4 : null}></img>
        <img className={img4 ? "body__img4-background" : null} src= {img4 ? earth : null}></img>
        <img className={img4 ? "body__img4-rocket" : null} src= {img4 ? rocket : null}></img>
          <Link to="/Airplane" className="rocket__link">
            종이비행기부터 로켓까지, <br></br>
            인류를 날려보낸 이야기!<br></br>
          </Link>
      </div>
    </div>    
  );
};

export default MainAirplane;
