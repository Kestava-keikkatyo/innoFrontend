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
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  UserState
} from '../types/state'

const userData = loadUser()
const initialState: UserState = {
  loggedIn: !!userData,
  loading: false,
  data: userData || {},
  contacts: []
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
        data: state.data,
        contacts: state.contacts
      }
    case LOGIN:
      return {
        loading: false,
        loggedIn: true,
        data: action.data,
        contacts: []
      }
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        contacts: state.contacts
      }
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.data]
      }
    case USER_PROFILE:
      return {
        loading: false,
        loggedIn: true,
        data: {
          ...state.data,
          ...action.data,
        },
        contacts: state.contacts
      }
    case USER_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        data: {},
        contacts: []
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        data: {},
        contacts: []
      }
    default:
      return state
  }
}

export default userReducer
