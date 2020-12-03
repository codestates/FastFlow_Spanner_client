import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => (
  <div>
    <div className="signIn__btn" onClick={props.modalOpen}>Log In</div>
  <center>
    <div className="signIns" style={{display: `${props.modal}`}}>
      <div className="signIn__modal">
        <div className="signIn__email">
          <input className="signIn__emailInput" type="email" placeholder="이메일" onChange={props.onChangeEmail}></input>
        </div>
        <div>
          <input className="signIn__passwordInput" placeholder="비밀번호" onChange={props.onChangePassword}></input>
        </div>
        <div className="signIn__noId" onClick={props.modalClose}>
          <Link to='/signup'>아직 아이디가 없으신가요?</Link>
        </div>
        <div className="signIn__gitHub" onClick={props.modalClose}>
          <a href="https://github.com/login/oauth/authorize?client_id=6c600e12bf58f2a72319&redirect_uri=https://6a24503ce00f.ngrok.io">깃허브로 로그인</a>
        </div>
        <button className="signIn__btn" type="submit" onClick={props.handleSignIn}>로그인</button>
        <div className="signIn__errMessage">{props.errMessage}</div>
        <button type='button' className="signIn__closeBtn" onClick={props.modalClose}>창  닫기</button>
      </div>
      <div className="signIn__modalLayer"></div>
    </div>
  </center>
  </div>
)

export default SignIn;
