import React, { Component } from 'react';
import QuizListItem from './quiz_list_item'
import '../styles/quiz.css'

class QuizList extends Component {

  render() {
    if (!this.props.quizes) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    const list_items = this.props.quizes.map((quiz) => {
      return (
        <QuizListItem
          title={quiz.title}
          id={quiz.id}
          key={quiz.id}
          startQuiz={this.props.startQuiz}
        />)
    });

    return (
      <div>
        <div className="quiz-list-heading">
          {this.props.title}
        </div>
        <div className="quiz-list-container">
          <ul className="list-group">
            {list_items}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
