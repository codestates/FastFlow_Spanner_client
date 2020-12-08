import { useState } from 'react';
import axios from 'axios';

const {Kakao} = window

const SocialLogInKakao = () => {
  const [isLogin, setIsLogIn] = useState("false");

  const loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        console.log(Kakao)
        if (!Kakao) {
          reject('Kakao 인스턴스가 존재하지 않습니다.')
        }
        Kakao.Auth.login({
          success: (auth) => {
            console.log(`auth.access_token => ${auth.access_token}`)
            axios.post('http://localhost:3000/kakao/auth', {
              token:auth.access_token
            })
            console.log('정상적으로 로그인 되었습니다.', auth)
            setIsLogIn("true")
          },
          fail: (err) => {
            console.log(err);
          }
        })
      })
    } catch (err) {
      console.log(err);
    }
  }

  const logoutWithKakao = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
      Kakao.Auth.logout(() => {
        console.log('로그아웃 되었습니다', Kakao.Auth.getAccessToken());
        this.setState({
          isLogin: false
        })
        console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
      });
    }
  }

  return (
    <div>
    <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <p>로그인화면</p>
      <button onClick={loginWithKakao}>카카오 로그인</button>
    </div>
  )
}

export default SocialLogInKakao;

//     const mainView = (<div>
//       <p>메인 화면</p>
//       <button onClick={logoutWithKakao}>카카오 로그아웃</button>
//     </div>)
//     return (
//       <div className="App">
//         {isLogin ? mainView : loginView}
//         <LoginTest>
//         </LoginTest>
//     </div>
//   )

// class App extends Component {
//   state = {
//     isLogin: false,
//   }
//   loginWithKakao = () => {
//     try {
//       return new Promise((resolve, reject) => {
//         console.log(Kakao)
//         if (!Kakao) {
//           reject('Kakao 인스턴스가 존재하지 않습니다.')
//         }
//         Kakao.Auth.login({
//           success: (auth) => {
//            console.log(`auth.access_token=> ${auth.access_token}`)
//             axios.post('http://localhost:3000/kakao/auth', {
//               token:auth.access_token
//             })
//             console.log('정상적으로 로그인 되었습니다.', auth)
//             this.setState({
//               isLogin: true
//             })
//           },
//           fail: (err) => {
//             console.error(err)
//           }
//         })
//       })
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   logoutWithKakao = () => {
//     if (Kakao.Auth.getAccessToken()) {
//       console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
//       Kakao.Auth.logout(() => {
//         console.log('로그아웃 되었습니다', Kakao.Auth.getAccessToken());
//         this.setState({
//           isLogin: false
//         })
//         console.log('카카오 인증 액세스 토큰이 존재합니다.', Kakao.Auth.getAccessToken())
//       });
//     }
//   }
//   componentDidMount() {
//     if (Kakao.Auth.getAccessToken()) {
//       console.log('액세스 토큰이 존재합니다. 세션을 유지합니다.',Kakao.Auth.getAccessToken())
//       this.setState({
//         isLogin: true
//       })
//     }    console.log('액세스 토큰 없다.',)
//   }
//   render() {
//     const { isLogin } = this.state;
//     const loginView = (<div>
//       <p>로그인화면</p>
//       <button onClick={this.loginWithKakao}>카카오 로그인</button>
//     </div>)
//     const mainView = (<div>
//       <p>메인 화면</p>
//       <button onClick={this.logoutWithKakao}>카카오 로그아웃</button>
//     </div>)
//     return (
//       <div className="App">
//         {isLogin ? mainView : loginView}
//         <LoginTest>
//         </LoginTest>
//     </div>
//     )
//   }
// }
// export default App;