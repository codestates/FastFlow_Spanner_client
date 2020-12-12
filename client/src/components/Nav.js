import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import ScrollTracker from './ScrollTracker';
import useScrollStatus from './hooks/useScrollStatus';
import LogOut from "./LogOut";

export default function Nav(props) {
  const scrollState = useScrollStatus();

  return (
    <header className="navs">
      <div className="nav__main">
        <div className="nav__hamburgerBtn">
          <SignIn
            modalOpen={props.modalOpen}
            modalClose={props.modalClose}
            modal={props.modal}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
            errMessage={props.errMessage}
            handleSignIn={props.handleSignIn}
            handleResponseSuccess={props.handleResponseSuccess}
          />
          <LogOut onLogOut={props.onLogOut} switchLogOut={props.switchLogOut} />
          <Link to="/SignUp" className="nav__signUpBtn">
            Sign up
          </Link>
          <Link to="/Mypage" className="nav__myPageBtn">
            My page
          </Link>          
        </div>
        <div className="nav__year">여기에 년도 입력</div>
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
