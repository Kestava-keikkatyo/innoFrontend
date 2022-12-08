/**
 * @module service/users
 * @desc Users requests to backend.
 */
import axios from 'axios';
import { User } from '../types/types';
import baseUrl from '../utils/baseUrl';
import { loadUser } from '../utils/storage';

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
  return await axios.get(`${baseUrl}/user/allUsersForAdmin`, authHeader())
}

/**
 * @function
 * @desc fetchUserById
 */
const fetchUserById = async (id: string) => {
  return await axios.get(`${baseUrl}/user/any/${id}`, authHeader())
}

/**
 * @returns
 * @param userId - ID of the user
 */
const deleteUser = async (userId: string) => {
  return await axios.delete(`${baseUrl}/user/delete/${userId}`, authHeader())
}

/**
 * @function
 * @desc Gets all workers.
 * @returns all workers.
 */
const fetchAllWorkers = async () => {
  return await axios.get(`${baseUrl}/user/workers`, authHeader())
}

/**
 * @function
 * @desc Fetch the latest joined workers.
 * @returns the latest joined workers.
 */
const fetchLatestJoinedWorkers = async () => {
  return await axios.get(`${baseUrl}/user/workers/latest`, authHeader())
}

/**
 * @function
 * @desc fetchUserById
 */
const showMyProfile = async (id: string) => {
  return await axios.get(`${baseUrl}/me/${id}`, authHeader())
}

/**
 * @function
 * @desc Gets all agencies.
 * @returns all agencies.
 */
const fetchAllAgencies = async () => {
  return await axios.get(`${baseUrl}/user/agencies`, authHeader())
}

/**
 * @function
 * @desc Gets all businesses.
 * @returns all businesses.
 */
const fetchAllBusinesses = async () => {
  return await axios.get(`${baseUrl}/user/businesses`, authHeader())
}

const assignWorkerToBusiness = async (userId: string, businessId: string) => {
  const res = await axios.put(`${baseUrl}/user/assign/${userId}`, { businessId }, authHeader())
  return res.data
}

/**
 * @returns
 * @param user - User to be updated
 */
const updateUser = async (user: User) => {
  const res = await axios.put(`${baseUrl}/user/${user._id}`, user, authHeader())
  return res.data
}

/**
 * @returns
 * @param newPassword - New password of the user
 * @param currentPassword - Current password of the user
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
 * @param name - Name of the user
 * @param email - Email of the user
 * @param userType - User type
 * @param password - Password of the user
 */
const createUser = async (name: string, email: string, userType: string, password: string) => {
  return await axios.post(
    `${baseUrl}/user/create`,
    { name, email, userType, password },
    authHeader(),
  )
}

/**
 * @returns
 * @param userId - ID of the user
 * @param active - Status to be set
 */
const setUserStatus = async (userId: string, active: boolean) => {
  return await axios.patch(`${baseUrl}/user/updateStatus/${userId}`, { active }, authHeader())
}

/**
 * @function
 * @desc Search user by name.
 * @returns all agencies.
 */
const searchUserByName = async (input: string) => {
  return await axios.get(`${baseUrl}/user/any/name=${input}`, authHeader())
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
  assignWorkerToBusiness,
  updateUser,
  createUser,
  setUserStatus,
  searchUserByName,
  changePassword,
}
