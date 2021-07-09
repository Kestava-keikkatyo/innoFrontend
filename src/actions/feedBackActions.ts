/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import feedBackService from '../services/feedBackService'
import { POST_FEEDBACK } from '../types/state'

export const postFeedBack = (message:String) => async (dispatch: any) => {
  const res = await feedBackService.postFeedBack(message)
  if (res.status === 200)
    dispatch({type: POST_FEEDBACK, data: res.data})
}