/**
 * @module reducer/notification
 * @desc Redux notification reducer
 */
import { notificationType } from '../types/types'
import { NotificationsAction, NotificationState } from './../types/state'

const initialState: NotificationState = {
  loading: false,
  notifications: [],
}

/**
 * @function
 * @desc Notification reducer that controls notification state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const notificationReducer = (
  state = initialState,
  action: NotificationsAction,
): NotificationState => {
  switch (action.type) {
    case notificationType.NOTIFICATION_ACTION_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      }
    }
    case notificationType.NOTIFICATION_GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case notificationType.NOTIFICATION_GET_ALL_SUCCESS: {
      return {
        ...state,
        notifications: action.data,
        loading: false,
      }
    }
    case notificationType.NOTIFICATION_CLEARED_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case notificationType.NOTIFICATION_CLEARED_SUCCESS: {
      return {
        ...state,
        loading: false,
        notifications: state.notifications.filter((item) => item._id !== action.data._id),
      }
    }
    default:
      return state
  }
}
export default notificationReducer
