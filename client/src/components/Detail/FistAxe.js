import FistAxeDetail from "../images/DetailPic/FistAxeDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const FistAxe = () => {
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
    axios.get(ip + port + `/post/read/1`).then((res) => {
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
      <div className="Details__title">FistAxe</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={FistAxeDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/0oDnVYGWwWw"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">탄생 배경</div>
            <p>
              주먹도끼의 제작자는 인류의 직계 조상인 호모 에렉투스이다. 그 이전까지의 인류 조상들은 아프리카에서만 살았다. 그러나 지금으로부터 약 160만 년 전쯤에 출현한 호모 에렉투스들은 불을 능숙하게
              다룸으로써 비로소 아프리카를 벗어나 유럽과 아시아로까지 영역을 확대시킬 수 있었다. 호모 에렉투스의 화석 출토 범위와 주먹도끼가 발견되는 지역의 범위는 대체로 일치한다. ‘곧선사람’이라는
              학명에서도 알 수 있듯이 그들은 완벽하게 두 발로 설 수 있었다. 그 덕분에 자유로워진 그들의 두 손은 더욱 정교하게 진화되었고, 그로 인해 석기 제작 기술도 그 이전의 어떤 인류보다도 월등하게
              뛰어났다. 주먹도끼는 이러한 인류의 진화를 배경으로 하여 탄생한 도구이다.
            </p>
            <div className="Details__text__make">제작 방법</div>
            <p>
              주먹도끼의 재료는 주로 규석·석영·사암 등을 사용하고 있으나 현무암 같은 다른 종류의 돌도 이용하였다. 주먹도끼를 만들 때에는 이러한 석재로부터 일차적으로 큰 박편을 떼어낸 다음 박편의 아랫
              부분과 윗 부분, 즉 박편의 양면을 주위로 돌아가면서 엇갈리게 타격을 가하여 작은 박편을 떼어내면서 처음부터 만들고자 하는 주먹도끼의 형태로 다듬어 나간다.
            </p>
            <div className="Details__text__use">시대적 용도</div>
            <p>
              주먹도끼는 구석기시대에 사용된 대표적인 도구이다. 한 손에 쥐고 쓸 수 있어서 짐승을 사냥하고 가죽을 벗기며, 땅을 파서 풀이나 나무를 캐는 등 다양한 용도로 사용되었다. 즉 오늘날의 멀티툴과
              같았다고 보면된다.
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

export default FistAxe;
