import AirplaneDetail from "../images/DetailPic/AirplaneDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const Airplane = () => {
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
    axios.get(ip + port + `/post/read/16`).then((res) => {
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
      <div className="Details__title">Airplane</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={AirplaneDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/IUVkr7qcFOY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">역사</div>
            <p>
              비행기에 대한 기초적인 이론과 형태는 레오나르도 다빈치로부터 시작되었다. 16세기 초 레오나르도 다빈치는 새가 하늘을 나는 원리를 연구하여 새가 자기의 무게를 받쳐줄 수 있을 정도로 충분한
              공기의 밀도 층 위에서는 뜨게 된다는 것을 발견하였다. 인간이 실제로 기구를 타고 하늘을 날게된 것은 18세기 말경이였다. 프랑스의 몽골피에 형제가 열기구를 발명하였다. 1783년에는 세계 최초로
              약 500m 높이로 9km를 25분 정도 비행하는데 성공하였다. 1891년 독일의 릴리엔탈은 자신이 제작한 글라이더를 타고 직접 비행하는데 성공하였으며, 1903년 라이트 형제에 의해 인류의 역사가 시작된
              이후 최초로 인간이 동력에 의한 비행에 성공을 거두었다.
            </p>
            <div className="Details__text__make">원리</div>
            <p>
              비행기가 뜨는 원리는 베르누이의 원리와 뉴턴의 제 3법칙에 의한 것이다. 유선형의 날개 모양 때문에, 비행기가 모터에 의해서 앞으로 전진하면 날개의 위쪽 공기는 좁은 관을 지나가는 유체가
              속력이 빨라지는 것과 같이 속력이 빨라진다. 속력이 빠른 유체는 압력이 낮아진다는 것이 베르누이의 원리이다. 즉, 비행기 날개 아래쪽의 느린 공기는 압력이 크고, 위쪽의 빠른 공기는 압력이
              작으므로 이 압력의 차이에 의해서 날개에 위로 향하는 힘이 생기게 된다. 비행기가 빠르게 앞으로 나가면서, 앞쪽의 공기에 힘을 가하게 된다. 뉴턴의 제 3법칙, 작용-반작용의 법칙에 따라 공기는
              반작용력을 비행기 날개에 전달하게 된다. 진행방향에 대해서 경사면을 갖는 비행기 날개는 공기의 반작용력에 의해 지면으로부터 수직방향으로 힘을 받아 비행기를 위로 올려주게 된다.
            </p>
            <div className="Details__text__use">비행기 실내 온도는 어떻게 조절할까?</div>
            <p>
              항공기의 냉난방 시스템은 연료 소모와는 거의 무관한 데 이는 엔진에서 발산하는 열을 부가적으로 활용하기 때문이다. 즉, 항공기는 엔진을 통해서 흡입하는 영하 40 정도의 차가운 외부 온도를
              흡입하여 적당하게 가열을 통하여 필요한 온도로 데워서 승객들에게 공급을 하게 되는데 공기의 온도를 조절하는 것은 항공기에 장착된 PACK 이라는 장비가 담당한다. 항공기 객실 온도 조절은
              조종실에서 주 온도 조절장치를 통해 설정하고 객실에서는 이미 설정된 기준온도에서 상하 6-8도 정도 범위 내에서 재 조절할 수 있다. 대부분의 상용 여객기는 대개 온도 조절 장치를 통해 언제든지
              온도 조절이 가능하지만, 일부 항공 기종의 경우는 제한적 기능으로 온도 조절이 적절하지 못할 수 있다.
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

export default Airplane;
