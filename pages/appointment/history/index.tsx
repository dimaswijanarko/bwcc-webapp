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
  let bookingData = [];
  let classData = []

  try {

    const {
      data: {
        data: { status },
      },
    } = await API.get(`booking/history?key=${key}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });

    bookingData = [...status];

    const {
      data: {
        data: { status: ClassData },
      },
    } = await API.get(`class/list_booking_class?key=${key}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    classData = [...ClassData];
  } catch (error) {
    
  }
  
  return {
    defaultData: {
      booking: bookingData,
      classData: classData,
    },
  };
};

export default withPrivateRoute(Index);
