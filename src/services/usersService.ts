/**
 * @module service/uers
 * @desc Users requests to backend.
 */
import axios from 'axios'
import { User, UserInformation } from '../types/types'
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
 * @desc Fetches all users with current token.
 */
const fetchAllUsers = async () => {
  const res = await axios.get(`${baseUrl}/user/allUsersForAdmin`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchUserById
 */
const fetchUserById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/user/any/${id}`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const deleteUser = async (userId: string) => {
  const res = await axios.delete(`${baseUrl}/user/delete/${userId}`, authHeader())
  return res
}

/**
 * @function
 * @desc Gets all workers.
 * @returns all workers.
 */
const fetchAllWorkers = async () => {
  const res = await axios.get(`${baseUrl}/user/workers`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchUserById
 */
const showMyProfile = async (id: string) => {
  const res = await axios.get(`${baseUrl}/me/`, authHeader())
  return res
}

/**
 * @function
 * @desc Gets all agencies.
 * @returns all agencies.
 */
const fetchAllAgencies = async () => {
  const res = await axios.get(`${baseUrl}/user/agencies`, authHeader())
  return res
}

/**
 * @param id
 * @returns
 */
const updateUser = async (user: User) => {
  const res = await axios.put(`${baseUrl}/user/${user._id}`, user, authHeader())
  return res.data
}

/**
 * @function
 * @desc sends out create user request.
 * @param {User} user - Basic user information.
 * @param {roles} role - Account role to be created (admin).
 */
const createUser = async (name: string, email: string, userType: string, password: string) => {
  return await axios.post(
    `${baseUrl}/user/create`,
    { name, email, userType, password },
    authHeader(),
  )
}

/**
 * @param id
 * @returns
 */
const setUserStatus = async (userId: string, active: boolean) => {
  const res = await axios.patch(`${baseUrl}/user/updateStatus/${userId}`, { active }, authHeader())
  return res
}

export default {
  fetchAllUsers,
  fetchUserById,
  deleteUser,
  fetchAllWorkers,
  showMyProfile,
  fetchAllAgencies,
  updateUser,
  createUser,
  setUserStatus,
}
