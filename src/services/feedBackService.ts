/**
 * @module service/feedback
 * @desc Feedback requests to backend.
 */
import axios from 'axios'
import { Feedback } from '../types/types'
import baseUrl from '../utils/baseUrl'
import { loadUser } from '../utils/storage'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

/**
 * @function
 * @desc create feedback request.
 * @param {Feedback} feedback - Basic feedback information.
 */
const createFeedback = async (feedback: Feedback) => {
  return await axios.post(`${baseUrl}/feedback/send`, feedback, authHeader())
}

/**
 * @function
 * @desc Fetches all feedbacks with current token.
 */
const fetchFeedbacksAppointedToMe = async () => {
  const res = await axios.get(`${baseUrl}/feedback/appointedToMe`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches all feedbacks with current token.
 */
const fetchAllMyFeedbacks = async () => {
  const res = await axios.get(`${baseUrl}/feedback/allMyFeedbacks`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches all feedbacks with current token.
 */
const fetchAllFeedbacksForAdmin = async () => {
  const res = await axios.get(`${baseUrl}/feedback/all`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchFeedbackById
 */
const fetchMyFeedbackById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/feedback/my/any/${id}`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchFeedbackById
 */
const fetchFeedbackById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/feedback/any/${id}`, authHeader())
  return res
}

/**
 * @returns
 * @param feedback
 * @param feedbackId
 */
const updateFeedback = async (feedback: Feedback, feedbackId: string) => {
  const res = await axios.put(`${baseUrl}/feedback/update/${feedbackId}`, feedback, authHeader())
  return res.data
}

export default {
  createFeedback,
  fetchFeedbacksAppointedToMe,
  fetchAllMyFeedbacks,
  fetchAllFeedbacksForAdmin,
  fetchMyFeedbackById,
  fetchFeedbackById,
  updateFeedback,
}
