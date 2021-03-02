/**
 * Redux alert actions
 * @module actions/alertActions
 */
import businessContractConstants from '../constants/contractConstants'
import contractsService from '../services/contractsService'


/**
 * Updates searchlist
 * @function
 */
export const updateSearchList = (input, searchType) => async (dispatch) => {
  const res = await contractsService.searchUsers(input, searchType)
  dispatch({ type: businessContractConstants.B_UPDATE, data: res.data })
}

export const fetchBusinessContracts = () => async (dispatch) => {
  const res = await contractsService.showBusinessContracts()
  dispatch({ type: businessContractConstants.B_FETCH, data: res.data })
}

/**
 * 
 * @param {*} id
 * @todo check for result handling. 
 */
export const deleteBusinessContractById = (id) => async (dispatch) => {
  const res = await contractsService.deleteBusinessContractById(id)
  if(res.status === 200)
    dispatch({ type: businessContractConstants.B_DELETE, data: id })
}

export const addBusinessContract = (user, type) => async (dispatch) => {
  const res = await contractsService.addBusinessContract(user.id, type)
  if(res.status === 201)
    dispatch({type: businessContractConstants.ADD_B_CONTRACT, data: { id: res.data.contract.id, user }})
}