import LightBulbDetail from "../images/DetailPic/LightBulbDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const LightBulb = () => {
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
    axios.get(ip + port + `/post/read/15`).then((res) => {
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
      <div className="Details__title">LightBulb</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={LightBulbDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/l5q-5VH4X-E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__textTitle">Detail</div>
          <div className="Details__text">
            <div className="Details__text__birth">역사</div>
            <p>
              전구의 발명 전에 사람들은 어둠을 밝히기 위해 등잔, 양초, 석유 램프 등을 사용했다. 최초의 백열전구는 탄소로 이루어진 막대가 촛불 4000개 정도의 밝기의 빛을 내도록 만든 아크 등이다. 아크
              등은 1808년 영국의 화학자인 험프리 데비가 발명하였는데, 가정용으로 사용하기에 는 부피가 크고 밝기가 너무 밝다는 단점이 있었다. 이후 에디슨은 1879년 필라멘트가 들어있는 백열 전구를
              발명하였다. 에디슨보다 1년 빠른 1878년 영국의 조지프 윌슨 스윈 경이 진공으로 된 유리구 안에 탄소 필라멘트를 넣는 전구를 발명하였으나, 에디슨은 백열전구를 사용하기 위한 기구들과 발전기
              등을 함께 개발하였기 때문에 최초의 전구 개발자는 에디슨으로 알려져 있다.
            </p>
            <div className="Details__text__make">원리</div>
            <p>
              필라멘트에 전기를 흘리면, 전기가 흐르는 것을 방해하는 저항체 금속으로 이루어진 필라멘트의 온도가 올라가면서 빛을 내게 된다. 텅스텐으로 만든 필라멘트의 경우 3000℃까지 온도가 올라간다고
              한다. 필라멘트를 오랫동안 사용하기 위해 백열전구의 유리속은 기체가 없는 진공 상태로 만들거나 아르곤, 질소와 같은 기체를 넣는다.
            </p>
            <div className="Details__text__use">형광등은 어떤 원리일까?</div>
            <p>
              형광등은 1938년에 미국의 제너럴 일렉트릭 사에서 발명한 것이다. 형광등은 기다란 유리관으로 되어 있고, 유리관의 양쪽에 필라멘트가 있다. 유리관 속은 진공으로 만든 후, 아르곤과 수은 기체를
              넣는다. 유리관 안쪽에는 형광 물질을 발라두어 양 끝의 필라멘트에서의 방전이 전자의 운동과 내부 아르곤, 수은 기체를 활발하게 움직이게 하여 자외선이 나오게 된다. 방출된 자외선이 형광 물질에
              닿으면 가시광선으로 변하여 빛이 나오게 된다. 백열 전구와는 다르게 형광등에는 일정한 전류가 흐를 수 있게 하는 안정기가 필요하다.
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

export default LightBulb;
