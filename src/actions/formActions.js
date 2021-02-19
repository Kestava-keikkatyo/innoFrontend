/**
 * Redux form actions
 * @module actions/formActions
 */
import { setAlert } from "./alertActions"

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
  // Valintarakenne: tarkista onko titlet yms inputit täytetty ja heitä error jos ei.
  if (form.title === "") {
    dispatch(setAlert("Title is required", "error"))
    return
  }
  //ugleeeeeh
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
