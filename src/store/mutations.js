export const updateTotalScore = (state, choice) => {
  if (choice.ok) {
    state.totalScore += 1
  }
}

export const reinitializeAll = (state) => {
  state.totalScore = 0
  state.questions.forEach(function (question) {
    question.score = 0
    question.choices.forEach(function (choice) {
      choice.isDone = false
    })
  })
}

export const reinitializeQuestion = (state, {question}) => {
  question.score = 0
  question.choices.forEach(function (choice) {
    choice.isDone = false
  })
}

export const updateIntermediateScore = (state, {choice, question}) => {
  if (!choice.isDone) {
    if (choice.ok) {
      state.totalScore += 1
      question.score += 1
    }
    choice.isDone = true
  }
}
