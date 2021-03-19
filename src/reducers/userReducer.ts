/**
 * @module reducer/user
 * @desc Redux user reducer
 */
import { loadUser } from '../utils/storage'
import { LOGIN, LOGOUT, UserActionTypes, USER_FAILURE, USER_PROFILE, USER_REQUEST } from '../types/state'

const userData = loadUser()
const initialState = { 
  loggedIn: !!userData,
  data: userData || {} 
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
        data: state.data,
        loggedIn: !!state.loggedIn
      }
    case LOGIN:
      return {
        loggedIn: true,
        data: action.data
      }
    case USER_PROFILE:
      return {
        loggedIn: true,
        data: state.data,
        profile: action.data
      }
    case USER_FAILURE:
    case LOGOUT:
      return { loggedIn: false, data: {} }
    default:
      return state
  }
}

export default userReducer