import RefrigeratorDetail from "../images/DetailPic/RefrigeratorDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";

const Refrigerator = () => {
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
    axios.get(ip + port + `/post/read/14`).then((res) => {
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
      <div className="Details__title">Refrigerator</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={RefrigeratorDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/soBzW01Uq5A"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="Details__textArea">
          <div className="Details__textTitle">Detail</div>
          <div className="Details__text">
            <div className="Details__text__birth">역사</div>
            <p>
              최초의 냉장 시설은 고대 그리스와 로마, 중국 등지에서 발견된다. 우리나라의 최초의 냉장 시설은 신라 시대의 '석빙고'이다. 전기 냉장고의 시작은 네덜란드의 제임스 해리슨이 1862년 개발한
              공업용 냉장고 이다. 이후 1911년 미국의 제너럴일렉트릭사가 최초의 가정용 냉장고를 개발했고, 1915년에는 가정용 냉장고의 보급이 시작되었다. 냉장고가 발명됨으로서 식료품을 신선하게 유통할 수
              있는 기간이 급격히 늘어났기 때문에 집약적인 노동과 장기적인 전쟁이 가능해졌고 그로 인해 산업 문명의 발달 양상이 획기적으로 바뀌었다는 시각도 있다. 냉장고가 보급되기 이전과 이후의
              유럽인들의 평균 신장 또한 변화했는데, 이는 신선한 과일이나 고기를 제때 먹을 수 있게 된 것이 원인으로 엄청나게 획기적인 일이었다.
            </p>
            <div className="Details__text__make">원리</div>
            <p>
              냉매를 이용하여 저장고 안의 열을 빼앗아 온도를 내린 뒤 그 열을 바깥으로 방출시키는 원리로 작동하므로 근본적으로는 에어컨의 원리와 같다. 냉장고의 냉기로 냉방을 하는 건 불가능에 가깝다.
              에어컨은 방 안의 열을 흡수한 다음 실외기에서 방 밖으로 배출하도록 되어 있지만, 냉장고는 실외기가 없이 흡수한 열을 그냥 뿜어낸다. 냉장고 문을 열어놓고 가동시키면 냉기를 뿜어내는 만큼
              열기도 뿜어내는데다가, 사용한 전력만큼 더 더워진다. 냉장고의 전기소모량이 엄청날 것으로 착각하는 사람들이 있으나 밀폐된 공간을 국부적으로 냉각하는 냉장고의 특성상 전기소모량은 생각보다
              크지 않다. 다만 누진요금제와 하루 종일 가동하는 특성 때문에 일반 가정의 전기요금에서 차지하는 비율은 높지만 가동시간을 고려하면 순간 소비량은 큰 편이 아니다.
            </p>
            <div className="Details__text__use">왜 냉장고 문은 어떤 구조로 되어있을까?</div>
            <p>
              냉장고 문을 여닫을때, 자세히 보면 냉장고의 몸통과 맞닿는 부분에 고무자석이 있다. 이렇게 고무자석을 붙여 놓은 이유는 자석이 문이 닫힌채로 붙어 고정하는 역할을 하며, 냉장고 속의 냉기가
              빠져나가지 않게 하는데 있다.
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

export default Refrigerator;
