import React from "react";
import cookies from "next-cookies";
import Home from "src/appointment/history";
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
  } = await API.get(`booking/history?key=${key}`);
  const {
    data: {
      data: { status: ClassData },
    },
  } = await API.get(`class/list_booking_class?key=${key}`);
  return {
    defaultData: {
      booking: status ? status : [],
      classData: ClassData ? ClassData : [],
    },
  };
};

export default withPrivateRoute(Index);
