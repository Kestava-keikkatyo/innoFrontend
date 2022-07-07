import { severity, Responsibility, responsibilityType } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import { Dispatch } from 'redux'
import {
  ResponsibilityActionFailure,
  ResponsibilityGetAllRequest,
  ResponsibilityGetAllSuccess,
  ResponsibilityGetCurrentRequest,
  ResponsibilityGetCurrentSuccess,
  ResponsibilitySimilarActions,
} from '../types/state'
import responsibilityService from '../services/responsibilityService'

/**
 * Create responsibility
 * @function
 * @param {Object} responsibility - Basic responsibility information (responsible, rule)
 * @param {string} role - Admin
 */
export const createResponsibility =
  (responsibility: Responsibility) =>
  async (dispatch: Dispatch<ResponsibilitySimilarActions | ResponsibilityActionFailure>) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_CREATED_REQUEST,
        data: responsibility,
      })

      const { data } = await responsibilityService.createResponsibility(responsibility)
      dispatch({
        type: responsibilityType.RESPONSIBILITY_CREATED_SUCCESS,
        data,
      })
      setAlert('Responsibility created successfully!')(dispatch)
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to create the responsibility: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Delete responsibility by Id
 */
export const deleteResponsibility =
  (responsibility: Responsibility) =>
  async (dispatch: Dispatch<ResponsibilitySimilarActions | ResponsibilityActionFailure>) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_DELETED_REQUEST,
        data: responsibility,
      })
      await responsibilityService.deleteResponsibility(responsibility._id as string)
      dispatch({ type: responsibilityType.RESPONSIBILITY_DELETED_SUCCESS, data: responsibility })
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to delete the responsibility!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all responsibilities.
 */
export const fetchAllResponsibilities =
  () =>
  async (
    dispatch: Dispatch<
      ResponsibilityGetAllRequest | ResponsibilityGetAllSuccess | ResponsibilityActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_GETALL_REQUEST,
      })
      const res = await responsibilityService.fetchAllResponsibilities()
      dispatch({ type: responsibilityType.RESPONSIBILITY_GETALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch all the responsibilities!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all responsibilities for target user.
 */
export const fetchMyResponsibilities =
  () =>
  async (
    dispatch: Dispatch<
      ResponsibilityGetAllRequest | ResponsibilityGetAllSuccess | ResponsibilityActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_GETALL_REQUEST,
      })
      const res = await responsibilityService.fetchMyResponsibilities()
      dispatch({ type: responsibilityType.RESPONSIBILITY_GETALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch all the responsibilities!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches responsibility by Id.
 */
export const fetchResponsibilityById =
  (id: string) =>
  async (
    dispatch: Dispatch<
      | ResponsibilityGetCurrentRequest
      | ResponsibilityGetCurrentSuccess
      | ResponsibilityActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_GET_CURRENT_REQUEST,
      })
      const res = await responsibilityService.fetchResponsibilityById(id)
      dispatch({ type: responsibilityType.RESPONSIBILITY_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the responsibility: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc update responsibility.
 */
export const updateResponsibility =
  (responsibility: Responsibility) =>
  async (dispatch: Dispatch<ResponsibilitySimilarActions | ResponsibilityActionFailure>) => {
    try {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_UPDATED_REQUEST,
        data: responsibility,
      })

      const res = await responsibilityService.updateResponsibility(responsibility)
      dispatch({ type: responsibilityType.RESPONSIBILITY_UPDATED_SUCCESS, data: res.data })
      history.push('/responsibilities')
    } catch (e) {
      dispatch({
        type: responsibilityType.RESPONSIBILITY_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to update responsibility: ' + e, severity.Error, 15)(dispatch)
    }
  }
