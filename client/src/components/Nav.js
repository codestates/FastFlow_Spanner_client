import React from "react";
import { Link } from "react-router-dom";
import ScrollTracker from './ScrollTracker';
import useScrollStatus from './hooks/useScrollStatus';



export default function Nav() {

  const scrollState = useScrollStatus();

  return (
    <header className="navs">
      
			<div className="nav__main">
        <div className="nav__hamburgerBtn">
          <Link to='/SignIn' className="nav__logInBtn">Log in</Link>
          <Link to='/SignUp' className="nav__signUpBtn">Sign up</Link>
					<Link to='/Pages/Mypage' className="nav__myPageBtn">My page</Link>
					<Link to='/Pages/WritePage'>write page</Link>
        </div>
			  <div className="nav__year">여기에 년도 입력</div>
        <div>
          <Link to='/Pages/MainPage' className="nav__logoBtn">Main</Link>
        </div>
			</div>
			<div className="nav__scrollTrackerContainer">			
        <ScrollTracker position = {scrollState.position} />
			</div>
    </header>
  )
}