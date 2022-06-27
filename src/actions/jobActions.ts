import jobService from '../services/jobService'
import { Job, jobType, severity } from '../types/types'
import { setAlert } from './alertActions'
import history from '../utils/history'
import { Dispatch } from 'redux'
import {
  JobActionFailure,
  JobGetAllRequest,
  JobGetAllSuccess,
  JobGetCurrentRequest,
  JobGetCurrentSuccess,
  JobSimilarActions,
} from '../types/state'

/**
 * @function
 * @desc Fetches all jobs.
 */
export const fetchAllJobAds =
  () => async (dispatch: Dispatch<JobGetAllRequest | JobGetAllSuccess | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_GET_ALL_REQUEST,
      })
      const res = await jobService.fetchAllJobAds()
      dispatch({ type: jobType.JOB_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch JOBS!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches creater's jobs.
 */
export const fetchAllMyJobs =
  () => async (dispatch: Dispatch<JobGetAllRequest | JobGetAllSuccess | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_GET_ALL_REQUEST,
      })
      const res = await jobService.fetchAllMyJobs()
      dispatch({ type: jobType.JOB_GET_ALL_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch jobs!: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches user's created job by Id.
 */
export const fetchMyJobById =
  (id: string) =>
  async (dispatch: Dispatch<JobGetCurrentRequest | JobGetCurrentSuccess | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_GET_CURRENT_REQUEST,
      })
      const res = await jobService.fetchMyJobById(id)
      dispatch({ type: jobType.JOB_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the job: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Fetches jod by Id.
 */
export const fetchJobById =
  (id: string) =>
  async (dispatch: Dispatch<JobGetCurrentRequest | JobGetCurrentSuccess | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_GET_CURRENT_REQUEST,
      })
      const res = await jobService.fetchJobById(id)
      dispatch({ type: jobType.JOB_GET_CURRENT_SUCCESS, data: res.data })
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to fetch the job: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc Delete job by Id
 */
export const DeleteJobById =
  (job: Job) => async (dispatch: Dispatch<JobSimilarActions | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_DELETED_REQUEST,
        data: job,
      })
      await jobService.deleteJob(job._id as string)
      dispatch({ type: jobType.JOB_DELETED_SUCCESS, data: job })
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to delete the job: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * Create job
 * @function
 * @param {Object} job - Basic job information (title, cayegory, location...)
 * @param {string} role - Agency
 */
export const createJob =
  (job: Job) => async (dispatch: Dispatch<JobSimilarActions | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_CREATED_REQUEST,
        data: job,
      })

      const { data } = await jobService.createJob(job)
      dispatch({
        type: jobType.JOB_CREATED_SUCCESS,
        data,
      })
      setAlert('Job created successfully!')
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to create the job: ' + e, severity.Error, 15)(dispatch)
    }
  }

/**
 * @function
 * @desc update job.
 */
export const updateJob =
  (jobId: string, job: Job) => async (dispatch: Dispatch<JobSimilarActions | JobActionFailure>) => {
    try {
      dispatch({
        type: jobType.JOB_UPDATED_REQUEST,
        data: job,
      })

      const res = await jobService.updateJob(job)
      dispatch({ type: jobType.JOB_UPDATED_SUCCESS, data: res.data })

      history.push('/job?tab=my')
    } catch (e) {
      dispatch({
        type: jobType.JOB_ACTION_FAILURE,
        data: e as string,
      })
      setAlert('Failed to update user: ' + e, severity.Error, 15)(dispatch)
    }
  }
