import React from "react";
import moment from "moment";
import { Card, CardContent } from "@material-ui/core";
import { useStyles } from "./styles";

const ProductCard = ({ ...props }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <div>
            <h4>{props.patient_name}</h4>
            <h4>Jadwal : {moment(props.date).format('ddd, DD MMM YYYY')}</h4>
            <p style={{marginBottom:10}}>
              {props.time_start} - {props.time_finish}
            </p>
            <p> Tanggal Booking : {props.created_date}</p>
          </div>
          <div>
            <img src="/images/icon_booking.png" alt="icon-booking"/>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;
