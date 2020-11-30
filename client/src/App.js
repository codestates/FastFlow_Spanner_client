import React, { useState } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import SignUp from "./components/SignUp"
import Nav from "./components/Nav"


const App = () => {
  
  return (
    <div>
      <Nav />
      <Switch>
      <Route exact path='/signup' render={() => <SignUp />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);