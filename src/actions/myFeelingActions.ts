import { feelingType, MyFeeling, severity } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import { Dispatch } from 'redux'
import {
  FeelingActionFailure,
  FeelingGetAllRequest,
  FeelingGetAllSuccess,
  FeelingSimilarActions,
} from '../types/state'
import myFeelingService from '../services/myFeelingService'

/**
 * @function
 * @desc Fetches worker's feelings.
 */
export const fetchMyFeelings =
  () =>
  async (
    dispatch: Dispatch<FeelingGetAllRequest | FeelingGetAllSuccess | FeelingActionFailure>,
  ) => {
    try {
      dispatch({
        type: feelingType.FEELING_GET_ALL_REQUEST,
      })
      const res = await myFeelingService.fetchMyFeelings()
      dispatch({ type: feelingType.FEELING_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: feelingType.FEELING_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch feelings!: ' + e, severity.Error, 15)(dispatch)
    }
  }

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
      history.push('/home')
    } catch (e) {
      dispatch({
        type: feelingType.FEELING_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to send feeling!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches worker's feelings.
 */
export const fetchReceivedFeelings =
  () =>
  async (
    dispatch: Dispatch<FeelingGetAllRequest | FeelingGetAllSuccess | FeelingActionFailure>,
  ) => {
    try {
      dispatch({
        type: feelingType.FEELING_GET_ALL_REQUEST,
      })
      const res = await myFeelingService.fetchReceivedFeelings()
      dispatch({ type: feelingType.FEELING_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: feelingType.FEELING_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch feelings!: ' + e, severity.Error, 15)(dispatch)
    }
  }
