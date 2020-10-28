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

import { useRouter } from "next/router";
import { useStyles } from "./styles";

const Home = () => {
  const router = useRouter();
  const classes = useStyles();

  const listProduct = [
    {
      icon : 'icon_doctor.png',
      title: 'Daftar Janji dengan Dokter',
      subTitle: 'daftar janji dengan dokter yang kamu inginkan, di sini',
      url : '/appointment/add/schedule'
    },
    {
      icon : 'icon_education_class.png',
      title: 'Daftar Kelas - Kelas Edukasi',
      subTitle: 'Ikuti kelas-kelas edukatif & dapatkan manfaatnya',
      url : '/appointment/add/class'
    }
  ]

  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <div className="hero-banner">
          <h5>Apa yang Anda cari?</h5>
        </div>
          <List className="list-product">
            {listProduct.map((item, i) => (
              <ListItem className="list-card" key={i} onClick={() => router.push(item.url)}>
                <ListItemAvatar>
                  <Avatar>
                    <img src={`/images/${item.icon}`} alt="icon"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subTitle} />
              </ListItem>
            ))}
          </List>
      </div>
      <Navigation />
    </React.Fragment>
  );
};

export default Home;
