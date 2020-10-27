import React from "react";
import Header from "components/header";
import Navigation from "components/navigation";
import { useRouter } from 'next/router';
import { useStyles } from "./styles";

const Home = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <div className="hero-banner">
          <h5>Apa yang Anda cari?</h5>
        </div>
        <div className="list-product">
          <div>add dokter</div>
          <div> add class</div>
        </div>
      </div>
      <Navigation/>
    </React.Fragment>
  );
};

export default Home;
