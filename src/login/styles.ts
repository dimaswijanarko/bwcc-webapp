import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  wrapper: {
    background: '#fff',
    height : '100vh',
    position: 'relative'
  },
  container: {
    position: 'absolute',
    top: '15%',
    left : 0,
    right : 0,
    margin: '0 auto',
    padding: 20,

    "& .MuiBox-root": {
      margin: '20px auto'
    },

    "& .error-message": {
      color: '#f44336',
      margin: 0,
      marginTop: 3
    }
  },
  imgWrapper:{
    textAlign: 'center',
    '& img':{
      height: 175,
      width: 'auto'
    }
  },
  btnWrapper:{
    textAlign: 'center',

    "& button": {
      width: '50%'
    },
  },
}));