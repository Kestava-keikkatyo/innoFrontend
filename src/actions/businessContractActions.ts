/**
 * @module actions/businessContract
 * @desc Redux businessContract actions
 */
import contractsService from '../services/contractsService'
import { ACTIVATE_B_CONTRACT, ADD_B_CONTRACT, B_DELETE, B_FETCH, B_UPDATE, User } from '../types/state'
import { businessContractType } from '../types/types'


/**
 * @function
 * @desc Updates searchlist
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
 * @param {User} user Business or Worker user
 * @param {businessContractType} type "Worker" or "Business"
 */
export const addBusinessContract = (user: User, type: businessContractType) => async (dispatch: any) => {
  const res = await contractsService.addBusinessContract(user.id, type)
  if(res && res.status === 201)
    dispatch({type: ADD_B_CONTRACT, data: { id: res.data.contract.id, user }})
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