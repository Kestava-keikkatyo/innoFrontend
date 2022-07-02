/**
 * @module reducer/myFeeling
 * @desc Redux myFeeling reducer
 */
import { feelingType } from '../types/types'
import { MyFeelingActions, MyFeelingState } from './../types/state'

const initialState: MyFeelingState = {
  currentMyFeeling: undefined,
  loading: false,
  myFeelings: [],
}

/**
 * @function
 * @desc MyFeeling reducer that controls worker's feeling state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const myFeelingReducer = (state = initialState, action: MyFeelingActions): MyFeelingState => {
  switch (action.type) {
    case feelingType.FEELING_GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case feelingType.FEELING_GET_ALL_SUCCESS: {
      return {
        ...state,
        myFeelings: action.data,
        loading: false,
      }
    }
    case feelingType.FEELING_ACTION_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      }
    }
    case feelingType.FEELING_GET_CURRENT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case feelingType.FEELING_GET_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentMyFeeling: action.data,
      }
    }
    case feelingType.FEELING_DELETED_SUCCESS: {
      return {
        ...state,
        myFeelings: state.myFeelings.filter((item) => item._id !== action.data._id),
      }
    }
    case feelingType.FEELING_CREATED_REQUEST: {
      return {
        ...state,
        currentMyFeeling: action.data,
        loading: true,
      }
    }
    case feelingType.FEELING_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        myFeelings: [...state.myFeelings, action.data],
      }
    }
    case feelingType.FEELING_UPDATED_REQUEST: {
      return {
        ...state,
        currentMyFeeling: action.data,
        loading: true,
      }
    }
    case feelingType.FEELING_UPDATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentMyFeeling: action.data,
      }
    }
    default:
      return state
  }
}
export default myFeelingReducer
