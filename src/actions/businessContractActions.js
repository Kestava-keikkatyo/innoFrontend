/**
 * Redux alert actions
 * @module actions/alertActions
 */
import businessContractConstants from '../constants/businessContractConstants'
import contractsService from '../services/contractsService'


/**
 * Updates searchlist
 * @function
 */
export const updateSearchList = (input, searchType) => async (dispatch) => {
  const res = await contractsService.searchUsers(input, searchType)
  dispatch({ type: businessContractConstants.UPDATE, data: res.data })
}

export const fetchBusinessContracts = () => async (dispatch) => {
  const res = await contractsService.showBusinessContracts()
  dispatch({ type: businessContractConstants.FETCH, data: res.data })
}

/**
 * 
 * @param {*} id
 * @todo check for result handling. 
 */
export const deleteBusinessContractById = (id) => async (dispatch) => {
  // const res = await contractsService.deleteBusinessContractById(id)
  dispatch({ type: businessContractConstants.DELETE, data: id })
}

export const addBusinessContract = (contract) => async (dispatch) => {
  
  dispatch({type: businessContractConstants.ADD_CONTRACT, data: contract})
}