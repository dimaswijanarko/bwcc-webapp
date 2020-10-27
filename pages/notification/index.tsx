import React from "react";
import Home from "src/notification"
import withPrivateRoute from 'components/route/privateRoute';

const Index = (props: any) => {
    return <Home {...props} />;
  };

export default withPrivateRoute(Index)
