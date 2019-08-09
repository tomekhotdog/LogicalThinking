import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {darkBlack, pink400, pink700} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    textColor: darkBlack,
    primary1Color: pink700,
    primary2Color: pink400,
  },
  appBar: {
    height: 50,
  },
});

const ThemedApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
