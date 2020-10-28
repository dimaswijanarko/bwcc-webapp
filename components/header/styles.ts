import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",

    "& .toolbar-wrapper": {
      width: "100%",
      "max-width": 480,
      "align-items": "center",
      "justify-items": "flex-start",
      margin: "0 auto",
      display: "grid",
      "grid-template-columns": "40% auto",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    zIndex: 2,

    "&.bwcc-icon":{
      display: 'flex',
      alignItems : 'center',
      
      "& img":{
        height: 35,
        width: 'auto',
        marginRight: 5
      }
    }
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },
}));
