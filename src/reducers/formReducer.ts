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

    // Is this broke? check tests: expects the option to be an object but seems to output
      // only string. Intended?
    case UPDATE_QUESTION_OPTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => i !== data.questionIndex
          ? q : {
            ...q, options: q.options.map((o: any, j: number) => j === data.optionIndex
              ? data.option : o
            )
          }),
      }

    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter((_, i) => i !== data)
      }

    // deletes the specified index in all questionmodules.
      // update: no longer deletes from all modules, but still deletes multiple 
      // if more options exist after in the same module
      // update 2: no longer deletes multiple, so works "as intended", but instead somehow 
      // we can't remove the first three lines before the return statement POG.
      // update 3: The web Gods have deemed me worthy and it _should_ work as intended I guess. What was needed was specifying
      // the _: any in the filter test but I haven't the faintest idea why it would work like this.
    case REMOVE_OPTION:
      // temp = state.questions
      // temp[data.questionIndex].options.splice(data.optionIndex, 1)
      // const getOptions1 = (q: any) => q.options.map((o: any, j: number) => j === data.optionIndex ? data.option : o)
      return {
        ...state,
        questions: state.questions.map((q, i) => i !== data.questionIndex
          ? q : { 
            ...q, options: q.options.filter((_: any,j: number) => j !== data.optionIndex)
          }
        ),
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
