import React from "react";
import cookies from "next-cookies";
import Home from "src/home";
import withPrivateRoute from "components/route/privateRoute";
import API from "config/api";

const Index = (props: any) => {
  return <Home {...props} />;
};

Index.getInitialProps = async (ctx) => {
  const key = cookies(ctx).bwccKey;
  let res = [];
  try {
    const {
      data: {
        data : {data},
      },
    } = await API.get(`news/list?key=${key}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    res = [...data];
  } catch (error) {
    res = []
  }
  return {
    defaultData: {
      newsData: res,
    },
  };
};

export default withPrivateRoute(Index);
