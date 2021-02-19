/**
 * Redux form actions
 * @module actions/formActions
 */
import { setAlert } from "./alertActions"

/**
 * Updates the title of the generated form
 * @function
 * @param {string} title - Form title.
 */
export const setTitle = (title) => async (dispatch) => {
  dispatch({ type: "UPDATE_TITLE", data: title })
}

/**
 * Adds question to array from the QuestionModule
 * @function
 * @param {Object} question - Question object that includes two strings: question input and answer option.
 */
export const addQuestion = (question) => async (dispatch) => {
  dispatch({ type: "ADD_QUESTION", data: question })
}

/**
 *
 * @function
 * @param {Object} questions
 */
export const setQuestions = (questions) => async (dispatch) => {
  dispatch({ type: "SET_QUESTIONS", data: questions })
}

/**
 * Updates the edited Question input to the array.
 * @function
 * @param {Object} question - Question object that includes two strings: question input and answer option.
 * @param {int} index - Index of the question which was edited.
 */
export const updateQuestion = (question, index) => async (dispatch) => {
  dispatch({ type: "UPDATE_QUESTION", data: { question, index } })
}

/**
 * Sets the description of the form.
 * @function
 * @param {string} description - Description of the form.
 */
export const setDescription = (description) => async (dispatch) => {
  dispatch({ type: "SET_DESCRIPTION", data: description })
}

/**
 * Submits the form to storage.
 * @param {Object} form - Edited Form Object to be submitted.
 * @todo Service call backend.
 */
export const submitForm = (form) => async (dispatch) => {
  if (form.title === "") {
    dispatch(setAlert("Title is required", "error"))
    return
  }
  //ugleeeeeh && karvalakki certified :--DD
  const result = form.questions.forEach((element) => {
    console.log(element)
    if (!element.name || element.name === "") {
      dispatch(setAlert("Questions are required", "error"))
      return "error"
    }
  })
  if (result === "error") return
  if (form.description === "") {
    dispatch(setAlert("Description is required", "error"))
    return
  }
  dispatch({ type: "CLEAR_CURRENT_FORM" })
}
