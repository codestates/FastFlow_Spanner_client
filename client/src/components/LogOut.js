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
        </div>
      </div>
    </div>
  );
};

export default LogOut;
