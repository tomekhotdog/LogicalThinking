const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

export default function generate_question(quizId) {
  switch(quizId) {
    case "addition_easy":
      return addition_question(EASY)
    case "addition_medium":
      return addition_question(MEDIUM)
    case "addition_hard":
      return addition_question(HARD)
      case "multiplication_easy":
        return multiplication_question(EASY)
      case "multiplication_medium":
        return multiplication_question(MEDIUM)
      case "multiplication_hard":
        return multiplication_question(HARD)
      case "percentage_easy":
        return percentage_question(EASY);
      case "percentage_medium":
        return percentage_question(MEDIUM);
      case "percentage_hard":
        return percentage_question(HARD);
    default:
      return addition_question(EASY);
  }
}

function addition_question(difficulty) {
  switch (difficulty) {
    case EASY:
      let operand1 = get_number_between(1, 10);
      let operand2 = get_number_between(1, 10);
      let question = operand1.toString() + ' + ' + operand2.toString();
      let answer = operand1 + operand2;
      return get_question_object(question, answer)

    case MEDIUM:
      operand1 = get_number_between(1, 30);
      operand2 = get_number_between(1, 30);
      question = operand1.toString() + ' + ' + operand2.toString();
      answer = operand1 + operand2;
      return get_question_object(question, answer)

    default:
      operand1 = get_number_between(1, 100);
      operand2 = get_number_between(1, 100);
      question = operand1.toString() + ' + ' + operand2.toString();
      answer = operand1 + operand2;
      return get_question_object(question, answer)
  }
}

function multiplication_question(difficulty) {
  switch (difficulty) {
    case EASY:
      let operand1 = get_number_between(1, 10);
      let operand2 = get_number_between(1, 10);
      let question = operand1.toString() + ' x ' + operand2.toString();
      let answer = operand1 * operand2;
      return get_question_object(question, answer)

    case MEDIUM:
      operand1 = get_number_between(1, 14);
      operand2 = get_number_between(1, 14);
      question = operand1.toString() + ' x ' + operand2.toString();
      answer = operand1 * operand2;
      return get_question_object(question, answer)

    default:
      operand1 = get_number_between(1, 20);
      operand2 = get_number_between(1, 20);
      question = operand1.toString() + ' x ' + operand2.toString();
      answer = operand1 * operand2;
      return get_question_object(question, answer)
  }
}

function percentage_question(difficulty) {
  let percentage_operand = 0;
  let value_operand = 0;

  switch (difficulty) {
    case EASY:
      percentage_operand = get_number_between(1, 9) * 10;
      value_operand = get_number_between(1, 10) * (Math.pow(10, get_number_between(1, 2)))
      break;
    case MEDIUM:
      percentage_operand = get_number_between(1, 9) * 10;
      value_operand = get_number_between(1, 20) * (Math.pow(10, get_number_between(1, 3)))
      break;
    default:
      percentage_operand = get_number_between(1, 19) * 5;
      value_operand = get_number_between(1, 20) * (Math.pow(10, get_number_between(1, 3)))
      break;
  }

  const question = "What is " + percentage_operand.toString() + "% of " + value_operand.toString();
  const answer = Math.round(percentage_operand / 100.0 * value_operand)

  return get_question_object(question, answer);
}

function get_question_object(question, answer) {
  return {"question": question,
          "answer": answer};
}

function get_number_between(low, high) {
  let range = high - low;
  let random_offset = Math.floor(Math.random() * range);
  return low + random_offset;
}
