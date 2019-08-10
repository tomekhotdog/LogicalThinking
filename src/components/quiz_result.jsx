import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

import firebase from '../config/firebase.js';
import {get_chart_data_points} from '../utils/chart_utils.js'
import {get_high_score, get_quiz_result_key} from '../utils/firebase_utils.js'

import PastPerformanceCard from './past_performance_card'
import '../styles/quiz_mode.css'

const buttonStyle = {
  marginLeft: '5px',
  marginRight: '5px',
};

class QuizResult extends Component {
  constructor(props) {
    super(props)

    this.getAccuracy = this.getAccuracy.bind(this);


    let correct_answers = this.props.result.correct_answers;
    let attempted_answers = this.props.result.attempted_answers;
    let incorrect_answers = attempted_answers - correct_answers;

    let accuracy = this.getAccuracy(correct_answers, attempted_answers);

    this.state = {"correct_answers": correct_answers,
                  "incorrect_answers": incorrect_answers,
                  "attempted_answers": attempted_answers,
                  "accuracy": accuracy}

  }

  componentDidMount() {
    this.getUserHighscore();
  }

  getAccuracy(correct_answers, attempted_answers) {
    if (correct_answers > 0 && correct_answers === attempted_answers) {
      return "100"
    } else if (correct_answers <= 0) {
      return "0"
    } else {
      return (correct_answers / attempted_answers * 100).toPrecision(2);
    }
  }

  getUserHighscore() {
    if (!this.props.user) {
      console.log("Cannot get user highscore (user not logged in).")
    }

    let quiz_score_key = get_quiz_result_key(this.props.user, this.props.quizId)
    const itemsRef = firebase.database().ref(quiz_score_key);
     itemsRef.on('value', (snapshot) => {
       console.log("Received items from firebase (quiz_scores)");

       let all_scores = snapshot.val();

       let chart_data = get_chart_data_points(all_scores);
       let data_points = chart_data.data_points;
       let data_labels = chart_data.data_labels;

       let highscore = get_high_score(all_scores);
       console.log('Highscore = ' + highscore);

       this.setState({all_scores, chart_data});
     });
  }

  render() {
    return (
      <div className="quiz-container">
        <Card className="main-section-card">
          <div className="header-section">
            <div className="left-section">
                {this.props.quizName}
            </div>
            <div className="right-section">
                Completed!
            </div>
          </div>

          <div className="main-section">
            <Table className="results-table" selectable={false}>
              <TableHead>
              </TableHead>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableCell>Correct answers</TableCell>
                  <TableCell>{this.state.correct_answers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Incorrect answers</TableCell>
                  <TableCell>{this.state.incorrect_answers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Accuracy</TableCell>
                  <TableCell>{this.state.accuracy}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </div>

          <div className="action-section">
            <Button
              variant="contained"
              style={buttonStyle}
              label="Main Menu"
              primary={true}
              onClick={() => this.props.startMainMenu()}/>

            <Button
              variant="contained"
              style={buttonStyle}
              label="Try Again"
              primary={true}
              onClick={() => this.props.setQuizPhase("intro")}/>
          </div>
        </Card>

        {this.state.chart_data ?
          <Card className="main-section-card">
            <PastPerformanceCard chart_data={this.state.chart_data}/>
          </Card>
          : null}
          
      </div>
    )
  }
}

export default QuizResult;
