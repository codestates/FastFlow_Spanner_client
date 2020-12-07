import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "./images/Github_icon.png";

const SignIn = (props) => (
  <div>
    <div className="signIn__navBtn" onClick={props.modalOpen}>
      Log In
    </div>
    <center>
      <div className="signIns" style={{ display: `${props.modal}` }}>
        <div className="signIn__modal">
          <div className="signIn__email">
            <input className="signIn__emailInput" type="email" placeholder="이메일" onChange={props.onChangeEmail}></input>
          </div>
          <div>
            <input className="signIn__passwordInput" type="password" placeholder="비밀번호" onChange={props.onChangePassword}></input>
          </div>
          <div className="signIn__noId" onClick={props.modalClose}>
            <Link to="/signup">아직 아이디가 없으신가요?</Link>
          </div>          
          <div className="signIn__gitHub" onClick={props.modalClose}>
            <a href="https://github.com/login/oauth/authorize?client_id=0604c124c075b9bc4925&redirect_uri=http://localhost:3001/sociallogin">              
              <img className="github__icon" src={githubIcon} alt="" width="60px"/>
            </a>
          </div>
          <button className="signIn__btn" type="submit" onClick={props.handleSignIn}>
            로그인
          </button>
          <div className="signIn__errMessage">{props.errMessage}</div>
          <button type="button" className="signIn__closeBtn" onClick={props.modalClose}>
            창 닫기
          </button>
        </div>
        <div className="signIn__modalLayer"></div>
      </div>
    </center>
  </div>
);

export default SignIn;
