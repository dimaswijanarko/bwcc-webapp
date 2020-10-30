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

const Notification = ({ defaultData }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <List>
          {defaultData.length > 0
            ? defaultData.map((x, i) => (
                <ListItem className="list-card" key={x.news_id}>
                  <ListItemAvatar>
                    <img src={x.image_url} alt="notif-icon" />
                  </ListItemAvatar>
                  <ListItemText primary={x.title} secondary={x.short_content} />
                </ListItem>
              ))
            : "ini kosong"}
        </List>
      </div>
      <Navigation />
    </React.Fragment>
  );
};

export default Notification;
