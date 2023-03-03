import { any } from 'prop-types'
import userReducer from '../reducers/userReducer'
import * as types from '../types/state'

describe('userReducer', () => {
  const defaultState: types.UserState = {
    loggedIn: false,
    loading: false,
    data: {},
    contacts: []
  }
  const defaultUserRequestAction: types.UserActionTypes = {
    type: types.USER_REQUEST,
    data: {}
  }
  const defaultLoginAction: types.UserActionTypes = {
    type: types.LOGIN,
    data: {}
  }
  const defaultLogoutAction: types.UserActionTypes = {
    type: types.LOGOUT,
    data: {}
  }
  const defaultUserFailureAction: types.UserActionTypes = {
    type: types.USER_FAILURE,
    data: {}
  }

  test('Returns a new state with action USER_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT and USER_FAILURE', () => {
    const requestState = userReducer(defaultState, defaultUserRequestAction)

    expect(requestState.loading).toBe(true)
    expect(requestState.loggedIn).toBe(false)

    const loginState = userReducer(requestState, defaultLoginAction)

    expect(loginState.loading).toBe(false)
    expect(loginState.loggedIn).toBe(true)

    const logoutState = userReducer(loginState, defaultLogoutAction)

    expect(loginState.loading).toBe(false)
    expect(logoutState.loggedIn).toBe(false)

    const failureState = userReducer(loginState, defaultUserFailureAction)

    expect(loginState.loading).toBe(false)
    expect(failureState.loggedIn).toBe(false)
  })
})