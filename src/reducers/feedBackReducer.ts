/**
 * @module reducer/feedback
 * @desc Redux feedback reducer
 */
import { feedbackType } from '../types/types'
import { FeedbackState, FeedbackAction } from '../types/state'

const initialState: FeedbackState = {
  currentFeedback: undefined,
  loading: false,
  feedbacks: [],
}

/**
 * @function
 * @desc feedback reducer that controls feedback states
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const feedBackReducer = (state = initialState, action: FeedbackAction): FeedbackState => {
  switch (action.type) {
    case feedbackType.FEEDBACK_GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case feedbackType.FEEDBACK_GET_ALL_SUCCESS: {
      return {
        ...state,
        feedbacks: action.data,
        loading: false,
      }
    }
    case feedbackType.FEEDBACK_ACTION_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      }
    }
    case feedbackType.FEEDBACK_GET_CURRENT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case feedbackType.FEEDBACK_GET_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentFeedback: action.data,
      }
    }
    case feedbackType.FEEDBACK_POSTED_REQUEST: {
      return {
        ...state,
        currentFeedback: action.data,
        loading: true,
      }
    }
    case feedbackType.FEEDBACK_POSTED_SUCCESS: {
      return {
        ...state,
        loading: false,
        feedbacks: [...state.feedbacks, action.data],
      }
    }
    case feedbackType.FEEDBACK_UPDATED_REQUEST: {
      return {
        ...state,
        currentFeedback: action.data,
        loading: true,
      }
    }
    case feedbackType.FEEDBACK_UPDATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentFeedback: action.data,
      }
    }
    default:
      return state
  }
}
export default feedBackReducer
// comment
