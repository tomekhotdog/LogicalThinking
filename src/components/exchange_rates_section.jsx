import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Icon } from '@material-ui/core';

import ExchangeRatesQuizContainer from './exchange_rates_quiz_container';
import ExchangeRatesSelection from './exchange_rates_selection';
import {get_quiz_name, get_quiz_seconds} from '../utils/question_info.js'
import ProfilePic from './profile_pic'

class ExchangeRatesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {"quiz_mode": false}

    this.startQuiz = this.startQuiz.bind(this);
    this.startQuizSelection = this.startQuizSelection.bind(this);
    this.getAppBar = this.getAppBar.bind(this);
  }

  startQuiz(quizId) {
    console.log("Starting Quiz mode (quizIz:" + quizId + ")")
    this.setState({"quiz_mode": true, "quiz_id": quizId})
  }

  startQuizSelection() {
    console.log("Going to exchange rates quiz selection.")
    this.setState({"quiz_mode": false})
  }

  getAppBar() {
    return (
      <AppBar
        position="static"
        iconElementRight={this.state.user ?
          ProfilePic(this.state.user.photoURL): null}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={this.props.showHomePage}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5">Exchange Rates Practice</Typography>
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    if (this.state.quiz_mode) {
      return (
        <div>
          {this.getAppBar()}
          <ExchangeRatesQuizContainer
            quizId={this.state.quiz_id}
            quizName={get_quiz_name(this.state.quiz_id)}
            quizSeconds={get_quiz_seconds(this.state.quiz_id)}
            startQuizSelection={this.startQuizSelection}
            user={this.props.user} />
        </div>
      );
    } else{
      return (
        <div>
          {this.getAppBar()}
          <AppBar title="Exchange Rates Practice" />
          <ExchangeRatesSelection startQuiz={this.startQuiz}/>
        </div>
      );
    }
  }
}

export default ExchangeRatesSection;
