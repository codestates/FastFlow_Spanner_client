import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import MainPage from "./components/Pages/MainPage";
import Mypage from "./components/Pages/Mypage";
import Nav from "./components/Nav";
import SocialLogInGitHub from "./components/SocialLogInGitHub";
import SocialLogInKakao from "./components/SocialLogInKakao";

import { ip, port } from "./url";

import Airplane from "./components/Detail/Airplane";
import Battery from "./components/Detail/Battery";
import Clock from "./components/Detail/Clock";
import Compass from "./components/Detail/Compass";
import Condom from "./components/Detail/Condom";
import ElectricMotor from "./components/Detail/ElectricMotor";
import Fire from "./components/Detail/Fire";
import FistAxe from "./components/Detail/FistAxe";
import Glasses from "./components/Detail/Glasses";
import GunPowder from "./components/Detail/GunPowder";
import Internet from "./components/Detail/Internet";
import LightBulb from "./components/Detail/LightBulb";
import Refrigerator from "./components/Detail/Refrigerator";
import SteamEngine from "./components/Detail/SteamEngine";
import Vaccine from "./components/Detail/Vaccine";
import Wheel from "./components/Detail/Wheel";
import WritingSystem from "./components/Detail/WritingSystem";

const { Kakao } = window;

axios.defaults.withCredentials = true;

const App = () => {
  const [modal, setModal] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [switchLogOut, setSwitchLogOut] = useState("none");
  const [userName, setUserName] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [hamburgerBtn, setHamburgerBtn] = useState(false)

  const history = useHistory();

  const modalOpen = async () => {
    await setModal("block");
  };
  const modalClose = async () => {
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

  useEffect(() => {
    let accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;    
    checkToken();
  },[])

  const handleSignIn = async () => {
    if (!email || !password) {
      onChangeErrMessage("이메일과 비밀번호를 입력해주세요");
    } else {
      setBackErrMessage();
      try {
      await axios
        .post(ip + port + "/user/signin", {
          email: email,
          password: password,
        })
        .then((res) => {
          const { accessToken } = res.data;
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
          localStorage.setItem("token", res.data.accessToken);
          console.log(res.data)
          //refresh 토큰도 저장
          localStorage.setItem("refreshToken", res.data.refreshToken);
          modalClose();
          setHamburgerBtn(false);
          handleResponseSuccess(res.data.id);
        });
      } catch (err) {
        setErrMessage("잘못된 이메일 혹은 비밀번호입니다")
      }
    }
  };

  const handleResponseSuccess = async (login) => {
    let successInfo = await axios.get(ip + port + "/profile/read");
    console.log(successInfo);
    if (!successInfo) {
      setUserName("");
    } else {
      const { username } =successInfo.data;
      setIsLogIn(true);
      setUserName(username);
    }
  };

  const checkToken = async () => {
    if (localStorage.getItem("token") || localStorage.getItem("refreshToken")) {
      setIsLogIn(true);
      let successInfo = await axios.get(ip + port + "/profile/read");
      console.log(successInfo);
      if (!successInfo) {
        setUserName("");
      } else {
        const { username } =successInfo.data;
        setUserName(username);
        console.log('logInSuccess')
      }
    }
  }

  const onLogOut = () => {
    setSwitchLogOut("block");
    // await axios.post("http://localhost:3000/user/signout")
    
    if(localStorage.getItem("token") || localStorage.getItem("refreshToken")) {
      axios.delete(ip + port + "/user/signout");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setIsLogIn(false);
      setUserName("");
      setHamburgerBtn(false);
      history.push('/');
    setTimeout(() => {
      autoLogOutClose();
    }, 2000);            
    }
    setTimeout(() => {
      autoLogOutClose();
    }, 2000); 
  };

  const autoLogOutClose = () => {
    setSwitchLogOut("none");
  };

  return (
    <div className="app">
      <Nav
        modalOpen={modalOpen}
        modalClose={modalClose}
        modal={modal}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        errMessage={errMessage}
        isLogIn={isLogIn}
        handleSignIn={handleSignIn}
        userName={userName}
        setIsLogIn={setIsLogIn}
        handleResponseSuccess={handleResponseSuccess}
        onLogOut={onLogOut}
        switchLogOut={switchLogOut}
        hamburgerBtn={hamburgerBtn}
        setHamburgerBtn={setHamburgerBtn}
      />
      <Switch>
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn handleResponseSuccess={handleResponseSuccess.bind(this)} />} />
        <Route exact path="/" render={() => <MainPage />} />

        <Route exact path="/airplane" render={() => <Airplane />} />
        <Route exact path="/battery" render={() => <Battery />} />

        <Route exact path="/clock" render={() => <Clock />} />
        <Route exact path="/compass" render={() => <Compass />} />
        <Route exact path="/condom" render={() => <Condom />} />
        <Route exact path="/electricMotor" render={() => <ElectricMotor />} />
        <Route exact path="/fire" render={() => <Fire />} />
        <Route exact path="/fistaxe" render={() => <FistAxe />} />
        <Route exact path="/glasses" render={() => <Glasses />} />
        <Route exact path="/gunPowder" render={() => <GunPowder />} />
        <Route exact path="/internet" render={() => <Internet />} />
        <Route exact path="/lightBulb" render={() => <LightBulb />} />

        <Route exact path="/refrigerator" render={() => <Refrigerator />} />

        <Route exact path="/steamEngine" render={() => <SteamEngine />} />
        <Route exact path="/vaccine" render={() => <Vaccine />} />
        <Route exact path="/wheel" render={() => <Wheel />} />

        <Route exact path="/writingSystem" render={() => <WritingSystem />} />
        <Route exact path="/mypage" render={() => <Mypage />} />


        <Route exact path="/sociallogin" render={() => <SocialLogInGitHub location={window.location} hisotry={window.history}/>} />
        <Route exact path="/SocialLogInKakao" render={() => <SocialLogInKakao />} />


      </Switch>
    </div>
  );
};

export default withRouter(App);
