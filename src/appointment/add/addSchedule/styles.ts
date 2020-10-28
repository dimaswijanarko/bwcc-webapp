import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,

    '& .container':{
      marginTop: 80,
      padding : 20,
      background : '#fff',
      borderRadius : 5
    }
  },
}));
