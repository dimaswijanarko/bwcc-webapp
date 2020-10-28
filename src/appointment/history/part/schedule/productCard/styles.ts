import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,

    "& .MuiCardContent-root": {
      padding: 15,
      display: 'flex',
      justifyContent: 'space-between',

      "& img": {
        height: 50,
        width: "auto",
      },

      "& h4, & p": {
        margin: 0,
      },
    },
  },
}));
