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

    case "REMOVE_QUESTION":
      console.log("REMOVE CALLED")
      console.log(action.data)
      let temp1 = state.currentForm.questions
      temp1.splice(action.data, 1)
      console.log(temp1)
      return {
        ...state,
        currentForm: {
          ...state.currentForm,
          questions: temp1,
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
    case "CLEAR_CURRENT_FORM":
      return { ...state, currentForm: initialCurrentForm }

    default:
      return state
  }
}

export default formReducer
