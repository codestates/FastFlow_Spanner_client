import React, { useState } from "react";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

axios.defaults.withCredentials = true;

const WritePage = ({ inventionId }) => {
  //const [username, setUsername] = useState('');
  //const [email, setEmail] = useState('');
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  //const [selectedInvention, setSelectedInvention] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   //   //for signin
  //   //   // axios.post(`${localUrl}/user`);
  //   //   //   .then((res) => {
  //   //   //     //jwt test start (1/2   2/2는 app의 로그아웃)
  //   //   //     const { accessToken } = res.data;
  //   //   //     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  //   //   //     //    sessionStorage.setItem('token', res.data.accessToken)
  //   //   //     localStorage.setItem('token', accessToken);
  //   //   //   });
  //   //   // 뒤쪽의 배열은 Hook의 componentDidupdate 같은 부분인데, state 값을 넣는 것이 아니라,
  //   //   // state 값을 변경하는 메서드를 넣어주어야 적용이 된다.
  //   //makeInventionId(inventionId);
  // }, [setPostPicView]);
  // const inventionItems = () => {
  // 	return items.forEach((item) => {
  // 		return <option value={item}>{item}</option>
  // });
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
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
          const formData = new FormData();
          formData.append("image", postPic);
          formData.append("postId", res.data.id);
          formData.append("inventionId", res.data.inventionId);
          axios.put(ip + port + "/post/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        });
    }
  };

  // const onInventionChange = (e) => {
  //   setSelectedInvention(e.target.value);
  // };

  const onChangeFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPostPicView(reader.result);
    };
    reader.readAsDataURL(file);
    setPostPic(file);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="WritePages">
        <form className="submitArea" onSubmit={onSubmit}>
          {/* inventionArea */}
          <div className="submitArea__inventionArea">
            {/* <사진노출> */}
            <img className="inventionArea__pic" src={postPicView} alt="" />
            {/* <찾아보기> */}
            <div className="inventionArea__fileSearch">
              <label for="ex-file">사진 찾아보기</label>
              <input type="file" id="ex-file" name="image" onChange={onChangeFile} />
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
    </div>
  );
};
export default WritePage;
