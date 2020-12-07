import MainFistAxe from "../Inventions/MainFistAxe";
import MainFire from "../Inventions/MainFire";
import MainWritingSystem from "../Inventions/MainWritingSystem";
import MainWheel from "../Inventions/MainWheel";
import MainCondom from "../Inventions/MainCondom";
import MainAbacus from "../Inventions/MainAbacus";
import MainClock from "../Inventions/MainClock";
import MainGunpowder from "../Inventions/MainGunpowder";
import MainPump from "../Inventions/MainPump";
import MainCompass from "../Inventions/MainCompass";
import MainGlasses from "../Inventions/MainGlasses";
import MainCamera from "../Inventions/MainCamera";
import MainSteamEngine from "../Inventions/MainSteamEngine";
import MainVaccine from "../Inventions/MainVaccine";
import MainBattery from "../Inventions/MainBattery";
import MainElectricMotor from "../Inventions/MainElectricMotor";
import MainRefrigerator from "../Inventions/MainRefrigerator";
import MainLightBulb from "../Inventions/MainLightBulb";
import MainWirelessCommunication from "../Inventions/MainWirelessCommunication";
import MainAirplane from "../Inventions/MainAirplane";
import MainRobot from "../Inventions/MainRobot";
import MainInternet from "../Inventions/MainInternet";
//import React, {useState} from 'react';

const MainPage = () => {
  return (
    <div className="MainPages">
      <div className="MainPages__welcomePoint">
        <div className="MainPages__welcomePointText">메인페이지 입니다.</div>
      </div>
      <MainFistAxe />
      <MainFire />
      <MainWritingSystem />
      <MainWheel />
      <MainCondom />
      <MainAbacus />
      <MainClock />
      <MainGunpowder />
      <MainPump />
      <MainCompass />
      <MainGlasses />
      <MainCamera />
      <MainSteamEngine />
      <MainVaccine />
      <MainBattery />
      <MainElectricMotor />
      <MainRefrigerator />
      <MainLightBulb />
      <MainWirelessCommunication />
      <MainAirplane />
      <MainRobot />
      <MainInternet />
    </div>
  );
};

export default MainPage;
