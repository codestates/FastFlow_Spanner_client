import InternetDetail from "../images/DetailPic/InternetDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";
import { useHistory } from "react-router-dom";

const Internet = () => {
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
    setInventionId(1);
    // 댓글 작성
    axios.get(ip + port + `/post/read/17`).then((res) => {
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
      <div className="Details__title">Internet</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={InternetDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/Rc036u-8Sig"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">역사</div>
            <p>
              인터넷의 역사는 1950년대에 컴퓨터의 개발과 더불어 시작하였다. 메인프레임 컴퓨터와 단말기 간의 점대점 통신과 더불어 개시되었고 컴퓨터 간 점대점 연결로, 그 뒤 초기 연구가 패킷 교환 으로
              확장되었다. 폴 바란은 1960년대 초에 메시지 블록 데이터를 기반으로 분산 네트워크를 제안했고, 아파넷, 영국 NPL의 마크 I, CYCLADES, 메리트 네트워크, 타임넷, 텔레넷과 같은 패킷 교환망은
              1960년대 말과 1970년대 초에 다양한 프로토콜을 이용하여 개발되었다. 아파넷으로 말미암아 특히 인터네트워킹을 위한 프로토콜이 개발되었으며 여기서 서로 떨어진 여러 개의 망들이 여러
              네트워크의 한 네트워크로 함께 결합할 수 있었다. 1981년 미국 국립과학재단(NSF)이 CSNET(컴퓨터 과학망)을 개발하면서 아파넷으로의 접속이 확장되었으며 1982년 인터넷 프로토콜 스위트
              (TCP/IP)가 표준화되었고 인터넷이라 불리는, 완전히 상호 연결되는 TCP/IP 네트워크의 월드 와이드 네트워크의 개념이 등장하였다. 아파넷은 1990년에 직권이 해제되었다. 인터넷은 NSFNET의 직권이
              해제된 1995년에 시장에 들어왔으며, 이로써 상용 트래픽을 전달하기 위한 인터넷 사용의 마지막 제한이 제거되었다.
            </p>
            <div className="Details__text__make">원리</div>
            <p>
              인터넷은 아주 간단하게 생각하면, 컴퓨터들과 라우터(Router, 말 그대로 길잡이)들로 이루어져 있다. 우편으로 치면 컴퓨터는 사람, 라우터는 우체국이 되겠다. 데이터에 주소(IP주소)를 적어서
              라우터에 맡기면 라우터가 데이터를 배달해 주는 것이다. (보통 라우터라고 하면 통신사 국사 같은 곳에 설치된 커다란 장치를 떠올리지만, 집에서 사용하는 무선공유기도 라우터의 일종이다.)
              IP주소는 단순히 bit 32개인데, 8개씩 4등분하여 끊어서 읽는다. 그래서 0.0.0.0 ~ 255.255.255.255 사이 값이 된다. 이 모든 IP주소는 IANA라는 기관에서 관리하고 전세계에 고루 할당이 되어 있다.
              마지막으로 DNS(Domain Name Server). 인터넷에서 통신을 하려면 상대방의 IP주소를 알아야 한다. 하지만 네이버 주소가 220.95.233.172라고 외우라고 하면 모두 싫어할 거다. 그래서 전화번호부 같은
              걸 만들었다. naver.com을 찾으면 220.95.233.172을 알려준다. 우리는 이 전화번호부에 해당하는 서버 주소만 적어놓으면 된다. 이 전화번호부 역할을 하는 서버가 DNS다.
            </p>
            <div className="Details__text__use">월드 와이드 웹?</div>
            <p>
              우리가 일상생활에서 흔히 “인터넷”이라 부르는 것은 엄밀하게 말하자면 인터넷이 아닌 월드와이드웹 (World Wide Web)으로, 인터넷이라는 국제 네트워크 위에 링크로 서로 연결되는 텍스트인
              “하이퍼텍스트”라는 개념을 더한 것이다. 인터넷 그 자체는 단순한 국제 네트워크일 뿐이다. 1991년 CERN에서 근무하던 팀 버너스 리 경에 의해 개발되어 배포된 월드와이드웹 — 즉 TCP/IP 위에서
              구동되는 HTTP, HTML, 웹 브라우저 등의 프로토콜과 소프트웨어 — 은, 주로 연구기관들에서 정보 교환을 위해 사용되던 인터넷을 모두가 사용하는 네트워크로 대중화하는 데에 핵심적인 기여를 했다.
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

export default Internet;
