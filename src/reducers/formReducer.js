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
        title: action.data,
      }
    case "UPDATE_QUESTIONS":
      return {
        ...state,
        questions: action.data,
      }
    default:
      return state
  }
}

export default formReducer
