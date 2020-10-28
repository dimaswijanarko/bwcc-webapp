import React, { useState } from "react";
import Header from "components/header";

import { Container, TextField, Button } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { useRouter } from "next/router";
import { useStyles } from "./styles";

// interface IDate {
//   date?():   (date: Moment) => void;
// }

const Home = () => {
  const classes = useStyles();
  const router = useRouter();
  //const [selectedDate, handleDateChange] = useState<IDate | null>(new Date());

  const defaultData = [
    {
      title: "test1",
      value: "1",
    },
    {
      title: "test2",
      value: "2",
    },
  ];

  return (
    <React.Fragment>
      <Header backButton title="Add Schedule" />
      <div className={classes.root}>
        <Container className="container">
          <Autocomplete
            options={defaultData}
            getOptionLabel={(option) => option.title}
            defaultValue={defaultData[1]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Size small"
                placeholder="Favorites"
              />
            )}
          />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            {/* <DatePicker
              label="Tanggal"
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
              fullWidth
            /> */}
          </MuiPickersUtilsProvider>
          <Button variant="contained" color="primary">
            Daftar
          </Button>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
