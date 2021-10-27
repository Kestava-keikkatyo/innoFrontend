/**
 * @module service/feeling
 * @desc Feeling requests to backend.
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'
import baseUrl from '../utils/baseUrl'

/**
 * @function
 * @desc Helper function for setting up request header.
 */
const authHeader = () => {
    return {
        headers: { 'x-access-token': `${loadUser().token}` }
    }
}



/**
 * @param form - normal form
 * @returns created business contract form
 */
const postBusinessContractForm = async (form: any) => {
    try {
        console.log("formServices:form: ", form);
        const res: any = await axios.post(`${baseUrl}/businesscontractforms`, form, authHeader())
        return res.data
    } catch (error) {
        console.log(error);
    }
}


/**
 * @param businessContractFormId - Business contract form id
 * @returns Business contract form object
 */
const fetchBusinessContractFormById = async (id: string) => {
    try {
        const res: any = await axios.get(`${baseUrl}/businesscontractforms/${id}`, authHeader())
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
}


/**
 * @param businessContractFormId - Business contract form id
 * @param businessContractForm
 * @returns Updated business contract form
 */
const updateBusinessContractForm = async (businessContractFormId: any, businessContractForm: any) => {
    try {
        console.log("formService:updateForm: formId ", businessContractFormId);
        console.log("formService:updateForm: FormObject ", businessContractForm);
        const res: any = await axios.put(`${baseUrl}/businesscontractforms/${businessContractFormId}`, businessContractForm, authHeader())
        return res.data
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param id - Business contract form id
 * @param userId - Agency, business or worker with which the business contract form declined
 * @returns
 */
const deleteBusinessContractForm = async (businessContractFormId: any, userId: any) => {
    console.log('businessContractFormId', businessContractFormId)
    console.log('userId', userId)

    try {
        const res = await axios.delete(`${baseUrl}/businesscontractforms/${businessContractFormId}/${userId}`, authHeader())
        return res.data
    } catch (error) {
        console.log(error);
    }


}


export default {
    postBusinessContractForm,
    fetchBusinessContractFormById,
    updateBusinessContractForm,
    deleteBusinessContractForm
}