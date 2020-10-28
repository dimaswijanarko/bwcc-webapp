import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,
    padding: "0 8px",

    "& .wrapper": {
      background: "#fff",
      height: 200,
      padding: 10,

      "& .container": {
        background: theme.palette.primary.main,
        borderRadius: 10,
        height: 180,
        textAlign: "center",

        "& img": {
          marginTop: "5%",
        },

        "& h4, & h5": {
          margin: "unset",
          fontWeight: "unset",
          color: '#fff'
        },
      },
    },
  },
  patientSection:{
    margin: '10px auto',
    padding: "0 8px",

    "& .wrapper": {
      background: "#fff",
      padding: "0 8px",
      height: 80
    }
  },
  btnWrapper: {
    padding: "0 8px",
    margin: "10px auto",
  },
}));
