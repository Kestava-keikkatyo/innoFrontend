/**
 * @module reducer/job
 * @desc Redux job reducer
 */
import { jobType } from '../types/types'
import { JobState, JobActions } from './../types/state'

const initialState: JobState = {
  currentJob: undefined,
  loading: false,
  jobs: [],
}

/**
 * @function
 * @desc job reducer that controls job state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const jobReducer = (state = initialState, action: JobActions): JobState => {
  switch (action.type) {
    case jobType.JOB_GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case jobType.JOB_GET_ALL_SUCCESS: {
      return {
        ...state,
        jobs: action.data,
        loading: false,
      }
    }
    case jobType.JOB_ACTION_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      }
    }
    case jobType.JOB_GET_CURRENT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case jobType.JOB_GET_CURRENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentJob: action.data,
      }
    }
    case jobType.JOB_DELETED_SUCCESS: {
      return {
        ...state,
        jobs: state.jobs.filter((item) => item._id !== action.data._id),
      }
    }
    case jobType.JOB_CREATED_REQUEST: {
      return {
        ...state,
        currentJob: action.data,
        loading: true,
      }
    }
    case jobType.JOB_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, action.data],
      }
    }
    case jobType.JOB_UPDATED_REQUEST: {
      return {
        ...state,
        currentJob: action.data,
        loading: true,
      }
    }
    case jobType.JOB_UPDATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentJob: action.data,
      }
    }
    default:
      return state
  }
}
export default jobReducer
