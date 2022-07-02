import { feelingType, MyFeeling, severity } from '../types/types'
import { setAlert } from './alertActions'
import { Dispatch } from 'redux'
import { FeelingActionFailure, FeelingSimilarActions } from '../types/state'
import myFeelingService from '../services/myFeelingService'

/**
 * send feeling
 * @function
 * @param {Object} myFeeling - Basic feeling information (comfortable...)
 * @param {string} role - Agency
 */
export const sendMyFeeling =
  (myFeeling: MyFeeling) =>
  async (dispatch: Dispatch<FeelingSimilarActions | FeelingActionFailure>) => {
    try {
      dispatch({
        type: feelingType.FEELING_CREATED_REQUEST,
        data: myFeeling,
      })

      const { data } = await myFeelingService.sendMyFeeling(myFeeling)
      dispatch({
        type: feelingType.FEELING_CREATED_SUCCESS,
        data,
      })
      setAlert('Feeling was sent successfully!')(dispatch)
    } catch (e) {
      dispatch({
        type: feelingType.FEELING_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to send feeling!: ' + e, severity.Error, 15)(dispatch)
    }
  }
