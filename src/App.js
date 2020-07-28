import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "comps/layout/Navbar";
import Home from "pages/Home";
import AllMedicines from "pages/AllMedicines";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AllTipses from "pages/AllTipses";
import AddTips from "pages/AddTips";
import MedDetail from "comps/MedDetail";
import Profile from "pages/Profile";
import ViewTipsDetail from "pages/ViewTipsDetail";
import AddMedicine from "pages/AddMedicine";

import { MyContext } from "context/context";

function App() {
  const [state, dispatch] = useContext(MyContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: "FINISH_LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/all-meds" exact>
              <AllMedicines />
            </Route>
            <Route path="/all-meds/:id" exact>
              <MedDetail />
            </Route>
            <Route path="/all-tipses" exact>
              <AllTipses />
            </Route>
            <Route path="/add/tips" exact>
              <AddTips />
            </Route>
            <Route path="/add/medicine" exact>
              <AddMedicine />
            </Route>
            <Route path="/all-tipses/:id" exact>
              <ViewTipsDetail />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
