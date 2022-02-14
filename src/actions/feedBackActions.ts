import feedbackService from "../services/feedbackService";
import { Feedback, feedbackType, severity } from "../types/types";
import { setAlert } from "./alertActions";

/**
 * @function
 * @desc Fetches all user's feedbacks.
 */
export const fetchAllMyFeedbacks = () => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_GETALL_REQUEST,
    });
    const res = await feedbackService.fetchAllMyFeedbacks();
    dispatch({ type: feedbackType.FEEDBACK_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: feedbackType.FEEDBACK_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches all feedbacks for admin.
 */
export const fetchAllFeedbacksForAdmin = () => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_GETALL_REQUEST,
    });
    const res = await feedbackService.fetchAllFeedbacksForAdmin();
    dispatch({ type: feedbackType.FEEDBACK_GETALL_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: feedbackType.FEEDBACK_GETALL_FAILURE,
      data: error && error.message,
    });
  }
};

/**
 * @function
 * @desc Fetches feedback by Id.
 */
export const fetchFeedbackById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_CURRENT_REQUEST,
    });
    const res = await feedbackService.fetchFeedbackById(id);
    dispatch({ type: feedbackType.FEEDBACK_CURRENT_SUCCESS, data: res.data });
  } catch (error) {
    dispatch({
      type: feedbackType.FEEDBACK_CURRENT_FAILURE,
      data: error,
    });
    dispatch(
      setAlert("Failed to fetch the feedback: " + error, severity.Error, 15)
    );
  }
};

/**
 * Send feedback
 * @function
 * @param {Object} feedback - Basic feedback information (heading, message)
 * @param {string} role - user
 */
export const createFeedback = (feedback: Feedback) => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_SEND_REQUEST,
      data: feedback,
    });

    const { data } = await feedbackService.createFeedback(feedback);
    dispatch({
      type: feedbackType.FEEDBACK_SEND_SUCCESS,
      data,
    });
    dispatch(setAlert("Feedback sent successfully!"));
    console.log("sent feedback", data);
  } catch (e) {
    dispatch({
      type: feedbackType.FEEDBACK_SEND_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to send feedback: " + e, severity.Error, 15));
  }
};
