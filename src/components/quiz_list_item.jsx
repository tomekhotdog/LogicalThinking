import React, { Component } from 'react';
import '../styles/quiz.css'

class QuizListItem extends Component {
  render() {
    return (
      <div>
        <li className="list-group-item"
            onClick={() => this.props.startQuiz(this.props.id)}>

          {this.props.title}

        </li>
      </div>
    )
  }
}

export default QuizListItem;
