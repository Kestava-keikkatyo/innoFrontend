/**
 * @module reducer/feedback
 * @desc Redux alert reducer
 */

import {
  FeedBackActions,
  FeedBackState,
  POST_FEEDBACK,
  RESET_FEEDBACK,
  GET_USER_FEEDBACKS,
  GET_ALL_FEEDBACKS,
  SET_CURRENT_FEEDBACK,
} from "../types/state";
import { Feedback } from "../types/types";

export const initialFeedback: Feedback = {
  heading: "",
  message: "",
};

const initialState: FeedBackState = {
  myFeedBacks: [],
  allFeedBacks: [],
  feedBackSaved: false,
  currentFeedback: initialFeedback,
};

const feedBackReducer = (
  state: FeedBackState = initialState,
  action: FeedBackActions
) => {
  switch (action.type) {
    case POST_FEEDBACK:
      return {
        ...state,
        feedBackSaved: true,
      };
    case RESET_FEEDBACK:
      return {
        ...state,
        feedBackSaved: false,
      };
    case GET_USER_FEEDBACKS:
      return {
        ...state,
        myFeedBacks: action.data.reverse(),
      };
    case GET_ALL_FEEDBACKS:
      return {
        ...state,
        allFeedBacks: action.data,
      };
    case SET_CURRENT_FEEDBACK:
      return {
        ...state,
        currentFeedback: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default feedBackReducer;
