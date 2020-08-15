import React, { useContext } from "react";
import { MyContext } from "context/context";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ children, rest }) => {
  const [state] = useContext(MyContext);

  const { user } = state;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
