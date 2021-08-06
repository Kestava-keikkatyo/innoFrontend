/**
 * @module actions/report
 * @desc Redux report actions
 */
import reportService from "../services/reportService"
import { SET_REPORTS, SET_CURRENT_REPORT } from "../types/state"
import { Report } from "../types/types"

/**
* @function
* @desc To update/set current report
*/
export const setReport = (report: Report) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_REPORT, data: report })
};

/**
 * @function
 * @desc Fetches all reports.
 */
export const fetchReports = () => async (dispatch: any) => {
  const res = await reportService.getReports()
  dispatch({ type: SET_REPORTS, data: res.data })
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