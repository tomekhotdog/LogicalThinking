import React, { Component } from 'react';
import QuizList from './quiz_list';

class QuizLists extends Component {
  render() {

    const addition_and_subtraction
      = [{title: 'Easy', id: 'addition_easy'},
         {title: 'Medium', id: 'addition_medium'},
         {title: 'Hard', id: 'addition_hard'},
        ]

    const multiplication_and_division
      = [{title: 'Easy', id: 'multiplication_easy'},
         {title: 'Medium', id: 'multiplication_medium'},
         {title: 'Hard', id: 'multiplication_hard'},
        ]

    const percentages
      = [{title: 'Easy', id: 'percentage_easy'},
         {title: 'Medium', id: 'percentage_medium'},
         {title: 'Hard', id: 'percentage_hard'}
        ]

    return (
      <div>
        <QuizList title="Addition & Subtraction" quizes={addition_and_subtraction} startQuiz={this.props.startQuiz}/>
        <QuizList title="Multiplication & Division" quizes={multiplication_and_division} startQuiz={this.props.startQuiz}/>
        <QuizList title="Percentages" quizes={percentages} startQuiz={this.props.startQuiz}/>
      </div>
    );
  }
}

export default QuizLists;
