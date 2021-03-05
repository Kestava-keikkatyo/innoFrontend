/**
 * @State
 */
const initialCurrentForm = {
  title: "",
  description: "",
  questions: [],
}

const initialState = {
  currentForm: initialCurrentForm,
}

/**
 * Redux form reducer that controls the form generator tool state.
 * @module
 *
 * @param {Object} state - initial state
 * @param {Object} action - dispatched action
 */
const formReducer = (state = initialState, action) => {
  const { data, type } = action
  let temp
  switch (type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          title: data,
        },
      }
    case "SET_DESCRIPTION":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          description: data,
        },
      }
    case "ADD_QUESTION":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: [...state.currentForm.questions, data],
        },
      }
    case "UPDATE_QUESTION":
      temp = state.currentForm.questions
      temp[data.index] = data.question
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp,
        },
      }
    case "UPDATE_QUESTION_OPTION":
      temp = state.currentForm.questions
      temp[data.questionIndex].options[data.optionIndex] = data.option
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp,
        },
      }
    case "REMOVE_QUESTION":
      temp = state.currentForm.questions
      temp.splice(data, 1)
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp,
        },
      }
    case "REMOVE_OPTION":
      temp = state.currentForm.questions
      temp[data.questionIndex].options.splice(data.optionIndex, 1)
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp
        },
      }
    case "SET_QUESTIONS":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: data,
        },
      }
    case "CLEAR_CURRENT_FORM":
      return { ...state, currentForm: initialCurrentForm }

    default:
      return state
  }
}

export default formReducer
