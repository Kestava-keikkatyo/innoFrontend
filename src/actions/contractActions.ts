/**
 * @module actions/businessContract
 * @desc Redux businessContract actions
 */
import i18next from 'i18next'
import contractsService from '../services/contractsService'
import {
  ACTIVATE_B_CONTRACT,
  ADD_B_CONTRACT,
  B_DELETE,
  B_FETCH,
  B_UPDATE,
  DECLINE_B_CONTRACT,
  B_SEND,
  B_ACCEPT,
  ADD_B_WB_CONTRACT,
  SEND_BACK_B_CONTRACT,
  E_FETCH,
  E_SAVE,
} from '../types/state'
import { businessContractType, EmploymentAgreement, severity } from '../types/types'
import { setAlert } from './alertActions'

/**
 * @function
 * @desc Updates searchlist
 */
export const updateSearchList =
  (input: string, searchType: businessContractType) => async (dispatch: any) => {
    const res = await contractsService.searchUsers(input, searchType)
    dispatch({ type: B_UPDATE, data: res.data })
  }

/**
 * @function
 * @description
 * Retrieves contracts from database.
 * Used by agency
 */
export const fetchContractsAsAgency = () => async (dispatch: any) => {
  const res = await contractsService.fetchBusinessContracts()
  dispatch({ type: B_FETCH, data: res })
}

/**
 * @function
 * @description
 * Retrieves contracts where user is the target.
 */
export const fetchContractsAsTarget = () => async (dispatch: any) => {
  const res = await contractsService.fetchBusinessContractsAsTarget()
  dispatch({ type: B_FETCH, data: res })
}

/**
 * @function
 * @description
 * Retrieves contracts where user is the worker.
 */
export const fetchEmploymentContractsAsWorkerOrBusiness = () => async (dispatch: any) => {
  const res = await contractsService.fetchEmploymentContractsAsWorkerOrBusiness()
  dispatch({ type: E_FETCH, data: res })
}

/**
 * @function
 * @description
 * Retrieves employment contracts where user is the worker.
 */
export const fetchEmploymentContractsAsAgency = () => async (dispatch: any) => {
  const res = await contractsService.fetchEmploymentContractsAsAgency()
  dispatch({ type: E_FETCH, data: res })
}

/**
 * @function
 * @desc Function for worker or business to delete employment contract
 * Deletes the employment contract
 * @param {string} id employment contract id
 */
export const deleteEmploymentContractAsWorkerOrBusiness = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteEmploymentContractById(id)
  const r = await contractsService.fetchEmploymentContractsAsWorkerOrBusiness()

  if (res && res.status === 200) {
    dispatch({ type: E_FETCH, data: r })
  }
}

/**
 * @function
 * @desc Function for agency to delete employment contract
 * Deletes the employment contract
 * @param {string} id employment contract id
 */
export const deleteEmploymentContractAsAgency = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteEmploymentContractById(id)
  const r = await contractsService.fetchEmploymentContractsAsAgency()

  if (res && res.status === 200) {
    dispatch({ type: E_FETCH, data: r })
  }
}

/**
 * @function
 * @desc Function for worker or business to sign employment contract
 * @param {string} contractId employment contract Id
 */
export const signEmploymentContract = (id: string) => async (dispatch: any) => {
  const res = await contractsService.signEmploymentContractById(id)
  const r = await contractsService.fetchEmploymentContractsAsWorkerOrBusiness()

  if (res && res.status === 200) {
    dispatch({ type: E_FETCH, data: r })
  }
}

/**
 * @function
 * @desc Deletes a contract by id.
 * @param {string} userId user Id
 * @param {string} id contract Id
 */
export const deleteContractById = (id: string) => async (dispatch: any) => {
  const res = await contractsService.deleteBusinessContractById(id)
  const r = await contractsService.fetchBusinessContracts()

  if (res && res.status === 200) {
    dispatch({ type: B_DELETE, data: id })
    dispatch({ type: B_FETCH, data: r })
  }
}

/**
 * @function
 * @deprecated Forms are not in use in this context, with current design
 * @desc Adds new contract between logged in Agency user and Worker/Business user.
 * Must be Agency to use this.
 */
export const addContract =
  (targetId: string, formId: string, type: string) => async (dispatch: any) => {
    const res = await contractsService.addBusinessContract(targetId, formId, type)
    if (res && res.status === 200) {
      dispatch({ type: ADD_B_CONTRACT, data: res.data })
      type === 'request' ? dispatch(fetchContractsAsTarget()) : dispatch(fetchContractsAsAgency())
    }
  }

/**
 * @function
 * @desc Adds new contract between logged in Agency user and Worker/Business user.
 * Must be Agency to use this.
 * @param {string} targetId Business or Worker id
 * @param type type of contract
 */
export const addAgencyContract = (targetId: string, type: string) => async (dispatch: any) => {
  const res = await contractsService.addAgencyContract(targetId, type)
  if (res && res.status === 200) {
    dispatch({ type: ADD_B_CONTRACT, data: res.data })
    type === 'request' ? dispatch(fetchContractsAsTarget()) : dispatch(fetchContractsAsAgency())
  }
}

/**
 * @function
 * @desc Adds new contract between logged in Worker/Business user and Agency user.
 * Must be Worker/Business to use this.
 * @param {string} agencyId agency id
 * @param {string} contractId contract id
 * @param {string} formId contract form id
 */
export const addContractAsWorkerOrBusiness =
  (contractId: string, agencyId: string, formId: any) => async (dispatch: any) => {
    const res = await contractsService.addBusinessContractWorkerBusiness(
      contractId,
      agencyId,
      formId,
    )
    const r = await contractsService.fetchBusinessContracts()
    if (res && res.status === 200) {
      dispatch({ type: ADD_B_WB_CONTRACT, data: res.data })
      dispatch({ type: B_FETCH, data: r })
    }
  }

/**
 * @function
 * @desc Adds new employment agreement suggestion between Worker and Business
 * Must be logged in as Agency to use this.
 * @param {string} form employment agreement
 */
export const addEmploymentContract = (form: EmploymentAgreement) => async (dispatch: any) => {
  const res = await contractsService.postEmploymentAgreement(form)
  const r = await contractsService.fetchEmploymentContractsAsAgency()
  if (res && res.status === 200) {
    dispatch(setAlert(i18next.t('connect_alert_success'), severity.Success))
    dispatch({ type: E_FETCH, data: r })
    return res.status
  }
}

/**
 * @function
 * @desc Function to send contract request from agency back to agency.
 * Must be worker or business to use this.
 * @param {string} agencyId agency id
 * @param {string} contractId contract Id
 * @param {string} form form Id
 */
export const sendContract = (contractId: string, status: string) => async (dispatch: any) => {
  const res = await contractsService.signAgreement(contractId, status)
  const r = await contractsService.fetchBusinessContractsAsTarget()
  if (res && res.status === 200) {
    dispatch({ type: B_SEND, data: res.data })
    dispatch({ type: B_FETCH, data: r })
  }
}

/**
 * @function
 * @desc Function to accept contract that was accepted by Business.
 * Must be Agency to use this.
 * @param {string} contractId contract Id
 * @param {string} userId user id
 * @param {string} form form Id
 */
export const acceptContractFromBusiness =
  (contractId: string, userId: string, form?: string) => async (dispatch: any) => {
    const res = await contractsService.acceptBusinessContract(contractId, userId, form)
    await contractsService.postWorkContract(userId)
    if (res && res.status === 200) {
      dispatch({ type: B_ACCEPT, data: res.data })
    }
  }
/**
 * @function
 * @desc Function to accept contract that was accepted by Worker.
 * Must be Agency to use this.
 * @param {string} contractId contract Id
 * @param {string} userId user id
 * @param {string} form form id
 */
export const acceptContractFromWorker =
  (contractId: string, userId: string, form?: string) => async (dispatch: any) => {
    const res = await contractsService.acceptBusinessContract(contractId, userId, form)
    if (res && res.status === 200) {
      dispatch({ type: B_ACCEPT, data: res.data })
    }
  }
/**
 * @function
 * @desc Activates new contract.
 * Activation is avaible only for Worker and Business users.
 * @param {string} id contract id
 */
export const activateContract = (id: string) => async (dispatch: any) => {
  const res = await contractsService.updateBusinessContract(id)
  if (res.status === 200) dispatch({ type: ACTIVATE_B_CONTRACT, data: id })
}

/**
 * @function
 * @description
 * Used by Agency to decline contract with Worker or Business.
 * @param {string} contractId The id of contract.
 * @param {string} userId The id of Worker or Business.
 */
export const rejectContract = (contractId: string, userId: string) => async (dispatch: any) => {
  const res = await contractsService.declineBusinessContract(contractId, userId)
  if (res && res.status === 200) {
    dispatch({ type: DECLINE_B_CONTRACT, data: res.data })
  }
}
/**
 * @function
 * @description
 * Used by Agency to send back contract with Worker or Business.
 * @param {string} contractId The id of contract.
 * @param {string} userId  The id of Worker or Business.
 * @param {string} formId The id of Form that was linked to Worker or Business.
 */
export const sendBackContract =
  (contractId: string, userId: string, formId: string) => async (dispatch: any) => {
    const res = await contractsService.sendBackBusinessContract(contractId, userId, formId)
    if (res && res.status === 200) {
      dispatch({ type: SEND_BACK_B_CONTRACT, data: res.data })
    }
  }
