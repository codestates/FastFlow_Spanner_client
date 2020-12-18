import { Link } from "react-router-dom";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import bananaImg from "./../images/Refrigerator/refrigerator_banana.png";
import squishImg from "./../images/Refrigerator/refrigerator_squish.png";
import verticalImg from "./../images/Refrigerator/refrigerator_vertical.gif";
import scenaryImg from "./../images/Refrigerator/refrigerator_scenary.gif";
import developerImg from "./../images/Refrigerator/refrigerator_developer.gif";
import errorImg from "./../images/Refrigerator/refrigerator_404.png";
import refrigerator_background from "./../images/Refrigerator/refrigerator_background.jpg";

const MainRefrigerator = () => {
  const [isOpenDoor1, setIsOpenDoor1] = useState(false);
  const [isOpenDoor2, setIsOpenDoor2] = useState(false);
  const [isOpenDoor3, setIsOpenDoor3] = useState(false);
  const [isOpenDoor4, setIsOpenDoor4] = useState(false);
  const [isOpenDoor5, setIsOpenDoor5] = useState(false);
  const [isOpenDoor6, setIsOpenDoor6] = useState(false);
  const [isOpenDoor7, setIsOpenDoor7] = useState(false);
  const [isOpenDoor8, setIsOpenDoor8] = useState(false);

  return (
    <div className="MainRefrigerators">
      <img className="MainRefrigerators__background" src={refrigerator_background}></img>
      <Fade top fraction={0.5} duration={1000}>
      <div className="MainRefrigerators__title">Refrigerator
        <Link to="/Refrigerator" className="guide__link">
          Click Me
        </Link>
      </div>
      </Fade>
      <div className="MainRefrigerators__body">
      <Fade right fraction={0.5} duration={3000}>
        <div className="MainRefrigerator__guide">
          <p>"TRY to find link in the fridge"</p>
          
        </div>
        </Fade>
        <div className="MainRefrigerators__grid">
          <div className="MainRefrigerators__grid__item">
            <div className="item1__indoor">
              <div className="item1__indoor_img-wrapper">
                <img className="item1__indoor__img" src={bananaImg} alt=""></img>
                <div className="item1__indoor__text"> Banana!</div>
              </div>
              <div className={isOpenDoor1 ? "doorOpen1" : "item1__outdoor"} onClick={() => { setIsOpenDoor1(!isOpenDoor1) }}>
                <div className="outDoor1__text">TRY <br></br>to open doors</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item2__indoor">
              <div className="item2__indoor_img-wrapper">
              <img className="item2__indoor__img" src={squishImg} alt=""></img>
                <div className="item2__indoor__text"> Who bought this squish?</div>
              </div>
              <div className={isOpenDoor2 ? "doorOpen2" : "item2__outdoor"} onClick={() => { setIsOpenDoor2(!isOpenDoor2) }}>
                <div className="outDoor2__text"></div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item3__indoor">
              <div className="item3__indoor_img-wrapper">
              <img className="item3__indoor__img" src={scenaryImg} alt=""></img>
              </div>
              <div className={isOpenDoor3 ? "doorOpen3" : "item3__outdoor"} onClick={() => { setIsOpenDoor3(!isOpenDoor3) }}>
                <div className="outDoor3__text"></div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className={isOpenDoor4 ? "doorOpen4" : "item4__outdoor"} onClick={() => { setIsOpenDoor4(!isOpenDoor4) }}>
              <div className="outDoor4__text"></div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item5__indoor">
              <div className="item5__indoor_img-wrapper">
                <img className="item5__indoor__img" src={verticalImg} alt=""></img>
              </div>
              <div className={isOpenDoor5 ? "doorOpen5" : "item5__outdoor"} onClick={() => { setIsOpenDoor5(!isOpenDoor5) }}>
                <div className="outDoor5__text"></div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item6__indoor">
              <div className="item6__indoor_img-wrapper">
                <Link to="/Refrigerator" className="img-wrapper__link-text">
                  Click Me
              </Link>
              </div>
              <div className={isOpenDoor6 ? "doorOpen6" : "item6__outdoor"} onClick={() => { setIsOpenDoor6(!isOpenDoor6) }}>
                <div className="outDoor6__text"></div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item7__indoor">
              <div className="item7__indoor_img-wrapper">
                <img className="item7__indoor__img" src={developerImg} alt=""></img>
              </div>
              <div className={isOpenDoor7 ? "doorOpen7" : "item7__outdoor"} onClick={() => { setIsOpenDoor7(!isOpenDoor7) }}>
                <div className="outDoor7__text"></div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item8__indoor">
              <div className="item8__indoor_img-wrapper">
                <img className="item8__indoor__img" src={errorImg} alt=""></img>
              </div>
              <div className={isOpenDoor8 ? "doorOpen8" : "item8__outdoor"} onClick={() => { setIsOpenDoor8(!isOpenDoor8) }}>
                <div className="outDoor8__text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRefrigerator;
