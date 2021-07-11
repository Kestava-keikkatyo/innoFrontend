/**
 * @module reducer/feedback
 * @desc Redux alert reducer
 */

import { FeedBackActions, FeedBackState, POST_FEEDBACK, RESET_FEEDBACK, GET_USER_FEEDBACKS, GET_ALL_FEEDBACKS } from "../types/state";

const initialState: FeedBackState = {
  myFeedBacks: [],
  allFeedBacks: [],
  feedBackSaved: false
}

const feedBackReducer = (state: FeedBackState = initialState, action: FeedBackActions) => {
  switch (action.type) {
    case POST_FEEDBACK: 
      return {
        ...state,
        feedBackSaved: true
      }
    case RESET_FEEDBACK:
      return {
        ...state,
        feedBackSaved: false
      }
    case GET_USER_FEEDBACKS: 
      return {
        ...state,
        myFeedBacks: action.data.reverse()
      }
    case GET_ALL_FEEDBACKS:
      return {
        ...state,
        allFeedBacks: action.data
      }       
    default:
      return {
        ...state
      }  
    }
}

export default feedBackReducer