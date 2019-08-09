/* global gapi */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import firebase, { auth, provider } from '../config/firebase.js';

import MentalMathsSection from './mental_maths_section';
import ExchangeRatesSection from './exchange_rates_section';
import ProfilePic from './profile_pic'
import '../styles/home_page.css'

const HOME = 1;
const MENTAL_MATHS = 2;
const EXCHANGE_RATES = 3;

const style = {
  margin: 12,
  width: '250px',
};

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
      default:
        return (
          <div>
            <AppBar
              title="Logical Thinking"
              iconElementRight={this.state.user ?
                ProfilePic(this.state.user.photoURL): null}/>

            <div className="header-section">
              <h5>Info about the sections available.</h5>
            </div>

            <div className="selection-section">
              <RaisedButton
                label="Mental Maths Practice"
                secondary={true}
                style={style}
                onClick={() => this.setState({"section_selected": MENTAL_MATHS})}/>
            </div>

            <div className="selection-section">
              <RaisedButton
                label="Graph Based Practice"
                secondary={true}
                style={style}
                onClick={() => this.showHomePage()}/>
            </div>

            <div className="selection-section">
              <RaisedButton
                label="Exchange Rates Practice"
                secondary={true}
                style={style}
                onClick={() => this.setState({"section_selected": EXCHANGE_RATES})}/>
            </div>

            <div className="login-section">
              {this.state.user ?
                <RaisedButton label="Log out" onClick={this.logout}/> :
                <RaisedButton label="Log in" onClick={this.login}/>
              }
            </div>

          </div>
        )
    }
  }
}

export default HomePage;
