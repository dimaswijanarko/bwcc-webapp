import React from "react";
import Home from "src/appointment/add";
import withPrivateRoute from "components/route/privateRoute";

const Index = (props: any) => {
  return <Home {...props} />;
};

export default withPrivateRoute(Index);
