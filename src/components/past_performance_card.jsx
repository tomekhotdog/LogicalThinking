import React, { Component } from 'react';
import {get_chart_data, get_chart_options} from '../utils/chart_utils'
import '../styles/quiz_result.css'
import RC from 'react-chartjs2';

const buttonStyle = {
  marginLeft: '5px',
  marginRight: '5px',
};

class PastPerformanceCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "chartData": get_chart_data(this.props.chart_data),
      "chartOptions": get_chart_options()
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="left-section">
              this.props.quizName?
          </div>
          <div className="right-section">
              Highscore 34!
          </div>
        </div>

        <div className="main-section">
          <RC
            ref='canvas'
            data={this.state.chartData}
            options={this.state.chartOptions}
            type='line'
            width="600"
            height="150" />;
        </div>

        <div className="action-section">
        </div>
      </div>
    );
  }
}

export default PastPerformanceCard;
