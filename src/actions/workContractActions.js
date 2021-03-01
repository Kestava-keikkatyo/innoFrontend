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
  dispatch({ type: contractConstants.UPDATE, data: res.data })
}

// export const fetchBusinessContracts = () => async (dispatch) => {
//   const res = await contractsService.showBusinessContracts()
//   dispatch({ type: contractConstants.FETCH, data: res.data })
// }

// /**
//  * 
//  * @param {*} id
//  * @todo check for result handling. 
//  */
// export const deleteBusinessContractById = (id) => async (dispatch) => {
//   const res = await contractsService.deleteBusinessContractById(id)
//   if(res.status === 200)
//     dispatch({ type: contractConstants.DELETE, data: id })
// }

export const addWorkContract = (user, business) => async (dispatch) => {
  console.log(user, business);
  // const res = await contractsService.addWorkContract(user.id, business.id)
  // if(res.status < 299)
  //   dispatch({type: contractConstants.ADD_CONTRACT, data: { id: res.data.contract.id, user }})
}