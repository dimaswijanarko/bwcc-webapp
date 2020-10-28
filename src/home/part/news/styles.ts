import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 8px',

    "& .list-card":{
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      background: '#fff',
      borderRadius: 5,
      marginBottom: 5,

      "& img": {
        height: 56,
        width: "auto",
        marginRight : 10
      },

      "& .MuiListItemText-root":{
        "& .MuiListItemText-primary ":{
          width: 200,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }
      }
    }
  },
}));
