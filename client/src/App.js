import React, { useState } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import SignUp from "./components/SignUp"


const App = () => {
  
  return (
    <div>
      <Switch>
      <Route exact path='/signup' render={() => <SignUp />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);