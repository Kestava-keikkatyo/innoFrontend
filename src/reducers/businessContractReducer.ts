/**
 * Redux alert reducer
 * @module
 */
// import alertConstants from '../constants/alertConstants'
// import contractsService from '../services/contractsService'

import { ADD_B_CONTRACT, BusinessContractActions, BusinessContractState, B_DELETE, B_FETCH, B_UPDATE } from "../types/state"

const initialState: BusinessContractState = {
  searchList: [],
  madeContracts: []
}

/**
 * alert reducer that controls alert state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const businessContractReducer = (state: BusinessContractState = initialState, action: BusinessContractActions) => {
  switch (action.type) {
    case B_UPDATE:
      return {
        ...state,
        searchList: action.data
      }
    case B_FETCH:
      return {
        ...state,
        madeContracts: action.data
      }
    case B_DELETE:
      const filteredList = state.madeContracts.filter((value: any) => value.id !== action.data)
      return {
        ...state,
        madeContracts: filteredList
      }
    case ADD_B_CONTRACT:
      return {
        ...state,
        madeContracts: [...state.madeContracts, action.data]
      }
    default:
      return state
  }
}

export default businessContractReducer