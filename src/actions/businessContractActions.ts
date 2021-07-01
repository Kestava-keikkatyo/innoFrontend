/**
 * @module actions/businessContract
 * @desc Redux businessContract actions
 */
import contractsService from '../services/contractsService'
import notificationsService from '../services/notificationsService'
import { ACTIVATE_B_CONTRACT, ADD_B_CONTRACT, B_DELETE, B_FETCH, B_UPDATE, DECLINE_B_CONTRACT, B_SEND, B_ACCEPT, ADD_B_WB_CONTRACT, SEND_BACK_B_CONTRACT } from '../types/state'
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
export const refuseBusinessContractById = (id: string) => async (dispatch: any) => {
  //
  const res = await contractsService.refuseBusinessContractById(id)
  const r = await contractsService.fetchBusinessContracts()
 
  if(res.status === 200)
    dispatch({ type: B_DELETE, data: id })
    dispatch({ type: B_FETCH, data: r })
}

/**
 * @function
 * @desc Adds new business contract between logged in Agency user and Worker/Business user.
 * Must be Agency to use this.
 * @param {string} contractId BusinessContract id
 * @param {string} user Business or Worker id
 */
export const addBusinessContract = (contractId:string, userId: string, form?:string) => async (dispatch: any) => {
  const res = await contractsService.addBusinessContract(contractId,userId,form)
  await notificationsService.updateNotifications(userId,"HP-Yritys lähetti sinulle asiakassopimuspyynnön.")
  if(res && res.status === 200)
    dispatch({type: ADD_B_CONTRACT, data: res.data })
}
/**
 * @function
 * @desc Adds new business contract between logged in Worker/Business user and Agency user.
 * Must be Worker/Business to use this.
 * @param {string} contractId BusinessContract id 
 */
export const addBusinessContractWorkerBusiness = (contractId:string) => async (dispatch:any) => {
  const res = await contractsService.addBusinessContractWorkerBusiness(contractId)
  const r = await contractsService.fetchBusinessContracts()
  if (res && res.status === 200)
    dispatch({type: ADD_B_WB_CONTRACT, data: res.data})
    dispatch({ type: B_FETCH, data: r })
}
/**
 * @function
 * @desc Function to send businessContract request from agency back to agency.
 * Must be worker or business to use this.
 * @param {string} contractId BusinessContract Id
 * @param {string} form Forms Id 
 */
export const sendBusinessContract = (contractId:string, form?:string) => async (dispatch: any) => {
  const res = await contractsService.sendBusinessContract(contractId,form)
  const r = await contractsService.fetchBusinessContracts()
  if(res && res.status === 200)
    dispatch({type: B_SEND, data: res.data })
    dispatch({ type: B_FETCH, data: r })
}
/**
 * @function
 * @desc Function to accept businessContract that was accepted by Worker or Business.
 * Must be Agency to use this.
 * @param {string} contractId BusinessContract Id
 * @param {string} userId Users Id
 * @param {string} form Form Id 
 */
export const acceptBusinessContract = (contractId:string, userId:string,form?:string) => async (dispatch: any) => {
  const res = await contractsService.acceptBusinessContract(contractId,userId,form)
  await notificationsService.updateNotifications(userId,"HP-Yritys hyväksyi asiakassopimuksen kanssasi.")
  if(res && res.status === 200)
    dispatch({type: B_ACCEPT, data: res.data})
    //tähän -> fetch kutsu 
    //dispatch(fetch) 
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
  await notificationsService.updateNotifications(userId,"HP-Yritys hylkäsi asiakassopimuspyynnön kanssasi.")
  if (res && res.status === 200)
    dispatch({type: DECLINE_B_CONTRACT, data: res.data})
}
/**
 * @function
 * @description
 * Used by Agency to send back BusinessContract with Worker or Business.
 * @param {string} contractId The id of BusinessContract. 
 * @param {string} userId  The id of Worker or Business.
 * @param {string} formId The id of Form that was linked to Worker or Business.
 */
export const sendBackBusinessContract = (contractId:string, userId:string, formId:string) => async (dispatch:any) => {
  const res = await contractsService.sendBackBusinessContract(contractId,userId,formId)
  await notificationsService.updateNotifications(userId,"HP-Yritys lähetti asiakassopimuspyynnön takaisin.")
  if (res && res.status === 200)
    dispatch({type: SEND_BACK_B_CONTRACT , data: res.data})
}