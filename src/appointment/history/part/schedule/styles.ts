import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding :0,
    
    "& .custom-tab-child":{
      position : 'sticky',
      left : 0,
      right : 0,
      top:105,
      zIndex : 2,
      background: '#fff',

      "& .MuiTabScrollButton-root":{
        //width : 0,
        display : 'none'
      },

      "& .MuiTab-root":{
        minWidth : '20%',
        maxWidth: 'unset',
      }
    }

  },
}));
