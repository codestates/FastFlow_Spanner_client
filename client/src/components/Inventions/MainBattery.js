import { Link } from "react-router-dom";

const MainBattery = () => {
  return (
    <div className="MainBatterys">
      <div className="MainBatterys__video">
        <div className="video__video">
          <p className="video__video__text">Are you alive!!!?
                <span className="video__video__text__desc">(1분부터 신남)</span>
          </p>
        </div>
        <iframe width="400px" height="220px" src="https://www.youtube.com/embed/tRJxnxVu3C8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" long-desc="Are you live!!?" allowfullscreen></iframe>        
      </div>
      <div className="MainBattrys__upperbox"></div>
      <div className="MainBattrys__line"></div>
      <div className="MainBatterys__grid">
        <div className="MainBatterys__grid__item">
          <div className="row1__video">
            <div className="video__title">Battery
            <div className="video__desc">배터리는 에너지의 상징! </div>
            </div>            
            
          </div>          
        </div>
        <div className="MainBatterys__grid__item">
          <div className="row2__usage">            
            <div className="usage__title">Usage
              <div className="usage__text">거의 모든 전자제품이 배터리로 구동된다!</div>
            </div>
          </div>
        </div>
        <div className="MainBatterys__grid__item">
          <div className="row3__principle">
            <div className="principle__title">Principle
              <div className="principle__text">
                <p>금속의 이온화도 차이에서 오는 전위차를 전기 에너지로 전환해주는 형태이다.</p>                
                <a href="">원리 더보러 가기.</a> 
              </div>
            </div>                        
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
