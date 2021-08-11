/**
 * @module actions/businessContractForm
 * @desc Redux businessContractForm actions
 */
import { setAlert } from "./alertActions"
import raw from "../forms/lomake1.json"
import { BusinessContractForm, BusinessContractFormQuestion, FormQuestion, severity } from "../types/types"
import {
  SET_CURRENT_BUSINESS_CONTRACT_FORM,
  UPDATE_BUSINESS_CONTRACT_TITLE,
  UPDATE_BUSINESS_CONTRACT_ANSWER,
  SET_BUSINESS_CONTRACT_DESCRIPTION,
  ADD_BUSINESS_CONTRACT_QUESTION,
  UPDATE_BUSINESS_CONTRACT_QUESTION,
  UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION,
  REMOVE_BUSINESS_CONTRACT_QUESTION,
  REMOVE_BUSINESS_CONTRACT_OPTION,
  SET_BUSINESS_CONTRACT_QUESTIONS,
  SET_BUSINESS_CONTRACT_FILLED

} from "../types/state"
import formServices from "../services/formServices"
import contractsService from "../services/contractsService"
import { convertForm } from "../utils/formUtils"
import { addToFormList } from "./formListActions"

/**
 * @function
 * @desc Replaces current businessContractForm with the data imported from file systems
 */
export const importFormByPath = () => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_BUSINESS_CONTRACT_FORM, data: raw })
}

/**
 * @function
 * @desc Replaces current businessContractForm with the data imported from file systems
 */
export const getFormByIdAndSetBusinessContractForm = (id: string) => async (dispatch: any) => {
  const data = await formServices.fetchFormById(id)
  //data._id = ''
  //data.createdAt = ''
  //data.isPublic = false
  dispatch({ type: SET_CURRENT_BUSINESS_CONTRACT_FORM, data })
}

/**
* @function
* @desc Replaces current businessContractForm with the data imported from file systems
*/
export const SetBusinessContractForm = (form: BusinessContractForm) => async (dispatch: any) => {

  dispatch({ type: SET_CURRENT_BUSINESS_CONTRACT_FORM, form })
}

/**
 * @function
 * @desc Updates the title of the generated form
 * @param {string} title - Form title.
 */
export const setTitle = (title: string) => async (dispatch: any) => {
  dispatch({ type: UPDATE_BUSINESS_CONTRACT_TITLE, data: title })
}

/**
* @function
* @desc Updates the title of the generated form
* @param {boolean} filled - Business Contract Form filled.
*/
export const setFilled = (filled: boolean) => async (dispatch: any) => {
  dispatch({ type: SET_BUSINESS_CONTRACT_FILLED, data: filled })
}

/**
* @function
* @desc Updates the answer of the generated form
* @param {any} answer - Form title.
*/
export const setAnswer = (answer: any) => async (dispatch: any) => {
  dispatch({ type: UPDATE_BUSINESS_CONTRACT_ANSWER, data: answer })
}

/**
 * @function
 * @desc Adds question to array from the QuestionModule
 * @param {BusinessContractFormQuestion} question - Question object that includes two strings: question input and answer option.
 */
export const addQuestion = (question: BusinessContractFormQuestion) => async (
  dispatch: any
) => {
  dispatch({ type: ADD_BUSINESS_CONTRACT_QUESTION, data: question })
}

/**
 * @function
 * @desc Setter for questions.
 * @param {Array<FormQuestion>} questions
 */
export const setQuestions = (questions: Array<BusinessContractFormQuestion>) => async (
  dispatch: any
) => {
  dispatch({ type: SET_BUSINESS_CONTRACT_QUESTIONS, data: questions })
}

/**
 * @function
 * @desc Updates the edited Question input to the array.
 * @param {BusinessContractFormQuestion} question - Question object that includes two strings: question input and answer option.
 * @param {number} index - Index of the question which was edited.
 */
export const updateQuestion = (question: BusinessContractFormQuestion | FormQuestion, index: number) => async (
  dispatch: any
) => {
  dispatch({ type: UPDATE_BUSINESS_CONTRACT_QUESTION, data: { question, index } })
}

/**
 * @function
 * @desc Updates the questions options array.
 * @param {string} option
 * @param {number} questionIndex
 * @param {number} optionIndex
 */
export const updateQuestionOption = (
  option: string,
  questionIndex: number,
  optionIndex: number
) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION,
    data: { option, questionIndex, optionIndex },
  })
}

/**
 * @function
 * @desc Removes the indicated question from the array.
 * @param {number} index - Index of the question which is to be removed.
 */
export const removeQuestion = (index: number) => async (dispatch: any) => {
  dispatch({ type: REMOVE_BUSINESS_CONTRACT_QUESTION, data: index })
}

/**
 * @function
 * @desc Removes the indicated option from the array.
 * @param {number} questionIndex - Index of the question which is removed option.
 * @param {number} optionIndex - Index of the option which is to be removed.
 */
export const removeOption = (
  questionIndex: number,
  optionIndex: number
) => async (dispatch: any) => {
  dispatch({ type: REMOVE_BUSINESS_CONTRACT_OPTION, data: { questionIndex, optionIndex } })
}

/**
 * @function
 * @desc Sets the description of the form.
 * @param {string} description - Description of the form.
 */
export const setDescription = (description: string) => async (
  dispatch: any
) => {
  dispatch({ type: SET_BUSINESS_CONTRACT_DESCRIPTION, data: description })
}

/**
 * @function
 * @desc Submits business contract form to the storage.
 * @param {BusinessContractForm} form - Edited Form Object to be submitted.
 * @param {string} contractId - BusinessContractId
 * @todo Service call backend.
 */
export const submitForm = (form: any, contractId: string) => async (dispatch: any) => {


  if (form.title === "") {
    dispatch(setAlert("Title is required", severity.Error))
    return
  }

  delete form._id;

  console.log("### Business contract form: ", form)
  const res = await formServices.postForm(convertForm(form))
  console.log("submitBusinessContractForm res: ", res);
  console.log("submitBusinessContractForm res.data._id: ", res?.data._id);

  const formUpdate = await contractsService.updateBusinessContractsForm(contractId, res?.data._id)
  console.log(formUpdate)

  const data = await formServices.fetchFormById(res?.data._id)
  dispatch({ type: SET_CURRENT_BUSINESS_CONTRACT_FORM, data })

  dispatch(addToFormList(form))
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
export const submitEditedForm = (formId: any, form: BusinessContractForm) => async (dispatch: any) => {
  if (form.title === "") {
    dispatch(setAlert("Title is required", severity.Error))
    return
  }
  console.log("submitEditedForm: formId ", formId);
  console.log("submitEditedForm: FormObject ", form);
  const res = await formServices.updateForm(formId, convertForm(form))

  const data = await formServices.fetchFormById(res?.data._id)
  dispatch({ type: SET_CURRENT_BUSINESS_CONTRACT_FORM, data })

  dispatch(addToFormList(form))

}