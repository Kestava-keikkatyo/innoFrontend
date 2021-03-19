/**
 * @module reducer/breadcrumb
 * @desc Redux breadcrumb reducer
 */
import { BreadcrumbActionTypes, BREADCRUMB_ADD, BREADCRUMB_SET } from "../types/state"
import { BreadcrumbLink } from "../types/types"

/**
 * @function
 * @desc breadcrumb reducer that controls breadcrumb state
 * @param {BreadcrumbLink[]} state - current state
 * @param {BreadcrumbActionTypes} action - dispatched action
 */
const breadcrumbReducer = (state: BreadcrumbLink[] = [], action: BreadcrumbActionTypes) => {
  switch (action.type) {
    case BREADCRUMB_SET:
      return action.data
    case BREADCRUMB_ADD:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

export default breadcrumbReducer