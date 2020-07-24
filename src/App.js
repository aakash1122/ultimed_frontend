import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "comps/layout/Navbar";
import Home from "pages/Home";
import AllMedicines from "pages/AllMedicines";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/all-meds" exact>
              <AllMedicines />
            </Route>
            <Route path="/all-tipses" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;
