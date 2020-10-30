import React from "react";
import { useStyles } from "./styles";

const GeneralContact = () => {
  const classes = useStyles();

  const contactData = [
    {
      title: "email",
      icon: "ic_email.png",
      action: "mailto:klinikbwcc.@gmail.com",
    },
    {
      title: "call",
      icon: "ic_phone.png",
      action: "tel:+6286268856959",
    },
    {
      title: "Whatsapp",
      icon: "ic_whatsapp.png",
      action: "https://api.whatsapp.com/send?phone=6281388949944",
    }
  ];

  const handleClick = (val: any) => {
    window.open(val);
  };

  return (
    <div className={classes.root}>
      <div className="container card">
        <div className="title-wrapper">
          <h5>Butuh bantuan? Hubungi kami sekarang</h5>
        </div>
        <div className="list-contact">
          {contactData.map((item, index) => (
            <div key={index} onClick={() => handleClick(item.action)} className="contact-container">
              <img src={`/images/${item.icon}`} alt="icon"/>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralContact;
