import WheelDetail from "../images/DetailPic/WheelDetail.png";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const Wheel = () => {
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
    setInventionId(4);
    // 댓글 작성
    axios.get(ip + port + `/post/read/4`).then((res) => {
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
      <div className="Details__title">Wheel</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={WheelDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/vC8xmdA4Dmg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">탄생 배경</div>
            <p>
              중국에서는 황제 헌원씨(黃帝 軒轅氏)가 만들었다는 전설이 있다. 이는 이름인 '軒轅'에 부수로 '수레 거(車)'가 들어간 것이 그 때문이라는 말이 있다. 자연계에 이미 존재하는 물건을 모방하지 않고
              인간이 스스로 만들어낸 물건. 고고학적 증거들에 따르면 바퀴가 처음으로 사용되기 시작한 것은 기원전 4000년 경으로서, 탈것에 부착된 것이 아니라 도공(陶工)들이 사용하는 물레에 사용되었다.
              바퀴달린 탈것을 사용했다는 가장 오랜 기록은 기원전 3500년경 메소포타미아였다. 유사한 시기에 인도와 중국에서도 바퀴를 사용한 것으로 보인다. 이후, 바퀴는 빠른 속도로 북서 유럽으로
              전파되었다. 처음에 바퀴 달린 탈것은 의식(儀式)이나 행사를 위해 사용되었고, 곧 전쟁에 이용되었다. 바퀴 달린 탈것이 물건을 나르는데 이용되기 시작한 것은 그로부터 약 1000년이 지난
              이후부터였다.
            </p>
            <div className="Details__text__make">제작 방법</div>
            <p>
              최초의 바퀴는 통나무를 원반 모양으로 잘라내어 다듬은 형태이거나 3개의 널빤지를 서로 결합시켜 원형으로 깎은 형태였다. 이러한 바퀴는 오래 견디지 못하고 쉽게 부서졌으므로, 이를 강하게
              만들기 위해서 얇은 나무나 구리로 만든 테를 둘러 사용하였다. 기원전 2000년경에는 바퀴살이 달린 바퀴가 처음으로 나타나 이용되기 시작했다.
            </p>
            <div className="Details__text__use">시대적 용도</div>
            <p>
              인류의 중요한 발명품 중 하나이다. 바퀴 덕분에 전쟁, 정치, 경제, 산업, 기술 모든 면에서 장족의 발전을 이루었다. 바퀴가 발명되고 나서 장거리 이동과 대규모의 물자수송이 가능해져 노동 효율,
              작업 효율이 비교도 안될 정도로 상승했고, 문명간 교류가 가능해져 기술과 지식이 전세계로 퍼질 수 있게 되었다. 그러나 엄밀히 말하자면 바퀴는 그저 효율적이기만 한 것이 아니라, 그 자체의
              한계가 있다. 바퀴는 생각보다 만들기가 까다롭고 유지보수가 필요하다. 지형도 꽤 가리므로 적절한 도로를 만들어야 하는데, 도로 역시 돈을 계속 잡아먹는 괴물이다. 도로 밖이나 길이 험한 곳에서
              진창에 빠지거나, 바퀴가 나무뿌리에 걸리거나, 바퀴살/바퀴축이 아예 부서진다면 그만한 낭패도 없었다. 즉, 인간이나 가축이 직접 짊어지는 것보다 가격 대비 성능이 떨어진다. 그러므로 지역에
              따라서는 현지인들이 선호하지 않을 수도 있다는 것이다. 신대륙만 그런 게 아니었다. 중세 유럽도 비슷한 이유로 마차여행보다 도보/승마가 주류였으며, 사막을 건너는 캐러밴들은 그냥 낙타의 등에
              짐을 올렸다. 그리고 구대륙 어디건 근대 이전까지 물자 운송을 책임진 건 바퀴보다 '선박'이었다. 종래에는 바퀴의 사용이 불의 사용과 마찬가지로 곧 문명의 발전과 직결된다는 생각이 널리 퍼져
              있었다. 그러나 실제로는 운송 수단으로 바퀴를 이용하지 않으면서도 높은 수준을 보여준 문명권들도 존재했다. 바퀴의 사용은 인류 문명에 있어 필수적인 요소였다기보다는 특정한 문명권에서만
              발견할 수 있는 특수한 요소였던 셈이다. 물론 저 높은 수준이라는 것은 교통이 발달하지 않은 전근대 문명의 한계 내에서 높은 수준이라는 것으로, 산업혁명 이후 내연기관과 도로교통이 급속도로
              발달한 지금 바퀴를 이용하지 않는 문명권은 사실상 없다. 바퀴의 중요성이 문명 발달에 결정적이지 않다는 것은 동력을 소나 말과 같은 생물에 의지했던 시절의 이야기이다.
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

export default Wheel;
