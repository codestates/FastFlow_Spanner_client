import testPic from "../../TestPic/FistAxe.jpg";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "./../images/candlelight.jpg";
import { ip, port } from "../../url";

const Robot = () => {
  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  const [editId, setEditId] = useState("");
  const [modalCommentEditView, setModalCommentEditView] = useState("none");

  useEffect(() => {
    // 토큰 유지
    let accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // 댓글 작성
    axios.get(ip + port + `/post/read`).then((res) => {
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
        inventionId: 1,
      })
      .then((res) => {
        console.log("사진을 수정합니다.", res.data);
        const formData = new FormData();
        formData.append("image", postPic);
        formData.append("postId", editId);
        formData.append("postInfo", 1);
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
        <span className="Details__editAreas__fileSelectArea">
          <input className="Details__editAreas__fileSelect" type="file" name="image" onChange={onChangeFile} />
        </span>
        <div className="Details__editAreas__titles">
          <input className="Details__editAreas__titleInput" type="text" placeholder="제목" onChange={onTitleChange} />
          <button type="Details__editAreas__submitBtn" onClick={offEditArea}>
            게시
          </button>
          <button type="Details__editAreas__submitBtn" onClick={closeEditArea}>
            닫기
          </button>
        </div>
        <div className="Details__editAreas__texts">
          <input className="Details__editAreas__textInput" type="text" placeholder="남기실 말씀" onChange={onTextChange} />
        </div>
      </div>
    );
  };

  return (
    <center className="Details">
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={testPic} alt=""></img>
        </div>
        <div className="Details__textArea">
          <div className="Details__textTitle">Detail</div>
          <div className="Details__text">
            <p>
              주먹도끼는 구석기시대에 사용된 대표적인 도구이다. 한 손에 쥐고 쓸 수 있어서 짐승을 사냥하고 가죽을 벗기며, 땅을 파서 풀이나 나무를 캐는 등 다양한 용도로 사용되었다. 즉 오늘날의 멀티툴과
              같았다고 보면된다. 한국사 등에서는 이 주먹도끼의 발견을 매우 가치있는 것으로 평가하고 있다. 한국에서 이 주먹도끼가 발굴되기 전까지는 주먹도끼는 유럽과 북아프리카 등 백인 거주지에서만[2]
              발굴되었고, 이 때문에 서양의 고고학자들은 '백인은 타인종에 비해 훨씬 진화된 인류'라는 뉘앙스로 타인종을 열등하게 평가했다. 이는 위에 언급된 대로 주먹도끼는 당시로서는 굉장히 진화한
              문명의 산물이었기 때문이다. 그렇다고 아예 주먹도끼가 아시아 쪽에서 발견되지 않은 것은 아니다. 다만 위에서 언급한 지역에서는 더 발전된 형태인 날이 양쪽에 있는 아슐리안형 주먹 도끼가
              출토된 것이고, 아시아 쪽에서는 날이 한쪽에만 있는 동아시아식 외날 주먹 도끼(찍개)가 출토되어 왔던 것. 하지만 1977년, 주한미군이자 고고학자(고고학자는 아니고 고고학과 출신)였던 '그렉
              보웬'이 우연히 경기도 연천군에서 한국인 여자친구 이상미[3]와 산책하던 중, 이씨가 특이한 모양의 돌을 하나 발견했다. 신기하게 여겨 조사한 결과, 그것이 바로 수십만년도 더 된 주먹도끼였음이
              밝혀졌다. 전곡리 선사유적지 참조. 덕분에 백인만이 주먹도끼 같은 고등한 물건을 지닌 것이 아니었다는 사실이 밝혀져서 고고학계에 일대의 지각변동이 일어났고, 기존의 백인만이 우월했다는
              이론들은 자취를 감추었다. 사실 지금의 기준으로 보면, 현생인류도 아닌 호모 에렉투스의 유물로 인종의 우열을 논한 것 자체가 황당한 일이었던 셈이다. 위의 구분안에 대한 견해를 제시했던 것은
              미국의 고고학자인 H.모비우스에 의한 것으로 소위 모비우스 라인이라고 부르며, 주먹도끼 문화와 찍개 문화의 구분하고자 하였던 목적이었다. 한국에서의 주먹도끼 발견 이전에 이미 중국에서
              주먹도끼가 확인되었기 때문에 모비우스라인은 한반도 북쪽 위로 형성되어 있었다. 당시의 주먹도끼 문화와 찍개문화의 구분안은 지속적으로 조정되었던 학설이었다. 즉, 주먹도끼의 사용이 발전된
              문화상을 지칭할 목적이 있을 "수" 있다손 치더라도 결코 인종에 기인한 우월성의 구분이 목적이 아니라 문화권 설정 그 자체에 보다 목적을 둔 가설이었다.
            </p>
          </div>
        </div>
      </div>
      <div className="Details__comments">
        <div className={"Details__commentTextEdit"} style={{ display: modalCommentEditView }}>
          {onEditComment()}
        </div>
        <div className="Details__commentsWrite">
          <Writepage />
        </div>
        <div className="Details__commentsHead">
          <div className="Details__commentsTitle">Comments</div>
        </div>
        <div className="Details__commentsArea">
          {commentList.map((comment) => {
            return (
              <li className="Details__comment" key={comment.id}>
                <div className="Details__commentPicArea">
                  <img className="Details__commentPic" src={ip + port + `/${comment.postPhoto}`} alt="" />
                </div>
                <div className="Details__commentTextAreas">
                  <div className="Details__commentTextAreas__title">{comment.title}</div>
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

export default Robot;
