/**
 * @module actions/alert
 * @desc Redux alert actions
 */
import { ALERT_CLEAR, ALERT_SET } from '../types/state'
import { severity as eSeverity } from '../types/types'

let timeoutId: any
//const initialSeverity = severity.Info
/**
 * @function
 * @desc Sets alert that is shown inside a {@link https://material-ui.com/components/snackbars/|MUI snackbar component}
 * @param {string} message - text that alert displays (displayed in MUI snackbar)
 * @param {string} [severity=info] - alert severity (error, warning, info, success)
 * @param {number} [duration=5]  - amount of time the alert is shown in seconds
 */
export const setAlert = (
  message: string,
  severity: eSeverity = eSeverity.Info,
  duration: number = 5
) => async (dispatch: any) => {
  dispatch({
    type: ALERT_SET,
    data: { message, severity },
  })

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    dispatch({
      type: ALERT_CLEAR,
    })
  }, duration * 1000)
}

/**
 * @function
 * @desc Clears alert.
 */
export const clearAlert = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  return {
    type: ALERT_CLEAR,
  }
}
