import testPic from '../../TestPic/FistAxe.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const FistAxe = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    //let replyData = axios.get('http://localhost:3000');
    //replyData를 가지고 FistAxe에 해당하는 댓글 내용을 배열에 넣어서 재구성 하고
    //배열을 setReplyList를 통해서 replyList에 상태변화한다.
    setCommentList([{ text: '도끼는 무서워요' }, { text: '주먹과 도끼는 무슨 관계?' }, { text: '김도끼' }, { text: '우리형이 도끼다' }]);
  }, []);

  return (
    <center className="FistAxes Details">
      <div className="FistAxes__body Details__body">
        <div className="FistAxes__picArea Details__picArea">
          <img className="FistAxes__pic Details__pic" src={testPic} alt=""></img>
        </div>
        <div className="FistAxes__textArea Details__textArea">
          <div className="FistAxes__textTitle Details__textTitle">Detail</div>
          <div className="FistAxes__text Details__text">
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
      <div className="FistAxes__comments Details__comments">
        <div className="FistAxes__commentsHead Details__commentsHead">
          <div className="FistAxes__commentsTitle Details__commentsTitle">Comments</div>
          <Link to="/writepage" className={`FistAxes__commentsWrite Details__commentsWrite`}>
            작성하기
          </Link>
        </div>
        <div className="FistAxes__commentsArea Details__commentsArea">
          {commentList.map((comment) => {
            return <li className="FistAxes__comment Details__comment">{comment.text}</li>;
          })}
        </div>
      </div>
    </center>
  );
};

export default FistAxe;
