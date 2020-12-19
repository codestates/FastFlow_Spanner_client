import React, { useState, useEffect } from "react";
import axios from "axios";
import basicPostPic from "../images/downloadPic.jpg";
import { ip, port } from "../../url";
import pleaseLogInPic from "../images/pleaseLogin.gif";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

const WritePage = ({ inventionId }) => {
  const history = useHistory();
  //const [username, setUsername] = useState('');
  //const [email, setEmail] = useState('');
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  //const [selectedInvention, setSelectedInvention] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [switchGetOut, setSwitchGetOut] = useState("none");

  useEffect(() => {
    let accessToken = localStorage.getItem("token");

    console.log("글을 작성하기 전에 우리는 토큰을 확인 할 것 이다.", accessToken);
  }, [setPostPicView]);

  const onSubmit = (e) => {
    let accessToken = localStorage.getItem("token");

    e.preventDefault();
    if (!accessToken) {
      setSwitchGetOut("block");
      setTimeout(() => {
        setSwitchGetOut("none");
      }, 2200);
    } else if (!title) {
      setErrorMessage("제목을 입력해주세요.");
    } else if (!text) {
      setErrorMessage("글을 입력해주세요.");
      // } else if (!selectedInvention) {
      //   setErrorMessage('발명품을 선택해주세요.');
      // }
    } else {
      axios
        .post(ip + port + "/post/write", {
          text: text,
          title: title,
          inventionId: inventionId,
        })
        //사진과 다른 데이터를 같이 업로드하고 싶을 때는, formdata 내부에 다른 데이터들도
        //append 형태로 붙여주면 된다.
        .then((res) => {
          console.log("사진을 업로드 합니다.", res.data);
          // const img = new File([blob], basicPostPic, { type: "image/jpeg" });
          const file = srcToFile("client/src/components/images/SpannerLogo.png", "SpannerLogo.png", "image/png");
          file.then((result) => {
            setPostPic(result);
          });

          console.log("포스트 사진에 무엇이 있는지 확인", postPic);
          const formData = new FormData();
          formData.append("image", postPic);
          formData.append("postId", res.data.id);
          formData.append("inventionId", res.data.inventionId);
          axios.put(ip + port + "/post/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          history.go();
        });
    }
  };
  const srcToFile = (src, fileName, mimeType) => {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  };
  // const onInventionChange = (e) => {
  //   setSelectedInvention(e.target.value);
  // };

  const onChangeFile = (e) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!", e);
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPostPicView(reader.result);
    };
    reader.readAsDataURL(file);
    console.log("1234123!!!!!!!!!!!!!!!!!!!!!!", file);
    setPostPic(file);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <center className="WritePagess">
      <div className="WritePages">
        <form className="submitArea" onSubmit={onSubmit}>
          {/* inventionArea */}
          <div className="submitArea__inventionArea">
            {/* <사진노출> */}
            <div className="WritePages__PicArea">
              <div className="WritePagesPicView">
                <img className="WritePagesPicView__pic" src={postPicView} alt=""></img>
              </div>
              <div className="WritePagesPicBtns">
                <div className="WritePagesPicBtns__fileSearch">
                  <input type="file" id="ex-file" name="image" onChange={onChangeFile} />
                </div>
              </div>
            </div>

            <div className="submitArea__writingArea">
              {/* <제목작성영역> */}
              <div className="writingArea__title">
                <input className="title__inputBox" type="text" placeholder="제목" onChange={onTitleChange} />
                {/* <업로드 버튼> */}
              </div>
              <div className="writingArea__text">
                <input className="text__inputBox" type="text" placeholder="남기실 말씀" onChange={onTextChange} />
              </div>
              <button type="submit" className="writingArea__btn">
                글쓰기
              </button>
            </div>
          </div>
        </form>
        <div className="WritePages__error">{errorMessage}</div>
      </div>
      <div className="WritePages__getOutModals">
        <div className="WritePages__getOutModal" style={{ display: switchGetOut }}>
          <div className="WritePages__getOutContents">
            {/* <span className="logOut__closeButton" onClick={props.modalClose}>&times;</span> */}
            <img className="WritePages__getOutContents__Pic" src={pleaseLogInPic} alt="" />
            <p className="WritePages__getOutContents__Massage">{`로그인을 필요로 합니다.`}</p>
          </div>
        </div>
      </div>
    </center>
  );
};
export default WritePage;
