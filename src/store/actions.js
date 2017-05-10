export const updateScoreAction = ({commit}, {choice, question}) => {
  console.log(choice, question)
  commit('updateIntermediateScore', {choice, question})
  // commit('updateTotalScore', choice)
}

export const reinitializeAllAction = ({commit}) => {
  commit('reinitializeAll')
}

export const reinitializeQuestionAction = ({commit}, {question}) => {
  commit('reinitializeQuestion', {question})
}
