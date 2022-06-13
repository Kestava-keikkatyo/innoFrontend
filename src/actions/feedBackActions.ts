import feedBackService from "../services/feedBackService";
import { Feedback, feedbackType, severity } from "../types/types";
import { setAlert } from "./alertActions";
import history from "../utils/history";

/**
 * @function
 * @desc Fetches all user's feedbacks.
 */
export const fetchAllMyFeedbacks = () => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_GET_ALL_REQUEST,
    });
    const res = await feedBackService.fetchAllMyFeedbacks();
    dispatch({ type: feedbackType.FEEDBACK_GET_ALL_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({
      type: feedbackType.FEEDBACK_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch feedbacks!: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Fetches all feedbacks for admin.
 */
export const fetchAllFeedbacksForAdmin = () => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_GET_ALL_REQUEST,
    });
    const res = await feedBackService.fetchAllFeedbacksForAdmin();
    dispatch({ type: feedbackType.FEEDBACK_GET_ALL_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({
      type: feedbackType.FEEDBACK_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to fetch feedbacks!: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc Fetches feedback by Id.
 */
export const fetchFeedbackById = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: feedbackType.FEEDBACK_GET_CURRENT_REQUEST,
    });
    const res = await feedBackService.fetchFeedbackById(id);
    dispatch({
      type: feedbackType.FEEDBACK_GET_CURRENT_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    dispatch({
      type: feedbackType.FEEDBACK_ACTION_FAILURE,
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
      type: feedbackType.FEEDBACK_POSTED_REQUEST,
      data: feedback,
    });

    const { data } = await feedBackService.createFeedback(feedback);
    dispatch({
      type: feedbackType.FEEDBACK_POSTED_SUCCESS,
      data,
    });
    dispatch(setAlert("Feedback was sent successfully!"));
  } catch (e) {
    dispatch({
      type: feedbackType.FEEDBACK_ACTION_FAILURE,
      data: e,
    });
    dispatch(setAlert("Failed to send feedback: " + e, severity.Error, 15));
  }
};

/**
 * @function
 * @desc update feedback.
 */
export const updateFeedback =
  (feedbackId: string, feedback: Feedback) => async (dispatch: any) => {
    try {
      dispatch({
        type: feedbackType.FEEDBACK_UPDATED_REQUEST,
      });

      const res = await feedBackService.updateFeedback(feedbackId, feedback);
      dispatch({
        type: feedbackType.FEEDBACK_UPDATED_SUCCESS,
        data: res.data,
      });

      history.push("/feedbacks");
    } catch (error) {
      dispatch({
        type: feedbackType.FEEDBACK_ACTION_FAILURE,
        data: error,
      });
      dispatch(
        setAlert("Failed to update feedback: " + error, severity.Error, 15)
      );
    }
  };
