/**
 * @module service/worker
 * @desc Worker requests to backend.
 */
import axios from 'axios'
import { Job } from '../types/types'
import baseUrl from '../utils/baseUrl'
import { loadUser } from '../utils/storage'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

/**
 * @function
 * @desc Fetches all jobs avaible with current token.
 */
const fetchAllJobAds = async () => {
  const res = await axios.get(`${baseUrl}/job/ads`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches latest job ads with current token.
 */
const fetchLatestJobAds = async () => {
  const res = await axios.get(`${baseUrl}/job/latest`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches all jobs avaible with current token.
 */
const fetchAllMyJobs = async () => {
  const res = await axios.get(`${baseUrl}/job/my`, authHeader())
  return res
}

/**
 * @function
 * @desc fetches ueser's created job by id
 */
const fetchMyJobById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/job/my/any/${id}`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchJobById
 */
const fetchJobById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/job/any/${id}`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const deleteJob = async (jobId: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/job/jobDelete/${jobId}`, authHeader())
    console.log('delete res', res)
    return res
  } catch (error) {
    console.log(error)
  }
}

/**
 * @function
 * @desc sends out create job request.
 * @param {Job} job - Basic job information.
 */
const createJob = async (job: Job) => {
  return await axios.post(`${baseUrl}/job`, job, authHeader())
}

/**
 * @param id
 * @returns
 */
const updateJob = async (job: Job) => {
  const res = await axios.put(`${baseUrl}/job/jobUpdate/${job._id}`, job, authHeader())
  return res.data
}

export default {
  fetchAllJobAds,
  fetchLatestJobAds,
  fetchMyJobById,
  fetchJobById,
  fetchAllMyJobs,
  deleteJob,
  createJob,
  updateJob,
}
