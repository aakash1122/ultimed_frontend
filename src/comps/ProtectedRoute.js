import React, { useContext } from "react";
import { MyContext } from "context/context";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, rest }) => {
  const [state] = useContext(MyContext);

  const { user } = state;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
