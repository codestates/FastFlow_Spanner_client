import React from "react";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import { ip, port } from "../url";

axios.defaults.withCredentials = true;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const handleSignIn = async () => {
    if (!email || !password) {
      setErrMessage("이메일과 비밀번호를 입력해주세요");
    } else {
      	await axios.post(ip+port+'/user/signin', {
          email: email,
          password: password
      	})
			.then((res) => {
				const { accessToken } = res.data
				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
				localStorage.setItem('token', res.data.accessToken)
				return this.PaymentResponse.handleResponseSuccess(res.data.id)
			});
    }
  }
  return (
    <center>
      <div className="signIns">
        <div className="signIn__email">
          <input className="signIn__emailInput" type="email" placeholder="이메일" onChange={setEmail}></input>
        </div>
        <div>
          <input className="signIn__passwordInput" placeholder="비밀번호" onChange={setPassword}></input>
        </div>
				<div className="signIn__noId">
					<Link to='/signup'>아직 아이디가 없으신가요?</Link>
				</div>
				<div className="signIn__gitHub">
					<a href="https://github.com/login/oauth/authorize?client_id=6c600e12bf58f2a72319&redirect_uri=https://6a24503ce00f.ngrok.io">깃허브로 로그인</a>
				</div>
				<button className="signIn__btn" type="submit" onClick={handleSignIn}>로그인</button>
				<div className="signIn__errMessage">{errMessage}</div>
      </div>
    </center>
  )
}

export default withRouter(SignIn);