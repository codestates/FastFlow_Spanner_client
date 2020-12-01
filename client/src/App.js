// import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import FistAxe from './components/Detail/FistAxe';
import MainPage from './components/Pages/MainPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/fistaxe" render={() => <FistAxe />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
