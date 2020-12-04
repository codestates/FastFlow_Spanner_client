//import React, { useState } from "react";
//import axios from "axios";
//import { ip, port } from "../url";

const LogOut = (props) => {
  return (
    <div className="LogOuts">
      <div className="LogOuts__navBtn" onClick={props.onLogOut}>
        Log out
      </div>
      <div className="LogOuts__modal" style={{ display: props.switchLogOut }}>
        <div className="LogOuts__content">
          {/* <span className="logOut__closeButton" onClick={props.modalClose}>&times;</span> */}
          <p className="LogOuts__message">{`Good Bye.`}</p>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
