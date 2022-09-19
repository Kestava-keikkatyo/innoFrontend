import feedBackService from '../services/feedBackService'
import { Feedback, feedbackType, severity } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import { Dispatch } from 'redux'
import {
  FeedbackActionFailure,
  FeedbackGetAllRequest,
  FeedbackGetAllSuccess,
  FeedbackGetCurrentRequest,
  FeedbackGetCurrentSuccess,
  FeedbackSimilarActions,
} from '../types/state'

/**
 * @function
 * @desc Fetches all user's feedbacks.
 */
export const fetchAllMyFeedbacks =
  () =>
  async (
    dispatch: Dispatch<FeedbackGetAllRequest | FeedbackGetAllSuccess | FeedbackActionFailure>,
  ) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_GET_ALL_REQUEST,
      })
      const res = await feedBackService.fetchAllMyFeedbacks()
      dispatch({ type: feedbackType.FEEDBACK_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch feedbacks!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches all feedbacks for admin.
 */
export const fetchAllFeedbacksForAdmin =
  () =>
  async (
    dispatch: Dispatch<FeedbackGetAllRequest | FeedbackGetAllSuccess | FeedbackActionFailure>,
  ) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_GET_ALL_REQUEST,
      })
      const res = await feedBackService.fetchAllFeedbacksForAdmin()
      dispatch({ type: feedbackType.FEEDBACK_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch feedbacks!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches feedback by Id for creator.
 */
export const fetchMyFeedbackById =
  (id: string) =>
  async (
    dispatch: Dispatch<
      FeedbackGetCurrentRequest | FeedbackGetCurrentSuccess | FeedbackActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_GET_CURRENT_REQUEST,
      })
      const res = await feedBackService.fetchMyFeedbackById(id)
      dispatch({
        type: feedbackType.FEEDBACK_GET_CURRENT_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the feedback: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches feedback by Id for admin.
 */
export const fetchFeedbackById =
  (id: string) =>
  async (
    dispatch: Dispatch<
      FeedbackGetCurrentRequest | FeedbackGetCurrentSuccess | FeedbackActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_GET_CURRENT_REQUEST,
      })
      const res = await feedBackService.fetchFeedbackById(id)
      dispatch({
        type: feedbackType.FEEDBACK_GET_CURRENT_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the feedback: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * Send feedback
 * @function
 * @param {Object} feedback - Basic feedback information (heading, message)
 * @param {string} role - user
 */
export const createFeedback =
  (feedback: Feedback) =>
  async (dispatch: Dispatch<FeedbackSimilarActions | FeedbackActionFailure>) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_POSTED_REQUEST,
        data: feedback,
      })

      const { data } = await feedBackService.createFeedback(feedback)
      dispatch({
        type: feedbackType.FEEDBACK_POSTED_SUCCESS,
        data,
      })
      setAlert('Feedback was sent successfully!')(dispatch)
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to send feedback: ' + e, severity.Error, 15)(dispatch)
      return e
    }
  }

/**
 * @function
 * @desc update feedback.
 */
export const updateFeedback =
  (feedback: Feedback) =>
  async (dispatch: Dispatch<FeedbackSimilarActions | FeedbackActionFailure>) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_UPDATED_REQUEST,
        data: feedback,
      })

      const res = await feedBackService.updateFeedback(feedback)
      dispatch({
        type: feedbackType.FEEDBACK_UPDATED_SUCCESS,
        data: res.data,
      })

      history.push('/feedback?tab=my')
    } catch (e) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to update feedback: ' + e, severity.Error, 15)(dispatch)
    }
  }
