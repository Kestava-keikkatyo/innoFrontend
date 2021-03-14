/**
 * Redux alert actions
 * @module actions/alertActions
 */
import contractsService from '../services/contractsService'
import { ADD_W_CONTRACT, User, W_DELETE, W_FETCH, W_UPDATE } from '../types/state'
import { roles } from '../types/types'


/**
 * Updates searchlist
 * @function
 */
export const updateSearchList = (input: string) => async (dispatch: any) => {
  const res = await contractsService.searchUsers(input, roles.Worker)
  dispatch({ type: W_UPDATE, data: res.data })
}

export const fetchWorkContracts = () => async (dispatch: any) => {
  const res = await contractsService.fetchWorkContracts()
  dispatch({ type: W_FETCH, data: res.data })
}

/**
 * 
 * @param {*} id
 * @todo check for result handling. 
 */
export const deleteWorkContractById = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteWorkContractById(id)
  if(res.status === 200)
    dispatch({ type: W_DELETE, data: id })
}

export const addWorkContract = (user: User, business: any) => async (dispatch: any) => {
  const res = await contractsService.addWorkContract(business.business.id, user.id)
  if(res && res.status === 200)
    dispatch({type: ADD_W_CONTRACT, data: res.data})
}