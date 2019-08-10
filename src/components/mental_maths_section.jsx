import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

import QuizContainer from './quiz_container'
import QuizModeContainer from './quiz_mode_container'
import {get_quiz_name, get_quiz_seconds} from '../utils/question_info.js'

class MentalMathsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {"quiz_mode": false, "quiz_id": "addition_easy"};
    this.startQuiz = this.startQuiz.bind(this);
    this.startMainMenu = this.startMainMenu.bind(this);
  }

  startQuiz(quizId) {
    console.log("Starting Quiz mode (quizIz:" + quizId + ")")
    this.setState({"quiz_mode": true, "quiz_id": quizId})
  }

  startMainMenu() {
    console.log("Going to MainMenu.")
    this.setState({"quiz_mode": false})
  }

  render() {

    if (this.state.quiz_mode) {
      return (
        <div>
          <AppBar title="Mental Maths Practice"/>
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
        <AppBar title="Mental Maths Practice"/>
        <QuizContainer startQuiz={this.startQuiz}/>
      </div>
    );
  }
}

export default MentalMathsSection;
