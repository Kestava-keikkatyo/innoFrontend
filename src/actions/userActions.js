/**
 * Redux user actions
 * @module actions/userActions
 */
import userService from '../services/userService'
import { saveUser, logoutUser } from '../utils/storage'
import history from '../utils/history'
import userConstants from '../constants/userConstants'
import { setAlert } from './alertActions'

/**
 * Logs user in
 * @function
 * @param {Object} credentials - User's email and password
 * @param {string} role - User's role
 * @param {Object} from - User redirection path
 */
export const login = (credentials, role, from) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data } = await userService.login(credentials, role)
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        data
      })
      saveUser(data)
      history.push(from)
      dispatch(setAlert('login successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
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
export const signup = (user, role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data } = await userService.signup(user, role)
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        data
      })
      saveUser(data)
      history.push('/home')
      dispatch(setAlert('signup successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
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
  return async dispatch => {
    logoutUser()
    dispatch({ type: userConstants.LOGOUT })
    history.push('/')
    dispatch(setAlert('user logged out'))
  }
}

/**
 * Gets user profile information using user's role and token
 * @function
 * @param {string} role - user's role
 */
export const me = (role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST
    })
    try {
      //TODO: PURKKAMALLIRATKAISU
      // Kirjautuessa sisään setItem ei ehdi päivittää loggedInnoAppUseria
      if(!localStorage.getItem('loggedInnoAppUser'))
        return
      const { data: profile } = await userService.me(role)
      dispatch({
        type: userConstants.PROFILE_SUCCESS,
        profile
      })
    } catch (error) {
      statusHandler(dispatch, error)
    }
  }
}

/**
 * Updates user profile information
 * @function
 * @param {Object} updateData - updated profile information
 * @param {string} role - user's role
 */
export const update = (updateData, role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST
    })
    try {
      const { data: profile } = await userService.update(updateData, role)
      dispatch({
        type: userConstants.PROFILE_SUCCESS,
        profile
      })
      dispatch(setAlert('User information updated'))
    } catch (error) {
      console.log('update error');
      statusHandler(dispatch, error)
    }
  }
}

/**
 * Logs out user if token or role is wrong
 * @function
 * @param {function} dispatch - dispatch function
 * @param {Object} response - error response object
 */
const statusHandler = (dispatch, response) => {
  if (!response || response.status === 401 || response.status === 500) {
    // console.log(response.status);
    // logoutUser()
    dispatch({ type: userConstants.FAILURE })
    dispatch(setAlert('invalid token', 'error'))
  } else {
    window.location.reload()
  }
}