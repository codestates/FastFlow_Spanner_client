// import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import FistAxe from './components/Detail/FistAxe';
import MainPage from './components/Pages/MainPage';
import Mypage from './components/Pages/Mypage';
import WritePage from './components/Pages/WritePage';
import Nav from './components/Nav';

import { ip, port } from './url';

const App = () => {
  const handleResponseSuccess = async (login) => {
    let successInfo = await axios.get(ip + port + '/user');
    console.log(successInfo);
    if (!successInfo) {
      //setUserInfo("")
    } else {
      //setIsLogIn(true)
      //history.push('/')
    }
  };
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn handleResponseSuccess={handleResponseSuccess.bind(this)} />} />
        <Route exact path="/fistaxe" render={() => <FistAxe />} />
        <Route exact path="/mypage" render={() => <Mypage />} />
        <Route exact path="/writepage" render={() => <WritePage />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
