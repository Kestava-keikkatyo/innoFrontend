/**
 * @module service/feedback
 * @desc FeedBack requests to backend.
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
 * @desc Back end call function that is used to post new feedback from user.
 * @param message - String message from user. 
 */
const postFeedBack = async (message:String, heading:String) => {
  try {
    return await axios.post(`${baseUrl}/feedback/post`,{message, heading}, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}
/**
 * @function
 * @desc Back end call function that is used to get all logged in users feedbacks.
 */
const getUserFeedBacks = async () => {
  try {
    return await axios.get(`${baseUrl}/feedback/get`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {postFeedBack,getUserFeedBacks}