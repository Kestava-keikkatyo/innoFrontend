/**
 * Redux breadcrumb actions
 * @module actions/breadcrumbActions
 */

/**
 * Sets breadcrumb that is shown inside a {@link https://material-ui.com/components/breadcrumb/|MUI breadcrumb component}
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
  console.log(description)
  dispatch({ type: "SET_DESCRIPTION", data: description })
}
