export function get_high_score(scores) {
  let highscore = 0;
  for (let score in scores) {
    if (scores[score].correct_answers > highscore) {
      highscore = scores[score].correct_answers;
    }
  }

  return highscore;
}

export function get_quiz_result_key(user, quiz_name) {
  return quiz_name + "_" + user.uid
}
