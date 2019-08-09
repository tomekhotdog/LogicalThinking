import moment from 'moment';

// Returns data points and labels from firebase for chartjs objects
export function get_chart_data_points(scores) {
  let data_points = []
  let data_labels = []
  for (let score in scores) {
    const data_point = scores[score].correct_answers;
    const data_point_date = new moment(scores[score].timestamp)

    //TODO: exact moment formats:
    //https://momentjs.com/docs/#/displaying/
    const data_label = data_point_date.format('lll');

    //TODO: transform timestamp string to moment?

    data_points.push(data_point);
    data_labels.push(data_label);
  }

  return {'data_points': data_points,
          'data_labels': data_labels}
}

export function get_chart_data(data_points) {
  const data = data_points.data_points;
  // const data = [{t: new moment(), y: 1},
  //               {t: new moment(), y: 5},
  //               {t: new moment(), y: 15},
  //               {t: new moment(), y: 10},
  //               {t: new moment(), y: 35}
  //             ]
  const labels = data_points.data_labels;

  const chart_data = {
          labels: labels,
          datasets: [{
              label: 'Score',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }

    return chart_data;
}

export function get_chart_options() {
  return {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
}
