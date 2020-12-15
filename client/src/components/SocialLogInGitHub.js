import {useEffect} from 'react';
import axios from 'axios';
import {ip, port, port_client} from '../url';
import qs from 'qs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function SocialLogin({location}) {    
    const history = useHistory();

    useEffect(() => {
        async function getToken() {
            console.log(`location.search=${location.search}`)
            const {code} = qs.parse(location.search, {ignoreQueryPrefix: true});
            try {
                const accessToken = await axios.post(`${ip}${port}/socialAuth/github`, {code})
                console.log('서버로 github/auth요청 후 받는 데이터', accessToken.data);
                console.log('서버로 github/auth요청 후 받는 데이터', accessToken.data.userChcek);
                console.log('서버로 github/auth요청 후 받는 데이터', accessToken.data.userInfo);
              if (accessToken.data.userChcek) {
                axios.post(ip + port + '/user/signup', {
                  email: `Github_${accessToken.data.userInfo.id}`,
                  username: `${accessToken.data.userInfo.login}`,
                  password: `${accessToken.data.userInfo.id}`
                })
              } else { }
                axios
                    .post(ip + port + '/user/signin', {
                        email: `Github_${accessToken.data.userInfo.id}`,
                        password: `${accessToken.data.userInfo.id}`
                    })
                    .then((res) => {
                        const {accessToken} = res.data;
                        const {refreshToken} = res.data;
                        axios
                            .defaults
                            .headers
                            .common["Authorization"] = `Bearer ${accessToken}`;
                        localStorage.setItem("token", accessToken);
                        localStorage.setItem("refreshToken", refreshToken);
                    })
                history.push('/');
                console.log('소셜 로그인 성공')
            } catch (error) {
            }
        }
        getToken();
    }, [location, history]);
    return null;
}
export default SocialLogin;