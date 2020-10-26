import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#00796b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f6f9ff',
    },
  },
});

export default theme;
