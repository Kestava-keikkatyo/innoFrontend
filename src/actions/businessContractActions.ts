/**
 * @module actions/businessContract
 * @desc Redux businessContract actions
 */
import contractsService from '../services/contractsService'
import { ACTIVATE_B_CONTRACT, ADD_B_CONTRACT, B_DELETE, B_FETCH, B_UPDATE, DECLINE_B_CONTRACT } from '../types/state'
import { businessContractType } from '../types/types'


/**
 * @function
 * @desc Updates searchlist
 */
export const updateSearchList = (input: string, searchType: businessContractType) => async (dispatch: any) => {
  const res = await contractsService.searchUsers(input, searchType)
  dispatch({ type: B_UPDATE, data: res.data })
}

/**
 * @function
 * @description
 * Retrieves BusinessContracts from database.
 * This can be used by every user type Worker, Business and Agency.
 */
export const fetchBusinessContracts = () => async (dispatch: any) => {
  const res = await contractsService.fetchBusinessContracts()
  dispatch({ type: B_FETCH, data: res })
}

/**
 * @function
 * @desc Deletes a business contract by id.
 * @param {string} id
 */
export const deleteBusinessContractById = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteBusinessContractById(id)
  if(res.status === 200)
    dispatch({ type: B_DELETE, data: id })
}

/**
 * @function
 * @desc Adds new business contract between logged in Agency user and Worker/Business user.
 * @param {string} contractId BusinessContract id
 * @param {string} user Business or Worker id
 */
export const addBusinessContract = (contractId:string, userId: string, form?:string) => async (dispatch: any) => {
  const res = await contractsService.addBusinessContract(contractId,userId,form)
  if(res && res.status === 200)
    dispatch({type: ADD_B_CONTRACT, data: res.data })
}

/**
 * @function
 * @desc Activates new business contract. 
 * Activation is avaible only for Worker and Business users. 
 * @param {string} id The id of business contract. 
 */
export const activateBusinessContract = (id: string) => async (dispatch: any) => {
  const res = await contractsService.updateBusinessContract(id)
  if( res.status === 200 )
    dispatch({ type: ACTIVATE_B_CONTRACT, data: id })
}

/**
 * @function
 * @description
 * Used by Agency to decline BusinessContract with Worker or Business.
 * @param {string} contractId The id of BusinessContract. 
 * @param {string} userId The id of Worker or Business.
 */
export const declineBusinessContract = (contractId:string, userId:string) => async (dispatch:any) => {
  const res = await contractsService.declineBusinessContract(contractId,userId)
  if (res && res.status === 200)
    dispatch({type: DECLINE_B_CONTRACT, data: res.data})
}