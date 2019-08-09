import React, { Component } from 'react';
import QuizIntro from './quiz_intro';
import QuizLive from './quiz_live';
import QuizResult from './quiz_result';
import '../styles/quiz_mode.css'

class QuizModeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {"quiz_phase": "intro"}
    this.setQuizPhase = this.setQuizPhase.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
  }

  setQuizPhase(phase) {
    this.setState({"quiz_phase": phase})
  }

  finishQuiz(result) {
    //let correct_answers = result.correct_answers;
    //let attempted_answers = result.attempted_answers;

    this.setState({"result": result, "quiz_phase": "result"})
  }

  render() {

    if (this.state.quiz_phase === "intro") {
      return (
        <QuizIntro
          setQuizPhase={this.setQuizPhase}
          quizName={this.props.quizName}
          quizId={this.props.quizId}
          quizSeconds={this.props.quizSeconds}/>
      )
    }
    else if (this.state.quiz_phase === "quiz") {
      return (
        <QuizLive
          quizName={this.props.quizName}
          quizId={this.props.quizId}
          quizSeconds={this.props.quizSeconds}
          setQuizPhase={this.setQuizPhase}
          finishQuiz={this.finishQuiz}
          user={this.props.user}
        />
      )
    } else if (this.state.quiz_phase === "result") {
      return (
        <QuizResult
          quizName={this.props.quizName}
          quizId={this.props.quizId}
          startMainMenu={this.props.startMainMenu}
          setQuizPhase={this.setQuizPhase}
          result={this.state.result}
          user={this.props.user}
          />
      )
    } else {
      return (<div>Nothing here.</div>)
    }
  }
}

export default QuizModeContainer;
