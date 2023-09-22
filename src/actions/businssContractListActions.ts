/**
 * @module actions/businessContractList
 * @desc Redux businessContractList actions
 */
import formServices from '../services/formServices'
import { ADD_TO_BUSINESS_CONTRACT_LIST, FETCH_BUSINESS_CONTRACT_LIST } from '../types/state'
import { BusinessContractForm } from '../types/types'

/**
 * @function
 * @desc Replaces the currentForm with the data imported from file systems
 */
export const fetchBusinessContractsList = () => async (dispatch: any) => {
  const data1 = await formServices.fetchMyFormList()
  const data2 = await formServices.fetchCommunityFormList()
  if (!data1) return
  dispatch({
    type: FETCH_BUSINESS_CONTRACT_LIST,
    data: { myBusinessContractForms: data1, communityForms: data2 },
  })
}

export const addToBusinessContractsList = (form: BusinessContractForm) => async (dispatch: any) => {
  dispatch({ type: ADD_TO_BUSINESS_CONTRACT_LIST, data: form })
}
