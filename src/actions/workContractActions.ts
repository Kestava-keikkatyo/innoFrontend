/**
 * @module actions/workContract
 * @desc Redux workContract actions
 */
import contractsService from '../services/contractsService'
import notificationsService from '../services/notificationsService'
import { ADD_W_CONTRACT, W_DELETE, W_FETCH, W_UPDATE, W_JOB } from '../types/state'
import { roles } from '../types/types'


/**
 * @function
 * @desc Updates searchlist
 * @param {string} input a string query to search contracts by.
 */
export const updateSearchList = (input: string) => async (dispatch: any) => {
  const res = await contractsService.searchUsers(input, roles.Worker)
  dispatch({ type: W_UPDATE, data: res.data })
}

/**
 * @function
 * @desc searches for all work contracts
 */
export const fetchWorkContracts = () => async (dispatch: any) => {
  const res = await contractsService.fetchWorkContracts()
  dispatch({ type: W_FETCH, data: res })
}

/**
 * @function
 * @desc deletes work contract by provide it id.
 * @param {string} id id of work contract to be deleted.
 */
export const deleteWorkContractById = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteWorkContractById(id)
  if(res.status === 200)
    dispatch({ type: W_DELETE, data: id })
}

/**
 * @function
 * @desc Adds WorkContract document to database. Document is linked
 * between Agency and Business. 
 * @param business Business user.
 */
export const postWorkContract = (business: any) => async (dispatch: any) => {
  const res = await contractsService.postWorkContract(business.business._id)
  if(res && res.status === 200)
    dispatch({type: ADD_W_CONTRACT, data: res.data})
}

/**
 * @function
 * @desc Used by Business to send WorkContract Job gig request to Agency.
 * @param agencyId - Agency ID used to send notification to Agency. 
 * @param contractId - WorkContractId between Business and Agency.
 * @param jobData - Contains header, information, startdate, enddate
 */
export const postJobInWorkContract = (agencyId:string,contractId:string, jobData:{}) => async (dispatch:any) => {
  const res = await contractsService.postJobInWorkContract(contractId, jobData)
  if (res && res.status === 200)
    dispatch({type: W_JOB, data: res.data})
    await notificationsService.updateNotifications(agencyId, "Yritys lähetti työkeikka ilmoituksen.")
}