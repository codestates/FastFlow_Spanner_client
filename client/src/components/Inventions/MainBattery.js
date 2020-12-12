import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const MainBattery = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [grid1, setGrid1] = useState(0);
  const [grid2, setGrid2] = useState(0);
  const [grid3, setGrid3] = useState(0);
  const [grid4, setGrid4] = useState(0);

  const batteryRecharge = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 14400) {
      setGrid1(1);
    }
    if (window.scrollY >= 14600) {
      setGrid2(1);
    }
    if (window.scrollY >= 14800) {
      setGrid3(1);
    }
    if (window.scrollY >= 15000) {
      setGrid4(1);
    }
  }
  function throttle(fn, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
  window.addEventListener("scroll", throttle(batteryRecharge, 300));

  return (
    <div className="MainBatterys">
      <div className="MainBatterys__title">Battery</div>
      <div className="MainBatterys__body">
        <div className={isHovered ? "body__lightening-on" : null}></div>
        <div className="body__video" onMouseOver={() => { setIsHovered(!isHovered) }} onMouseDown={() => { setIsHovered(false) }}>
          <div className="video__text">Are you alive!!!?
              <span className="video__text__desc"><br></br>(1분부터 신남)</span>
          </div>
          <iframe className="video__iframe" src="https://www.youtube.com/embed/tRJxnxVu3C8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" long-desc="Are you live!!?" allowFullScreen></iframe>
        </div>
        <div className="body__diagram">
          <div className="diagram__upperbox"></div>
          <div className="diagram__hline-upper"></div>          
          <div className="diagram__vline"></div>
          <div className="diagram__grid">
            <div className="diagram__grid__item" style={{ opacity: grid1 }}>
              <div className="row1__definition">
                <div className="definition__title">배터리는 에너지의 상징! </div>
              </div>
            </div>
            <div className="diagram__grid__item" style={{ opacity: grid2 }}>
              <div className="row2__usage">
                <div className="usage__title">거의 모든 전자제품이 배터리를 이용하죠
            </div>
              </div>
            </div>
            <div className="diagram__grid__item" style={{ opacity: grid3 }}>
              <div className="row3__principle">
                <div className="principle__title">로봇 개발의 주요과제도 배터리라고 하는데요,
            </div>
              </div>
            </div>
            <div className="diagram__grid__item" style={{ opacity: grid4 }}>
            <div className="row4__future">                
              <div className="future__title">미래 핵심 부품, 배터리에 대해 알아보시죠</div>
            </div>                       
            </div>            
          </div>
          <div className="future__link-wrapper" >
            <Link to="/Battery" className="future__link">
              Click Me!
            </Link>
          </div> 
          <div className="diagram__lowerbox"></div>
          <div className="diagram__hline-lower"></div>
        </div>
      </div>
    </div>
  );
};

export default MainBattery;
