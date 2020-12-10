import { Link } from "react-router-dom";
import React, { useRef, useLayoutEffect } from 'react';

const MainWirelessCommunication = () => {
  return (
    <div className="MainWirelessCommunications">
      <div className="MainWirelessCommunications__text">무선통신 페이지입니다.</div>

      <Link to="/WirelessCommunication" className={`MainWirelessCommunications__link LinkedDetail`}>
        클릭 시 상세 페이지로 이동합니다
      </Link>
    </div>
  );
};

export default MainWirelessCommunication;
