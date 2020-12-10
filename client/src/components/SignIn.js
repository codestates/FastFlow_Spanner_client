import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from 'axios';

// const {Kakao} = window

// const [isLogin, setIsLogIn] = useState("false");
// const loginWithKakao = () => {
//   try {
//     return new Promise((resolve, reject) => {
//       console.log(Kakao)
//       if (!Kakao) {
//         reject('Kakao 인스턴스가 존재하지 않습니다.')
//       }
//       Kakao.Auth.login({
//         success: (auth) => {
//           console.log(`auth.access_token => ${auth.access_token}`)
//           axios.post('http://localhost:3000/kakao/auth', {
//             token:auth.access_token
//           })
//           console.log('정상적으로 로그인 되었습니다.', auth)
//           setIsLogIn("true")
//         },
//         fail: (err) => {
//           console.log(err);
//         }
//       })
//     })
//   } catch (err) {
//     console.log(err);
//   }
// }

// const logoutWithKakao = () => {
//   if (Kakao.Auth.getAccessToken()) {
//     console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
//     Kakao.Auth.logout(() => {
//       console.log('로그아웃 되었습니다', Kakao.Auth.getAccessToken());
//       this.setState({
//         isLogin: false
//       })
//       console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
//     });
//   }
// }


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
          <div className="signIn__social">
            <div className="signIn__gitHub" onClick={props.modalClose}>
              <a href="https://github.com/login/oauth/authorize?client_id=0604c124c075b9bc4925&redirect_uri=http://localhost:3001/sociallogin">깃허브 로그인
                <img className="github__icon" src="" alt="" width="60px"/>
              </a>
            </div>
            <div className="signIn__kakao" onClick={props.modalClose}>
              카카오 로그인
                <img className="signIn__kakaoIcon" src="" alt="" width="60px"/>
            </div>
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
