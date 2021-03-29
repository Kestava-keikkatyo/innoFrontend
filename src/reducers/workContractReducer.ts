/**
 * @module reducer/workContract
 * @desc Redux workContract reducer
 */
import { ADD_W_CONTRACT, WorkContractState, WorkContractActionTypes, W_DELETE, W_FETCH, W_UPDATE } from "../types/state"

const initialState: WorkContractState = {
  searchList: [],
  madeContracts: []
}

/**
 * @function
 * @desc alert reducer that controls alert state
 * @param {WorkContractState} state - current state
 * @param {WorkContractActionTypes} action - dispatched action
 */
const workContractReducer = (state: WorkContractState = initialState, action: WorkContractActionTypes) => {
  switch (action.type) {
    case W_UPDATE:
      return {
        ...state,
        searchList: action.data
      }
    case W_FETCH:
      return {
        ...state,
        madeContracts: action.data
      }
    case W_DELETE:
      const filteredList = state.madeContracts.filter((value: any) => value._id !== action.data)
      return {
        ...state,
        madeContracts: filteredList
      }
    case ADD_W_CONTRACT:
      return {
        ...state,
        madeContracts: [...state.madeContracts, action.data]
      }
    default:
      return state
  }
}

export default workContractReducer