import React from "react";
import Header from "components/header";
import Navigation from "components/navigation";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "./styles";

const Notification = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <List>
          {[...Array(15)].map((x, i) => (
            <ListItem className="list-card" key={i}>
              <ListItemAvatar>
                <Avatar>
                  <img src="/images/ic_launcher_round.png" alt="notif-icon" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Janji Dokter"
                secondary="Jadwal janji anda dengan dr XXX telah diubah, silakan cek di appointmet aatu klik disini"
              />
            </ListItem>
          ))}
        </List>
      </div>
      <Navigation />
    </React.Fragment>
  );
};

export default Notification;
