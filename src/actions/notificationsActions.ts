/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import { Dispatch } from 'redux'
import notificationsService from '../services/notificationsService'
import {
  POST_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
  READ_NOTIFICATIONS,
  CLEAR_ALL_NOTIFICATION,
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

/**
 * @function
 * @desc Post new notifications document to database.
 * Used when new user registers to application.
 */
export const postNotifications = () => async (dispatch: any) => {
  const res = await notificationsService.postNotifications()
  if (res.status === 200) dispatch({ type: POST_NOTIFICATIONS, data: res.data })
}

/**
 * @function
 * @desc Update notifications document. This is used when new message to
 * notifications document is added.
 */
export const updateNotifications =
  (userId: string, notificationMessage: string) => async (dispatch: any) => {
    const res = await notificationsService.updateNotifications(userId, notificationMessage)
    if (res.status === 200) dispatch({ type: UPDATE_NOTIFICATIONS, data: res.data })
  }

/**
 * @function
 * @desc Updates notifications document. Moves object inside unread_messages array to
 * read_messages array.
 */
export const readNotifications = (textId: string) => async (dispatch: any) => {
  const res = await notificationsService.readNotifications(textId)
  if (res.status === 200) dispatch({ type: READ_NOTIFICATIONS, data: res.data })
}

/**
 * @function
 * @desc Updates notifications document. Moves all notifications from unread_messages array to
 * read_messages array. Used when user presses clearAll button in notifications view.
 */
export const clearAllNotifications = (clearAllArray: []) => async (dispatch: any) => {
  const res = await notificationsService.clearAllNotifications(clearAllArray)
  if (res.status === 200) dispatch({ type: CLEAR_ALL_NOTIFICATION, data: res.data })
}
