import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Icon } from '@material-ui/core';

import QuizContainer from './quiz_container'
import QuizModeContainer from './quiz_mode_container'
import {get_quiz_name, get_quiz_seconds} from '../utils/question_info.js'
import ProfilePic from './profile_pic'

class MentalMathsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {"quiz_mode": false, "quiz_id": "addition_easy"};
    this.startQuiz = this.startQuiz.bind(this);
    this.startMainMenu = this.startMainMenu.bind(this);
    this.getAppBar = this.getAppBar.bind(this);
  }

  startQuiz(quizId) {
    console.log("Starting Quiz mode (quizIz:" + quizId + ")")
    this.setState({"quiz_mode": true, "quiz_id": quizId})
  }

  startMainMenu() {
    console.log("Going to MainMenu.")
    this.setState({"quiz_mode": false})
  }

  getAppBar() {
    return (
        <AppBar
          position="static"
          title="Logical Thinking"
          iconElementRight={this.state.user ?
            ProfilePic(this.state.user.photoURL): null}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back" onClick={this.props.showHomePage}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h5">Mental Maths Practice</Typography>
          </Toolbar>
        </AppBar>
      );
  }

  render() {

    if (this.state.quiz_mode) {
      return (
        <div>
          {this.getAppBar()}
          <QuizModeContainer
            quizId={this.state.quiz_id}
            quizName={get_quiz_name(this.state.quiz_id)}
            quizSeconds={get_quiz_seconds(this.state.quiz_id)}
            startMainMenu={this.startMainMenu}
            user={this.props.user}/>
        </div>
      )
    }

    return (
      <div className="App">
        {this.getAppBar()}
        <QuizContainer startQuiz={this.startQuiz}/>
      </div>
    );
  }
}

export default MentalMathsSection;
