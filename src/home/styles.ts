import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    padding: 0,

    "& .wrapper": {
      background: "#fff",
      height: 200,
      padding: 10,
    },
  },
  appointmentSection: {
    padding: "0px 8px",
    margin: "10px auto",

    "& .wrapper": {
      background: theme.palette.primary.main,
      borderRadius: 5,
      padding: 5,

      "& .content": {
        height: 80,
        borderRadius: 5,
        padding: 5,
        border: "1px solid #fff",
        color: "#fff",
      },
    },
  },
  appSection: {
    padding: "0px 8px",
    margin: "10px auto",

    "& .wrapper": {
      display: "grid",
      "grid-template-rows": "initial",
      "grid-template-columns": "repeat(3, 33%)",

      "& .content": {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: '5px 10px',
        margin: '0px 5px',
        background: '#fff',
        borderRadius: 5,
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        cursor: "pointer",

        "& img":{
          height: 40,
          width: 'auto'
        },

        "& h5":{
          margin : 'unset',
          marginTop: 5,
          fontWeight : 'unset'
        }
      },
    },
  },
  newsSection:{
    padding: "0px 8px",
    margin: "10px auto",

    "& .title":{
      display: 'flex',
      'justify-content': 'space-between',

      "& h6":{
        margin : '5px 0'
      }
    },

    "& .wrapper": {
      background: '#fff',
      // height: 160,
      // overflowY: 'scroll',
      paddingTop: 10
    }
  },
  spacer:{
    marginBottom: 100
  }
}));
