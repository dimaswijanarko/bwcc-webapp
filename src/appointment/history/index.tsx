import React, { useEffect, useState } from "react";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";
import Schedule from "./part/schedule";
import { useStyles } from "./styles";

import API from "config/api";

const History = ({ bwccKey, ...props }) => {
  const classes = useStyles();

  const [defaultData, setDefaultData] = React.useState({booking : [], classData : []});

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const getHistory = async () => {

    try {
      const {
        data: {
          data: { status },
        },
      } = await API.get(`booking/history?key=${bwccKey}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
  
      setDefaultData({...defaultData, booking : [...status]}); 
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getHistory();
  }, [])

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root}>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            className="custom-tab"
          >
            <Tab label="Jadwal Dokter" fullWidth />
            <Tab label="Kelas Edukasi" fullWidth />
          </Tabs>
        </Paper>
        <div className="content">
          {value === 0 && <Schedule defaultData={defaultData.booking} />}
          {value === 1 && <div>tab2</div>}
        </div>
      </Container>
      <Navigation />
    </React.Fragment>
  );
};

export default History;
