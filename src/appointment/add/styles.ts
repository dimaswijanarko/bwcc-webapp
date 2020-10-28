import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    marginBottom: 80,

    "& .hero-banner": {
      backgroundImage: `url("/images/material_bg.png")`,
      backgroundSize: "cover",
      height: 175,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& h5": {
        color: "#fff",
        fontSize: "1.5rem",
        textShadow: "2px 2px #110000",
      },
    },

    "& .list-product": {
      marginTop: 20,
      padding: "0 8px",

      "& .list-card": {
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        background: "#fff",
        height: 100,
        borderRadius: 5,
        marginBottom: 15,
        cursor: 'pointer',

        "& img": {
          height: 56,
          width: "auto",
        },

        "&:hover": {
          background: theme.palette.primary.light,

          "& .MuiListItemText-root > *": {
            color: "#fff",
          },
        },
      },
    },
  },
}));
