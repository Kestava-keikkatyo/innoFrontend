/**
 * @module reducer/job
 * @desc Redux job reducer
 */
import {
  JobState,
  JobActions,
  GETALLJOBS_SUCCESS,
  SET_CURRENT_JOB,
  GETALLJOBS_FAILURE,
} from "./../types/state";
import { Job } from "../types/types";

export const initialJob: Job = {
  jobTitle: "",
  jobCategory: "",
  details: "",
  requirements: "",
};

const initialState: JobState = {
  currentJob: initialJob,
  jobs: [],
};

/**
 * @function
 * @desc job reducer that controls job state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const jobReducer = (state = initialState, action: JobActions) => {
  switch (action.type) {
    case GETALLJOBS_SUCCESS: {
      return {
        ...state,
        jobs: action.data,
      };
    }
    case GETALLJOBS_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
      };
    }
    case SET_CURRENT_JOB:
      return {
        ...state,
        currentJob: action.data,
      };
    default:
      return state;
  }
};
export default jobReducer;
