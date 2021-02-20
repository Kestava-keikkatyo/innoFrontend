/**
 * User requests to backend
 * @module
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api/feelings/'

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

const getFeelings = async () => {
  return await axios.get(baseUrl, authHeader())
}

const postFeeling = async (feeling) => {
  return await axios.post(baseUrl, feeling, authHeader())
}

export default {
  getFeelings,
  postFeeling
}