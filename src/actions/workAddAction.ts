/**
 * @module actions/WorkAddActions
 * @desc Redux WorkAddActions actions
 */

import workAddService from "../services/workAddService"
import { ADD_WORK_TASK, W_FETCH, ACCEPT_WORKERS } from "../types/state"

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
  dispatch({ type: W_FETCH, data: res })
}


export const acceptWorkersToGig = (contractId: any, contractsId: any, workersId: []) => async (dispatch: any) => {
  const res = await workAddService.addWorkersToGig(contractId, contractsId, workersId)
  console.log("response ", res)
  dispatch({ type: ACCEPT_WORKERS, data: res })
}
