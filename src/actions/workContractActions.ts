/**
 * @module actions/workContract
 * @desc Redux workContract actions
 */
import contractsService from '../services/contractsService'
import { ADD_W_CONTRACT, User, W_DELETE, W_FETCH, W_UPDATE } from '../types/state'
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
  dispatch({ type: W_FETCH, data: res.data })
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
 * @desc Adds work contract between given Worker user and Business user.
 * @param {User} worker Worker user. 
 * @param business Business user.
 */
export const addWorkContract = (worker: User, business: any) => async (dispatch: any) => {
  const res = await contractsService.addWorkContract(business.business.id, worker.id)
  if(res && res.status === 200)
    dispatch({type: ADD_W_CONTRACT, data: res.data})
}