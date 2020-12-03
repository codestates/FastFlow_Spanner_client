import React from "react";
import { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import axios from "axios";

import { ip, port } from "../url";

axios.defaults.withCredentials = true;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrMessage("이메일과 비밀번호를 입력해주세요");
    } else {
      let signData = await axios.post(ip + port + "/user/signin", {
        email: email,
        password: password,
      });

      console.log("로그인 데이터입니다.", signData.data);

      const { accessToken } = signData.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("token", accessToken);
      // return this.PaymentResponse.handleResponseSuccess(res.data.id);
      history.push("/");
    }
  };
  return (
    <center>
      <div className="signIns">
        <div className="signIn__email">
          <input className="signIn__emailInput" type="email" placeholder="이메일" onChange={onChangeEmail}></input>
        </div>
        <div>
          <input className="signIn__passwordInput" type="password" placeholder="비밀번호" onChange={onChangePassword}></input>
        </div>
        <div className="signIn__noId">
          <Link to="/signup">아직 아이디가 없으신가요?</Link>
        </div>
        <div className="signIn__gitHub">
          <a href="https://github.com/login/oauth/authorize?client_id=6c600e12bf58f2a72319&redirect_uri=https://6a24503ce00f.ngrok.io">깃허브로 로그인</a>
        </div>
        <button className="signIn__btn" type="submit" onClick={handleSignIn}>
          로그인
        </button>
        <div className="signIn__errMessage">{errMessage}</div>
      </div>
    </center>
  );
};

export default withRouter(SignIn);
