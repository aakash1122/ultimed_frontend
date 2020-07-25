import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "comps/layout/Navbar";
import Home from "pages/Home";
import AllMedicines from "pages/AllMedicines";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AllTipses from "pages/AllTipses";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/all-meds">
              <AllMedicines />
            </Route>
            <Route path="/all-tipses" exact>
              <AllTipses />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
