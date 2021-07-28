import axios from 'axios'
import { loadUser } from '../utils/storage'

import baseUrl from '../utils/baseUrl'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
    return {
        headers: { 'x-access-token': `${loadUser().token}`}
    }
}

/**
 * @function
 * @desc Function to get all agencies.
 * @returns all agencies.
 */
const getAllAgencies = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/agencies/all`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Function to get all buisnesses.
 * @returns all businesses.
 */
const getAllBusinesses = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/businesses/all`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Function to get all workers.
 * @returns all workers.
 */
const getAllWorkers = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/workers/all`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Function to search for agencies by name.
 * @returns Agencies with matched names.
 * if name query is blank or undefined, the function retruns all agencies.
 */
const searchAgencies = async (input: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/agencies?name=${input}`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Function to search for businesses by name.
 * @returns Businesses with matched names.
 * if name query is blank or undefined, the function retruns all businesses.
 */
const searchBusinesses = async (input: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/businesses?name=${input}`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Function to search for workers by name.
 * @returns Workers with matched names.
 * if name query is blank or undefined, the function retruns all workers.
 */
const searchWorkers = async (input: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/workers?name=${input}`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
    getAllAgencies,
    getAllBusinesses,
    getAllWorkers,
    searchAgencies,
    searchBusinesses,
    searchWorkers
}