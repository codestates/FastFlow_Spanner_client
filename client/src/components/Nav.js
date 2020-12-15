import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import ScrollTracker from './ScrollTracker';
import useScrollStatus from './hooks/useScrollStatus';
import ScrollYear from './ScrollYear';
import LogOut from "./LogOut";

export default function Nav(props) {
  const [hamburgerBtn, setHamburgerBtn] = useState(true)

  const onChangeHamburgerBtn = async () => {
    if (hamburgerBtn) {
      await setHamburgerBtn(false)
      console.log('yes')
    } else {
      setHamburgerBtn(true)
      console.log('no')
    }
  };
  const scrollState = useScrollStatus();
  const hamdis = () => {
    if (hamburgerBtn) {
      return {display:'block'};
    } else {
      return {display:'none'}};
  }

  return (
    <header className="navs">
      <div className="nav__main">
        <div className="nav__hamburgerBtn" onClick={onChangeHamburgerBtn} >
          <div className="nav__hamburgerBtn1" style={hamdis()}>
          {props.isLogIn ? 
          <LogOut className="nav__logOutHam" onLogOut={props.onLogOut} switchLogOut={props.switchLogOut} />:
          <SignIn className="nav__signInHam"
            modalOpen={props.modalOpen}
            modalClose={props.modalClose}
            modal={props.modal}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
            errMessage={props.errMessage}
            handleSignIn={props.handleSignIn}
            handleResponseSuccess={props.handleResponseSuccess}
          />}
          </div>
          <div className="nav__hamburgerBtn2" style={hamdis()}>
          {props.isLogIn ?
          <Link to="/Mypage" className="nav__myPageBtn">
            My page
          </Link> : 
          <Link to="/SignUp" className="nav__signUpBtn">
            Sign up
          </Link>}
          </div>
        </div>
        <div className="nav__scrollYearContainer">
          <ScrollYear />
        </div>
        <div>
          <Link to="/" className="nav__logoBtn">
            Main
          </Link>
        </div>
			</div>
      <div className="nav__scrollTrackerContainer">
        <ScrollTracker position = {scrollState.position} />
      </div>
    </header>
  );
}
