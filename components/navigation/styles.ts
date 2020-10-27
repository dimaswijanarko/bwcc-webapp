import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    background: "#fff",

    "& .tab-wrapper": {
      maxWidth: 480,
      margin: "0 auto",
      
      "& .MuiTab-root":{
          minWidth: 0,
          minHeight: 56,
          padding: 6,

        "&.Mui-selected":{
            "& svg":{
                fill: `${theme.palette.primary.main} !important`
            }
        },

        "& svg":{
            fill: '#fff',
            stroke: theme.palette.primary.main
        }  
      },
        
      "& .MuiTab-wrapper":{
          fontSize: 8
      },


    },

    "& .add-btn-tab":{
        "& svg":{
           fill: `${theme.palette.primary.main} !important`,
           fontSize: '4rem'
        }
    }
  },
}));
