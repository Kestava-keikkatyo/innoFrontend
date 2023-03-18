/**
 * @module service/uers
 * @desc Users requests to backend.
 */
import axios from 'axios'
import { User } from '../types/types'
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
 * @function
 * @desc Fetches all users that have a signed agreement with agency
 */
const fetchAgencyContacts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/user/agencyContacts`, authHeader());
    return res.data;
  } catch (error) {
    return { docs: []};
  }
}

/**
 * @function
 * @desc Fetches all users that have a signed agreement with business
 */
const fetchBusinessContacts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/user/businessContacts`, authHeader());
    return res.data;
  } catch (error) {
    return { docs: []};
  }
}

/**
 * @function
 * @desc Fetches all users that have a signed agreement with worker
 */
const fetchWorkerContacts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/user/workerContacts`, authHeader());
    return res.data;
  } catch (error) {
    return { docs: []};
  }
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
 * @desc Fetch the latest joined workers.
 * @returns the latest joined workers.
 */
const fetchLatestJoinedWorkers = async () => {
  const res = await axios.get(`${baseUrl}/user/workers/latest`, authHeader())
  return res
}

/**
 * @function
 * @desc fetchUserById
 */
const showMyProfile = async (id: string) => {
  const res = await axios.get(`${baseUrl}/me/${id}`, authHeader())
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
 * @function
 * @desc Gets all businesses.
 * @returns all businesses.
 */
const fetchAllBusinesses = async () => {
  const res = await axios.get(`${baseUrl}/user/businesses`, authHeader())
  return res
}

/**
 * @function
 * @desc Gets all agencies.
 * @returns all agencies.
 */
const fetchAllBusinessesAndAgencies = async () => {
  const res = await axios.get(`${baseUrl}/user/businessesAndAgencies`, authHeader())
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
 * @param id
 * @returns
 */
const changePassword = async (newPassword: string, currentPassword: string) => {
  const res = await axios.put(
    `${baseUrl}/authentication/changePassword`,
    { newPassword, currentPassword },
    authHeader(),
  )
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

/**
 * @function
 * @desc Search user by name.
 * @returns all agencies.
 */
const searchUserByName = async (input: string) => {
  const res = await axios.get(`${baseUrl}/user/any/name=${input}`, authHeader())
  return res
}

export default {
  fetchAllUsers,
  fetchUserById,
  deleteUser,
  fetchAllWorkers,
  fetchLatestJoinedWorkers,
  showMyProfile,
  fetchAllAgencies,
  fetchAllBusinesses,
  fetchAllBusinessesAndAgencies,
  fetchAgencyContacts,
  fetchBusinessContacts,
  fetchWorkerContacts,
  updateUser,
  createUser,
  setUserStatus,
  searchUserByName,
  changePassword,
}
