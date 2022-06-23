import workRequestService from '../services/workRequestService'
import { WorkRequest, workRequestType, severity } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import {
  WorkRequestFailure,
  WorkRequestGetAllRequest,
  WorkRequestGetAllSuccess,
  WorkRequestGetCurrent,
  WorkRequestGetCurrentSuccess,
  WorkRequestSimilarActions,
} from '../types/state'
import { Dispatch } from 'redux'

/**
 * Send work request
 * @function
 * @param {Object} workRequest - Basic work request information (headline, workersNumber ...)
 * @param {string} role - Business
 */
export const sendWorkRequest =
  (workrequest: WorkRequest) =>
  async (dispatch: Dispatch<WorkRequestSimilarActions | WorkRequestFailure>) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_SEND_REQUEST,
        data: workrequest,
      })

      const { data } = await workRequestService.sendWorkRequest(workrequest)
      dispatch({
        type: workRequestType.WORKREQUEST_SEND_SUCCESS,
        data,
      })
      setAlert('Work request was sent successfully!')(dispatch)
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e as string,
      })
      setAlert('Failed to send the work request: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user's work requests.
 */
export const fetchMyWorkRequests =
  () =>
  async (
    dispatch: Dispatch<WorkRequestGetAllRequest | WorkRequestGetAllSuccess | WorkRequestFailure>,
  ) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_GETALL_REQUEST,
      })
      const res = await workRequestService.fetchMyWorkRequests()
      dispatch({
        type: workRequestType.WORKREQUEST_GETALL_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch work requests!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user's received work requests.
 */
export const fetchReceivedWorkRequests =
  () =>
  async (
    dispatch: Dispatch<WorkRequestGetAllRequest | WorkRequestGetAllSuccess | WorkRequestFailure>,
  ) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_GETALL_REQUEST,
      })
      const res = await workRequestService.fetchReceivedWorkRequests()
      dispatch({
        type: workRequestType.WORKREQUEST_GETALL_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch received work requests!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches work request by Id.
 */
export const fetchWorkRequestById =
  (id: string) =>
  async (
    dispatch: Dispatch<WorkRequestGetCurrent | WorkRequestGetCurrentSuccess | WorkRequestFailure>,
  ) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_GET_CURRENT_REQUEST,
      })
      const res = await workRequestService.fetchWorkRequestById(id)
      dispatch({
        type: workRequestType.WORKREQUEST_GET_CURRENT_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch WORK REQUEST: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc update work request.
 */
export const updateWorkRequest =
  (workRequest: WorkRequest) =>
  async (dispatch: Dispatch<WorkRequestSimilarActions | WorkRequestFailure>) => {
    try {
      dispatch({
        type: workRequestType.WORKREQUEST_UPDATED_REQUEST,
        data: workRequest,
      })

      const res = await workRequestService.updateWorkRequest(workRequest)
      dispatch({
        type: workRequestType.WORKREQUEST_UPDATED_SUCCESS,
        data: res.data,
      })
      history.push('/workRequests')
    } catch (e) {
      dispatch({
        type: workRequestType.WORKREQUEST_FAILURE,
        data: e as string,
      })
      setAlert('Failed to update work request: ' + e, severity.Error, 15)(dispatch)
    }
  }
