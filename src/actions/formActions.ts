import { fetchFormList } from './formListActions'
/**
 * @module actions/form
 * @desc Redux form actions
 */
import { setAlert } from './alertActions'
import raw from '../forms/lomake1.json'
import { Form, FormQuestion, severity } from '../types/types'
import {
  SET_CURRENT_FORM,
  UPDATE_TITLE,
  SET_DESCRIPTION,
  SET_FILLED,
  SET_COMMON,
  ADD_QUESTION,
  UPDATE_QUESTION,
  UPDATE_QUESTION_OPTION,
  REMOVE_QUESTION,
  REMOVE_OPTION,
  SET_QUESTIONS,
  REMOVE_OPTION_VALUE,
} from '../types/state'
import formServices from '../services/formServices'
import { convertForm } from '../utils/formUtils'
import { addToFormList } from './formListActions'

/**
 * @function
 * @desc Replaces the currentForm with the data imported from file systems
 */
export const importFormByPath = () => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_FORM, data: raw })
}

/**
 * @function
 * @desc Replaces the currentForm with the data imported from file systems
 */
export const getFormById = (id: string) => async (dispatch: any) => {
  const data = await formServices.fetchFormById(id)
  dispatch({ type: SET_CURRENT_FORM, data })
}

/**
 * @function
 * @desc Delete form by Id
 */
export const DeleteFormById = (id: string) => async (dispatch: any) => {
  const data = await formServices.deleteForm(id)
  dispatch(fetchFormList())
  console.log('delete data', data)
}
/**
 * @function
 * @desc Updates the title of the generated form
 * @param {string} title - Form title.
 */
export const setTitle = (title: string) => async (dispatch: any) => {
  dispatch({ type: UPDATE_TITLE, data: title })
}

/**
 * @function
 * @desc Adds question to array from the QuestionModule
 * @param {FormQuestion} question - Question object that includes two strings: question input and answer option.
 */
export const addQuestion = (question: FormQuestion) => async (dispatch: any) => {
  dispatch({ type: ADD_QUESTION, data: question })
}

/**
 * @function
 * @desc Setter for questions.
 * @param {Array<FormQuestion>} questions
 */
export const setQuestions = (questions: Array<FormQuestion>) => async (dispatch: any) => {
  dispatch({ type: SET_QUESTIONS, data: questions })
}

/**
 * @function
 * @desc Updates the edited Question input to the array.
 * @param {FormQuestion} question - Question object that includes two strings: question input and answer option.
 * @param {number} index - Index of the question which was edited.
 */
export const updateQuestion = (question: FormQuestion, index: number) => async (dispatch: any) => {
  dispatch({ type: UPDATE_QUESTION, data: { question, index } })
}

/**
 * @function
 * @desc Updates the questions options array.
 * @param {string} option
 * @param {number} questionIndex
 * @param {number} optionIndex
 */
export const updateQuestionOption =
  (option: string, questionIndex: number, optionIndex: number) => async (dispatch: any) => {
    dispatch({
      type: UPDATE_QUESTION_OPTION,
      data: { option, questionIndex, optionIndex },
    })
  }

/**
 * @function
 * @desc Removes the indicated question from the array.
 * @param {number} index - Index of the question which is to be removed.
 */
export const removeQuestion = (index: number) => async (dispatch: any) => {
  dispatch({ type: REMOVE_QUESTION, data: index })
}

/**
 * @function
 * @desc Removes the indicated option from the array.
 * @param {number} questionIndex - Index of the question which is removed option.
 * @param {number} optionIndex - Index of the option which is to be removed.
 */
export const removeOption =
  (questionIndex: number, optionIndex: number) => async (dispatch: any) => {
    dispatch({ type: REMOVE_OPTION, data: { questionIndex, optionIndex } })
  }

/**
 * @function
 * @desc Removes the indicated option from the array.
 * @param {number} questionIndex - Index of the question which is removed option.
 * @param {number} optionValueIndex - Index of the optionValue which is to be removed.
 */
export const removeOptionValue =
  (questionIndex: number, optionValueIndex: number) => async (dispatch: any) => {
    dispatch({
      type: REMOVE_OPTION_VALUE,
      data: { questionIndex, optionValueIndex },
    })
  }

/**
 * @function
 * @desc Sets the description of the form.
 * @param {string} description - Description of the form.
 */
export const setDescription = (description: string) => async (dispatch: any) => {
  dispatch({ type: SET_DESCRIPTION, data: description })
}

/**
 * @function
 * @desc Sets the filled value of the form.
 * @param {boolean} filled - filled value of the form.
 */
export const setFilled = (filled: boolean) => async (dispatch: any) => {
  dispatch({ type: SET_FILLED, data: filled })
}

/**
 * @function
 * @desc Sets the common value of the form.
 * @param {boolean} common - common value of the form.
 */
export const setCommon = (common: boolean) => async (dispatch: any) => {
  dispatch({ type: SET_COMMON, data: common })
}

/**
 * @function
 * @desc Submits the form to storage.
 * @param {Form} form - Edited Form Object to be submitted.
 * @todo Service call backend.
 */
export const submitForm = (form: Form) => async (dispatch: any) => {
  //console.log("formActions:form ", form);
  if (form.title === '') {
    dispatch(setAlert('Title is required', severity.Error))
    return
  }
  const res = await formServices.postForm(form)

  dispatch(addToFormList(form))
  dispatch(fetchFormList())
  // //ugleeeeeh && karvalakki certified :--DD
  // const result = form.questions.forEach((element: any) => {
  //   if (!element.question || element.question === "") {
  //     dispatch(setAlert("Questions are required", severity.Error))
  //     return null
  //   }
  // })
  // if (result === null) return
  // if (form.description === "") {
  //   dispatch(setAlert("Description is required", severity.Error))
  //   return
  // }
  // dispatch({ type: CLEAR_CURRENT_FORM })
}

/**
 * @function
 * @desc Submits the updated form to storage.
 * @param {Form} form - Edited Form Object to be submitted.
 * @todo Service call backend.
 */
export const updateForm = (formId: any, form: Form) => async (dispatch: any) => {
  if (form.title === '') {
    dispatch(setAlert('Title is required', severity.Error))
    return
  }

  const res = await formServices.updateForm(formId, form)

  const data = await formServices.fetchFormById(formId)
  dispatch({ type: SET_CURRENT_FORM, data })

  dispatch(addToFormList(form))
}
