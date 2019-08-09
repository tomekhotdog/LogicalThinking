export function get_quiz_name(quizId) {
  switch(quizId) {
    case 'addition_easy':
      return 'Addition (easy)'
    case 'addition_medium':
      return 'Addition (medium)'
    case 'addition_hard':
      return 'Addition (hard)'
    case 'multiplication_easy':
      return 'Multiplication (easy)'
    case 'multiplication_medium':
      return 'Multiplication (medium)'
    case 'multiplication_hard':
      return 'Multiplication (hard)'
    case 'percentage_easy':
      return 'Percentages (easy)'
    case 'percentage_medium':
      return 'Percentages (medium)'
    case 'percentage_hard':
      return 'Percentages (hard)'
    case 'exchange_rate_easy':
      return "Exchange Rates (easy)";
    case 'exchange_rate_medium':
      return "Exchange Rates (medium)";
    case 'exchange_rate_hard':
      return "Exchange Rates (hard)";
    default:
      return "UNKNOWN QUIZ NAME";
  }
}

const ADDITION_TIME = 20;
const MULTIPLICATION_TIME = 30;
const PERCENTAGE_TIME = 30;
const EXCHANGE_RATE_TIME = 100;

export function get_quiz_seconds(quizId) {
  switch(quizId) {
    case 'addition_easy':
    case 'addition_medium':
    case 'addition_hard':
      return ADDITION_TIME;
    case 'multiplication_easy':
    case 'multiplication_medium':
    case 'multiplication_hard':
      return MULTIPLICATION_TIME;
    case 'percentage_easy':
    case 'percentage_medium':
    case 'percentage_hard':
      return PERCENTAGE_TIME;
    case 'exchange_rate_easy':
    case 'exchange_rate_medium':
    case 'exchange_rate_hard':
      return EXCHANGE_RATE_TIME;
    default:
      return 60;
  }
}