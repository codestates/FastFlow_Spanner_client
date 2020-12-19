import CondomDetail from "../images/DetailPic/CondomDetail.jpg";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";
import { useHistory } from "react-router-dom";

const Condom = () => {
  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  const [editId, setEditId] = useState("");
  const [modalCommentEditView, setModalCommentEditView] = useState("none");
  const [inventionId, setInventionId] = useState("");

  const history = useHistory();
  useEffect(() => {
    // 토큰 유지
    let accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    // inventionId 보내기
    setInventionId(5);
    // 댓글 작성
    axios.get(ip + port + `/post/read/5`).then((res) => {
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
        history.go();
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
    history.go();
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
      <div className="Details__title">Condom</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={CondomDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/qbbY6PE8W5g"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">탄생 배경</div>
            <p>
              콘돔은 대체로 기원전 3000년경 초기 이집트 왕조로 추정된다. 콘돔은 고대 이집트 벽화에 등장할 만큼 역사가 오래되었는데, 당시 콘돔은 돼지나 염소의 맹장이나 방광을 이용해서 만들어졌다.
              이처럼 동물의 내장을 이용한 콘돔은, 고무가 발명되기 전까지 꾸준히 사용되었다. 그러나 당시 콘돔은 곤충 등으로부터 생식기를 보호하기 위한 속옷의 일종으로 지금의 콘돔과는 그 개념이 달랐다.
              즉, 오늘날의 콘돔이 성병 예방과 피임을 위한 것이라면, 고대의 콘돔은 오히려 출산을 늘리는 것이 목적이었다.
            </p>
            <div className="Details__text__make">제작 방법</div>
            <p>
              성병 예방과 같은 오늘날의 쓰임새를 위한 콘돔은 16세기 중반부터 개발 되었다. 당시 유행하던 매독을 예방하기 위해 한해살이풀로 얇은 직물을 짜서 만든 리넨(linen) 천으로 주머니 모양의 콘돔을
              만들었다. 그러나 이 콘돔의 개발은 성병 예방에 충분한 효과를 방휘하지 못했을 뿐만 아니라 쾌감도 감퇴시켜 많은 질타를 받았다. 후에 최초로 그럴 듯한 콘돔이 만들어 진 것은 17세기 중반이다.
              18세기에 들어 전문 생산 업체까지 생겨났다. 양의 창자간막으로 만든 제품이나 맹장 두개를 겹쳐서 만든 제춤이 최고급으로 꼽혔다. 19세기 중반에는 고무 가고 기술이 발전하면서 마침내 솔기 없이
              매끈한 고무 콘돔이 만들어 졌다. 고무에 황을 첨가하는 가황법의 발견으로 고무의 강도와 탄성이 향상되었고 그 결과 현대적 콘돔이 탄생하였다.
            </p>
            <div className="Details__text__use">시대적 용도</div>
            <p>
              3000년경 이집트 왕조 시절에는 동물의 생식기를 보호하는 역할로써 콘돔이 존재하였으나, 16세기 이후로 성병 예방이라는 목적을 가지고 콘돔이 생산되었으며, 현대에 와서는 다양한 성적 기능성을
              갖춘 콘돔으로 발전하였다.
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

export default Condom;
