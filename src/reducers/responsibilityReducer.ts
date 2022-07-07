/**
 * @module reducer/responsibility
 * @desc Redux responsibility reducer
 */
import { responsibilityType } from '../types/types'
import { ResponsibilityActions, ResponsibilityState } from './../types/state'

const initialState: ResponsibilityState = {
  currentResponsibility: undefined,
  loading: false,
  responsibilities: [],
}

/**
 * @function
 * @desc Responsibility reducer that controls responsibility state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const responsibilityReducer = (
  state = initialState,
  action: ResponsibilityActions,
): ResponsibilityState => {
  switch (action.type) {
    case responsibilityType.RESPONSIBILITY_CREATED_REQUEST: {
      return {
        ...state,
        currentResponsibility: action.data,
        loading: true,
      }
    }
    case responsibilityType.RESPONSIBILITY_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        responsibilities: [...state.responsibilities, action.data],
      }
    }
    case responsibilityType.RESPONSIBILITY_ACTION_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      }
    }
    case responsibilityType.RESPONSIBILITY_DELETED_REQUEST: {
      return {
        ...state,
        currentResponsibility: action.data,
        loading: true,
      }
    }
    case responsibilityType.RESPONSIBILITY_DELETED_SUCCESS: {
      return {
        ...state,
        loading: false,
        responsibilities: state.responsibilities.filter((item) => item._id !== action.data._id),
      }
    }
    case responsibilityType.RESPONSIBILITY_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case responsibilityType.RESPONSIBILITY_GETALL_SUCCESS: {
      return {
        ...state,
        responsibilities: action.data,
        loading: false,
      }
    }
    case responsibilityType.RESPONSIBILITY_GET_CURRENT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case responsibilityType.RESPONSIBILITY_GET_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentResponsibility: action.data,
      }
    }
    case responsibilityType.RESPONSIBILITY_UPDATED_REQUEST: {
      return {
        ...state,
        currentResponsibility: action.data,
        loading: true,
      }
    }
    case responsibilityType.RESPONSIBILITY_UPDATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentResponsibility: action.data,
      }
    }
    default:
      return state
  }
}
export default responsibilityReducer
