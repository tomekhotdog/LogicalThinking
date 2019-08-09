
export function generate_exchange_rate_question(quizId) {
  switch(quizId) {
    case "exchange_rate_easy":
      return generate_easy_question();
    case "exchange_rate_medium":
      return generate_medium_question();
    case "exchange_rate_hard":
      return generate_hard_question();
    default:
      return {}
  }
}

function generate_easy_question() {
  const currency_1 = "GBP";
  const currency_2 = "EUR";
  const currency_3 = "USD";

  const currency_1_to_2_value = 1.1752;
  const currency_2_to_3_value = 1.5289;

  const question = "How many " +
   get_currency_friendly_name(currency_1) +
   "s could you exchange for one " +
   get_currency_friendly_name(currency_2) + "?"
   
  const answer = 1 / 1.1752;
  const answer_delta = 0.00006;

  return {
    "currency_1": currency_1,
    "currency_2": currency_2,
    "currency_3": currency_3,
    "currency_1_to_2_value": currency_1_to_2_value,
    "currency_2_to_3_value": currency_2_to_3_value,
    "question": question,
    "answer": answer,
    "answer_delta": answer_delta
  }
}

function generate_medium_question() {
  return {}
}

function generate_hard_question() {
  return {}
}

function get_currency_friendly_name(currency) {
  switch(currency) {
    case "GBP":
      return "pound"
    case "EUR":
      return "euro"
    case "USD":
      return "dollar"
  }
}
