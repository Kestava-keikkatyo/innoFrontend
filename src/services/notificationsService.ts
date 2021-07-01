/**
 * @module service/notifications
 * @desc Notifications requests to backend.
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'
import baseUrl from '../utils/baseUrl'


/**
* @function
* @desc Helper function for setting up request header.
*/
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

/**
 * @function
 * @desc Gets users notifications by users token.
 * Works for all users.
 */
const fetchNotifications = async () => {
  try {
    return await axios.get(
      `${baseUrl}/notifications/get`,
      authHeader()
    )
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Post notifications document for user.
 * This is used when user first registers to application.
 */
const postNotifications = async () => {
  try {
    return await axios.post(
      `${baseUrl}/notifications/post`,
      {},
      authHeader()
    )
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Updates notifications message array list.
 * Used when new notifications message is added to user.
 */
const updateNotifications = async (userId:string,notificationMessage:string) => {
  try {
    return await axios.put(
      `${baseUrl}/notifications/${userId}/update`,
      {notificationMessage},
      authHeader()
    )
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Updates notifications message array lists object.
 * When user clicks notifications message text in user interface,
 * this function is used to mark message as read.
 */
const readNotifications = (textId:string) => {
  try {
    return axios.put(
      `${baseUrl}/notifications/${textId}/read`,
      {},
      authHeader()
    )
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  fetchNotifications,
  postNotifications,
  updateNotifications,
  readNotifications
}