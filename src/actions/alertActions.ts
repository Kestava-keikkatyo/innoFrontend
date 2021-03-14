/**
 * Redux alert actions
 * @module actions/alertActions
 */

import { ALERT_CLEAR, ALERT_SET } from "../types/state"
import { severity } from "../types/types"


let timeoutId: any
const initialSeverity = severity.Info 
/**
 * Sets alert that is shown inside a {@link https://material-ui.com/components/snackbars/|MUI snackbar component}
 * @function
 * @param {string} message - text that alert displays (displayed in MUI snackbar)
 * @param {string} [severity=info] - alert severity (error, warning, info, success)
 * @param {number} [duration=5]  - amount of time the alert is shown in seconds
 */
export const setAlert = (message: string, severity = initialSeverity, duration: number = 5) => async (dispatch: any) => {
  dispatch({
    type: ALERT_SET,
    data: {message, severity}
  })

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    dispatch({
      type: ALERT_CLEAR
    })
  }, duration * 1000)
}

/**
 * Clears alert.
 * @function
 */
export const clearAlert = () => {

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  return {
    type: ALERT_CLEAR,
  }
}