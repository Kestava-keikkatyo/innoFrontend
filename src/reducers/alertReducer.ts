/**
 * @module reducer/alert
 * @desc Redux alert reducer
 */
import { AlertActionTypes, AlertState, ALERT_CLEAR, ALERT_SET } from '../types/state'
import { severity } from '../types/types'

const initialState: AlertState = {
  severity: severity.Info,
  message: '',
  open: false,
}

/**
 * @function
 * @desc alert reducer that controls alert state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const alertReducer = (state = initialState, action: AlertActionTypes) => {
  switch (action.type) {
    case ALERT_SET:
      return {
        severity: action.data.severity,
        message: action.data.message,
        open: true
      }
    case ALERT_CLEAR:
      return {
        ...state, open: false
      }
    default:
      return state
  }
}

export default alertReducer
