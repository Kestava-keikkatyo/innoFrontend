/**
 * @module service/user
 * @desc User requests to backend.
 */
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import { loadUser } from '../utils/storage'

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

const addWorkersToGig = async (contractId: any, contractsId: any, workersId: []) => {
  try {
    const res: any = await axios.put(
      `${baseUrl}/workcontracts/${contractId}/${contractsId}/acceptWorkers`,
      { workersArray: workersId },
      authHeader(),
    )
    return res.data
  } catch (error) {
    console.log(error)
    return {}
  }
}
// TODO
const requestWorkerToGig = async (contractId: any, contractsId: any) => {
  try {
    const res: any = await axios.put(
      `${baseUrl}/workcontracts/${contractId}/${contractsId}/add`,
      authHeader(),
    )
    return res.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

/**
 * @param businessContractFormId - Business contract form id
 * @returns Business contract form object
 */
const fetchWorkContracts = async () => {
  try {
    const res: any = await axios.get(`${baseUrl}/workcontracts`, authHeader())
    return res.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default {
  fetchWorkContracts,
  addWorkersToGig,
}
