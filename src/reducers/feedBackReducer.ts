/**
 * @module reducer/feedback
 * @desc Redux feedback reducer
 */
import { feedbackType } from "../types/types";
import { FeedbackState, FeedbackAction } from "../types/state";

const initialState: FeedbackState = {
  currentFeedback: undefined,
  loading: false,
  feedbacks: [],
};

/**
 * @function
 * @desc feedback reducer that controls feedback states
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const feedBackReducer = (state = initialState, action: FeedbackAction) => {
  switch (action.type) {
    case feedbackType.FEEDBACK_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case feedbackType.FEEDBACK_GETALL_SUCCESS: {
      return {
        ...state,
        feedbacks: action.data,
        loading: false,
      };
    }
    case feedbackType.FEEDBACK_GETALL_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      };
    }
    case feedbackType.FEEDBACK_CURRENT_REQUEST: {
      return {
        ...state,
        currentFeedback: action.data,
        loading: true,
      };
    }
    case feedbackType.FEEDBACK_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentFeedback: action.data,
      };
    }
    case feedbackType.FEEDBACK_CURRENT_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    case feedbackType.FEEDBACK_SEND_REQUEST: {
      return {
        ...state,
        currentFeedback: action.data,
        loading: true,
      };
    }
    case feedbackType.FEEDBACK_SEND_SUCCESS: {
      return {
        ...state,
        loading: false,
        feedbacks: [...state.feedbacks, action.data],
      };
    }
    case feedbackType.FEEDBACK_SEND_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default feedBackReducer;
// comment
