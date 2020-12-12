import { Link } from "react-router-dom";
import React, { useState } from "react";
import bananaImg from "./../images/refrigerator_banana.png";
import squishImg from "./../images/refrigerator_squish.png";
import verticalImg from "./../images/refrigerator_vertical.gif";
import scenaryImg from "./../images/refrigerator_scenary.gif";
import developerImg from "./../images/refrigerator_developer.gif";
import errorImg from "./../images/refrigerator_404.png";

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
      <div className="MainRefrigerators__title">Refrigerator</div>
      <div className="MainRefrigerators__body">
        <div className="MainRefrigerator__guide">
          <p>냉장고 속에 상세페이지 링크 있어요!</p>
          <Link to="/Refrigerator" className="guide__text">
            바로 가실려면 클릭
        </Link>
        </div>
        <div className="MainRefrigerators__grid">
          <div className="MainRefrigerators__grid__item">
            <div className="item1__indoor">
              <div className="item1__indoor_img-wrapper">
                <img className="item1__indoor__img" src={bananaImg} alt=""></img>
                <div className="item1__indoor__text"> 바나나 발견!</div>
              </div>
              <div className={isOpenDoor1 ? "doorOpen1" : "item1__outdoor"} onClick={() => { setIsOpenDoor1(!isOpenDoor1) }}>
                <div className="outDoor1__text">냉장고 페이지입니다. <br></br>문 열어 보실래요?</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item2__indoor">
              <div className="item2__indoor_img-wrapper">
              <img className="item2__indoor__img" src={squishImg} alt=""></img>
                <div className="item2__indoor__text"> 오징어를 언제 샀었지...</div>
              </div>
              <div className={isOpenDoor2 ? "doorOpen2" : "item2__outdoor"} onClick={() => { setIsOpenDoor2(!isOpenDoor2) }}>
                <div className="outDoor2__text">냉장고 없인 <br></br>살 수 없어!</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item3__indoor">
              <div className="item3__indoor_img-wrapper">
              <img className="item3__indoor__img" src={scenaryImg} alt=""></img>
              </div>
              <div className={isOpenDoor3 ? "doorOpen3" : "item3__outdoor"} onClick={() => { setIsOpenDoor3(!isOpenDoor3) }}>
                <div className="outDoor3__text">1949년에는 <br></br>양문형 냉장고가 <br></br>개발되어서</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className={isOpenDoor4 ? "doorOpen4" : "item4__outdoor"} onClick={() => { setIsOpenDoor4(!isOpenDoor4) }}>
              <div className="outDoor4__text">허리를 굽힐 <br></br>필요가 <br></br>없어졌습니다.</div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item5__indoor">
              <div className="item5__indoor_img-wrapper">
                <img className="item5__indoor__img" src={verticalImg} alt=""></img>
              </div>
              <div className={isOpenDoor5 ? "doorOpen5" : "item5__outdoor"} onClick={() => { setIsOpenDoor5(!isOpenDoor5) }}>
                <div className="outDoor5__text">냉장고는 어떻게 온도를 차갑게 <br></br>유지할까요?</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item6__indoor">
              <div className="item6__indoor_img-wrapper">
                <Link to="/Refrigerator" className="img-wrapper__link-text">
                  상세페이지
              </Link>
              </div>
              <div className={isOpenDoor6 ? "doorOpen6" : "item6__outdoor"} onClick={() => { setIsOpenDoor6(!isOpenDoor6) }}>
                <div className="outDoor6__text">에어컨이랑 <br></br>원리가 같다네요</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item7__indoor">
              <div className="item7__indoor_img-wrapper">
                <img className="item7__indoor__img" src={developerImg} alt=""></img>
              </div>
              <div className={isOpenDoor7 ? "doorOpen7" : "item7__outdoor"} onClick={() => { setIsOpenDoor7(!isOpenDoor7) }}>
                <div className="outDoor7__text">냉장고 문은 어떻게 닫히는 걸까요?</div>
              </div>
            </div>
          </div>
          <div className="MainRefrigerators__grid__item">
            <div className="item8__indoor">
              <div className="item8__indoor_img-wrapper">
                <img className="item8__indoor__img" src={errorImg} alt=""></img>
              </div>
              <div className={isOpenDoor8 ? "doorOpen8" : "item8__outdoor"} onClick={() => { setIsOpenDoor8(!isOpenDoor8) }}>
                <div className="outDoor8__text">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRefrigerator;
