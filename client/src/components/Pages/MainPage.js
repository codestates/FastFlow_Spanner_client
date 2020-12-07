import MainFistAxe from "../Inventions/MainFistAxe";
//import React, {useState} from 'react';

const MainPage = () => {
  return (
    <div className="MainPages">
      <div className="MainPages__welcomePoint">
        <div className="MainPages__welcomePointText">메인페이지 입니다.</div>
      </div>
      <MainFistAxe />
    </div>
  );
};

export default MainPage;
