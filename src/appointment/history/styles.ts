import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,
    marginBottom: 80,
    padding: '0 8px',

    "& .custom-tab":{
      background: theme.palette.primary.main,
      color : '#fff',

      "& .MuiTabs-indicator":{
        background : '#fff',
        bottom : 2
      },

      "& .MuiTabScrollButton-root":{
        width : 0
      },

      "& .MuiTab-root":{
        minWidth : '50%'
      }
    }

  },
}));
