/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import notificationsService from '../services/notificationsService'
import { FETCH_NOTIFICATIONS, POST_NOTIFICATIONS, UPDATE_NOTIFICATIONS, READ_NOTIFICATIONS } from '../types/state'
import { } from '../types/types'

/**
 * @function
 * @desc Fetches users notifications.
 */
export const fetchNotifications = () => async (dispatch: any) => {
  const res = await notificationsService.fetchNotifications()
  if (res.status === 200)
    dispatch({type: FETCH_NOTIFICATIONS, data: res.data})
}

/**
 * @function
 * @desc Post new notifications document to database.
 * Used when new user registers to application.
 */
export const postNotifications = () => async (dispatch: any) => {
  const res = await notificationsService.postNotifications()
  if (res.status === 200)
    dispatch({type: POST_NOTIFICATIONS, data: res.data})
}

/**
 * @function
 * @desc Update notifications document. This is used when new message to 
 * notifications document is added.
 */
export const updateNotifications = (userId:string, notificationMessage:string) => async (dispatch: any) => {
  const res = await notificationsService.updateNotifications(userId,notificationMessage)
  if (res.status === 200)
    dispatch({type:UPDATE_NOTIFICATIONS, data: res.data})
}

/**
 * @function
 * @desc Updates notifications document. Marks object inside message array
 * as read. Used when user clicks notifications message in interface.
 */
export const readNotifications = (textId:string) => async (dispatch: any) => {
  const res = await notificationsService.readNotifications(textId)
  if (res.status === 200)
    dispatch({type:READ_NOTIFICATIONS, data: res.data})
}