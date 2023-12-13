/**
 * @module reducer/businessContract
 * @desc Redux alert reducer
 */
import {
  ACTIVATE_B_CONTRACT,
  ADD_B_CONTRACT,
  /*ADD_B_WB_CONTRACT,*/ BusinessContractActions,
  BusinessContractState,
  /*B_DELETE,*/ B_FETCH,
  B_UPDATE,
  DECLINE_B_CONTRACT,
  B_ACCEPT,
  SEND_BACK_B_CONTRACT,
} from '../types/state'

const initialState: BusinessContractState = {
  searchList: [],
  contracts: [],
  businessContract: [],
}

/**
 * @function
 * @desc alert reducer that controls alert state
 * @param {BusinessContractState} state - current state
 * @param {BusinessContractActions} action - dispatched action
 */
const businessContractReducer = (
  state: BusinessContractState = initialState,
  action: BusinessContractActions,
) => {
  switch (action.type) {
    case B_UPDATE:
      return {
        ...state,
        searchList: action.data,
      }
    case B_FETCH:
      return {
        ...state,
        contracts: action.data,
      }
    case ADD_B_CONTRACT:
      return {
        ...state,
        businessContract: [action.data],
      }
    case DECLINE_B_CONTRACT:
      return {
        ...state,
        businessContract: [action.data],
      }
    case ACTIVATE_B_CONTRACT:
      return {
        ...state,
        madeContracts: state.contracts.map((c: any) =>
          c._id === action.data ? { ...c, contractMade: true } : c,
        ),
      }
    case B_ACCEPT:
      return {
        ...state,
        businessContract: [action.data],
      }
    case SEND_BACK_B_CONTRACT:
      return {
        ...state,
        businessContract: [action.data],
      }
    default:
      return state
  }
}

export default businessContractReducer
