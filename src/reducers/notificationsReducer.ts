/**
 * @module reducer/notifications
 * @desc Redux alert reducer
 */
import { NotificationsState, NotificationsActions, CLEAR_ALL_NOTIFICATION } from '../types/state'

const initialState: NotificationsState = {
  notifications: [],
}

const notificationsReducer = (
  state: NotificationsState = initialState,
  action: NotificationsActions,
) => {
  switch (action.type) {
    case CLEAR_ALL_NOTIFICATION:
      return {
        ...state,
        notifications: action.data,
      }
    default:
      return state
  }
}

export default notificationsReducer
