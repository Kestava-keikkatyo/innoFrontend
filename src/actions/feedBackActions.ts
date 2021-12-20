/**
 * @module actions/notificationsActions
 * @desc Redux Notifications actions
 */
import feedBackService from "../services/feedBackService";
import {
  GET_ALL_FEEDBACKS,
  GET_USER_FEEDBACKS,
  POST_FEEDBACK,
  SET_CURRENT_FEEDBACK,
} from "../types/state";

export const postFeedBack =
  (message: String, heading: String) => async (dispatch: any) => {
    const res = await feedBackService.postFeedBack(message, heading);
    if (res.status === 200) dispatch({ type: POST_FEEDBACK, data: res.data });
  };

export const getUserFeedBacks = () => async (dispatch: any) => {
  const res = await feedBackService.getUserFeedBacks();
  if (res.status === 200)
    dispatch({ type: GET_USER_FEEDBACKS, data: res.data });
};

export const fetchAllFeedbacks = () => async (dispatch: any) => {
  try {
    const res = await feedBackService.fetchAllFeedbacks();
    dispatch({ type: GET_ALL_FEEDBACKS, data: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFeedbackById = (id: string) => async (dispatch: any) => {
  try {
    const data = await feedBackService.fetchFeedbackById(id);
    console.log("report's data", data);
    dispatch({ type: SET_CURRENT_FEEDBACK, data: data });
  } catch (error) {
    console.log(error);
  }
};
