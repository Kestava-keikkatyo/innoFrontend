/**
 * Redux form reducer
 * @module
 */

const initialState = {
  currentForm: {
    title: "",
    description: "",
    questions: [],
  },
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          title: action.data,
        },
      }
    case "SET_DESCRIPTION":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          description: action.data,
        },
      }
    case "ADD_QUESTION":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: [...state.currentForm.questions, action.data],
        },
      }
    case "UPDATE_QUESTION":
      let temp = state.currentForm.questions
      temp[action.data.index] = action.data.question
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp,
        },
      }
    case "SET_QUESTIONS":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: action.data,
        },
      }
    default:
      return state
  }
}

export default formReducer
