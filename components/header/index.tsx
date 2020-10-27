import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useRouter } from 'next/router';
import { useStyles } from "./styles";

interface IHeader {
  backButton?: boolean;
  title?: string;
  handleBack?(): () => void;
}

const Header: React.FC<IHeader> = ({ backButton, handleBack, title }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className="toolbar-wrapper">
          {backButton && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleBack ? handleBack : () => router.back()}
            >
              <ChevronLeftIcon/>
            </IconButton>
          )}
          {!backButton && (
            <div className={`${classes.menuButton} bwcc-icon`}>
                <img src="/images/ic_notif.png" alt="bwcc-icon"/>
                <h3>BWCC</h3>
            </div>
          )}
          {title && (
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
  );
};

Header.defaultProps = {
  backButton: false,
  title: ""
};

export default Header;
