/**
 * Redux form actions
 * @module actions/formActions
 */
import { setAlert } from "./alertActions"

/**
 * Replaces the currentForm with the data imported from file systems
 * @function
 * @param {string} title - Form title.
 * @todo add validation
 */
export const importForm = (file) => async (dispatch) => {
  let fr = new FileReader()
  fr.onloadend = e => {
    const data = JSON.parse(fr.result)
    dispatch({ type: "SET_CURRENT_FORM", data })
  }
  fr.readAsText(file)
}

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

export const updateQuestionOption = ( option, questionIndex, optionIndex ) => async (dispatch) => {
  console.log(option, questionIndex, optionIndex);
  dispatch({ type: "UPDATE_QUESTION_OPTION", data: { option, questionIndex, optionIndex } })
}

/**
 * Removes the indicated question from the array.
 * @function
 * @param {int} index - Index of the question which is to be removed.
 */
export const removeQuestion = (index) => async (dispatch) => {
  dispatch({ type: "REMOVE_QUESTION", data: index })
}

/**
 * Removes the indicated option from the array.
 * @function
 * @param {int} questionIndex - Index of the question which is removed option.
 * @param {int} optionIndex - Index of the option which is to be removed.
 */
export const removeOption = (questionIndex, optionIndex) => async (dispatch) => {
  dispatch({ type: "REMOVE_OPTION", data: {questionIndex, optionIndex} })
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
