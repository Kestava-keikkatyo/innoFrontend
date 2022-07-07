/**
 * @module service/responsibility
 * @desc Responsibility requests to backend.
 */
import axios from 'axios'
import { Responsibility } from '../types/types'
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
 * @desc sends out create responsibility request.
 * @param {Responsibility} responsibility - Basic responsibility information.
 */
const createResponsibility = async (responsibility: Responsibility) => {
  return await axios.post(`${baseUrl}/responsibility/create`, responsibility, authHeader())
}

/**
 * @param id
 * @returns
 */
const deleteResponsibility = async (responsibilityId: string) => {
  const res = await axios.delete(
    `${baseUrl}/responsibility/delete/${responsibilityId}`,
    authHeader(),
  )
  return res
}

/**
 * @function
 * @desc Fetches all avaible Responsibilities with current token.
 */
const fetchAllResponsibilities = async () => {
  const res = await axios.get(`${baseUrl}/responsibility/all`, authHeader())
  return res
}

/**
 * @function
 * @desc Fetches all avaible Responsibilities for traget user.
 */
const fetchMyResponsibilities = async () => {
  const res = await axios.get(`${baseUrl}/responsibility/my`, authHeader())
  return res
}

/**
 * @function
 * @desc fetch responsibility By Id
 */
const fetchResponsibilityById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/responsibility/any/${id}`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const updateResponsibility = async (responsibility: Responsibility) => {
  const res = await axios.put(
    `${baseUrl}/responsibility/update/${responsibility._id}`,
    responsibility,
    authHeader(),
  )
  return res.data
}

export default {
  createResponsibility,
  deleteResponsibility,
  fetchAllResponsibilities,
  fetchMyResponsibilities,
  fetchResponsibilityById,
  updateResponsibility,
}
