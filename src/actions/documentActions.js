/**
 * Redux document actions
 * @module actions/feelingActions
 */
import contractsService from "../services/contractsService"


/**
 * 
 * @function
 */
export const fetchBusinessDocuments = () => async (dispatch) => {
  const res = await contractsService.fetchBusinessContracts()
  if( res.status === 200 )
    dispatch({ type: 'FETCH_BUSINESS_CONTRACTS', data: res.data })
}

export const fetchWorkDocuments = () => async (dispatch) => {
  const res = await contractsService.fetchWorkContracts()
  if( res.status === 200 )
    dispatch({ type: 'FETCH_WORK_CONTRACTS', data: res.data })
}

export const activateBusinessContract = (id) => async (dispatch) => {
  const res = await contractsService.updateBusinessContract(id)
  if( res.status === 200 )
    dispatch({ type: 'ACTIVATE_BUSINESS_CONTRACT', data: id })
}