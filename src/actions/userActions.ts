/* eslint-disable no-prototype-builtins */
/**
 * @module userActions
 * @desc Redux user actions
 */
import userService from '../services/userService'
import usersService from '../services/usersService'
import { saveUser, logoutUser, loadUser, insertContactData } from '../utils/storage'
import history from '../utils/history'
import { setAlert } from './alertActions'
import { Dispatch } from 'redux'
import {
  LOGIN,
  LOGOUT,
  USER_FAILURE,
  USER_PROFILE,
  USER_REQUEST,
  SignUpUser,
  FETCH_CONTACTS_REQUEST,
  FETCH_BUSINESS_CONTRACT_LIST,
  FETCH_CONTACT_SUCCESS,
} from '../types/state'
import { Credentials, severity, User, usersType } from '../types/types'
import i18next from 'i18next'
import contractsService from '../services/contractsService'

/**
 * Logs user in
 * @function
 * @param {Object} credentials - User's email and password
 *  @param {string} role - User's role
 * @param {Object} from - User redirection path
 */
export const login = (credentials: Credentials, from: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    })
    try {
      const { data } = await userService.signin(credentials)

      dispatch({
        type: LOGIN,
        data,
      })

      saveUser(data)

      if (from) {
        history.push(from)
      }

      dispatch(setAlert(i18next.t('login_successful'), severity.Success))
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      })

      dispatch(setAlert(i18next.t('login_failed'), severity.Error))
    }
  }
}

/**
 * Signs user up
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - User's role
 */
export const signup = (user: SignUpUser) => {
  // const { t } = useTranslation();
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    })
    try {
      const { data } = await userService.register(user)
      dispatch({
        type: LOGIN,
        data,
      })
      saveUser(data)

      history.push('/home')
      dispatch(setAlert(i18next.t('signup_successful'), severity.Success))
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      })
      dispatch(setAlert(i18next.t('email_already_used'), severity.Error))
    }
  }
}


/**
 * Fetches contacts that agency has with other users, and saves them into Redux state
 * @function
 */
export function fetchAgencyContacts() {
  return async (dispatch: any) => {
    try {
      let agreements: any
      let contactId: string

      dispatch({ type: FETCH_CONTACTS_REQUEST, })

      agreements = await contractsService.fetchBusinessContracts()
      for (const key in agreements) {

        if (agreements.hasOwnProperty(key)) {
          if (JSON.stringify(agreements[key].type) == '"agency"' && JSON.stringify(agreements[key].status) == '"signed"') {
            contactId = JSON.stringify(agreements[key].target[0]._id).slice(1, -1)
            const res = await usersService.fetchUserById(contactId)

            insertContactData(contactId)
            dispatch({ type: FETCH_CONTACT_SUCCESS, data: res.data, })
          }
        }
      }
    } catch (error) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: error as string,
      })

      await setAlert('Failed to fetch ' + loadUser().role + ' contacts: ' + error, severity.Error, 15)(dispatch)
    }
  }
}

/**
 * Fetches contacts that worker or business has with other users, and saves them into Redux state.
 * @function
 */
export function fetchWorkerOrBusinessContacts() {
  return async (dispatch: any) => {
    try {
      let agreements: any
      let contactId: string

      dispatch({ type: FETCH_CONTACTS_REQUEST, })

      agreements = await contractsService.fetchBusinessContractsAsTarget()
      for (const key in agreements) {

        if (agreements.hasOwnProperty(key)) {
          if (JSON.stringify(agreements[key].type) == '"agency"' && JSON.stringify(agreements[key].status) == '"signed"') {

            contactId = JSON.stringify(agreements[key].creator._id).slice(1, -1)
            const res = await usersService.fetchUserById(contactId)

            insertContactData(contactId)
            dispatch({ type: FETCH_CONTACT_SUCCESS, data: res.data, })

          } else if (JSON.stringify(agreements[key].type) == '"employment"' && JSON.stringify(agreements[key].status) == '"signed"') {

            // agreement of the type "employment" has two targets
            // here we find which one is the user's own ID and which one is the contact's ID that we're looking for
            if (agreements[key].target[0] == loadUser()._id) {
              contactId = agreements[key].target[1]
              const res = await usersService.fetchUserById(contactId)

              console.log(JSON.stringify(res.data))

              insertContactData(contactId)
              dispatch({ type: FETCH_CONTACT_SUCCESS, data: res.data, })

            } else if (agreements[key].target[1] == loadUser()._id) {
              contactId = agreements[key].target[0]
              const res = await usersService.fetchUserById(contactId)

              insertContactData(contactId)
              dispatch({ type: FETCH_CONTACT_SUCCESS, data: res.data, })
            }
          }
        }
      }
    } catch (error) {
      dispatch({
        type: usersType.USER_ACTION_FAILURE,
        data: error as string,
      })

      await setAlert('Failed to fetch ' + loadUser().role + ' contacts: ' + error, severity.Error, 15)(dispatch)
    }
  }
}


/**
 * Logs user out
 * @function
 */
export const logout = () => {
  return async (dispatch: any) => {
    try {
      await userService.logout()
      logoutUser()
      dispatch({ type: LOGOUT })
      history.push('/')
      dispatch(setAlert(i18next.t('logout_successful')))
    } catch (error) {
      history.push('/login')
      dispatch(setAlert(i18next.t('logout_failed'), severity.Error))
    }
  }
}

/**
 * Gets user profile information using user's role and token
 * @function
 * @param {string} role - user's role
 */
export const me = () => async (dispatch: any) => {
  dispatch({
    type: USER_REQUEST,
  })
  try {
    // TODO: PURKKAMALLIRATKAISU
    // Kirjautuessa sisään setItem ei ehdi päivittää loggedInnoAppUseria
    if (!localStorage.getItem('loggedInnoAppUser')) return
    const { data } = await userService.me()
    dispatch({
      type: USER_PROFILE,
      data,
    })
    return data;
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
export const update = (updateData: any) => async (dispatch: any) => {
  dispatch({
    type: USER_REQUEST,
  })
  try {
    const profile = await userService.update(updateData)
    dispatch({
      type: USER_PROFILE,
      profile,
    })
    dispatch(setAlert(i18next.t('user_information_updated')))
  } catch (error) {
    console.log('update error')
    statusHandler(dispatch, error)
  }
}

/** invalid_token
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
    dispatch(setAlert(i18next.t('invalid_token'), severity.Error))
  } else {
    window.location.reload()
  }
}

