import FireDetail from "../images/DetailPic/FireDetail.gif";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Writepage from "../Pages/WritePage";
import axios from "axios";
import basicPostPic from "../images/InputPic.jpg";
import { ip, port } from "../../url";
import nullPic from "../images/downloadPic.jpg";
import { useHistory } from "react-router-dom";

const Fire = () => {
  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postPicView, setPostPicView] = useState(basicPostPic);
  const [postPic, setPostPic] = useState("");
  const [editId, setEditId] = useState("");
  const [modalCommentEditView, setModalCommentEditView] = useState("none");
  const [inventionId, setInventionId] = useState("asdf");
  const [userName, setUserName] = useState("");

  const history = useHistory();
  useEffect(() => {
    // 토큰 유지
    let accessToken = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    // inventionId 보내기
    setInventionId(2);
    // 댓글 작성
    axios.get(ip + port + `/post/read/2`).then((res) => {
      console.log(res.data);
      let result = res.data;
      let newCommentData = [];
      for (let i = result.length - 1; i >= 0; --i) {
        newCommentData.push(result[i]);
      }
      setCommentList(newCommentData);
    });

    axios.get(ip + port + `/user`).then((res) => {
      console.log("디테일페이지의 유저 정보이다. 이것들아.", res.data);
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
      <div className="Details__title">Fire</div>
      <div className="Details__body">
        <div className="Details__picArea">
          <img className="Details__pic" src={FireDetail} alt=""></img>
        </div>
        <div className="Details__video">
          <iframe
            alt=""
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/Ygpzm0S_rPQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="Details__textArea">
          <div className="Details__text">
            <div className="Details__text__birth">탄생 배경</div>
            <p>
              원시시대에 발견된 이래로 금속, 전쟁, 의식주 전반에 걸쳐서 수많은 곳에 이용되었다. 인류가 언제부터 불을 쓰게 되었는지에 대해서는 여러 설이 있는데, 산불에 타 죽은 동물의 사체를 먹었는데
              맛이 더 좋게 느껴져서 불에 관심을 가졌다는 설이 있는가 하면 다른 동물에 비해 좋은 신체 무기가 없어 이를 대신할 무기를 찾던 중 발견했을 거라는 설도 있다. 불을 인간이 워낙 잘 써먹기
              때문에, 인간이 단순한 짐승에서 짐승과 다른 존재로 발전하게 된 계기를 불의 발견으로 보는 시각도 있을 정도이다. 인류를 호모 사피엔스에 한정하면 불을 도구로 사용한 역사는 인류의 탄생
              이전으로 거슬러 올라가버린다. 호모 에렉투스에게서 불을 직접 만들어낸 흔적이 발견되기 때문이다. 즉 현생 인류라는 종이 발생하는 그 순간에도 불은 원시 인류의 사회에서 일상으로 사용되고
              있었으며 이런 환경 속에서 진화한 호모 사피엔스는 사실상 불의 사용을 전제로 진화된 종이라고 해도 과언이 아닌 셈이다. 치아를 비롯한 각종 소화기의 기능을 음식을 불에 익혀 소화시키기 쉬운
              형태로 먹는 것을 전제로 간소화시켜버린 것이 대표적인 사례이다.
            </p>
            <div className="Details__text__make">제작 방법</div>
            <p>
              라이터는 가장 쉽고 편하게 불을 낼 수 있지만 그만큼 지속적인 연료보충이 필요하다.연료를 구할 수 없으면 무용지물이 된다. <br />
              다음은 성냥이다. 습기에 약하고 물에 젖으면 못쓰는 단점이 있지만 일단 장기보존은 라이터보다 우월.가만이 놔둬도 연료가 증발하는 라이터와는 달리 반영구적 보관이 가능하다.케이스나 사포에
              대고 긁으면 불이 잘 붙는다.다만, 바람과 비가 오면 난이도는 수직상승. <br />
              파이어스틸은 라이터와 성냥보다 더 어렵지만 매우 오래 간다.장기생존에는 더 도움이 되는 장비로, 불쏘시개 위에 쇠막대를 긁고 스파크를 낼 줄만 알면 오래 버틸 수 있다. <br />
              마지막은 도구 없이 나무만으로 점화. 나무판에 무조건 비빈다고 해서 불이 나지 않는데 이유는 마찰 면적이 너무 좁기때문이다. 앞뒤로 구멍이 뚫린 판을 이용한다면 마찰 지점에 막대기와 나무판의
              마찰로 생긴 나뭇가루에 불씨가 생겨서 자연스럽게 밑으로 떨어지므로 불쏘시개로 받치고 작업하는 게 좋다. 구멍 난 판을 만들거나 구하기 힘들다면 나무를 반쯤 쪼개서 같은 효과를 얻을 수 있다.
              화재로 번질 땐 겉잡을 수 없을 만큼 통제가 안 되지만, 반대로 써먹어야 하는데 안 붙는 경우도 많다. 특히 야생에서 자연에 널려있는 물건만으로 불을 피우거나 불씨를 지켜낸다는 건 상당히 어려운
              일이며, 몇 번 해보면 화석연료의 편리함에 얼마나 크게 의존해 왔는지 뼈저리게 느끼게 된다. 풀떼기를 이용해 불을 지피는 건 그다지 추천되지 않는다. 나무에 비해 오래 지속되지 못하기 때문.
              특히 뿌리는 나무건 풀이건 불에 넣지 말자. 뿌리의 특성상 물을 많이 머금는 데다 흙이 많이 묻어 있어 불이 오히려 꺼지는 경우가 많다.
            </p>
            <div className="Details__text__use">시대적 용도</div>
            <p>
              의학, 공학 그리고 실제 가정생활에도 빠지지 않는 중요한 것 중 하나다. 조선시대까지만 해도 시집 온 여자는 시어머니에게 불씨가 담긴 화로를 물려받아 매일같이 챙겼다 하며 이를 꺼뜨리면 크게
              혼나기도 했다고 한다. 남의 집에 불 빌리는 것을 무능한 것으로 여겼다고. 체온을 유지하는 데 필요한 열을 제공해주는 것은 물론 세균을 없애주고, 해충을 없애는 데 더없이 좋은 것이기도 한 것이
              바로 불이며 의학에서도 빠지지 않고 쓰인다. 학자들마다 의견이 약간씩은 다르지만, 인류가 불을 사용해 음식을 익혀 먹은 이후부터 소화기 질환이 감소, 인류 평균 수명 및 인구수가 늘어났다고
              하는 가설에 대체적으로 동의한다. 민물생선에 서식하는 기생충만 봐도 불의 고마움을 알 수 있을 것이다. 일부 동식물의 독성 물질은 높은 열에 분해되기 때문에 단지 불에 직접 익히거나 삶기만
              해도 안심하고 먹을 수 있는 식품이 된다. 팥, 강낭콩, 가지(채소)가 대표적. 생으로 먹으면 독성이 작용하지만 불로 익히거나 삶으면 안전한 식재료가 된다. 기생충 뿐 아니라 박테리아, 세균을
              제거하고 번식을 억제해 식량의 저장기간을 늘리는데도 불은 중요한 역할을 한다. 소금을 사용하는 훈제 처리법은 별다른 화학 처리나 냉장시설 없이도 몇개월 동안 사냥한 고기를 안전하게 보관할 수
              있게 한다. 공학에서는 금속에 대한 연구 그리고 화력 발전을 통해 전기를 만들어내기도 한다. 인간이 써먹는 거면 으레 그렇듯 전쟁에서도 쓰인다. 고대 중국의 전쟁사에 자주 언급되는 화공은 불을
              이용한 공격법. 화공으로 수십만을 발라버렸다든가 하는 기록을 심심찮게 찾을 수 있는데, 실질적으로는 준비 과정에 날씨라든가 환경요소가 필요하다든가 당하는 입장에서도 화공을 경계하거나
              하기에 써먹기가 아주 힘들었고 수십만이 사라진 경우는 대부분 농민 징집병에 불과했던 병사들이 불의 공포 때문에 탈주해 부대가 와해된 것이라고 보는 것이 정확할 것이다. 불을 보면 두려움이
              들기 마련이기에 아무리 숙련된 군대라 할지라도 피할 수 없는 대화재에 직면한다면 부대가 와해되는 것은 시간문제다. 화재 지역의 돌파는 불가능에 가깝고 우회 및 후퇴를 하더라도 그 방향에
              화공을 건 적군이 대기하고 있는 게 당연한지라. 그리고 현대로 넘어가면 화염방사기나 소이탄도 있다. 불에 의존하는 삶에 워낙 익숙해지다 보니, 그것이 없는 상황에 닥쳤을 때의 불편함은 이루
              말할 수 없다. 무인도 서바이벌 계열 매체에서 불을 구하지 못하면, 어떻게든 모닥불을 만들려고 해본 적도 없는 나뭇가지 비비기 같은 것을 하느라 젖먹던 힘까지 쥐어짜는 모습이 나오는 것은 거의
              클리셰 수준이라고 할 정도로, 불이 중요하다고 한다. 사실 극한 상황에서 물보다 더 급한 게 불이다. 물을 안 마시고 버틸 수 있는 시간보다 체온이 떨어진 상태로 버틸 수 있는 시간이 훨씬 짧기
              때문. 거기다 불로 만든 숯으로 여과기를 제조해갖고 마시기 힘든 깨끗하지 않은 물을 정화하거나, 불로 물을 끓여 증류할 수도 있으며 불의 연기로 SOS 신호도 보낼 수 있다.
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

export default Fire;
