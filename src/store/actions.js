export const initMaxScoresAction = ({commit}) => {
  commit('initMaxScores')
}

export const updateScoreAction = ({commit}, {choice, question}) => {
  commit('updateIntermediateScore', {choice, question})
  // commit('updateTotalScore', choice)
}

export const reinitializeAllAction = ({commit}) => {
  commit('reinitializeAll')
}

export const reinitializeQuestionAction = ({commit}, {question}) => {
  commit('reinitializeQuestion', {question})
}
