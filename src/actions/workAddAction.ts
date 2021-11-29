/**
 * @module actions/WorkAddActions
 * @desc Redux WorkAddActions actions
 */

import workAddService from "../services/workAddService"
import { ADD_WORK_TASK, FETCH_GIGS } from "../types/state"

export const postWorkTask = (workTask: any) => async (dispatch: any) => {
  const res = await workAddService.postWorkTask(workTask)
  if (res?.status === 200) dispatch({ type: ADD_WORK_TASK, data: res.data })
}

/**
 * @function
 * @desc searches for all work contracts
 */
export const fetchContracts = () => async (dispatch: any) => {
  const res = await workAddService.fetchContracts()
  dispatch({ type: FETCH_GIGS, data: res })
}
