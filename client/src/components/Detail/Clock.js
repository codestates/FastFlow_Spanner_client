import CondomDetail from "../images/DetailPic/CondomDetail.jpg";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";

const Clock = () => {
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
    setInventionId(6);
    // 댓글 작성
    axios.get(ip + port + `/post/read/6`).then((res) => {
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
      <div className="Details__title">Clock</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={CondomDetail} alt=""></img>
        </div>
        <div className="Details__video"></div>
        <div className="Details__textArea">
          <div className="Details__text">
            <p>
            시계는 시간을 나타내거나 시간을 재는 기계나 장치이다. 시계에는 자연적이나 기계로 움직이는 것과 건전지 등을 넣어서 움직이는 시계 등이 있으며, 일상적으로는 벽걸이시계, 손목시계, 탁상시계 등이 많이 사용된다. 이외에도 시계에는 괘종시계, 모래시계, 물시계, 해시계, 알람시계 등이 있다. 현재 가장 많이 사용되고 있는 시계는 디지털 시계이다.
            </p>
            <div className="Details__text__birth">시계의 역사</div>
            <p>
            <div className="Details__text__historyDetails">해시계와 측정 도구</div>
            <p>
해시계는 고대 사회에서 널리 이용된 시계였다. 해시계는 햇빛 때문에 생겨난 그림자로 시간대를 알려주는 다소 원시적 수준의 도구에 불과했다. 하지만 잘 개량된 해시계는 태양시를 비교적 정확하게 측정할 수 있었다. 물론, 시간을 측정하려면 오랫동안 지켜봐야 했고, 날이 흐리거나 밤일 경우엔 시간 측정 자체가 불가능했다. 결국 이런 해시계의 한계는 다른 시계를 발명할 필요를 느끼게 하였고 좀 더 높은 수준의 물시계가 등장한다.

또한 촛농이 녹아 초가 타는 것으로 시간을 재었던 양초시계는 특정한 길이의 시간을 재는 데 유용하게 사용되었다. 그리고 작은 구멍 사이로 모래가 빠져나와 윗층의 모래가 아랫층의 모래까지 가는 시간으로 특정한 길이의 시간을 재는 모래시계 또한 당시로서는 정확했고 유용한 도구였다.
</p>

<div className="Details__text__historyDetails">물시계</div>
<p>
물시계는 해시계와 함께 매우 오래된 시계이다. 가장 단순한 형태를 가진 물시계는 그릇에서 새어 나오는 물로 측정했다. 이러한 물시계를 가장 처음 쓰인 곳으로는 기원전 16세기 바빌론과 고대 이집트가 유력하다. 인도와 중국 또한 매우 오래전부터 물시계를 발명한 것으로 알려져 있다.

일반적으로 그리스와 로마 또한 정확하고 복잡한 물시계를 사용했다고 본다. 그리고 이들이 사용한 물시계는 다시 비잔티움 제국과 이슬람으로 전파되어 더욱 발전하게 된다. 고대 중국에서도 독자적으로 물시계를 발전시켰으며 이러한 기술은 후에 한국과 일본에까지도 전달된다.

어떤 지역에서는 물시계가 독자적으로 발전하였지만, 어떤 곳에서는 다른 곳에서 기술을 전달받은 곳도 있었다. 여기서 주목해야할 점은, 산업혁명 이전에는 굳이 시간이 정확하게 몇 시인지 알 필요는 없었다는 점이다. 산업혁명 이전 시대에는 시계는 단순히 연설이나 교회의 설교 따위에 필요했고, 물시계는 이러한 역할을 비교적 정확하게 해냈다. 이렇듯 이전 사회에서는 현대 사회 만큼 정확성을 필요로 하지 않았고, 주로 시간의 길이를 측정하는 데 쓰였다. 하지만 17세기 무렵 유럽에서 진자의 운동을 통한 시계를 발명한 것은 혁명적인 변화를 일으켰다.
</p>

<div className="Details__text__historyDetails">중세의 시계</div>
<p>
797년(801년) 아바스 왕조의 5대 칼리프인 하룬 알 라시드는 아불 아바스라는 아시아 코끼리와 함께 샤를마뉴를 만났다고 한다. 이때 기계식 시계를 가지고 참석했다고 전해지는데, 이것은 최초의 기계식 시계가 아시아에서 만들어졌을 수도 있음을 나타낸다.

중세 유럽의 종교 학회에서는 정확하게 짜인 일정을 맞출 수 있는 시계가 필요했다. 이러한 일을 하는 데 해시계, 물시계, 초시계 등 다양한 시계들이 동원되었다. 시간의 흐름이나 시각을 정확하게 알릴 때에는 손으로 치는 종이나 물체를 떨어트려 울리는 종 따위를 사용하기도 했다.
</p>

<div className="Details__text__historyDetails">근대의 시계</div>
<p>
근대로 넘어가면서 시계는 발전을 거듭하여 마침내 진자운동을 통한 시계가 발명되었다. 또한, 산업혁명을 전후로 장거리 여행의 증가, 전신의 발전 등 기술 발전과 함께 저렴하고 정확한 시계에 대한 필요성도 함께 점점 증하기 시작했다.
</p>

<div className="Details__text__historyDetails">20세기의 시계</div>
<p>
근대까지의 시계는 고도로 정밀한 수작업을 요구해 부유층의 전유물로 여겨졌으나 20세기 초 미국의 시계 제조사 부로바가 대량생산과 부품의 규격화를 통한 저렴한 시계를 선보이면서 비로소 일반 대중들도 시계를 구입할 수 있게 되었다. 1969년 일본의 시계 제조사 세이코에 의해 전자식 쿼츠 시계가 개발되어 시계의 제조가는 더욱 낮아졌으며, 이로 인해 수작업을 고집하던 서구의 시계 회사들이 문을 닫는 등, 시계 산업의 대대적인 개편이 이루어졌다. 이후 시계 산업은 고가의 수제 기계식 시계 제조사와 저렴한 쿼츠 시계 제조사로 양분되어 각각 고가의 장신품, 또는 저렴한 일상 생활용 시계를 생산하게 되었다.
</p>

<div className="Details__text__historyDetails">현대의 시계</div>
<p>
21세기 들어 스마트폰등 시간을 알려주는 대체품들이 등장하면서 손목 시계의 패션 악세서리로서의 기능이 부각되었다. 또한 스마트폰과의 연동을 통해서, 혹은 자체적으로 웨어러블 컴퓨터 기능을 탑재한 스마트 워치들이 출시되고 있다.
</p>
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

export default Clock;
