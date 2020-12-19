import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import ScrollTracker from './ScrollTracker';
import useScrollStatus from './hooks/useScrollStatus';
import ScrollYear from './ScrollYear';
import LogOut from "./LogOut";

export default function Nav(props) {
  const [hamburgerBtn, setHamburgerBtn] = useState(false)

  const onChangeHamburgerBtn = async () => {
    if (hamburgerBtn) {
      await setHamburgerBtn(false)
    } else {
      setHamburgerBtn(true)
    }
  };

  const hamburgerBtnFalse = async () => {
    await setHamburgerBtn(false)
  }

  const scrollState = useScrollStatus();
  const hamdis = () => {
    if (hamburgerBtn) {
      return {visibility: 'visible'};
    } else {
      return {visibility: 'hidden'}};
  }
  const hamdis2 = () => {
    if (hamburgerBtn) {
      return {display: 'block'};
    } else {
      return {display: 'none'}};
  }

  return (
    <header className="navs">
      <div className="nav__main">
        <div className="nav__Btn1">
        {props.isLogIn ? 
        <LogOut  onLogOut={props.onLogOut} switchLogOut={props.switchLogOut} />:
        <SignIn 
          modalOpen={props.modalOpen}
          modalClose={props.modalClose}
          modal={props.modal}
          onChangeEmail={props.onChangeEmail}
          onChangePassword={props.onChangePassword}
          errMessage={props.errMessage}
          handleSignIn={props.handleSignIn}
          handleResponseSuccess={props.handleResponseSuccess}
          hamburgerBtnFalse={hamburgerBtnFalse}
        />}
        </div>
        <div>
        {props.isLogIn ?
        <Link to="/Mypage" className="nav__Btn2">
          My page
        </Link> : 
        <Link to="/SignUp" className="nav__Btn2">
          <div>Sign up</div>
        </Link>}
        </div>
        <div className="nav__hamburgerBtn" onClick={onChangeHamburgerBtn} ></div>
        <div>
          <div  className="nav__hamburgerBtn1" style={hamdis()}>
          {props.isLogIn ? 
          <LogOut className="nav__logOutHam" hamburgerBtnFalse={hamburgerBtnFalse} onLogOut={props.onLogOut} switchLogOut={props.switchLogOut} />:
          <SignIn className="nav__signInHam"
            modalOpen={props.modalOpen}
            modalClose={props.modalClose}
            modal={props.modal}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
            errMessage={props.errMessage}
            handleSignIn={props.handleSignIn}
            setIsLogIn={props.setIsLogIn}
            handleResponseSuccess={props.handleResponseSuccess}
            hamburgerBtnFalse={hamburgerBtnFalse}
          />}
          </div>
          <div>
          {props.isLogIn ?
          <Link to="/Mypage" className="nav__hamburgerBtn2" onClick={hamburgerBtnFalse} style={hamdis2()}>
            <div className="nav__hamSignUp" style={hamdis2()}>
              My page
            </div>
          </Link> : 
          <Link to="/SignUp" className="nav__hamburgerBtn2" onClick={hamburgerBtnFalse} style={hamdis2()}>
            <div className="nav__hamSignUp" style={hamdis2()}>
              Sign up
            </div>
          </Link>}
          </div>
        </div>
        <div className="nav__scrollYearContainer">
          <ScrollYear userName={props.userName} />
        </div>
        <div>
          <Link to="/" onClick={hamburgerBtnFalse} className="nav__logoBtn">
          </Link>
        </div>
			</div>
      <div className="nav__scrollTrackerContainer">
        <ScrollTracker position = {scrollState.position} />
      </div>
    </header>
  );
}
