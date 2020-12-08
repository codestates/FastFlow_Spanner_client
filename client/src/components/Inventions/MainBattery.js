import { Link } from "react-router-dom";
import phone from "./../images/battery_iphone.png"
import notebook from "./../images/battery_notebook.png"
import watch from "./../images/battery_watch.png"
import principle from "./../images/battery_principle.gif"

const MainBattery = () => {
  return (
    <div className="MainBatterys">
      <div className="MainBatterys__grid">
        <div className="MainBatterys__grid__item">
          <div className="row1__video">
            <div className="video__title">Battery
            <div className="video__desc">배터리는 에너지의 상징! </div>
            </div>            
            <div className="video__video">
              <p className="video__video__text">Are you alive!!!?
                <span className="video__video__text__desc">(1분부터 신남)</span>
              </p>              
              <iframe width="400px" height="220px" src="https://www.youtube.com/embed/tRJxnxVu3C8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" long-desc="Are you live!!?" allowfullscreen></iframe>
            </div>
          </div>          
        </div>
        <div className="MainBatterys__grid__item">
          <div className="row2__usage">
            <div className="usage__image-wrapper__container">
              <div className="usage__image-wrapper">
                <img className="usage__img__phone" src={phone} alt=""></img>
                <p className="image-wrapper__text">핸드폰</p>
              </div>
              <div className="usage__image-wrapper">
                <img className="usage__img__notebook" src={notebook} alt=""></img>
                <p className="image-wrapper__text">노트북</p>
              </div>
              <div className="usage__image-wrapper">
                <img className="usage__img__watch" src={watch} alt=""></img>
                <p className="image-wrapper__text">전자시계</p>
              </div>
            </div>    
            <div className="usage__title">Usage
              <div className="usage__text">거의 모든 전자제품이 배터리로 구동된다!</div>
            </div>
          </div>
        </div>
        <div className="MainBatterys__grid__item">
          <div className="row3__principle">
            <div className="principle__title">Principle
              <div className="principle__text">
                <p>가장 흔하게 사용되는 것은 화학전지.
                  <br></br>금속의 이온화도 차이에서 오는 전위차를 전기 에너지로 전환해주는 형태이다.
                  <br></br>현재는 리튬이온배터리를 가장 많이 쓴다.
                </p>                
                <a href="">원리 더보러 가기.</a> 
              </div>
            </div>            
            <img className="principle__img" src={principle} alt=""></img>
          </div>
        </div>
        <div className="MainBatterys__grid__item">
          <div className="row4__future">
            <div className="icon1"></div>
            <div className="icon2"></div>
            <div className="icon3"></div>
            <div className="future__title">future
              <div className="future__text">
                <p>자동차, 태양열전지, 로봇 등 인류의 미래를 위해
                  <br></br>성능 향상이 절실한 발명품이다.
                </p>
                <a href="">원리 더보러 가기.</a>
              </div>
            </div>
          </div>
          <Link to="/Battery" className={`MainBatterys__link LinkedDetail`}>
            클릭 시 상세 페이지로 이동합니다
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBattery;
