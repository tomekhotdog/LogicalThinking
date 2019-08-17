
import { muiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

const PRIMARY = pink[700]
const SECONDARY = pink[400]

export default createMuiTheme({
  palette: {
    primary: pink,
    secondary: pink,
  },
  appBar: {
    height: 50,
  },
});