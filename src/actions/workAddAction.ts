/**
 * @module actions/WorkAddActions
 * @desc Redux WorkAddActions actions
 */

import workAddService from "../services/workAddService"
import { ADD_WORK_TASK } from "../types/state"

export const postWorkTask = (workTask: any) => async (dispatch: any) => {
  const res = await workAddService.postWorkTask(workTask)
  if (res?.status === 200) dispatch({ type: ADD_WORK_TASK, data: res.data })
}
