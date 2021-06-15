/**
 * @module service/contract
 * @desc Contract requests to backend.
 */
import axios from 'axios'
import { businessContractType } from '../types/types'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api'

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
 * @desc Gets workers or businesses by name (LIKE behavior)
 * @param {string} input - input that is searched
 * @param {string} searchType - determines if workers or businesses are searched
 */
const searchUsers = async (input: string, searchType: businessContractType) => {
  try {
    switch (searchType) {
      case 'worker':
        return await axios.get(`${baseUrl}/workers?name=${input}`, authHeader())
      case 'business':
        return await axios.get(
          `${baseUrl}/businesses?name=${input}`,
          authHeader()
        )
      default:
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const acceptBusinessContract = async (contractId:string, userId: string, form?:string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/accept`,
      {form},
      authHeader()
    )
  } catch (error) {
    console.log(error)
  }
}

const addBusinessContract = async (contractId:string, userId: string, form?:string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/add`,
      {form},
      authHeader()
    )
  } catch (error) {
    console.log(error)
  }
}

const sendBusinessContract = async (contractId:string, form?:string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/send/${contractId}/`,
      {form},
      authHeader()
    )
  } catch (error) {
    console.log(error)
  }
}

const declineBusinessContract = async (contractId:string, userId:string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/decline`,
      {},
      authHeader()
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 * TODO: Tarkista, kun route on valmis.
 * @param {*} contractId
 */
const refuseBusinessContractById = async (contractId: string) => {
  return await axios.put(
    `${baseUrl}/businesscontracts/refuse/${contractId}`,
    {},
    authHeader()
  )
}

const fetchBusinessContracts = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/businesscontracts?page=1&limit=10`,
      authHeader()
    )
    return res.data.docs
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const updateBusinessContract = async (id: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${id}`,
      {},
      authHeader()
    )
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const addWorkContract = async (
  businessId: string,
  workerId: string,
  validityPeriod = '2021-02-12'
) => {
  const body = {
    businessId,
    workerId,
    validityPeriod,
    processStatus: '0',
  }
  try {
    return await axios.post(`${baseUrl}/workcontracts/`, body, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const fetchWorkContracts = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/workcontracts?page=1&limit=10`,
      authHeader()
    )
    return res.data.docs
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const deleteWorkContractById = async (contractId: string) => {
  return await axios.delete(
    `${baseUrl}/workcontracts/${contractId}`,
    authHeader()
  )
}
// Create a business contract when a new agency sign up
const createBusinessContract = async () => {
  try {
    return await axios.post(`${baseUrl}/businesscontracts/`,{}, authHeader())
  } catch (error) {
    console.log(error)
  }
}

export default {
  searchUsers,
  createBusinessContract,
  addBusinessContract,
  declineBusinessContract,
  refuseBusinessContractById,
  fetchBusinessContracts,
  updateBusinessContract,
  addWorkContract,
  fetchWorkContracts,
  deleteWorkContractById,
  sendBusinessContract,
  acceptBusinessContract
}
