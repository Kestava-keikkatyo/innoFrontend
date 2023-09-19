/**
 * @module service/report
 * @desc Report requests to backend.
 */
import axios from 'axios'
import { Report } from '../types/types'
import { loadUser } from '../utils/storage'
import baseUrl from '../utils/baseUrl'

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
 * @desc Fetches all reports available with current token.
 */
const getReports = async () => {
  try {
    return await axios.get(`${baseUrl}/report/receivedReports`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Fetches users own reports.
 */
const getMyReports = async () => {
  try {
    return await axios.get(`${baseUrl}/report/myReports`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Posts new report to the route.
 * @param {Report} report new Report object
 */
const postReport = async (report: Report) => {
  return await axios.post(`${baseUrl}/report`, report, authHeader())
}

/**
 * @function
 * @desc Sets the reply for a report.
 * @param {string} id
 * @param {string} reply
 */
const replyReport = async (id: string, reply: string) => {
  console.log('reportService: replyReport: reply: ', reply)

  return await axios.put(`${baseUrl}/report/reply/${id}`, { reply: reply }, authHeader())
}

/**
 * @function
 * @desc Sets the archived status for a report.
 * @param {string} id
 * @param {string} archived Note: sent as a string
 */
const archiveReport = async (id: string, archived: string) => {
  return await axios.put(`${baseUrl}/report/archive/${id}/${archived}`, {}, authHeader())
}

/**
 * @function
 * @desc fetchReportById
 */
const fetchReportById = async (id: string) => {
  try {
    const res = await axios.get(`${baseUrl}/admin/report/${id}`, authHeader())
    return res.data
  } catch (error) {
    console.log(error)
    return Promise.reject(error.response)
  }
}

const fetchAllReports = async () => {
  try {
    const res = await axios.get(`${baseUrl}/admin/allReports`, authHeader())
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}
export default {
  getReports,
  getMyReports,
  postReport,
  replyReport,
  archiveReport,
  fetchReportById,
  fetchAllReports,
}
