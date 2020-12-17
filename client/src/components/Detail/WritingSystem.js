import WritingSystemDetail from "../images/DetailPic/WritingSystemDetail.png";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";

const WritingSystem = () => {
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
    setInventionId(3);
    // 댓글 작성
    axios.get(ip + port + `/post/read/3`).then((res) => {
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
      <div className="Details__title">Writing System</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={WritingSystemDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/3kGuN8WIGNc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">탄생 배경</div>
            <p>
              발화와 동시에 사라지는 구어의 한계를 보강하기 위해 문자가 만들어졌다. 문자의 발명과 함께 인류의 지식을 형태가 있는 방식으로 전할 수 있게 되었기 때문에, 불, 바퀴와 함께 인류 3대
              발명품으로 꼽는 이들도 있다. 문자를 통해 기록을 할 수 있게 됨으로써 본격적인 역사 시대가 대두되게 한 가장 본질적인 원인이다. 위의 정의에 따르면, 문자는 언어를 표기할 수 있는 능력을 갖고
              있어야 하며, 따라서 일반적으로 쓰이는 문장 이상의 단위를 표현할 수 있어야 한다. 일반적으로 이야기할 때에는 아래의 결승 문자 등 간결한 의사 소통 수단도 문자에 포함시켜 말하나, 위의 정의에
              따라 엄밀하게는 결승 문자 등은 문자로 볼 수 없으며 기호(sign) 단계에 해당한다. 결승 문자는 수사(數詞) 등 한정적인 수단을 표기할 수 있을 뿐, 그 사용자들이 당연히 알고 있었을 일상 언어
              개념도 제대로 표기할 수 없기 때문이다. 가령 아라비아 숫자와 수학 기호를 이용하더라도 결승 문자로 표기할 수 있는 개념은 물론 그 이상까지도 표기할 수 있지만, 정교하게 짜인 철학적 언어 실험
              수준이 아닌 이상에야 수학 기호로 현실 언어에 대응할 수 있는 표기법을 갖추어 쓸 수 없기 때문에 우리는 그것을 수학 '기호'라고 하지 수학 '문자'라고 하지 않는다. 하지만 학자에 따라 문자를
              광의의 의미로 볼 때, 언어에 직접 대응되지 않는 경우를 포함하기도 하며, 당장 나무위키에 문자로 분류되어 있는 상형문자와 표의 문자는 언어를 거치지 않고 지시체를 직접 지시하는 기호이다.
              따라서 상형 문자와 표의 문자를 문자로 분류하려면, 문자의 정의를 바꾸던가 아니면 상형 문자와 표의 문자를 문자의 분류에서 빼던지, proto-writing system으로 재분류해야 하는 상황에 처한다.
              언론에서 간혹 '4대 문명 이전의 문자가 발견됐다'고 하는 것들은 위의 정의 때문에 대부분 문자의 자격조차 갖추지 못한 것이 대부분이다. 오히려 교과서에 수록될 정도로 익히 알려진 인더스 문명의
              인장 '문자'라고 불리는 것들도 길어야 20여 단위 수준의 길이로 된 것밖에 발견되지 않고 있기 때문에, 비판적으로 보는 경우에는 이것도 인장 '부호' 정도에 불과하다고 보기도 한다. 인더스 문명의
              인장 문자의 경우에는 메소포타미아 쐐기 문자와 함께 쓰인 경우가 있다(바꾸어 말하자면, 로제타 스톤처럼 여러 가지 문자로 같은 문구를 표기한 것에 기초해 어떤 문장임을 확인할 수 있을 가능성이
              있다)는 점, 비슷한 시대의 선형 엘람 문자나 이후 시대의 브라흐미 문자와 유사하거나 대응되는 부호가 있다는 점 등에서 문자라고 보는 의견이 꽤 있기는 하지만, 도자기 조각이나 금속 유물에
              새겨진 무슨 그림 한두 개를 가지고 와서 '현재까지 발견되지 않은 문자' 운운하는 사람들은 얄짤없이 사짜로 보면 된다. 반대로, 가림토 같이 언어에 대한 대응 체계가 있는 기호라고 하더라도
              실제로 문장 단위로 쓰인 사례가 없는 경우 위작된 기호에 불과함을 단번에 알 수 있다. 현재 사용되고 있는 대부분의 문자 체계는 크게 나눠 이집트 상형문자의 후손과 중국의 갑골 문자의 후손으로
              정리할 수 있다. 자생적으로 발생한 문자는 이 외에도 고대 그리스의 선형 문자, 중앙 아메리카의 마야 문자 등 여럿 존재하지만 현재는 대부분 생명력을 잃었다. 이집트 상형문자가 상형문자에서
              단순화되어 원시 시나이 문자(Proto-Sinaitic)가 된 후, 원시 시나이 문자에서 페니키아 문자가 탄생하였다. 이후 페니키아 문자는 그리스 문자, 아랍 문자, 브라흐미 문자로 각각 발전하였다. 그리스
              문자는 현재 사용되는 라틴 문자 알파벳의 원조가 되었고, 아랍 문자는 아브자드의 대표이며, 브라흐미 문자는 아부기다와 브라흐미계 문자의 조상격이 된다. 따라서 히에로글리프의 후손은 현재
              신대륙에서부터 멀리 동쪽의 동남아시아에 이르기까지 널리 사용되고 있음을 알 수 있다. 중국의 갑골 문자는 이후 한자로 발전하였으며, 일본의 가나는 한자를 간략화한 데서 출발했다. 한국에서도
              한자를 사용하되 입말과의 큰 차이를 보강하기 위한 목적으로 이두, 향찰 등의 표기를 사용했으며, 한글 등장 이후에도 19세기 말까지 언어 권력의 중심은 한자가 차지하고 있었으나 근대화를
              거치면서 점차 국한혼용체를 거쳐 순 한글체로 대체되었고, 현재는 한자는 한글의 보조 문자로만 사용되고 있다. 한글은 훈민정음 해례본의 설명에 따라 세종이 독자 개발했다는 것이 정설이다.
              음운학적으로 세종이 분명히 한자와 중국어 음운학을 섭렵했음은 분명하지만 형태로든 음운 구성으로든 기존의 한자 체계와 유사점이 없으며, 오히려 파스파 문자 등 표음 문자에서 아이디어를 얻었을
              것이라는 가설이 있으나 국내 학계에서는 비판을 받고 있다. 다만 위키백과 영문판에서는 훈민정음 해례본 외에도 한글이 파스파 문자의 영향을 받았을 것이라는 게리 레드야드의 학설도 소개하고
              있다.
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

export default WritingSystem;
