import React from "react";
import {
  Container,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";
import GeneralContact from "components/general/general-contact";
import { useRouter } from "next/router";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    document.cookie =
      "bwccKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  };

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root}>
        <div className="wrapper">
          <div className="container">
            <img src="/images/ic_launcher_round.png" alt="" />
            <div className="content">
              <h4>nama</h4>
              <h5>email</h5>
            </div>
          </div>
        </div>
      </Container>
      <Container className={classes.patientSection}>
        <div className="wrapper">Data pasien</div>
      </Container>
      <Box className={classes.btnWrapper}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setOpen(true)}
        >
          logout
        </Button>
      </Box>
      <GeneralContact />
      <Navigation />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>BWCC WebApp</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Apakah anda ingin keluar dari aplikasi ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} color="primary">
            Ya
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Tidak
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Home;
