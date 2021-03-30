import userReducer from "../reducers/userReducer"
import * as types from "../types/state.ts"
import deepFreeze from "deep-freeze"

describe("alertReducer", () => {
  test("Should return default state", () => {
    const newState = userReducer(undefined, {})
    expect(newState).toEqual({ loggedIn: false, data: {} })
  })

  test("returns a new state with action USER_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT and USER_FAILURE", () => {
    const state = {}
    const action = {
      type: types.USER_REQUEST,
    }

    deepFreeze(state)
    const requestState = userReducer(state, action)

    expect(requestState.loading).toBe(true)

    deepFreeze(requestState)
    const loginState = userReducer(requestState, { type: types.LOGIN })

    expect(loginState.loggedIn).toBe(true)

    deepFreeze(loginState)
    const logoutState = userReducer(loginState, { type: types.LOGOUT })
    const failureState = userReducer(loginState, { type: types.USER_FAILURE })
    expect(logoutState.loggedIn).toBe(false)
    expect(failureState.loggedIn).toBe(false)
  })
})
