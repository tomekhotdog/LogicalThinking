import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

import GraphSelection from './graph_selection';
import {get_quiz_name, get_quiz_seconds} from '../utils/question_info.js'

const SECTION_TITLE = 'Graph Interpretation Practice';

class GraphSection extends Component {

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
          <AppBar title={SECTION_TITLE} />
        </div>
      );
    } else{
      return (
        <div>
          <AppBar title={SECTION_TITLE} />
          <GraphSelection startQuiz={this.startQuiz}/>
        </div>
      );
    }
  }
}

export default GraphSection;
