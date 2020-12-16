import axios from "axios";
import { withRouter, useHistory } from "react-router-dom";
import { useState } from "react";
import { ip, port } from "../url";
import Footer from "../components/Footer";

axios.defaults.withCredentials = true;

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  // States 17-28
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  // 회원가입 정보 보내기
  const handleSignup = async () => {
    if (!userName || !email || !password) {
      setErrorMessage("모든 항목은 필수입니다");
    } else {
      await axios.post(ip + port + "/user/signup", {
        username: userName,
        email: email,
        password: password,
      });
      // .then((res) => {
      //   console.log(res)
      // })
      history.push("/");
    }
  };

  // 비밀번호 유효성 검사 43-61
  const doesPasswordMatch = () => {
    return password === confirmPassword;
  };

  const confirmPasswordClassName = () => {
    if (confirmPassword) {
      return doesPasswordMatch() ? "is-valid" : "is-invalid";
    }
  };

  const renderFeedbackMessage = () => {
    if (confirmPassword) {
      if (!doesPasswordMatch()) {
        return <div className="SignUps__passwordInvalid">패스워드가 일치하지 않습니다</div>;
      } else if (doesPasswordMatch()) {
        return <div className="SignUps__passwordValid">패스워드가 일치합니다</div>;
      }
    }
  };

  return (
    <center className="SignUps__area">
      <div className="SignUps">
        <div className="SignUps__body">
          <div className="SignUps__title">회원가입</div>
          <div className="SignUps__name SignUp">
            <input className="SignUps__input" type="text" placeholder="사용자 이름" onChange={onChangeUserName}></input>
          </div>
          <div className="SignUps__email SignUp">
            <input className="SignUps__input" type="email" placeholder="이메일" onChange={onChangeEmail}></input>
          </div>
          <div className="SignUps__passwordA SignUp">
            <input className="SignUps__input" type="password" placeholder="비밀번호" onChange={onChangePassword}></input>
          </div>
          <div className="SignUps__passwordB SignUp">
            <input className={`SignUps__input ${confirmPasswordClassName()}`} type="password" placeholder="비밀번호 확인" onChange={onChangeConfirmPassword}></input>
            {renderFeedbackMessage()}
          </div>
          <button className="SignUps__btn" type="submit" onClick={handleSignup}>
            회원가입
          </button>
          <div className="SignUp__error">{errorMessage}</div>
        </div>
      </div>
      <Footer />
    </center>
  );
};

export default withRouter(SignUp);
