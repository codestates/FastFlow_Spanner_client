import MainFistAxe from "../Inventions/MainFistAxe";
import MainFire from "../Inventions/MainFire";
import MainWritingSystem from "../Inventions/MainWritingSystem";
import MainWheel from "../Inventions/MainWheel";
import MainCondom from "../Inventions/MainCondom";
import MainClock from "../Inventions/MainClock";
import MainGunpowder from "../Inventions/MainGunpowder";
import MainCompass from "../Inventions/MainCompass";
import MainGlasses from "../Inventions/MainGlasses";
import MainSteamEngine from "../Inventions/MainSteamEngine";
import MainVaccine from "../Inventions/MainVaccine";
import MainBattery from "../Inventions/MainBattery";
import MainElectricMotor from "../Inventions/MainElectricMotor";
import MainRefrigerator from "../Inventions/MainRefrigerator";
import MainLightBulb from "../Inventions/MainLightBulb";
import MainAirplane from "../Inventions/MainAirplane";
import MainInternet from "../Inventions/MainInternet";
// 아래는 별 사진
import MainStar from "../images/MainPage/MainStar.png";

const MainPage = () => {  
  return (
    <div className="MainPages">
      <div className="MainPages__welcomePoint">
        <div className="MainPages__welcomePointText">
          Welcome to <br />
          My Invention's Zone
        </div>
        <img src={MainStar} className="MainPages__starPic" alt="" />
        <span className="MainPages__ScrollSign">Scroll</span>
        <div className="MainPages__underArrow"></div>
        <div className="MainPages__secondUnderArrow"></div>
      </div>
      <MainFistAxe />
      <MainFire />
      <MainWritingSystem />
      <MainWheel />
      <MainCondom />
      <MainClock />
      <MainGunpowder />
      <MainCompass />
      <MainGlasses />
      <MainSteamEngine />
      <MainVaccine />
      <MainBattery />
      <MainElectricMotor />
      <MainRefrigerator />
      <MainLightBulb />
      <MainAirplane />
      <MainInternet />
    </div>
  );
};

export default MainPage;
