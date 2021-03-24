/**
 * @module reducer/form
 * @desc Redux form reducer
 */
import { Form, FormQuestion } from "../types/types"
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
  FormActionTypes,
} from "../types/state"

const initialState: Form = {
  title: "",
  description: "",
  questions: [],
}

/**
 * @function
 * @desc Redux form reducer that controls the form generator tool state.
 * @param {Form} state - initial state
 * @param {FormActionTypes} action - dispatched action
 * @todo - Figure out immutability: formReducer is not a pure function. Ditch temp?
 */
const formReducer = (state = initialState, action: FormActionTypes) => {
  const { data, type } = action
  let temp
  switch (type) {
    case SET_CURRENT_FORM:
      return data

    case UPDATE_TITLE:
      return {
        ...state,
        title: data,
      }

    case SET_DESCRIPTION:
      return {
        ...state,
        description: data,
      }

    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, data],
      }

    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => i === data.index 
          ? data.question : q),
      }

    // breaks when inputting in to the input field.
    case UPDATE_QUESTION_OPTION:
      //temp = state.questions
      //temp[data.questionIndex].options[data.optionIndex] = data.option
      const getOptions = (q: any) => q.options.map((o: any, j: number) => j === data.optionIndex ? data.option : o)
      return {
        ...state,
        questions: state.questions.map((q, i) => i !== data.questionIndex 
          ? q: {...q, options: getOptions(q)}),
      }

    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter((_, i) => i !== data)
      }

    // figure out how to return questions while editing in the options scope.
    case REMOVE_OPTION:
      temp = state.questions
      temp[data.questionIndex].options.splice(data.optionIndex, 1)
      return {
        ...state,
        questions: temp,
      }

    case SET_QUESTIONS:
      return {
        ...state,
        questions: data,
      }

    case CLEAR_CURRENT_FORM:
      return initialState
    default:
      return state
  }
}

export default formReducer
