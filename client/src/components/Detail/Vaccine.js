import CondomDetail from "../images/DetailPic/CondomDetail.jpg";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const Vaccine = () => {
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
    setInventionId(11);
    // 댓글 작성
    axios.get(ip + port + `/post/read/11`).then((res) => {
      console.log(res.data);
      let result = res.data;
      let newCommentData = [];
      for (let i = result.length - 1; i >= 0; --i) {
        newCommentData.push(result[i]);
      }
      setCommentList(newCommentData);
    });

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
      <div className="Details__title">Vaccine</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={CondomDetail} alt=""></img>
        </div>
        <div className="Details__video"></div>
        <div className="Details__textArea">
          <div className="Details__textTitle">Detail</div>
          <div className="Details__text">
            <p>백신 또는 예방주사 는 항원, 즉 병원체를 약하게 만들어 인체에 주입하여 항체를 형성하게 하여 그 질병에 저항하는 후천 면역이 생기도록 하는 의약품이다. 병을 예방하는 목적으로 백신을 주사하는 것을 예방 접종 이라고 한다.

백신은 병원체의 상태에 따라 완전히 병원체를 죽여 만드는 사백신과 약독화시켜 만드는 생백신으로 구별할 수 있다. 약독화한 생백신은 대부분 바이러스이지만 간혹 세균도 있다. 사백신은 바이러스 또는 세균 전체를 죽여 사용하기도 하고 일부만을 분획하여 사용하기도 한다. 분획화한 사백신은 분리한 물질에 따라 단백 기반 백신과 다당 기반 백신으로 나뉜다.

백신의 투여 후에 일어나는 면역 반응은 백혈구와 체액이 관여한다. 백혈구가 관여하는 것을 세포 면역, 체액이 관여하는 면역을 체액 면역이라고 한다.
            </p>
            <div className="Details__text__birth">역사</div>
<p>
근대적 백신 접종은 에드워드 제너의 우두법을 시작으로 개발되었다.
</p>
            <div className="Details__text__make">원리</div>
            <p>
            인체의 면역계는 병원체에 대응하여 항체를 만든다. 한 번 항체가 형성되면 같은 병원체에 대해서는 면역이 형성되게 된다. 백신은 독성을 약화시킨 병원체를 체내에 주입하여 항체가 형성되도록 하는 것이다. 이렇게 항체가 형성되면 실제 독성을 지닌 병원체가 침입하였을 때 신속하게 격퇴할 수 있게 된다.

면역계는 출생 전부터 모체로부터 전달받은 선천 면역과 생활하면서 침입해 오는 병원체에 대항하여 형성되는 후천 면역으로 나눌 수 있다. 백신은 후천 면역을 증강하기 위한 방법이다. 항체의 형성은 백혈구인 식세포 또는 림프구의 일종인 T세포에 의해 이루어지는데 병원체의 종류에 따라 각기 다른 방법으로 항체를 형성한다.

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

export default Vaccine;
