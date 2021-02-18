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
        }
      }
    case "ADD_QUESTION":
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: [
            ...state.currentForm.questions, action.data
          ]
        }
      }
    default:
      return state
  }
}

export default formReducer
