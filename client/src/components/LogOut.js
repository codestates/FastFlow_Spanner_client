//import React, { useState } from "react";
//import axios from "axios";
//import { ip, port } from "../url";
import GoodbyePic from "./images/GoodBye.gif";

const LogOut = (props) => {
  return (
    <div className="LogOuts">
      <div className="LogOuts__navBtn" onClick={props.onLogOut}>
        Log out
      </div>
      <div className="LogOuts__modal" style={{ display: props.switchLogOut }}>
        <div className="LogOuts__content">
          <img className="LogOuts__content__pic" src={GoodbyePic} />
          {/* <span className="logOut__closeButton" onClick={props.modalClose}>&times;</span> */}
          <p className="LogOuts__message">{`Good Bye, See ya`}</p>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
