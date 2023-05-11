/**
 * @module service/user
 * @desc User requests to backend.
 */
import axios from 'axios'
import { Credentials, Email, Token, User } from '../types/types'
import { loadUser } from '../utils/storage'

import baseUrl from '../utils/baseUrl'

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

/**
 * @function
 * @desc sends out signup request.
 * @param {User} user - Basic user information.
 * @param {roles} role - Account role to be created (worker, agency, business).
 */
const register = async (user: User) => {
  try {
    return await axios.post(`${baseUrl}/authentication/register`, user)
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Sends out login request
 * @param {Credentials} credentials - user's credentials ({email: ..., password: ...})
 * @param {roles} role - account role
 */
const signin = async (credentials: Credentials) => {
  try {
    return await axios.post(`${baseUrl}/authentication/signin`, credentials)
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Sends out email to which a password reset link will be sent to
 * @param {Email} email - the email where user wants to receive password reset link
 */
const forgottenpassword = async (email: Email) => {
  try {
    return await axios.post(`${baseUrl}/authentication/forgottenpassword`, email)
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc Sends out the token from the password reset link to be verified that it is found in database
 * @param {Token} token - token from the password reset link
 */
const verifyToken = async (token: Token) => {
  try {
    return await axios.post(`${baseUrl}/authentication/verifytoken`, token)
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const logout = async () => {
  return await axios.post(`${baseUrl}/authentication/logout`, null, authHeader())
}

/**
 * @function
 * @desc Sends out me request that gets user profile information.
 * @param {roles} role - Account role.
 */
const me = async () => {
  try {
    return await axios.get(`${baseUrl}/user/me`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * @function
 * @desc sends out update request that replaces user's profile information with updateData values
 * @param {User} updateData - profile values to be updated
 * @param {roles} role - account role
 */
const update = async (updateData: User) => {
  try {
    return await axios.put(`${baseUrl}/user/me`, updateData, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  register,
  signin,
  forgottenpassword,
  verifyToken,
  me,
  update,
  logout,
}
