/**
 * @module reducer/feedback
 * @desc Redux alert reducer
 */

import { FeedBackActions, FeedBackState, POST_FEEDBACK } from "../types/state";

const initialState: FeedBackState = {
  feedBacks: [],
  feedBackSaved: false
}

const feedBackReducer = (state: FeedBackState = initialState, action: FeedBackActions) => {
  switch (action.type) {
    case POST_FEEDBACK: 
      return {
        ...state,
        feedBackSaved: true
      }
    default:
      return {
        ...state
      }  
    }
}

export default feedBackReducer