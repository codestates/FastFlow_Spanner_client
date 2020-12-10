import { Link } from "react-router-dom";
import React, {useState} from "react";

const MainRefrigerator = () => {
  const [isOpenDoor1, setIsOpenDoor1 ] = useState(false);
  const [isOpenDoor2, setIsOpenDoor2 ] = useState(false);
  const [isOpenDoor3, setIsOpenDoor3 ] = useState(false);
  const [isOpenDoor4, setIsOpenDoor4 ] = useState(false);
  const [isOpenDoor5, setIsOpenDoor5 ] = useState(false);
  const [isOpenDoor6, setIsOpenDoor6 ] = useState(false);
  const [isOpenDoor7, setIsOpenDoor7 ] = useState(false);
  const [isOpenDoor8, setIsOpenDoor8 ] = useState(false);  
 
  return (
    <div className="MainRefrigerators">
      <div className="MainRefrigerators__title">Refrigerator</div>
      <div className="MainRefrigerators__grid">
        <div className="MainRefrigerators__grid__item">
          <div className="item1__indoor">
            <div className="item1__indoor_img-wr0823@home
            apper">
              <div className="item1__indoor__img"> 바나나 발견!</div>
            </div>                        
            <div className={isOpenDoor1 ? "doorOpen1" : "item1__outdoor"} onClick={() => {setIsOpenDoor1(!isOpenDoor1)}}>
              <div className="outDoor1__text__title">Refrigerator</div>
              <div className="outDoor1__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item2__indoor">
            <div className="item2__indoor_img-wrapper">
              <div className="item2__indoor__img"> 바나나 발견!</div>
            </div>                        
            <div className={isOpenDoor2 ? "doorOpen2" : "item2__outdoor"} onClick={() => {setIsOpenDoor2(!isOpenDoor2)}}>
              <div className="outDoor2__text__title">Refrigerator</div>
              <div className="outDoor2__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item3__indoor">
            <div className="item3__indoor_img-wrapper">
              <div className="item3__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor3 ? "doorOpen3" : "item3__outdoor"} onClick={() => { setIsOpenDoor3(!isOpenDoor3) }}>
              <div className="outDoor3__text__title">Refrigerator</div>
              <div className="outDoor3__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item4__indoor">
            <div className="item4__indoor_img-wrapper">
              <div className="item4__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor4 ? "doorOpen4" : "item4__outdoor"} onClick={() => { setIsOpenDoor4(!isOpenDoor4) }}>
              <div className="outDoor4__text__title">Refrigerator</div>
              <div className="outDoor4__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item5__indoor">
            <div className="item5__indoor_img-wrapper">
              <div className="item5__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor5 ? "doorOpen5" : "item5__outdoor"} onClick={() => { setIsOpenDoor5(!isOpenDoor5) }}>
              <div className="outDoor5__text__title">Refrigerator</div>
              <div className="outDoor5__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item6__indoor">
            <div className="item6__indoor_img-wrapper">
              <div className="item6__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor6 ? "doorOpen6" : "item6__outdoor"} onClick={() => { setIsOpenDoor6(!isOpenDoor6) }}>
              <div className="outDoor6__text__title">Refrigerator</div>
              <div className="outDoor6__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item7__indoor">
            <div className="item7__indoor_img-wrapper">
              <div className="item7__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor7 ? "doorOpen7" : "item7__outdoor"} onClick={() => { setIsOpenDoor7(!isOpenDoor7) }}>
              <div className="outDoor7__text__title">Refrigerator</div>
              <div className="outDoor7__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>
        <div className="MainRefrigerators__grid__item">
          <div className="item8__indoor">
            <div className="item8__indoor_img-wrapper">
              <div className="item8__indoor__img"> 바나나 발견!</div>
            </div>
            <div className={isOpenDoor8 ? "doorOpen8" : "item8__outdoor"} onClick={() => { setIsOpenDoor8(!isOpenDoor8) }}>
              <div className="outDoor8__text__title">Refrigerator</div>
              <div className="outDoor8__text__desc">냉장고 페이지입니다. 문 열어 보실래요?</div>
            </div>
          </div>
        </div>        
      </div>
      {/* <Link to="/Refrigerator" className={`MainRefrigerators__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link> */}
    </div>
  );
};

export default MainRefrigerator;
