import React from "react";
import cookies from "next-cookies";
import Home from "src/appointment/add/addSchedule";
import withPrivateRoute from "components/route/privateRoute";
import API from "config/api";

const Index = (props: any) => {
  return <Home {...props} />;
};

Index.getInitialProps = async (ctx) => {
  const key = cookies(ctx).bwccKey;
  const {
    data: {
      data: { status },
    },
  } = await API.get(`booking/get_schedule1?key=${key}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
  return {
    defaultData: status ? status : []
  };
};

export default withPrivateRoute(Index);
