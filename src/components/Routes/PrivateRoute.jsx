import React from "react";
import { Route, Redirect } from "react-router-dom";
import { usuarioAutenticado } from "../../auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        usuarioAutenticado() ? (
          <Component {...props} />
        ):(
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
