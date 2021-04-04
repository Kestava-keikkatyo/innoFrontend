/**
 * @module reducer/form
 * @desc Redux form reducer
 */
import { Form } from "../types/types"
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
  tags: [],
  isPublic: true,
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
  switch (action.type) {
    case SET_CURRENT_FORM:
      return action.data

    case UPDATE_TITLE:
      return {
        ...state,
        title: action.data,
      }

    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.data,
      }

    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.data],
      }

    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => i === action.data.index
          ? action.data.question : q),
      }

    // Is this broke? check tests: expects the option to be an object but seems to output
      // only string. Intended?
    case UPDATE_QUESTION_OPTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => i !== action.data.questionIndex
          ? q : {
            ...q, options: q.options.map((o: any, j: number) => j === action.data.optionIndex
              ? action.data.option : o
            )
          }),
      }

    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter((_, i) => i !== action.data)
      }

    case REMOVE_OPTION:
     return {
        ...state,
        questions: state.questions.map((q, i) => i !== action.data.questionIndex
          ? q : { 
            ...q, options: q.options.filter((_: any,j: number) => j !== action.data.optionIndex)
          }
        ),
      }

    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.data,
      }

    case CLEAR_CURRENT_FORM:
      return initialState
    default:
      return state
  }
}

export default formReducer
