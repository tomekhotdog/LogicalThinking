import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import firebase, { auth, provider } from '../config/firebase.js';

import MentalMathsSection from './mental_maths_section';
import ExchangeRatesSection from './exchange_rates_section';
import GraphSection from './graph_section';
import ProfilePic from './profile_pic'
import '../styles/home_page.css'

const HOME = 1;
const MENTAL_MATHS = 2;
const EXCHANGE_RATES = 3;
const GRAPH_SECTION = 4;

const style = {
  margin: 12,
  width: '250px',
};

const styleGrow = {
  flexGrow: 1
}

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {"section_selected": HOME, user: null};

    this.showHomePage = this.showHomePage.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    console.log("Auto login.")
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      console.log(user);
    });
  }

  showHomePage() {
    this.setState({"section_selected": HOME})
  }

  login() {
    console.log("Login.")
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
      this.setState({ user });
    });
  }

  logout() {
    console.log("Logout.")
      auth.signOut()
     .then(() => {
       this.setState({ user: null });
     });
  }

  render() {

    switch (this.state.section_selected) {
      case MENTAL_MATHS:
        return (
          <div>
            <MentalMathsSection user={this.state.user}/>
          </div>);
      case EXCHANGE_RATES:
        return(
          <div>
            <ExchangeRatesSection user={this.state.user}/>
          </div>);
      case GRAPH_SECTION:
        return (
          <div>
            <GraphSection user={this.state.user}/>
          </div>
          );
      default:
        return (
          <div>
            <AppBar
              position="static"
              title="Logical Thinking"
              iconElementRight={this.state.user ?
                ProfilePic(this.state.user.photoURL): null}>

              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5">Logical Thinking</Typography>
                <div style={styleGrow} />
                <Button color="inherit">Login</Button>
                (User icon)
              </Toolbar>

            </AppBar>

            <div className="header-section">
              <h5>Info about the sections available.</h5>
            </div>

            <div className="selection-section">
              <Button
                variant="contained"
                color="secondary"
                style={style}
                onClick={() => this.setState({"section_selected": MENTAL_MATHS})}>
                Mental Maths Practice
              </Button>
            </div>

            <div className="selection-section">
              <Button
                variant="contained"
                color="secondary"
                style={style}
                onClick={() => this.setState({"section_selected": EXCHANGE_RATES})}>
                Exchange Rates Practice
              </Button>
            </div>

            <div className="selection-section">
              <Button
                variant="contained"
                color="secondary"
                style={style}
                onClick={() => this.setState({"section_selected": GRAPH_SECTION})}>
                Graph Based Practice
              </Button>
            </div>

            <div className="login-section">
              {this.state.user ?
                <Button variant="contained" onClick={this.logout}>Log out</Button> :
                <Button variant="contained" onClick={this.login}>Log in</Button>
              }
            </div>

          </div>
        )
    }
  }
}

export default HomePage;
