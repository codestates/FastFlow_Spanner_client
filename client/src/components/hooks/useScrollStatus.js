import { useEffect, useState } from "react";
// const styles = {
//   navigationSm: 600,
//   navigationMd: 5000
// };
// const isSticky = (scroll, target = styles.navigationMd - styles.navigationSm) =>
//   scroll > target;
  //document.body.scrollHeight에 각 페이지의 총 높이가 저장된다.(스크롤 하지 않았을 때의 전체 높이 ex.2000)
  //window.innerHeight : 브라우저의 창틀을 제외한 부분의 높이(지금 보고 있는 화면의 높이 ex.860)
  //즉 height는 스크롤이 밑으로 내려갈 수 있는 높이
const calcPosition = (
  scroll,
  height = document.body.scrollHeight - window.innerHeight
) => ((scroll / height) * 100) | 0;
// window.scrollY : window의 scrollY 속성은 문서가 수직으로 몇 픽셀만큼 스크롤 되었는지를 알려준다.
const useScrollStatus = (scroll = window.scrollY) => {
  // const [stickyState, setStickyState] = useState(isSticky(scroll));
  const [positionState, setPositionState] = useState(calcPosition(scroll));
  function handleScrollChange() {
    // setStickyState(isSticky(window.scrollY));
    setPositionState(calcPosition(window.scrollY));
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return function cleanup() {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);
  return {
    // sticky: stickyState,
    position: positionState
  };
};
export default useScrollStatus;