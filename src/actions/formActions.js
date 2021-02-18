/**
 * Redux form actions
 * @module actions/formActions
 */

/**
 * @todo Tarvitaan service kutsu backendiin clearille(submitForm)
 * @function
 */
export const setTitle = (title) => async (dispatch) => {
  dispatch({ type: "UPDATE_TITLE", data: title })
}

export const addQuestion = (question) => async (dispatch) => {
  dispatch({ type: "ADD_QUESTION", data: question })
}

export const setQuestions = (questions) => async (dispatch) => {
  dispatch({ type: "SET_QUESTIONS", data: questions })
}

export const updateQuestion = (question, index) => async (dispatch) => {
  dispatch({ type: "UPDATE_QUESTION", data: { question, index } })
}

export const setDescription = (description) => async (dispatch) => {
  dispatch({ type: "SET_DESCRIPTION", data: description })
}

export const submitForm = (form) => async (dispatch) => {
  dispatch({ type: "CLEAR_CURRENT_FORM" })
}
