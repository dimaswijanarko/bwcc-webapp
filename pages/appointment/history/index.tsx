import React from "react";
import cookies from "next-cookies";
import Home from "src/appointment/history";
import withPrivateRoute from "components/route/privateRoute";

const Index = (props: any) => {
  return <Home {...props} />;
};

Index.getInitialProps = async (ctx) => {

  return {
    bwccKey : cookies(ctx).bwccKey || null,
  };
};

export default withPrivateRoute(Index);
