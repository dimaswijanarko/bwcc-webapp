import React from "react";
import { Container } from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header />
      <Container style={{marginTop:80}}>ini account</Container>
      <Navigation/>
    </React.Fragment>
  );
};

export default Home;