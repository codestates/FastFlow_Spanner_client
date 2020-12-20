import React, { useState, useEffect } from "react";
import axios from "axios";
import basicProfilePic from "../images/anonym_user.png";
//https://www.pngaaa.com/detail/1097555, License : non-commercial use
import { ip, port } from "./../../../src/url";
import Footer from "../Footer";

axios.defaults.withCredentials = true;

const Mypage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicView, setProfilePicView] = useState(basicProfilePic);
  const [profilePic, setProfilePic] = useState("");  

  const [isPwdBtnClicked, setIsPwdBtnClicked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  

  useEffect(() => {   
    const accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;        
    axios.get(ip + port + "/profile/read")
    .then((res) => {
      // console.log(res)
      const { username, email, userPhoto } = res.data;
      setUsername(username);
      setEmail(email);
      if (userPhoto) {
        setProfilePicView(ip + port + "/" + userPhoto);
      }
    })
    .catch((err) => {
      console.log("err");
    });              
  }, []);

  const onDeleteProfilePic = (e) => {
    e.preventDefault();
    // console.log('basicProfilePic', basicProfilePic);
    setProfilePicView(basicProfilePic);   
    // 서버 코드 : profileController, uploadDelete 철자 수정 요청 
    // profile.js, uploadDelete 철자 수정 요청
    // Restful API로 작성 요청
    axios.put(`${ip}${port}/profile/upload/delete`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  };

  const onChangeProfilePic = (e) => {
    e.preventDefault();

  }

  const onSubmitProfilePic = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", profilePic);
    //FormData 객체 내용 확인을 위해서 entries 메서드 사용,
    //반복문을 통해서 출력함
    // for(let pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }
    //FormData 내용 확인 2: formData.get('key값') 메서드 사용하기!
    //MDN : get 메서드는 'key값'의 첫 번째 value만 반환한다.
    console.log("pair", formData.get('image'));
        
    axios.put(`${ip}${port}/profile/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  };
  // File reader는 파일의 내용을 읽고 컴퓨터에 저장하는 것을 가능하게 한다.

  const onChangeFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    // console.log(file)    
    // load 이벤트의 핸들러. 읽기 동작이 성공적으로 완료되었을 때마다
    // 발생한다. 비동기 이므로 CALLBACK 함수를 사용하는 것이 좋다.
    reader.onloadend = () => {
      setProfilePicView(reader.result);
    };
    //readAsDataURL 메서드는 읽어들인 Data의 URL을 얻어온다.
    reader.readAsDataURL(file);
    setProfilePic(file);
  };
  
  const onSubmitPwd = (e) => {
    e.preventDefault();
    if(!doesPasswordMatch()) {
      return ;
    }
    else if(!password) {
      alert("변경할 비밀번호를 입력해주세요.")
    } 
    else {
      axios.put(ip + port + '/profile/edit/password', {password: password})    
      .then((res) => {
        setIsPwdBtnClicked(!isPwdBtnClicked);
        alert(res.data);
      })
    }
    
  }  
  
  // 비밀번호 매칭 검사
  const doesPasswordMatch = () => {    
    return password === confirmPassword;    
  };
  
  const renderFeedbackMessage = () => {
    if (confirmPassword) {
      if (!doesPasswordMatch()) {
        return <div className="chkPwdMatch__passwordInvalid">패스워드가 일치하지 않습니다</div>;
      } else if (doesPasswordMatch()) {
        return <div className="chkPwdMatch__passwordValid">패스워드가 일치합니다</div>;
      }
    }
  };

  return (
    <div>
      <div className="Mypages">
        <div className="profileTitle">
          <div className="profileTitle__title">
            <span className="profileTitle__username">{`${username} `}</span>
            님의 프로필 페이지
          </div>
          <div className="profileTitle__desc">이곳에서 회원님의 정보를 변경할 수 있습니다.</div>
          {/* <div> {profilePicView}</div> */}
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">프로필 사진</th>
              <td>
                <form onSubmit={onSubmitProfilePic}>
                  <div className="profilePicView">
                    <img className="profilePicView__pic" src={profilePicView} alt=""></img>
                  </div>
                  <div className="profilePicBtns">
                    <div className="profilePicBtns__fileSearch">
                      <label for="ex-file">찾아보기</label>
                      <input type="file" id="ex-file" name="image" onChange={onChangeFile} />
                    </div>
                    <div className="profilePicBtns__etc">
                      <button className="changeBtn" type="submit">
                        사진변경
                      </button>
                      <button className="deleteBtn" type="submit" onClick={onDeleteProfilePic}>
                        사진삭제
                      </button>                      
                    </div>
                  </div>
                </form>
                <button className="pwdEditBtn" type="submit" onClick={()=>{setIsPwdBtnClicked(!isPwdBtnClicked)}}>
                  비밀번호 변경
                </button>
                <div className={isPwdBtnClicked ? "pwdEditMod__open" : "pwdEditMod__close"} >
                  <div className="pwdEditMod__input1">
                    <input className="input1__inputBox" type="password" placeholder="새 비밀번호 입력" onChange={(e) => {setPassword(e.target.value)}}></input>
                  </div>
                  <div className="pwdEditMod__input2">
                    <input className="input2__inputBox" type="password" placeholder="새 비밀번호 재입력" onChange={(e) => {setConfirmPassword(e.target.value)}}></input>
                  </div>
                  <div className="pwdEditMod__chkPwdMatch">
                    {renderFeedbackMessage()}
                  </div>
                  <button className="pwdSubmitCheckBtn" onClick={onSubmitPwd}>확인</button>
                  <button className="pwdSubmitCancelBtn" onClick={()=>setIsPwdBtnClicked(!isPwdBtnClicked)}>취소</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">이메일 주소</th>
              <td>
                <div className="profileInfo">
                  <div className="profileInfo__email"> {email} </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">별명</th>
              <td>
                <div className="profileInfo">
                  <div className="profileInfo__username"> {username} </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="profileDetermine">

					<form onSubmit={onChangeprofilePic}>
						<button className="profileDetermine__applyBtn" type="submit">적용</button>
						<button className="profileDetermine__cancelBtn" >취소</button>
					</form>
				</div> */}
      </div>      
    </div>
  );
};

export default Mypage;
