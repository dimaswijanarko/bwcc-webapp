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
import ImageIcon from '@material-ui/icons/Image';
import { useStyles } from "./styles";

const Notification = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <List>
        {[...Array(15)].map((x, i) =>
          <ListItem className="list-card" key={i}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        )}
  
        </List>
      </div>
      <Navigation />
    </React.Fragment>
  );
};

export default Notification;
