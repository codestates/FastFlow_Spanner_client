import ElectricMotorDetail from "../images/DetailPic/ElectricMotorDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";

const ElectricMotor = () => {
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
    setInventionId(1);
    // 댓글 작성
    axios.get(ip + port + `/post/read/13`).then((res) => {
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
      <div className="Details__title">ElectricMotor</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={ElectricMotorDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/rSAH3zSr7xY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">역사</div>
            <p>
              1800년대 초, 외르스테드, 패러데이, 가우스, 암페어는 전자기 유도의 기본 이론을 정립하였다. 1821년 영국의 패러데이는 실험을 통해 전기에너지를 운동에너지로 바꿀 수 있다는 것을 실험적으로
              증명하였다. 이후 직류전원(DC)과 정류자(Commutator)를 발명하여, 오늘날 DC모터가 필수적으로 사용하는 연속 회전 운동을 최초로 개발하게 되었다. 1870년대에 들어서는 에디슨과 테슬라 등에 의한
              교류(AC) 모터와 삼상 교류에 의한 회전 자기장 유도 모터로 발전되었으며, 스위칭 기능, 인터버 적용 등으로 현대까지 꾸준히 발전해오고 있다.
            </p>
            <div className="Details__text__make">원리</div>
            <p>
              직류 전동기는 자석 사이에 있는 코일에 전류가 흐를 때 자석과 코일 사이에 작용하는 자기력에 의해 코일이 회전하게 되며, 코일이 회전하여 코일의 면이 자기장에 수직이 되는 순간 정류자에 의하여
              전류의 방향이 바뀌므로 코일은 계속해서 한쪽 방향으로 회전하게 된다. 소형 장난감 및 청소기 등에 사용되는 전동기는 보통 직류 전동기이다. 교류 전동기는 이와 다르게 정류자(브러시)가 없는
              형태이며, 이것은 주로 전동기에 인가되는 전류의 방향을 교류의 형태로 계속 바꿔주기 때문이다.
            </p>
            <div className="Details__text__use">왜 모터는 소음이 발생할까?</div>
            <p>
              모터는 왜 시끄러울까? 모터에 의한 소음은 다음과 같이 크게 전자기적 소음, 기계적 소음, 통풍 소음으로 구분할 수 있다. 전자기적 소음은 고정자, 회전자에 작용하는 전자기력에 의해 철심이
              진동하면서 발생하는 소음이다. 기계적 소음은 베어링, 회전자, 브러시 등에 의한 기계적 오차에 의한 소음이다. 통풍 소음은 냉각팬, 덕트 등에서의 공기의 압축, 팽창에 의한 진동음이다.
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
                  <img className="Details__commentPic" src={comment.postPhoto ? ip + port + `/${comment.postPhoto}` : nullPic} alt="" />
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

export default ElectricMotor;
