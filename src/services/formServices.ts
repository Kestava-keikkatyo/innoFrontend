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
  * @function
  * @desc Fetches myForms
  */
 const fetchMyFormList = async () => {
   try{
    const res = await axios.get(`${baseUrl}/form2/myForm`, authHeader())
    return res.data
   } catch(error){
    console.log(error);
    return {docs: []}
   }
 }

 const fetchCommunityFormList = async () => {
   try {
    const res = await axios.get(`${baseUrl}/form2/common`, authHeader())
    return res.data
   } catch (error) {
    console.log(error);
    return {docs: []}
   }
}

const fetchCommonFormList = async () => {
  try {
   const res = await axios.get(`${baseUrl}/form2/common`, authHeader())
   return res.data
  } catch (error) {
   console.log(error);
   return {docs: []}
  }
}

const fetchFormById = async (id: string) => {
  try {
   const res = await axios.get(`${baseUrl}/form2/myForm/${id}`, authHeader())
   return res.data
  } catch (error) {
   console.log(error);
   return {}
  }
}

/**
 * @todo make converted form type.
 * @param form
 * @returns
 */
const postForm = async (form: any) => {
  try {
    console.log("formServices:form: ", form);
    const res = await axios.post(`${baseUrl}/form2/`, form, authHeader())
    return res
  } catch (error) {
    console.log(error);
  }
}

/**
 * @todo make converted form type.
 * @param form
 * @returns
 */
 const updateForm = async (formId:any, form: any) => {
  try {
    console.log("formService:updateForm: formId ", formId);
    console.log("formService:updateForm: FormObject ", form);
    const res = await axios.put(`${baseUrl}/form2/${formId}`, form, authHeader())
    return res
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param id
 * @returns
 */
 const deleteForm = async (formId:any) => {
  try {
    const res = await axios.delete(`${baseUrl}/form2/${formId}`, authHeader())
    console.log("delete res", res)
    return res
  } catch (error) {
    console.log(error);
  }
}

 export default {
  fetchMyFormList,
  fetchCommunityFormList,
  fetchCommonFormList,
  fetchFormById,
  postForm,
  updateForm,
  deleteForm
 }
