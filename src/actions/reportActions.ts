/**
 * @module actions/report
 * @desc Redux report actions
 */
import reportService from '../services/reportService'
import { SET_REPORTS, SET_CURRENT_REPORT } from '../types/state'
import { Report } from '../types/types'

/**
 * @function
 * @desc To update/set current report
 */
export const setReport = (report: Report) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_REPORT, data: report })
}

/**
 * @function
 * @desc Fetches all reports available to user.
 */
export const fetchReports = () => async (dispatch: any) => {
  const res = await reportService.getReports()
  dispatch({ type: SET_REPORTS, data: res.data })
}

/**
 * @function
 * @desc Fetches users own reports.
 */
export const getMyReports = () => async (dispatch: any) => {
  try {
    const res = await reportService.getMyReports()
    dispatch({ type: SET_REPORTS, data: res.data })
  } catch (error) {
    console.error(error)
    dispatch({ type: SET_REPORTS, data: [] })
  }
}

/**
 * @function
 * @desc This function posts a new report entry.
 * @param {Report} report
 */
export const submitReport = (report: Report) => async (dispatch: any) => {
  const res = await reportService.postReport(report)
  return res.data
}

/**
 * @function
 * @desc This function sets reply for a report
 * @param {string} id
 * @param {string} reply
 */
export const replyReport =
  (id: string, reply: string, userType: string) => async (dispatch: any) => {
    const res = await reportService.replyReport(id, reply, userType)
    return res.data
  }

/**
 * @function
 * @desc This function sets arcived status for a report
 * @param {string} id
 * @param {string} archived Note: sent as a string
 */
export const archiveReport =
  (id: string, archived: string, userType: string) => async (dispatch: any) => {
    const res = await reportService.archiveReport(id, archived, userType)
    return res.data
  }

export const fetchReportById = (id: string) => async (dispatch: any) => {
  try {
    const data = await reportService.fetchReportById(id)
    dispatch({ type: SET_CURRENT_REPORT, data: data })
  } catch (error) {
    console.error(error)
  }
}

export const fetchAllReports = () => async (dispatch: any) => {
  try {
    const res = await reportService.fetchAllReports()
    dispatch({ type: SET_REPORTS, data: res.data })
  } catch (error) {
    console.error(error)
  }
}

export const clearReports = () => async (dispatch: any) => {
  dispatch({ type: SET_REPORTS, data: [] })
}
