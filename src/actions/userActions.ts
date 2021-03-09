/**
 * Redux user actions
 * @module actions/userActions
 */
import userService from '../services/userService'
import { saveUser, logoutUser } from '../utils/storage'
import history from '../utils/history'
import { setAlert } from './alertActions'
import { Credentials, LOGIN, LOGOUT, roles, SignUpUser, USER_FAILURE, USER_PROFILE, USER_REQUEST } from '../types'

/**
 * Logs user in
 * @function
 * @param {Object} credentials - User's email and password
 * @param {string} role - User's role
 * @param {Object} from - User redirection path
 */
export const login = (credentials: Credentials, role: roles, from: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    })
    try {
      const { data } = await userService.login(credentials, role)
      dispatch({
        type: LOGIN,
        data
      })
      saveUser(data)
      history.push(from)
      dispatch(setAlert('login successful', 'success'))
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      })
      dispatch(setAlert('login failed', 'error'))
    }
  }
}

/**
 * Signs user up
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - User's role
 */
export const signup = (user: SignUpUser, role: roles) => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    })
    try {
      const { data } = await userService.signup(user, role)
      dispatch({
        type: LOGIN,
        data
      })
      saveUser(data)
      history.push('/home')
      dispatch(setAlert('signup successful', 'success'))
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      })
      dispatch(setAlert('signup failed', 'error'))
    }
  }
}

/**
 * Logs user out
 * @function
 */
export const logout = () => {
  return async (dispatch: any) => {
    logoutUser()
    dispatch({ type: LOGOUT })
    history.push('/')
    dispatch(setAlert('user logged out'))
  }
}

/**
 * Gets user profile information using user's role and token
 * @function
 * @param {string} role - user's role
 */
export const me = (role: roles) => async (dispatch: any) => {
  dispatch({
    type: USER_REQUEST
  })
  try {
    //TODO: PURKKAMALLIRATKAISU
    // Kirjautuessa sisään setItem ei ehdi päivittää loggedInnoAppUseria
    if(!localStorage.getItem('loggedInnoAppUser'))
      return
    const { data: profile } = await userService.me(role)
    dispatch({
      type: USER_PROFILE,
      profile
    })
  } catch (error) {
    statusHandler(dispatch, error)
  }
}

/**
 * Updates user profile information
 * @function
 * @param {Object} updateData - updated profile information
 * @param {string} role - user's role
 */
export const update = (updateData: any, role: roles) => async (dispatch: any) => {
  dispatch({
    type: USER_REQUEST
  })
  try {
    const { data: profile } = await userService.update(updateData, role)
    dispatch({
      type: USER_PROFILE,
      profile
    })
    dispatch(setAlert('User information updated'))
  } catch (error) {
    console.log('update error');
    statusHandler(dispatch, error)
  }
}

/**
 * Logs out user if token or role is wrong
 * @function
 * @param {function} dispatch - dispatch function
 * @param {Object} response - error response object
 * @todo Why on earth would you do that?
 */
const statusHandler = (dispatch: Function, response: any) => {
  if (!response || response.status === 401 || response.status === 500) {
    // logoutUser()
    dispatch({ type: USER_FAILURE })
    dispatch(setAlert('invalid token', 'error'))
  } else {
    window.location.reload()
  }
}