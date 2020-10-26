import React from "react";
import Login from "src/login";
import publicRoute from "components/route/publicRoute";

const Index = (props: any) => {
  return <Login {...props} />;
};

export default publicRoute(Index);
