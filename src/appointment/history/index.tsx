import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";

const History = ({ defaultData, ...props }) => {
  const { booking, classData } = defaultData;
  const [bookingData, setBookingData] = useState({ success: [], failed: [] });
  const [classBookingData, setClassData] = useState({ success: [], failed: [] });

  useEffect(() => {
    if (booking) {
      const successData = booking.filter((x) => x.status === "6");
      const failedData = booking.filter((x) => x.status === "11");
      setBookingData({
        ...bookingData,
        success: [...successData],
        failed: [...failedData],
      });
    }

    if (classData) {
      const successData = booking.filter((x) => x.status === "6");
      const failedData = booking.filter((x) => x.status === "11");
      setClassData({
        ...classBookingData,
        success: [...successData],
        failed: [...failedData],
      });
    }
  }, [booking]);
  return (
    <React.Fragment>
      <Header />
      <Container style={{ marginTop: 80 }}>ini histroy</Container>
      <Navigation />
    </React.Fragment>
  );
};

export default History;
