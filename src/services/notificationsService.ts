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
  const res = await axios.get(`${baseUrl}/user/notifications`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const clearNotification = async (notificationId: string) => {
  const res = await axios.delete(
    `${baseUrl}/user/delete/notification/${notificationId}`,
    authHeader(),
  )
  return res
}

export default {
  fetchNotifications,
  clearNotification,
}
