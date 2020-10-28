import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "components/header";
import Navigation from "components/navigation";
import GeneralContact from "components/general/general-contact";
import Banner from "./part/banner";
import News from "./part/news";
import { useRouter } from 'next/router';
import { useStyles } from "./styles";

const Home = ({...props}) => {
  const router = useRouter();
  const classes = useStyles();

  const AppData = [
    {
      title: "Dokter",
      icon: "icon_doctor.png",
      url: "/dokter",
    },
    {
      title: "Jadwal",
      icon: "icon_booking.png",
      url: "/appointment/add/schedule",
    },
    {
      title: "Kelas",
      icon: "icon_education_class.png",
      url: "/appointment/add/class",
    }
  ];

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root}>
        <div className="wrapper">
          <Banner/>
        </div>
      </Container>
      <Container className={classes.appointmentSection}>
        <div className="wrapper">
          <div className="content">
            ini appointment
          </div>
        </div>
      </Container>
      <Container className={classes.appSection}>
        <div className="wrapper">
          {AppData.map((x,i) => (
            <div className="content" key={i} onClick={() => router.push(x.url)}>
             <img src={`/images/${x.icon}`} alt=""/>
          <h5>{x.title}</h5>
           </div>
          ))}
        </div>
      </Container>
      <Container className={classes.newsSection}>
        <div className="title">
          <h6>Informasi penting untuk kamu</h6>
          <h6>Lihat semua</h6>
        </div>
        <div className="wrapper">
          <News defaultData={props.defaultData.newsData}/>
        </div>
      </Container>
      <GeneralContact />
      <div className={classes.spacer}/>
      <Navigation/>
    </React.Fragment>
  );
};

export default Home;
