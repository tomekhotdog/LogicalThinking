import React, { Component } from 'react';
import './App.css';

import HomePage from './components/home_page'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    return (
      <div className="App">
        <HomePage />
      </div>
    )
  }
}

export default App;
