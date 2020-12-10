import { Link } from "react-router-dom";
const MainAirplane = () => {
  return (
    <div className="MainAirplanes">
      <div className="MainAirplanes__title">
      <div className="title__text">Airplane</div>
      <div className="title__img1"></div>
      </div>      
      <div className="MainAirplanes__img2"></div>
      <div className="MainAirplanes__img3"></div>
      <div className="img3__airliner"></div>
      <div className="img3__jet"></div>
      
      <div className="MainAirplanes__img4"></div>
      <div className="img4__rocket">
      <Link to="/Airplane" className="rocket__link">
        종이비행기부터 로켓까지, <br></br>
        인류를 날려보낸 이야기!<br></br>        
      </Link>
      </div>
      
    </div>
  );
};

export default MainAirplane;
