import React from "react";
import { Container } from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header backButton title="Add Class"/>
      <Container style={{marginTop:80}}>ini add class</Container>
      <Navigation/>
    </React.Fragment>
  );
};

export default Home;
