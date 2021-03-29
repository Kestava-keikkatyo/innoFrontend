/**
 * @module reducer/businessContract
 * @desc Redux alert reducer
 */
import { ACTIVATE_B_CONTRACT, ADD_B_CONTRACT, BusinessContractActions, BusinessContractState, B_DELETE, B_FETCH, B_UPDATE } from "../types/state"

const initialState: BusinessContractState = {
  searchList: [],
  madeContracts: []
}

/**
 * @function
 * @desc alert reducer that controls alert state
 * @param {BusinessContractState} state - current state
 * @param {BusinessContractActions} action - dispatched action
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
      const filteredList = state.madeContracts.filter((value: any) => value._id !== action.data)
      return {
        ...state,
        madeContracts: filteredList
      }
    case ADD_B_CONTRACT:
      return {
        ...state,
        madeContracts: [...state.madeContracts, action.data]
      }
    case ACTIVATE_B_CONTRACT:
      return {
        ...state,
        madeContracts: 
          state.madeContracts.map((c: any) => c._id === action.data ? { ...c, contractMade: true }: c)
      }
    default:
      return state
  }
}

export default businessContractReducer