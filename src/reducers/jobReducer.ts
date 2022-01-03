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
  JOB_DELETED_SUCCESS,
  JOB_DELETED_FAILURE,
} from "./../types/state";
import { Job } from "../types/types";

export const initialJob: Job = {
  _id: "",
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
    case SET_CURRENT_JOB: {
      return {
        ...state,
        currentJob: action.data,
      };
    }
    case JOB_DELETED_SUCCESS: {
      return {
        ...state,
        jobs: state.jobs.filter((item) => item._id !== action.data.id),
      };
    }
    case JOB_DELETED_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
      };
    }
    default:
      return state;
  }
};
export default jobReducer;
