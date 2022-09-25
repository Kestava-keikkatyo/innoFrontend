/**
 * @module reducer/user
 * @desc Redux user reducer
 */
import { loadUser } from '../utils/storage'
import {
  LOGIN,
  LOGOUT,
  UserActionTypes,
  USER_FAILURE,
  USER_PROFILE,
  USER_REQUEST,
  UserState
} from '../types/state'

const userData = loadUser()
const initialState: UserState = {
  loggedIn: !!userData,
  loading: false,
  data: userData || {},
}

/**
 * @function
 * @desc user reducer that controls user state
 * @param {Object} state - current state
 * @param {UserActionTypes} action - dispatched action
 */
const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        loading: true,
        loggedIn: state.loggedIn,
        data: state.data
      }
    case LOGIN:
      return {
        loading: false,
        loggedIn: true,
        data: action.data
      }
    case USER_PROFILE:
      return {
        loading: false,
        loggedIn: true,
        data: {
          ...state.data,
          ...action.data,
        },
      }
    case USER_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        data: {}
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        data: {}
      }
    default:
      return state
  }
}

export default userReducer
