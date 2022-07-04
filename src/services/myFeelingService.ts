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
  return await axios.put(`${baseUrl}/user/my/feeling`, myFeeling, authHeader())
}

/**
 * @function
 * @desc Fetches worker's feelings.
 */
const fetchMyFeelings = async () => {
  const res = await axios.get(`${baseUrl}/user/my`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const deleteMyFeeling = async (myFeelingId: string) => {
  const res = await axios.delete(`${baseUrl}/user/myFeeling/delete/${myFeelingId}`, authHeader())
  return res
}

export default {
  sendMyFeeling,
  fetchMyFeelings,
  deleteMyFeeling,
}
