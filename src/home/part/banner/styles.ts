import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .custom-slider": {
      "& .CarouselItem": {
        height: 160,

        "& img": {
          height: 160,
          width: "100%",
          borderRadius: 8,
        }
      },
      "& .custom-indicator":{
        color : theme.palette.primary.main,
        width: '0.75em'
      }
    },
  },
}));
