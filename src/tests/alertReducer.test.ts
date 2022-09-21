import alertReducer from '../reducers/alertReducer';
import { clearAlert, setAlert } from '../actions/alertActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../types/state';
import { severity } from '../types/types';
import { AnyAction } from 'redux';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('alertReducer', () => {
  const defaultData: types.AlertState = {
    severity: severity.Info,
    message: 'this is a test string',
    open: true
  }
  const defaultClearAction: types.AlertActionTypes = {
    type: types.ALERT_CLEAR,
    data: defaultData
  }
  const defaultSetAction: types.AlertActionTypes = {
    type: types.ALERT_SET,
    data: defaultData
  }

  test('Should return a new state with action ALERT_SET and ALERT_CLEAR', () => {
    const setState = alertReducer(undefined, defaultSetAction)

    expect(setState.message).toBe(defaultData.message)
    expect(setState.severity).toBe(defaultData.severity)
    expect(setState.open).toBe(true)

    const clearState = alertReducer(undefined, defaultClearAction)

    expect(clearState.message).toBe('')
    expect(clearState.severity).toBe(severity.Info)
    expect(clearState.open).toBe(false)
  })

  test('Creates a new alert using ALERT_SET async action', () => {
    const expectedMessage = 'test'
    const expectedSeverity = severity.Warning

    const expectedAction = {
      type: types.ALERT_SET,
      data: {
        message: expectedMessage,
        severity: expectedSeverity
      }
    }

    const store = mockStore({})
    return store.dispatch(setAlert(expectedMessage, expectedSeverity) as unknown as AnyAction)
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
  })

  test('Should create an action to clear alert (ALERT_CLEAR action)', () => {
    const expectedAction = {
      type: types.ALERT_CLEAR,
    }

    expect(clearAlert()).toEqual(expectedAction)
  })
})
