/**
 * @module reducer/admin
 * @desc Redux admin reducer
 */
 import { AdminAction } from '../types/state'
 import { AdminActionType, roles } from '../types/types'
 import { Worker } from "../types/types";

const initialState: Worker = {
  name: "",
  email: "",
  userType: roles.Worker,
  active: true,
  profile: {}
 };

/**
* @function
* @desc admin reducer that controls user state
* @param {Object} state - current state
* @param {AdminActionTypes} action - dispatched action
*/

const adminReducer = (state = initialState, action: AdminAction) => {
  switch (action.type) {
    case AdminActionType.WORKERS_FETCH:
    return {
      ...state,
      data: action.data
    }
    case AdminActionType.WORKER_UPDATE:
    return {
      ...state,
      data: action.data
    }
  }
};
  
export default adminReducer