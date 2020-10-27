import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouter } from 'next/router'
import { useStyles } from "./styles";

const Navigation = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    router.push(value);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={router.pathname}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        className="tab-wrapper"
      >
        <Tab icon={<HomeIcon />} label="Beranda" value="/home"/>
        <Tab icon={<EventNoteIcon />} label="Appointment" value="/appointment/history"/>
        <Tab icon={<AddCircleIcon />} value="/appointment/add" className="add-btn-tab"/>
        <Tab icon={<NotificationsIcon />} label="Notifikasi" value="/notification" />
        <Tab icon={<AccountCircleIcon />} label="Akun" value="/account"/>
      </Tabs>
    </Paper>
  );
};

export default Navigation;
