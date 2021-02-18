/**
 * Redux alert actions
 * @module actions/alertActions
 */
import alertConstants from '../constants/alertConstants'

let timeoutId

/**
 * Sets alert that is shown inside a {@link https://material-ui.com/components/snackbars/|MUI snackbar component}
 * @function
 * @param {string} message - text that alert displays (displayed in MUI snackbar)
 * @param {string} [severity=info] - alert severity (error, warning, info, success)
 * @param {number} [duration=5]  - amount of time the alert is shown in seconds
 */
export const setAlert = (message, severity = 'info', duration = 5) => async dispatch => {
  dispatch({
    type: alertConstants.SET,
    message,
    severity
  })

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    dispatch({
      type: alertConstants.CLEAR
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
    type: alertConstants.CLEAR,
  }
}