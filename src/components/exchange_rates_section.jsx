import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import ExchangeRatesQuizContainer from './exchange_rates_quiz_container';
import ExchangeRatesSelection from './exchange_rates_selection';
import {get_quiz_name, get_quiz_seconds} from '../utils/question_info.js'

class ExchangeRatesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {"quiz_mode": false}

    this.startQuiz = this.startQuiz.bind(this);
    this.startQuizSelection = this.startQuizSelection.bind(this);
  }

  startQuiz(quizId) {
    console.log("Starting Quiz mode (quizIz:" + quizId + ")")
    this.setState({"quiz_mode": true, "quiz_id": quizId})
  }

  startQuizSelection() {
    console.log("Going to exchange rates quiz selection.")
    this.setState({"quiz_mode": false})
  }

  render() {
    if (this.state.quiz_mode) {
      return (
        <div>
          <AppBar title="Exchange Rates Practice" />
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
          <AppBar title="Exchange Rates Practice" />
          <ExchangeRatesSelection startQuiz={this.startQuiz}/>
        </div>
      );
    }
  }
}

export default ExchangeRatesSection;
