/**
 * Redux user reducer
 * @module
 */
import { loadUser } from '../utils/storage'
import userConstants from '../constants/userConstants'

const userData = loadUser()
const initialState = { 
  loggedIn: !!userData,
  data: userData || {} 
}

/**
 * user reducer that controls user state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REQUEST:
      return {
        loading: true,
        data: state.data,
        loggedIn: !!state.loggedIn
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        data: action.data
      }
    case userConstants.PROFILE_SUCCESS:
      return {
        loggedIn: true,
        data: state.data,
        profile: action.profile
      }
    case userConstants.FAILURE:
    case userConstants.LOGOUT:
      return { loggedIn: false, data: {} }
    default:
      return state
  }
}

export default userReducer