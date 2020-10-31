import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 8px',

    "& .card":{
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      background: '#fff',
      borderRadius: 5,
      marginBottom: 5,
      padding: 10,

      "& .title-wrapper":{
        "& h5":{
          margin : 'unset',
          fontWeight : 'unset'
        }
      },

      "& .list-contact" :{
        display: 'grid',
        'grid-template-rows': 'initial',
        'grid-template-columns': 'repeat(3, 33%)',

        "& .contact-container":{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          marginTop: 10,
          cursor: 'pointer',
          borderRight: `.5px solid ${theme.palette.primary.main}`,

          "& svg":{
            height: 30,
            width: 'auto',
            color : theme.palette.primary.main
          },

          "& h5":{
            margin : 'unset',
            marginTop: 5,
            fontWeight : 'unset'
          },

          "&:last-child":{
            borderRight: 'unset'
          }
        },
      }
    },
  },
  callDrawer:{
    "& .icon, & .MuiListItemText-primary":{
      color : theme.palette.primary.main
    }
  },
}));
