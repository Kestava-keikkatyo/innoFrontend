/**
 * Redux alert reducer
 * @module
 */
// import alertConstants from '../constants/alertConstants'
// import contractsService from '../services/contractsService'

import businessContractConstants from "../constants/businessContractConstants"

const initialState = {
  searchList: {},
  madeContracts: {}
}

/**
 * alert reducer that controls alert state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const businessContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case businessContractConstants.UPDATE:
      return {
        ...state,
        searchList: action.data
      }
    case businessContractConstants.FETCH:
      return {
        ...state,
        madeContracts: action.data
      }
    case businessContractConstants.DELETE:
      const filteredList = state.madeContracts.filter((value) => value.id !== action.data)
      return {
        ...state,
        madeContracts: filteredList
      }
    case businessContractConstants.ADD_CONTRACT:
      return {
        ...state,
        madeContracts: [...state.madeContracts, action.data]
      }
    default:
      return state
  }
}

export default businessContractReducer