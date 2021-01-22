import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Phone as PhoneIcon, Mail as MailIcon, WhatsApp as WhatsappIcon } from "@material-ui/icons";
import { useStyles } from "./styles";

const GeneralContact = () => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const contactData = [
    {
      title: "Email",
      icon: MailIcon,
      action: "mailto:klinikbwcc.@gmail.com",
    },
    {
      title: "Call",
      icon: PhoneIcon,
      action: () => setState(true),
      subItem : [
        {
          title : "0812-8585-8895",
          action : "tel:+6281285858895",
        },
        {
          title : "0812-9221-3325",
          action : "tel:+6281292213325",
        },
        {
          title : "021-7450873",
          action : "tel:+62217450873",
        }
      ]
    },
    {
      title: "Whatsapp",
      icon: WhatsappIcon,
      action: "https://api.whatsapp.com/send?phone=6281388949944",
    },
  ];

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleClick = (val: any) => {
    if (typeof val === "function") val();
    else window.open(val);
  };

  const clik = () => {
    alert('klik');
  }

  return (
    <div className={classes.root}>
      <div className="container card">
        <div className="title-wrapper">
          <h5>Butuh bantuan? Hubungi kami sekarang</h5>
        </div>
        <div className="list-contact">
          {contactData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.action)}
              className="contact-container"
            >
              <item.icon/>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
      <SwipeableDrawer
        anchor="bottom"
        open={state}
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={classes.callDrawer}
        >
          <List>
            {contactData[1].subItem.map((data, index) => (
               <ListItem button onClick={() => handleClick(data.action)} key={index}>
               <ListItemIcon>
                 <PhoneIcon className="icon"/>
               </ListItemIcon>
               <ListItemText primary={data.title} />
             </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default GeneralContact;
