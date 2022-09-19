/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import { Dispatch } from 'redux'
import notificationsService from '../services/notificationsService'
import {
  NotificationActionFailure,
  NotificationGetAllRequest,
  NotificationGetAllSuccess,
  NotificationCleared,
} from '../types/state'
import { notificationType, severity, Notification } from '../types/types'
import { setAlert } from './alertActions'

/**
 * @function
 * @desc Fetches user's notifications.
 */
export const fetchNotifications =
  () =>
  async (
    dispatch: Dispatch<
      NotificationGetAllRequest | NotificationGetAllSuccess | NotificationActionFailure
    >,
  ) => {
    try {
      dispatch({
        type: notificationType.NOTIFICATION_GET_ALL_REQUEST,
      })
      const res = await notificationsService.fetchNotifications()
      dispatch({
        type: notificationType.NOTIFICATION_GET_ALL_SUCCESS,
        data: res.data,
      })
    } catch (e) {
      dispatch({
        type: notificationType.NOTIFICATION_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch work requests!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Delete notification by Id
 */
export const clearNotification =
  (notification: Notification) =>
  async (dispatch: Dispatch<NotificationCleared | NotificationActionFailure>) => {
    try {
      dispatch({
        type: notificationType.NOTIFICATION_CLEARED_REQUEST,
        data: notification,
      })
      const data = await notificationsService.clearNotification(notification._id as string)
      dispatch({ type: notificationType.NOTIFICATION_CLEARED_SUCCESS, data: notification })
      setAlert('Notification was cleared successfully!')
      console.log('cleared data', data)
    } catch (e) {
      dispatch({
        type: notificationType.NOTIFICATION_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to delete this notification!: ' + e, severity.Error, 15)(dispatch)
    }
  }
