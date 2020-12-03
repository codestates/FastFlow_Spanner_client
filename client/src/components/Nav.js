import React from "react";
import { Link } from "react-router-dom";

import SignIn from "./SignIn";

export default function Nav(props) {
  return (
    <header className="navs">
			<div className="nav__main">
        <div className="nav__hamburgerBtn">
          <SignIn modalOpen={props.modalOpen} modalClose={props.modalClose} modal={props.modal} onChangeEmail={props.onChangeEmail} onChangePassword={props.onChangePassword} errMessage={props.errMessage} handleSignIn={props.handleSignIn} handleResponseSuccess={props.handleResponseSuccess} />
          <Link to='/SignUp' className="nav__signUpBtn">Sign up</Link>
					<Link to='/Mypage' className="nav__myPageBtn">My page</Link>
					<Link to='/WritePage'>write page</Link>
        </div>
			  <div className="nav__year">여기에 년도 입력</div>
        <div>
          <Link to='/' className="nav__logoBtn">Main</Link>
        </div>
			</div>
			<div className="nav__scrollTracerContainer">
				<div className="nav__scrollTracer">여기에 원숭이 입력</div>
			</div>
    </header>
  )
}