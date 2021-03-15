import alertReducer from './alertReducer'
import { clearAlert, setAlert } from '../actions/alertActions'

import deepFreeze from 'deep-freeze'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from "../types/state.ts"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('alertReducer', () => {
    test('Should return default state', () => {
        const newState = alertReducer(undefined, {})
        expect(newState).toEqual({
            severity: "info",
            message: "",
            open: false,
        })
    })

    test('Should return a new state with action ALERT_SET and ALERT_CLEAR', () => {
        const defaultState = alertReducer(undefined, {}) 
        const action = {
            type: types.ALERT_SET,
            message: 'text',
            severity: 'error'
        }

        deepFreeze(defaultState)
        const setState = alertReducer(defaultState, action)

        expect(setState.message).toBe(action.message)
        expect(setState.severity).toBe(action.severity)
        expect(setState.open).toBe(true)

        deepFreeze(setState)
        const clearState = alertReducer(setState, { type: types.ALERT_CLEAR })

        expect(clearState.message).toBe(action.message)
        expect(clearState.severity).toBe(action.severity)
        expect(clearState.open).toBe(false)
    })

    test('creates a new alert using ALERT_SET async action', () => {
        const message = 'test'
        const severity = 'warning'

        const expectedAction = {
            type: types.ALERT_SET,
            message,
            severity
        }

        const store = mockStore({})
        return store.dispatch(setAlert(message, severity)).then(() => {
            expect(store.getActions()[0]).toEqual(expectedAction)
        })
    })

    test('should create an action to clear alert (ALERT_CLEAR action)', () => {
        const expectedAction = {
            type: types.ALERT_CLEAR
        }

        expect(clearAlert()).toEqual(expectedAction)
    })
})
