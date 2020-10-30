import React, { useEffect, useState, useRef } from "react";
import { Container, Paper, Tabs, Tab, Badge } from "@material-ui/core";
import ProductCard from "./productCard";
import { useStyles } from "./styles";

const History = ({ defaultData }) => {
  const classes = useStyles();
  const tabRef = useRef<HTMLInputElement>();
  const [bookingData, setBookingData] = useState({
    success: [],
    failed: [],
    else: [],
    booked: [],
    bookedFee: [],
    confirmedFee: []
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    tabRef.current.scrollIntoView();
    window.scrollTo(0, 0);
    setValue(newValue);
  };

  const tabTitle = [
    {
      id: "booked",
      title: "belum bayar",
    },
    {
      id: "bookedFee",
      title: "menunggu pembayaran",
    },
    {
      id: "confirmedFee",
      title: "konfirmasi pembayaran (bwcc)",
    },
    {
      id: "success",
      title: "selesai",
    },
    {
      id: "failed",
      title: "dibatalkan",
    },
    {
      id: "else",
      title: "lainnya",
    },
  ];

  useEffect(() => {
    if (defaultData.length > 0) {
      const successData = defaultData.filter((x) => x.status === "6");
      const failedData = defaultData.filter((x) => x.status === "11");
      const bookedData = defaultData.filter((x) => x.status === "0");
      const bookedFeeData = defaultData.filter((x) => x.status === "2");
      const confirmedFeeData = defaultData.filter((x) => x.status === "4");
      const elseData = defaultData.filter(
        (x) => x.status !== "11" && x.status !== "6" && x.status !== "0" && x.status !== "2" && x.status !== "4"
      );
      setBookingData({
        ...bookingData,
        success: [...successData],
        failed: [...failedData],
        booked: [...bookedData],
        bookedFee: [...bookedFeeData],
        confirmedFee: [...confirmedFeeData],
        else: [...elseData],
      });
    }
  }, [defaultData]);

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            className="custom-tab-child"
          >
            {tabTitle.map((x, i) => (
              <Tab
                label={
                  <Badge
                    badgeContent={bookingData[x.id].length}
                    color="primary"
                  >
                    {x.title}
                  </Badge>
                }
                fullWidth
                key={i}
                id={x.id}
                ref={tabRef}
              />
            ))}
          </Tabs>
        </Paper>
        <div className="content">
          {value === 0 && (
            <div>
              {bookingData.booked.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}
          {value === 1 && (
            <div>
              {bookingData.bookedFee.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}
          {value === 2 && (
            <div>
              {bookingData.confirmedFee.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}
          {value === 3 && (
            <div>
              {bookingData.success.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}

          {value === 4 && (
            <div>
              {bookingData.failed.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}

          {value === 5 && (
            <div>
              {bookingData.else.map((x, id) => (
                <ProductCard key={id} {...x} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default History;
