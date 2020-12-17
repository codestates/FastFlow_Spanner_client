import CondomDetail from "../images/DetailPic/CondomDetail.jpg";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const SteamEngine = () => {
  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  const [editId, setEditId] = useState("");
  const [modalCommentEditView, setModalCommentEditView] = useState("none");
  const [inventionId, setInventionId] = useState("");

  useEffect(() => {
    // 토큰 유지
    let accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    // inventionId 보내기
    setInventionId(10);
    // 댓글 작성
    axios.get(ip + port + `/post/read/10`).then((res) => {
      console.log(res.data);
      let result = res.data;
      let newCommentData = [];
      for (let i = result.length - 1; i >= 0; --i) {
        newCommentData.push(result[i]);
      }
      setCommentList(newCommentData);
    });
    window.scrollTo(0, 0);
    // 상태 변화 할때 마다 리렌더링을 하려면 아래의 배열안에 commentList를 입력하면 된다.
  }, []);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };
  // 댓글 수정 삭제 기능 모달 창 열기 & 코멘트 id 넘겨주기
  const onEditArea = (val) => {
    setModalCommentEditView("block");
    setEditId(val);
  };
  // 댓글 수정 삭세 기능 모달 창 닫기
  const closeEditArea = (val) => {
    setModalCommentEditView("none");
  };
  // 댓글 수정 사항 작성 후 게시
  const offEditArea = () => {
    axios
      .put(ip + port + `/post/edit`, {
        text: text,
        title: title,
        postId: editId,
        inventionId: inventionId,
      })
      .then((res) => {
        console.log("사진을 수정합니다.", res.data);
        const formData = new FormData();
        formData.append("image", postPic);
        formData.append("postId", editId);
        formData.append("inventionId", inventionId);
        axios.put(ip + port + `/post/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      });
    setModalCommentEditView("none");
  };
  // 사진 파일 적용 및 보여주기
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
  // 댓글 삭제
  const onDeleteComment = (val) => {
    console.log("삭제 이벤트", val);
    axios.delete(ip + port + `/post/delete`, {
      data: {
        postId: val,
        inventionId: inventionId,
      },
    });
  };
  // 댓글 수정 삭제 창 내부 컨텐츠
  const onEditComment = () => {
    return (
      <div className="Details__editAreas">
        <img className="Details__editAreas__PicView" src={postPicView} alt="" />
        <div className="Details__editAreas__fileSearch">
          <label for="ex-file">사진 찾아보기</label>
          <input type="file" id="ex-file" name="image" onChange={onChangeFile} />
        </div>
        <div className="Details__editAreas__input">
          <input className="Details__editAreas__titleInput" type="text" placeholder="제목" onChange={onTitleChange} />
          <input className="Details__editAreas__textInput" type="text" placeholder="남기실 말씀" onChange={onTextChange} />
        </div>
        <div className="Details__editAreas__btn">
          <button className="Details__editAreas__submitBtn" onClick={offEditArea}>
            게시
          </button>
          <button className="Details__editAreas__submitBtnClose" onClick={closeEditArea}>
            닫기
          </button>
        </div>
      </div>
    );
  };

  return (
    <center className="Details">
      <div className="Details__title">Steam Engine</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={CondomDetail} alt=""></img>
        </div>
        <div className="Details__video"></div>
        <div className="Details__textArea">
          <div className="Details__text">
            <p>증기기관은 외연 열기관으로, 수증기의 열에너지를 기계적인 일로 바꾸는 장치이다. 1705년 영국의 발명가 토머스 뉴커먼이 발명했고, 1769년에 제임스 와트가 개량했다.

기계작동을 위해 끓는 물을 이용하는 아이디어는 2,000년의 오랜 역사를 가지고 있다. 초기 장치들은 실용적인 동력 발생로들이 아니었지만 설계가 진보함에 따라 유용한 동력을 발생시킬 수 있게 되어 지난 300년동안 기계 동력의 주요한 근원이 되었는데, 최초의 응용 예는 진공 엔진을 이용한 갱내 배수였다. 이후의 발전형에서는 가압 증기를 사용하고, 회전 운동으로 변환하여 이전에 수차나 풍차 위치의 제한으로부터 풀려나 물과 석탄 또는 나무 연료를 얻을 수 있는 곳이면 어디든지 제조 기계장치의 광범위한 동력 사용을 가능케 하였다. 주목할 점은, 이 동력원이 증기견인차, 철도 기관차 같은 증기견인차들과 같은 기동 원동기에 훗날 사용 된 것이다. 현대 증기터빈들은 여러가지 열원들을 사용하여 세계에 전력의 대략 80%을 생산한다 .

증기기관들은 비록 태양 에너지, 원자력 또는 지열 에너지와 같은 열의 다른 외부 근원이 사용될지라도 일반적으로 외연기관이다. 동력 싸이클은 Rankine 사이클로 알려져 있다.

일반적으로, '증기기관'이라는 용어는 통합 증기 플랜트, 즉, 철도 증기기관차와 이동형 증기기관을 가리킬 수도 있고, 단독 기계류, 즉, 보 엔진과 고정증기기관을 가리킬 수도 있다. 증기해머와 증기 파일 드라이버들과 같은 전문화된 장치들은 독립된 보일러로부터 공급된 증기를 사용한다.
            </p>
          </div>
        </div>
      </div>
      <div className="Details__comments">
        <div className={"Details__commentTextEdit"} style={{ display: modalCommentEditView }}>
          {onEditComment()}
        </div>
        <div className="Details__commentsWrite">
          <Writepage inventionId={inventionId} />
        </div>
        <div className="Details__commentsHead">
          <div className="Details__commentsTitle">Comments</div>
        </div>
        <div className="Details__commentsArea">
          {commentList.map((comment) => {
            return (
              <li className="Details__comment" key={comment.id}>
                <div className="Details__commentTextAreas__title">{comment.title}</div>
                <div className="Details__commentPicArea">
                  <img className="Details__commentPic" src={ip + port + `/${comment.postPhoto}`} alt="" />
                </div>
                <div className="Details__commentTextAreas">
                  <div className="Details__commentTextAreas__username">{comment.user.username}</div>
                  <div className="Details__commentTextAreas__text">{comment.text}</div>
                </div>
                <div className="Details__commentToolArea">
                  <button className="Details__commentToolEdit" type="button" onClick={() => onEditArea(comment.id)}>
                    수정
                  </button>
                  <button className="Details__commentToolDelete" type="button" onClick={() => onDeleteComment(comment.id)}>
                    삭제
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </center>
  );
};

export default SteamEngine;
