/**
 * @module service/workRequest
 * @desc WorkRequest requests to backend.
 */
import axios from 'axios'
import { WorkRequest } from '../types/types'
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
 * @desc send work request.
 * @param {WorkRequest} workRequest - Basic work request information.
 */
const sendWorkRequest = async (workRequest: WorkRequest) => {
  return await axios.post(`${baseUrl}/workRequest/`, workRequest, authHeader())
}

/**
 * @function
 * @desc Fetches user's work requests.
 */
const fetchMyWorkRequests = async () => {
  const res = await axios.get(`${baseUrl}/workRequest/myWorkRequests`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches user's received work requests.
 */
const fetchReceivedWorkRequests = async () => {
  const res = await axios.get(`${baseUrl}/workRequest/received`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchWorkRequestById
 */
const fetchWorkRequestById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/workRequest/any/${id}`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchReceivedWorkRequestById
 */
const fetchReceivedWorkRequestById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/workRequest/received/any/${id}`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const updateWorkRequest = async (workRequest: WorkRequest) => {
  const res = await axios.put(
    `${baseUrl}/workRequest/update/${workRequest._id}`,
    workRequest,
    authHeader(),
  )
  return res.data
}

export default {
  sendWorkRequest,
  fetchMyWorkRequests,
  fetchReceivedWorkRequests,
  fetchWorkRequestById,
  fetchReceivedWorkRequestById,
  updateWorkRequest,
}
