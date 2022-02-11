/**
 * @module reducer/notifications
 * @desc Redux alert reducer
 */
import {
  FETCH_NOTIFICATIONS,
  POST_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS,
  READ_NOTIFICATIONS,
  NotificationsState,
  NotificationsActions,
  CLEAR_ALL_NOTIFICATION,
} from "../types/state";

const initialState: NotificationsState = {
  notifications: {},
};

const notificationsReducer = (
  state: NotificationsState = initialState,
  action: NotificationsActions
) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.data,
      };
    case POST_NOTIFICATIONS:
      return {
        ...state,
      };
    case UPDATE_NOTIFICATIONS:
      return {
        ...state,
      };
    case READ_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.data,
      };
    case CLEAR_ALL_NOTIFICATION:
      return {
        ...state,
        notifications: action.data,
      };
    default:
      return state;
  }
};

export default notificationsReducer;
