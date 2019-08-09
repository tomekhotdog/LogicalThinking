import React, { Component } from 'react';
import QuizLists from './quiz_lists'

class QuizContainer extends Component {
  render() {
    return (
      <div>
        <QuizLists startQuiz={this.props.startQuiz}/>
      </div>);
  }
}

export default QuizContainer;
