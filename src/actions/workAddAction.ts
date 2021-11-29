/**
 * @module actions/WorkAddActions
 * @desc Redux WorkAddActions actions
 */

import workAddService from "../services/workAddService"
import { ADD_WORK_TASK, W_FETCH } from "../types/state"

export const postWorkTask = (workTask: any) => async (dispatch: any) => {
  const res = await workAddService.postWorkTask(workTask)
  if (res?.status === 200) dispatch({ type: ADD_WORK_TASK, data: res.data })
}

/**
 * @function
 * @desc searches for all work contracts
 */
export const fetchWorkContracts = () => async (dispatch: any) => {
  const res = await workAddService.fetchWorkContracts()
  console.log("response ", res)
  dispatch({ type: W_FETCH, data: res })
}
