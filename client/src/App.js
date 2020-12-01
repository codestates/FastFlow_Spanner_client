import React, { useState } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import axios from 'axios';

import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Nav from "./components/Nav"

import { ip, port } from "./url"


const App = () => {
  const handleResponseSuccess = async (login) => {
    let successInfo = await axios.get(ip + port +"/user")
    console.log(successInfo);
    if(!successInfo) {
      //setUserInfo("")
    } else {
      //setIsLogIn(true)
      //history.push('/')
    }
  }
  
  return (
    <div>
      <Nav />
      <Switch>
      <Route exact path='/signup' render={() => <SignUp />} />
      <Route exact path='/signin' render={() => <SignIn handleResponseSuccess={handleResponseSuccess.bind(this)}/>} />
      </Switch>
    </div>
  );
};

export default withRouter(App);