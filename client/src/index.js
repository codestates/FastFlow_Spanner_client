import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
