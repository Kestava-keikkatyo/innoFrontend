/**
 * @module service/myFeeling
 * @desc MyFeeling requests to backend.
 */
import axios from 'axios'
import { MyFeeling } from '../types/types'
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
 * @desc send feeling.
 * @param {MyFeeling} myFeeling - Basic feeling information.
 */
const sendMyFeeling = async (myFeeling: MyFeeling) => {
  return await axios.post(`${baseUrl}/feeling/send`, myFeeling, authHeader())
}

/**
 * @function
 * @desc Fetches worker's feelings.
 */
const fetchMyFeelings = async () => {
  const res = await axios.get(`${baseUrl}/feeling/my`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches received feelings.
 */
const fetchReceivedFeelings = async () => {
  const res = await axios.get(`${baseUrl}/user/received`, authHeader())
  return res
}

export default {
  sendMyFeeling,
  fetchMyFeelings,
  fetchReceivedFeelings,
}
