import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

import '../styles/quiz_mode.css'

const style = {
  margin: 12,
  width: '150px',
};

class QuizIntro extends Component {

  render() {
    return (
      <div className="quiz-container">
        <Card className="main-section-card">
          <div className="header-section">
            <div className="left-section">
                {this.props.quizName}
            </div>
            <div className="right-section">
                Quiz time: {this.props.quizSeconds} seconds
            </div>
          </div>

          <div className="main-section">
            <Button
              variant="contained"
              label="Start"
              primary={true}
              style={style}
              onClick={() => this.props.setQuizPhase("quiz")}
            />
          </div>

          <div className="action-section">
            <TextField id="user_input"/>
          </div>
        </Card>
      </div>
    )
  }
}

export default QuizIntro;
