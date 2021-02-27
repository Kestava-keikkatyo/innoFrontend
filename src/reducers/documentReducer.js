/**
 * Redux document reducer
 * @module
 */

const initialState = {
  businessContracts: [],
  workContracts: [],
}

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BUSINESS_CONTRACTS":
      return {
        ...state,
        businessContracts: action.data
      }
    case "ACTIVATE_BUSINESS_CONTRACT":
      return {
        ...state,
        businessContracts: 
          state.businessContracts.map(c => c.id === action.data ? { ...c, contractMade: true }: c)
      }
    case "_":
      return {
        ...state
      }
    default:
      return state
  }
}

export default documentReducer
