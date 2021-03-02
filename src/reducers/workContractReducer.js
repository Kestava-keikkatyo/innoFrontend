/**
 * Redux workContract reducer
 * @module
 */
import contractConstants from "../constants/contractConstants"

const initialState = {
  searchList: [],
  madeContracts: {}
}

/**
 * alert reducer that controls alert state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const workContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case contractConstants.W_UPDATE:
      return {
        ...state,
        searchList: action.data
      }
    case contractConstants.W_FETCH:
      return {
        ...state,
        madeContracts: action.data
      }
    case contractConstants.W_DELETE:
      const filteredList = state.madeContracts.filter((value) => value.id !== action.data)
      return {
        ...state,
        madeContracts: filteredList
      }
    case contractConstants.ADD_W_CONTRACT:
      return {
        ...state,
        madeContracts: [...state.madeContracts, action.data]
      }
    default:
      return state
  }
}

export default workContractReducer