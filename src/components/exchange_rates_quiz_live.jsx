import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

import '../styles/quiz_mode.css'
import {generate_exchange_rate_question} from '../utils/exchange_rate_questions.js'
import {get_quiz_result_key} from '../utils/firebase_utils.js'
import firebase from '../config/firebase.js';

class ExchangeRatesQuizLive extends Component {
  constructor(props) {
    super(props)

    let first_question = generate_exchange_rate_question(this.props.quizId);

    this.setInputState = this.setInputState.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
    this.prepareNextQuestion = this.prepareNextQuestion.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
    this.onSecondPassed = this.onSecondPassed.bind(this);
    this.submitScore = this.submitScore.bind(this);

    var timer = setInterval(this.onSecondPassed, 1000);

    this.state = {
      answer: "",
      question: first_question,
      attempted_answers: 0,
      correct_answers: 0,
      seconds_remaining: this.props.quizSeconds,
      timer: timer,
    }

  }

  _handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    if (this.state.answer === '') return; // No answer submitted.
    // console.log('User answer: ' + this.state.answer);

    this.validateAnswer(this.state.answer, this.state.question_answer);
    this.prepareNextQuestion();

  }
}

  setInputState(event) {
    this.setState({ answer: event.target.value });
  }

  validateAnswer(user_answer, expected_answer) {
    // console.log("Validating Answer")
    if (user_answer.trim() === expected_answer.toString()) {
      //console.log("Correct answer.")
      this.setState({
        correct_answers: this.state.correct_answers + 1});
    } else {
      //console.log("Incorrect answer.")
    }

    this.setState({ attempted_answers: this.state.attempted_answers + 1});
  }

  prepareNextQuestion() {
    // console.log("Preparing next question.")
    let next_question = generate_exchange_rate_question(this.props.quizId)
    this.setState ({
      "answer": "",
      question: next_question
    })
  }

  finishQuiz() {
    console.log("End of quiz.");

    let result = {"correct_answers": this.state.correct_answers,
                  "attempted_answers": this.state.attempted_answers}

    clearInterval(this.state.timer);

    this.submitScore(result);
    this.props.finishQuiz(result);
  }

  onSecondPassed() {
    this.setState({seconds_remaining: this.state.seconds_remaining - 1})

    if (this.state.seconds_remaining <= 0) {
      this.finishQuiz();
    }
  }

  submitScore(result) {
    console.log("QuizLive: SubmitScore.")
    if (!this.props.user) {
      console.log("Not submitting score (User not logged in).")
      return;
    }

    if (result.correct_answers <= 0) {
      console.log("Not submitting score (User score = 0).")
      return;
    }

    let timestamp = moment().format()
    let quiz_score_key = get_quiz_result_key(this.props.user, this.props.quizId)
    const itemsRef = firebase.database().ref(quiz_score_key);
    const item = {
      correct_answers: result.correct_answers,
      attempted_answers: result.attempted_answers,
      timestamp: timestamp.toString(),
    }
    itemsRef.push(item);
  }

  render() {
    return (
      <div className="quiz-container" onKeyPress={this._handleKeyPress}>
        <Card className="main-section-card">
        <div className="header-section">
          <div className="left-section">
              {this.props.quizName}
          </div>
          <div className="right-section">
              Seconds remaining: {this.state.seconds_remaining}
          </div>
        </div>

        <div className="main-section">
          <div className="left-section exchange-rate-question">
              {this.state.question.question}
          </div>
          <div className="right-section border">
            <u>Exchange Rates</u>
            <Table className="exchange-rates-table" selectable={false}>
              <TableHead>
              </TableHead>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableCell>1 GBP = 1.1762 EUR</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 USD = 1.5289 GBP</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="action-section">
          <TextField
            id="user_input"
            value={this.state.answer}
            onChange={this.setInputState}
             />
        </div>
        <Button variant="contained" label="Finish Quiz" onClick={this.finishQuiz}/>
        </Card>
      </div>
    )
  }
}

export default ExchangeRatesQuizLive;
