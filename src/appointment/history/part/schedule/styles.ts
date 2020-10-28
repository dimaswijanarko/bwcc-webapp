import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding :0,
    
    "& .custom-tab-child":{

      "& .MuiTabScrollButton-root":{
        width : 0
      },

      "& .MuiTab-root":{
        minWidth : '20%'
      }
    }

  },
}));
