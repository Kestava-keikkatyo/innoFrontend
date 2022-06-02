/**
 * @module reducer/workRequest
 * @desc Redux work request reducer
 */
import { workRequestType } from "../types/types";
import { WorkRequestActions, WorkRequestState } from "./../types/state";

const initialState: WorkRequestState = {
  currentWorkRequest: undefined,
  loading: false,
  workRequests: [],
};

/**
 * @function
 * @desc WorkRequest reducer that controls workRequest state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const workRequestReducer = (
  state = initialState,
  action: WorkRequestActions
): WorkRequestState => {
  switch (action.type) {
    case workRequestType.WORKREQUEST_SEND_REQUEST: {
      return {
        ...state,
        currentWorkRequest: action.data,
        loading: true,
      };
    }
    case workRequestType.WORKREQUEST_SEND_SUCCESS: {
      return {
        ...state,
        loading: false,
        workRequests: [...state.workRequests, action.data],
      };
    }
    case workRequestType.WORKREQUEST_SEND_FAILURE: {
      return {
        ...state,
        loading: false,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default workRequestReducer;
