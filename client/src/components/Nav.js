import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="navs">
      <div className="nav__main">
        <div className="nav__hamburgerBtn">
          <Link to="/SignIn" className="nav__logInBtn">
            Log in
          </Link>
          <Link to="/SignUp" className="nav__signUpBtn">
            Sign up
          </Link>
          <Link to="/Mypage" className="nav__myPageBtn">
            My page
          </Link>
          <Link to="/Pages/WritePage">write page</Link>
        </div>
        <div className="nav__year">여기에 년도 입력</div>
        <div>
          <Link to="/" className="nav__logoBtn">
            Main
          </Link>
        </div>
      </div>
      <div className="nav__scrollTracerContainer">
        <div className="nav__scrollTracer">여기에 원숭이 입력</div>
      </div>
    </header>
  );
}
