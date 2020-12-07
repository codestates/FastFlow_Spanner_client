import { useEffect } from 'react';
import axios from 'axios';
import {ip, port} from './../url';
import qs from 'qs';
// qs 모듈은 쿼리의 객체를 문자열로 변환하거나, 반대로 문자열을 쿼리 객체로 변환하는 기능을 수행한다.
// stringify (obj, [, sep='&', eqe='=']) : 쿼리 객체를 쿼리 문자열로 변환한다.
// parse(str[, set='&', eq='=']) : 쿼리 문자열을 쿼리 객체로 변환한다.
// ex) 쿼리 객체 : { q: 'nodejs', aqs : chrome.0.135i4j24, ...}, 쿼리 문자열 : q=nodejs&aqs=chrome.0.135i4j24 ...

function SocialLogin({ history, location }) {
  //history와 location 이라는 객체 자체가 있음.
  //location객체는 일반문서나 웹문서의 URL 주소를 기록하는 객체이다.
  useEffect(() => {    
    async function getToken() {
      console.log(`location.search=${location.search}`)
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        // 이 부분은 express에 요청하여 JWT 토큰을 발급합니다.
        const accessToken = await axios.post(`${ip}${port}/auth`, {
          code,
        })
          console.log(accessToken.data);  
        // 유저 JWT 토큰을 저장합니다.
        localStorage.setItem('token', accessToken.data);
        history.push('/'); // 로그인이 완료되면 보여줄 페이지
        console.log('소셜 로그인 성공')
      } catch (error) {
        // history.push('/error'); // api요청이 실패했을때 애러 핸들링 페이지
      }
    }

    getToken();
  }, [location, history]);
  return null; // 이 부분에 로딩바와 같은 페이지를 렌더링 해도 좋아요.
}

export default SocialLogin;