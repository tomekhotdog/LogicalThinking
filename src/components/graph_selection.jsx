import React, { Component } from 'react';
// import QuizListItem from './quiz_list_item'
import '../styles/quiz.css'

// const exchange_rate_quizes =
//   [{title: 'Easy', id: 'exchange_rate_easy'},
//    {title: 'Medium', id: 'exchange_rate_medium'},
//    {title: 'Hard', id: 'exchange_rate_hard'}];

class GraphSelection extends Component {
  render() {

    // const quiz_items = exchange_rate_quizes.map(quiz => {
    //   return (
    //     <QuizListItem
    //       title={quiz.title}
    //       id={quiz.id}
    //       key={quiz.id}
    //       startQuiz={this.props.startQuiz}
    //     />);
    // });

    return (
      <div>
        <div className="quiz-list-heading">
          Coming soon - sign up for details.
        </div>
      {/*}  <ul className="col-md-4 list-group">
          {quiz_items}
        </ul> */}
      </div>
    );
  }
}

export default GraphSelection;
