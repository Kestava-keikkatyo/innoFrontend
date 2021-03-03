/**
 * Redux alert actions
 * @module actions/alertActions
 */
import contractConstants from '../constants/contractConstants'
import contractsService from '../services/contractsService'


/**
 * Updates searchlist
 * @function
 */
export const updateSearchList = (input) => async (dispatch) => {
  const res = await contractsService.searchUsers(input, 'worker')
  dispatch({ type: contractConstants.W_UPDATE, data: res.data })
}

export const fetchWorkContracts = () => async (dispatch) => {
  const res = await contractsService.fetchWorkContracts()
  dispatch({ type: contractConstants.W_FETCH, data: res.data })
}

/**
 * 
 * @param {*} id
 * @todo check for result handling. 
 */
export const deleteWorkContractById = (id) => async (dispatch) => {
  const res = await contractsService.deleteWorkContractById(id)
  if(res.status === 200)
    dispatch({ type: contractConstants.W_DELETE, data: id })
}

export const addWorkContract = (user, business) => async (dispatch) => {
  const res = await contractsService.addWorkContract(business.business.id, user.id)
  if(res.status < 299)
    dispatch({type: contractConstants.ADD_W_CONTRACT, data: res.data})
}