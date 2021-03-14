/**
 * Redux alert actions
 * @module actions/alertActions
 */
import contractsService from '../services/contractsService'
import { ACTIVATE_B_CONTRACT, ADD_B_CONTRACT, B_DELETE, B_FETCH, B_UPDATE, User } from '../types/state'
import { businessContractType } from '../types/types'


/**
 * Updates searchlist
 * @function
 */
export const updateSearchList = (input: string, searchType: businessContractType) => async (dispatch: any) => {
  const res = await contractsService.searchUsers(input, searchType)
  dispatch({ type: B_UPDATE, data: res.data })
}

export const fetchBusinessContracts = () => async (dispatch: any) => {
  const res = await contractsService.fetchBusinessContracts()
  if(res.status === 200)
    dispatch({ type: B_FETCH, data: res.data })
}

/**
 * 
 * @param {*} id
 * @todo check for result handling. 
 */
export const deleteBusinessContractById = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteBusinessContractById(id)
  if(res.status === 200)
    dispatch({ type: B_DELETE, data: id })
}

export const addBusinessContract = (user: User, type: businessContractType) => async (dispatch: any) => {
  const res = await contractsService.addBusinessContract(user.id, type)
  if(res && res.status === 201)
    dispatch({type: ADD_B_CONTRACT, data: { id: res.data.contract.id, user }})
}

export const activateBusinessContract = (id: string) => async (dispatch: any) => {
  const res = await contractsService.updateBusinessContract(id)
  if( res.status === 200 )
    dispatch({ type: ACTIVATE_B_CONTRACT, data: id })
}