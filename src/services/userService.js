/**
 * User requests to backend
 * @module
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'
import Role from '../constants/role'

const baseUrl = 'http://localhost:3001/api'

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

/**
 * sends out signup request
 * @function
 * @param {Object} user - basic user information
 * @param {string} role - account role to be created (worker, agency, business)
 */
const signup = async (user, role) => {
  try {
    switch (role) {
      case Role.Worker:
        return await axios.post(`${baseUrl}/users`, user)
      case Role.Agency:
        return await axios.post(`${baseUrl}/agencies`, user)
      case Role.Business:
        return await axios.post(`${baseUrl}/businesses`, user)
      default:
        // Unsuitable role selected return Promise.reject.
        return Promise.reject({ message: 'Unsuitable role selected' })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * sends out login request
 * @function
 * @param {Object} credentials - user's credentials ({email: ..., password: ...})
 * @param {string} role - account role
 */
const login = async (credentials, role) => {
  try {
    switch (role) {
      case Role.Worker:
        return await axios.post(`${baseUrl}/login/worker`, credentials)
      case Role.Agency:
        return await axios.post(`${baseUrl}/login/agency`, credentials)
      case Role.Business:
        return await axios.post(`${baseUrl}/login/business`, credentials)
      default:
        // Unsuitable role selected return Promise.reject.
        return Promise.reject({ message: 'Unsuitable role selected' })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * sends out me request that gets user profile information
 * @param {string} role - account role
 */
const me = async (role) => {
  try {
    switch (role) {
      case Role.Worker:
        return await axios.get(`${baseUrl}/users/me`, authHeader())
      case Role.Agency:
        return await axios.get(`${baseUrl}/agencies/me`, authHeader())
      case Role.Business:
        return await axios.get(`${baseUrl}/businesses/me`, authHeader())
      default:
        // If user changes localstorages role value to something not mentioned above,
        // return status code 500 to logout user (handled in userActions.js statusHandler).
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

/**
 * sends out update request that replaces user's profile information with updateData values
 * @param {Object} updateData - profile values to be updated
 * @param {string} role - account role
 */
const update = async (updateData, role) => {
  try {
    switch (role) {
      case Role.Worker:
        return await axios.put(`${baseUrl}/users`, updateData, authHeader())
      case Role.Agency:
        return await axios.put(`${baseUrl}/agencies`, updateData, authHeader())
      case Role.Business:
        return await axios.put(`${baseUrl}/businesses`, updateData, authHeader())
      default:
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  signup,
  login,
  me,
  update
}