/**
 * @module service/feeling
 * @desc Feeling requests to backend.
 */
import axios from 'axios'
import { Feeling } from '../types/types'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api/feelings'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

/**
 * @function
 * @desc Fetches all feelings avaible with current token.
 */
const getFeelings = async () => {
  return await axios.get(`${baseUrl}?page=1&limit=10`, authHeader())
}

/**
 * @function
 * @desc Posts new feeling to the route.
 * @param {Feeling} feeling new Feeling object 
 */
const postFeeling = async (feeling: Feeling) => {
  return await axios.post(baseUrl, feeling, authHeader())
}

export default {
  getFeelings,
  postFeeling
}