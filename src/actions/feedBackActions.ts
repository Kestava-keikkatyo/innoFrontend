/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import feedBackService from '../services/feedBackService'
import { GET_USER_FEEDBACKS, POST_FEEDBACK } from '../types/state'

export const postFeedBack = (message:String,heading:String) => async (dispatch: any) => {
  const res = await feedBackService.postFeedBack(message,heading)
  if (res.status === 200)
    dispatch({type: POST_FEEDBACK, data: res.data})
}

export const getUserFeedBacks = () => async (dispatch: any) => {
  const res = await feedBackService.getUserFeedBacks()
  if (res.status === 200)
    dispatch({type: GET_USER_FEEDBACKS, data: res.data})
}