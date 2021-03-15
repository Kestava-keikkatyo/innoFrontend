/**
 * Redux form actions
 * @module actions/formActions
 */
import { setAlert } from "./alertActions"
import raw from "../forms/lomake1.json"
import { Form, FormQuestion, severity } from "../types/types"
import {
  SET_CURRENT_FORM,
  UPDATE_TITLE,
  SET_DESCRIPTION,
  ADD_QUESTION,
  UPDATE_QUESTION,
  UPDATE_QUESTION_OPTION,
  REMOVE_QUESTION,
  REMOVE_OPTION,
  SET_QUESTIONS,
  CLEAR_CURRENT_FORM,
} from "../types/state"

/**
 * Replaces the currentForm with the data imported from file systems
 * @function
 * @param {string} title - Form title.
 * @todo add validation
 */
export const importForm = (file: any) => async (dispatch: any) => {
  let fr = new FileReader()
  fr.onloadend = (e) => {
    const data = typeof fr.result === "string" ? JSON.parse(fr.result) : {}
    dispatch({ type: SET_CURRENT_FORM, data })
  }
  fr.readAsText(file)
}

export const importFormByPath = (path: any) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_FORM, data: raw })
}

/**
 * Updates the title of the generated form
 * @function
 * @param {string} title - Form title.
 */
export const setTitle = (title: string) => async (dispatch: any) => {
  dispatch({ type: UPDATE_TITLE, data: title })
}

/**
 * Adds question to array from the QuestionModule
 * @function
 * @param {FormQuestion} question - Question object that includes two strings: question input and answer option.
 */
export const addQuestion = (question: FormQuestion) => async (
  dispatch: any
) => {
  dispatch({ type: ADD_QUESTION, data: question })
}

/**
 *
 * @function
 * @param {Array<FormQuestion>} questions
 */
export const setQuestions = (questions: Array<FormQuestion>) => async (
  dispatch: any
) => {
  dispatch({ type: SET_QUESTIONS, data: questions })
}

/**
 * Updates the edited Question input to the array.
 * @function
 * @param {FormQuestion} question - Question object that includes two strings: question input and answer option.
 * @param {number} index - Index of the question which was edited.
 */
export const updateQuestion = (question: FormQuestion, index: number) => async (
  dispatch: any
) => {
  dispatch({ type: UPDATE_QUESTION, data: { question, index } })
}

export const updateQuestionOption = (
  option: any,
  questionIndex: number,
  optionIndex: number
) => async (dispatch: any) => {
  console.log(option, questionIndex, optionIndex)
  dispatch({
    type: UPDATE_QUESTION_OPTION,
    data: { option, questionIndex, optionIndex },
  })
}

/**
 * Removes the indicated question from the array.
 * @function
 * @param {number} index - Index of the question which is to be removed.
 */
export const removeQuestion = (index: number) => async (dispatch: any) => {
  dispatch({ type: REMOVE_QUESTION, data: index })
}

/**
 * Removes the indicated option from the array.
 * @function
 * @param {number} questionIndex - Index of the question which is removed option.
 * @param {number} optionIndex - Index of the option which is to be removed.
 */
export const removeOption = (
  questionIndex: number,
  optionIndex: number
) => async (dispatch: any) => {
  dispatch({ type: REMOVE_OPTION, data: { questionIndex, optionIndex } })
}

/**
 * Sets the description of the form.
 * @function
 * @param {string} description - Description of the form.
 */
export const setDescription = (description: string) => async (
  dispatch: any
) => {
  dispatch({ type: SET_DESCRIPTION, data: description })
}

/**
 * Submits the form to storage.
 * @param {Form} form - Edited Form Object to be submitted.
 * @todo Service call backend.
 */
export const submitForm = (form: Form) => async (dispatch: any) => {
  if (form.title === "") {
    dispatch(setAlert("Title is required", severity.Error))
    return
  }
  //ugleeeeeh && karvalakki certified :--DD
  const result = form.questions.forEach((element) => {
    if (!element.question || element.question === "") {
      dispatch(setAlert("Questions are required", severity.Error))
      return null
    }
  })
  if (result === null) return
  if (form.description === "") {
    dispatch(setAlert("Description is required", severity.Error))
    return
  }
  dispatch({ type: CLEAR_CURRENT_FORM })
}
