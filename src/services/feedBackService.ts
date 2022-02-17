/**
 * @module service/feedback
 * @desc Feedback requests to backend.
 */
import axios from "axios";
import { Feedback } from "../types/types";
import baseUrl from "../utils/baseUrl";
import { loadUser } from "../utils/storage";

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { "x-access-token": `${loadUser().token}` },
  };
};

/**
 * @function
 * @desc create feedback request.
 * @param {Feedback} feedback - Basic feedback information.
 */
const createFeedback = async (feedback: Feedback) => {
  return await axios.post(`${baseUrl}/feedback`, feedback, authHeader());
};

/**
 * @function
 * @desc Fetches all feedbacks with current token.
 */
const fetchAllMyFeedbacks = async () => {
  const res = await axios.get(
    `${baseUrl}/feedback/allMyFeedbacks`,
    authHeader()
  );
  return res;
};

/**
 * @function
 * @desc Fetches all feedbacks with current token.
 */
const fetchAllFeedbacksForAdmin = async () => {
  const res = await axios.get(`${baseUrl}/feedback/allFeedbacks`, authHeader());
  return res;
};

/**
 * @function
 * @desc fetchFeedbackById
 */
const fetchFeedbackById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/feedback/${id}`, authHeader());
  return res;
};

export default {
  createFeedback,
  fetchAllMyFeedbacks,
  fetchAllFeedbacksForAdmin,
  fetchFeedbackById,
};
