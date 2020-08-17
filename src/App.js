import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "comps/layout/Navbar";
import Home from "pages/Home";
import AllMedicines from "pages/AllMedicines";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AllTipses from "pages/AllTipses";
import AddTips from "pages/AddTips";
import ViewMedDetail from "pages/ViewMedDetail";
import Profile from "pages/Profile";
import ViewTipsDetail from "pages/ViewTipsDetail";
import AddMedicine from "pages/AddMedicine";
import UpdateMed from "pages/UpdateMed";
import UpdateTips from "pages/UpdateTips";
import ProtectedRoute from "comps/ProtectedRoute";

import { MyContext } from "context/context";
import AdminRoute from "comps/AdminRoute";
import AllUsers from "pages/AllUsers";
import { NoMatch } from "comps/NoMatch";

function App() {
  const [state, dispatch] = useContext(MyContext);

  const [loading, setLoadin] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: "FINISH_LOGIN", payload: JSON.parse(user) });
    }
    setLoadin(false);
  }, [dispatch]);

  if (loading) return null;

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
              <ViewMedDetail />
            </Route>
            <Route path="/all-tipses" exact>
              <AllTipses />
            </Route>
            <ProtectedRoute path="/add/tips" exact>
              <AddTips />
            </ProtectedRoute>
            <AdminRoute path="/add/medicine" exact>
              <AddMedicine />
            </AdminRoute>
            <Route path="/med/update/" exact>
              <UpdateMed />
            </Route>
            <Route path="/all-tipses/:id" exact>
              <ViewTipsDetail />
            </Route>
            <ProtectedRoute path="/tips/update/" exact>
              <UpdateTips />
            </ProtectedRoute>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/profile/:id" exact>
              <Profile />
            </Route>
            <AdminRoute path="/users/all" exact>
              <AllUsers />
            </AdminRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
