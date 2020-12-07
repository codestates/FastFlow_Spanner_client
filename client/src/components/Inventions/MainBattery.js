import { Link } from "react-router-dom";
const MainBattery = () => {
  return (
    <div className="MainBatterys">
      <div className="MainBatterys__title">Battery</div>
      <div>배터리 충전 애니메이션</div>
      <div>메탈리카 배터리 노래 들으러 가기. Are You Live!!!? 인류 에너지의 상징이 되버렸다.</div>
      <div>사용 용도. 핸드폰, 노트북, 시계, 면도기까지 배터리가 안들어가는 곳은 없다!</div>
      <div>원리. 가장 흔하게 사용되는 것은 화학전지. 금속의 이온화도 차이에서 오는 전위차를
        전기 에너지로 전환해주는 형태이다. 현재는 리튬이온배터리를 가장 많이 쓴다.원리 더보러 가기.
      </div>
      <div> 자동차, 태양열전지, 로봇 등 인류의 미래를 위해 성능 향상이 절실한 발명품이다.</div>
      <Link to="/Battery" className={`MainBatterys__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainBattery;
