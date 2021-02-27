/**
 * Contract requests to backend
 * @module
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'

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
 * Gets workers or businesses by name (LIKE behavior)
 * @function
 * @param {string} input - input that is searched
 * @param {string} searchType - determines if workers or businesses are searched
 */
const searchUsers = async (input, searchType) => {
  try {
    switch (searchType) {
      case 'worker':
        return await axios.get(`${baseUrl}/users?name=${input}`, authHeader())
      case 'business':
        return await axios.get(`${baseUrl}/businesses?name=${input}`, authHeader())
      default:
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const addBusinessContract = async (id, type) => {
  try {
    switch (type) {
      case 'worker':
        return await axios.post(`${baseUrl}/businesscontracts`, {workerId: id}, authHeader())
      case 'business':
        return await axios.post(`${baseUrl}/businesscontracts`, {businessId: id}, authHeader())
      default:
        return console.log('Unknown type');
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * TODO: Tee service jolla voi listata käyttäjän kaikki tehdyt contractit
 * @param {*} id 
 * @param {*} role 
 */
const showBusinessContracts = async () => {
  return await axios.get(`${baseUrl}/agencies/businesscontracts`, authHeader())
}

/**
 * TODO: Tarkista, kun route on valmis.
 * @param {*} contractId 
 */
const deleteBusinessContractById = async (contractId) => {
  return await axios.delete(`${baseUrl}/businesscontracts/${contractId}`, authHeader())
}

const fetchBusinessContracts = async () => {
  try {
    return await axios.get(`${baseUrl}/businesscontracts`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const updateBusinessContract = async (id) => {
  try {
    return await axios.put(`${baseUrl}/businesscontracts/${id}`, {}, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  searchUsers,
  addBusinessContract,
  showBusinessContracts,
  deleteBusinessContractById,
  fetchBusinessContracts,
  updateBusinessContract
}