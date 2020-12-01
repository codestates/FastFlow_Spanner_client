// import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import FistAxe from './components/Detail/FistAxe';
import MainPage from './components/Pages/MainPage';
import Mypage from "./components/Pages/Mypage"
import WritePage from "./components/Pages/WritePage"


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/fistaxe" render={() => <FistAxe />} />
        <Route exact path="/mypage" render={() => <Mypage />} />
        <Route exact path="/writepage" render={() => <WritePage />} />
      </Switch>
      <Footer />
    </div>
  );
};


export default withRouter(App);
