/**
 * @module service/contract
 * @desc Contract requests to backend.
 */
import axios from 'axios'
import { businessContractType } from '../types/types'
import { loadUser } from '../utils/storage'

import baseUrl from '../utils/baseUrl'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

/**
 * @function
 * @desc Gets workers or businesses by name (LIKE behavior)
 * @param {string} input - input that is searched
 * @param {string} searchType - determines if workers or businesses are searched
 */
const searchUsers = async (input: string, searchType: businessContractType) => {
  try {
    switch (searchType) {
      case 'worker':
        return await axios.get(`${baseUrl}/user/getByUserType/worker/name=${input}`, authHeader())
      case 'business':
        return await axios.get(`${baseUrl}/user/getByUserType/business/name=${input}`, authHeader())
      default:
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const acceptBusinessContract = async (contractId: string, userId: string, form?: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/accept`,
      { form },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}
/**
 * @description Backend call function which is used when Agency sends BusinessContract
 * request to Worker or Business.
 * @param targetId - Worker/Business id
 * @param type - type of contract
 * @returns Backend response.
 */
const addAgencyContract = async (targetId: string, type: string) => {
  try {
    return await axios.post(
      `${baseUrl}/agreement/`,
      {
        target: targetId,
        status: 'pending',
        type: type,
      },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}
/**
 * @deprecated Forms are not in use in this context, with current design
 * @description Backend call function which is used when Agency sends BusinessContract
 * request to Worker or Business.
 * @param contractId - BusinessContractId
 * @param userId - Worker/Business id
 * @param form - formid
 * @returns Backend response.
 */
const addBusinessContract = async (targetId: string, formId: string, type: string) => {
  try {
    return await axios.post(
      `${baseUrl}/agreement/`,
      {
        target: targetId,
        form: formId,
        status: 'pending',
        type: type,
      },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}
/**
 * @description Backend call function which is used when Worker or Business sends BusinessContract
 * request to Agency.
 * @param contractId
 * @param formId
 * @return Backend response.
 */
const addBusinessContractWorkerBusiness = async (
  contractId: string,
  agencyId: string,
  formId: any,
) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/add/${contractId}/${agencyId}`,
      { form: formId },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 * @description Backend call function which is used by agency to post employment agreement suggestion between Worker and Business
 * @param form employment agreement
 * @returns backend response
 */
const postEmploymentContract = async (form: any) => {
  try {
    // console.log("formServices:employmentForm: ", form);
    const res = await axios.post(`${baseUrl}/agreement/employment`, form, authHeader())
    return res
  } catch (error) {
    console.log(error)
  }
}

/**
 * @description Backend call function which is used by Business retrieve it's signed and unsigned employment agreements
 * @returns backend response
 */
const fetchEmploymentContractsAsWorkerOrBusiness = async () => {
  try {
    const res = await axios.get(`${baseUrl}/agreement/employment/`, authHeader())
    return res.data
  } catch (error) {
    return { docs: [] }
  }
}

/**
 * @description Backend call function which is used by Agency retrieve its signed and unsigned employment agreements
 * @returns backend response
 */
const fetchEmploymentContractsAsAgency = async () => {
  try {
    const res = await axios.get(`${baseUrl}/agreement/employment/agency`, authHeader())
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const sendBusinessContract = async (contractId: string, form?: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/send/${contractId}/`,
      { form },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}

const declineBusinessContract = async (contractId: string, userId: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/decline`,
      {},
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 * Deletes contract according to id
 * @param {*} contractId
 */
const deleteBusinessContractById = async (contractId: string) => {
  try {
    return await axios.delete(`${baseUrl}/agreement/delete/${contractId}`, authHeader())
  } catch (error) {
    console.log(error)
  }
}

/**
 * Deletes contract according to target id
 * @param {*} targetId
 */
const deleteBusinessContractByTargetId = async (targetId: string) => {
  try {
    return await axios.delete(`${baseUrl}/agreement/deleteByTargetId/${targetId}`, authHeader())
  } catch (error) {
    console.log(error)
  }
}

/**
 * Deletes employment contract by id
 * @param {*} contractId
 */
const deleteEmploymentContractById = async (contractId: string) => {
  try {
    return await axios.delete(`${baseUrl}/agreement/employment/delete/${contractId}`, authHeader())
  } catch (error) {
    console.log(error)
  }
}

/**
 * Refuses employment contract by id
 * @param {*} contractId
 */
const refuseEmploymentContractById = async (contractId: string) => {
  try {
    return await axios.delete(`${baseUrl}/agreement/employment/refuse/${contractId}`, authHeader())
  } catch (error) {
    console.log(error)
  }
}

/**
 * Signs employment contract by id
 * @param {*} contractId
 */
const signEmploymentContractById = async (contractId: string) => {
  try {
    return await axios.put(`${baseUrl}/agreement/employment/sign/${contractId}`, {}, authHeader())
  } catch (error) {
    console.log(error)
  }
}

const fetchBusinessContracts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/agreement`, authHeader())
    return res.data
  } catch (error) {
    return { docs: [] }
  }
}

const fetchBusinessContractsAsTarget = async () => {
  try {
    const res = await axios.get(`${baseUrl}/agreement/target`, authHeader())
    return res.data
  } catch (error) {
    return { docs: [] }
  }
}

const signAgreement = async (id: string, status: string) => {
  try {
    const res = await axios.put(`${baseUrl}/agreement/sign/${id}/${status}`, {}, authHeader())
    return res.data
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const updateBusinessContract = async (id: string) => {
  try {
    return await axios.put(`${baseUrl}/businesscontracts/${id}`, {}, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const postWorkContract = async (businessId: string) => {
  const body = {
    businessId,
    processStatus: '0',
  }
  try {
    return await axios.post(`${baseUrl}/workcontracts/`, body, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const fetchWorkContracts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/workcontracts?page=1&limit=10`, authHeader())
    return res.data.docs
  } catch (error) {
    return Promise.reject(error.response)
  }
}

const deleteWorkContractById = async (contractId: string) => {
  return await axios.delete(`${baseUrl}/workcontracts/${contractId}`, authHeader())
}

const postJobInWorkContract = async (contractId: string, data: {}) => {
  try {
    return await axios.put(`${baseUrl}/workcontracts/${contractId}/new`, data, authHeader())
  } catch (error) {
    console.log(error)
  }
}

// Create a business contract when a new agency sign up
const createBusinessContract = async () => {
  try {
    return await axios.post(`${baseUrl}/businesscontracts/`, {}, authHeader())
  } catch (error) {
    console.log(error)
  }
}

/**
 * @function
 * @description Function is used to update BusinessContractDocumentObjects formId
 * which is inside of array of objects.
 * @param form New formId
 */
const updateBusinessContractsForm = async (contractId: string, form: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/saveForm`,
      { form },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 * @function
 * @description Function is used to update BusinessContractDocumentObject.
 * Used when Agency is not satisfied with Contract that Worker/Business sended to Agency.
 * With this function contract is sended back to Worker/Business.
 * @param contractId BusinessContractId
 * @param userId Worker/Business ID
 * @param form Form ID
 */
const sendBackBusinessContract = async (contractId: string, userId: string, form: string) => {
  try {
    return await axios.put(
      `${baseUrl}/businesscontracts/${contractId}/${userId}/sendBack`,
      { form },
      authHeader(),
    )
  } catch (error) {
    console.log(error)
  }
}

export default {
  searchUsers,
  createBusinessContract,
  addAgencyContract,
  addBusinessContract,
  addBusinessContractWorkerBusiness,
  postEmploymentAgreement: postEmploymentContract,
  declineBusinessContract,
  deleteBusinessContractById,
  deleteBusinessContractByTargetId,
  refuseEmploymentContractById,
  deleteEmploymentContractById,
  signEmploymentContractById,
  fetchBusinessContracts,
  fetchBusinessContractsAsTarget,
  fetchEmploymentContractsAsAgency,
  fetchEmploymentContractsAsWorkerOrBusiness,
  signAgreement,
  updateBusinessContract,
  postWorkContract,
  fetchWorkContracts,
  deleteWorkContractById,
  postJobInWorkContract,
  sendBusinessContract,
  acceptBusinessContract,
  updateBusinessContractsForm,
  sendBackBusinessContract,
}
