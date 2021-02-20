/**
 * Redux feeling reducer
 * @module
 */
const initialFeeling = {
  value: 0,
  note: "",
  isPrivate: false,
}
const initialState = {
  currentFeeling: initialFeeling,
  feelings: []
}

const feelingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FEELINGS":
      return {
        ...state,
        feelings: action.data
      }
    case "SET_CURRENT_FEELING":
      return {
        ...state,
        currentFeeling: {
          ...state.currentFeeling,
          ...action.data
        }
      }
    case "CLEAR_CURRENT_FEELING":
      return {
        ...state,
        currentFeeling: initialFeeling
      }
    default:
      return state
  }
}

export default feelingReducer
