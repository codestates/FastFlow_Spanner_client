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

import { useEffect, useState } from "react";
import axios from "axios";
import { ip, port, port_client } from "./../../url";
import Fade from "react-reveal/Fade";

const MainPage = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("token");

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(accessToken);
    if (refreshToken && !accessToken) {
      axios.post(`${ip}${port}/refreshToken`, { refreshToken: refreshToken }).then((res) => {
        console.log("refreshToken 받아옴!");
        localStorage.setItem("token", res.data.accessToken);
      });
    }
  });

  // const updateMousePosition = (e) => {
  //   e.persist();
  //   setMousePosition((mousePosition) => ({ ...mousePosition, x: e.clientX, y: e.clientY }));
  // };

  // onMouseMove={updateMousePosition} style={{ backgroundPositionX: `${mousePosition.x}px`, backgroundPositionY: `${mousePosition.y}px` }}
  return (
    <div className="MainPages">
      <div className="MainPages__welcomePoint">
        <div className="MainPages__welcomePointTextArea">
          <div className="MainPages__welcomePointText">Invention History</div>
          <div className="MainPages__welcomePointSubText">Experience the footsteps of an invention over time</div>
        </div>
        <div className="MainPages__ScrollSignArea">
          <Fade top fraction={0.2} duration={3000}>
            <span className="MainPages__ScrollSign">Scroll</span>
          </Fade>
        </div>
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
