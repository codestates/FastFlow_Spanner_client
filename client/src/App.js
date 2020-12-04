import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import FistAxe from "./components/Detail/FistAxe";
import MainPage from "./components/Pages/MainPage";
import Mypage from "./components/Pages/Mypage";
import WritePage from "./components/Pages/WritePage";
import Nav from "./components/Nav";

import { ip, port } from "./url";
import Abacus from "./components/Detail/Abacus";
import Airplane from "./components/Detail/Airplane";
import Battery from "./components/Detail/Battery";
import Camera from "./components/Detail/Camera";
import Clock from "./components/Detail/Clock";
import Compass from "./components/Detail/Compass";
import Condom from "./components/Detail/Condom";
import ElectricMotor from "./components/Detail/ElectricMotor";
import Fire from "./components/Detail/Fire";
import Glasses from "./components/Detail/Glasses";
import GunPowder from "./components/Detail/GunPowder";
import Internet from "./components/Detail/Internet";
import LightBulb from "./components/Detail/LightBulb";
import Pump from "./components/Detail/Pump";
import Refrigerator from "./components/Detail/Refrigerator";
import Robot from "./components/Detail/Robot";
import SteamEngine from "./components/Detail/SteamEngine";
import Vaccine from "./components/Detail/Vaccine";
import Wheel from "./components/Detail/Wheel";
import WritingSystem from "./components/Detail/WritingSystem";

axios.defaults.withCredentials = true;

const App = () => {
  const [modal, setModal] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [switchLogOut, setSwitchLogOut] = useState("none");

  const modalOpen = () => {
    setModal("block");
  };
  const modalClose = () => {
    setBackErrMessage();
    setModal("none");
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeErrMessage = (e) => {
    setErrMessage(e);
  };
  const setBackErrMessage = () => {
    onChangeErrMessage("");
  };
  const handleSignIn = async () => {
    if (!email || !password) {
      onChangeErrMessage("이메일과 비밀번호를 입력해주세요");
    } else {
      setBackErrMessage();
      await axios
        .post(ip + port + "/user/signin", {
          email: email,
          password: password,
        })
        .then((res) => {
          const { accessToken } = res.data;
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
          localStorage.setItem("token", res.data.accessToken);
          modalClose();
          // return this.PaymentResponse.handleResponseSuccess(res.data.id);
        });
    }
  };
  const handleResponseSuccess = async (login) => {
    let successInfo = await axios.get(ip + port + "/user");
    console.log(successInfo);
    if (!successInfo) {
      //setUserInfo("")
    } else {
      //setIsLogIn(true)
      //history.push('/')
    }
  };

  const onLogOut = () => {
    setSwitchLogOut("block");
    // await axios.post("http://localhost:3000/user/signout")
    axios.delete(ip + port + "/user/signout");
    setTimeout(() => {
      autoLogOutClose();
    }, 2000);

    localStorage.removeItem("token");
  };

  const autoLogOutClose = () => {
    setSwitchLogOut("none");
  };

  return (
    <div>
      <Nav
        modalOpen={modalOpen}
        modalClose={modalClose}
        modal={modal}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        errMessage={errMessage}
        handleSignIn={handleSignIn}
        handleResponseSuccess={handleResponseSuccess}
        onLogOut={onLogOut}
        switchLogOut={switchLogOut}
      />
      <Switch>
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn handleResponseSuccess={handleResponseSuccess.bind(this)} />} />
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/Abacus" render={() => <Abacus />} />
        <Route exact path="/Airplane" render={() => <Airplane />} />
        <Route exact path="/Battery" render={() => <Battery />} />
        <Route exact path="/Camera" render={() => <Camera />} />
        <Route exact path="/Clock" render={() => <Clock />} />
        <Route exact path="/Compass" render={() => <Compass />} />
        <Route exact path="/Condom" render={() => <Condom />} />
        <Route exact path="/ElectricMotor" render={() => <ElectricMotor />} />
        <Route exact path="/Fire" render={() => <Fire />} />
        <Route exact path="/fistaxe" render={() => <FistAxe />} />
        <Route exact path="/Glasses" render={() => <Glasses />} />
        <Route exact path="/GunPowder" render={() => <GunPowder />} />
        <Route exact path="/Internet" render={() => <Internet />} />
        <Route exact path="/LightBulb" render={() => <LightBulb />} />
        <Route exact path="/Pump" render={() => <Pump />} />
        <Route exact path="/Refrigerator" render={() => <Refrigerator />} />
        <Route exact path="/Robot" render={() => <Robot />} />
        <Route exact path="/SteamEngine" render={() => <SteamEngine />} />
        <Route exact path="/Vaccine" render={() => <Vaccine />} />
        <Route exact path="/Wheel" render={() => <Wheel />} />
        <Route exact path="/WritingSystem" render={() => <WritingSystem />} />
        <Route exact path="/mypage" render={() => <Mypage />} />
        <Route exact path="/writepage" render={() => <WritePage />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
