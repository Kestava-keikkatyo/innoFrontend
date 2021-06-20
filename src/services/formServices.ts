/**
 * @module service/feeling
 * @desc Feeling requests to backend.
 */
 import axios from 'axios'
 import { loadUser } from '../utils/storage'

 const baseUrl = 'http://localhost:3001/api/forms'

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
    const res = await axios.get(`${baseUrl}/me?page=1&limit=10`, authHeader())
    return res.data
   } catch(error){
    console.log(error);
    return {docs: []}
   }
 }

 const fetchCommunityFormList = async () => {
   try {
    const res = await axios.get(`${baseUrl}?page=1&limit=10`, authHeader())
    return res.data
   } catch (error) {
    console.log(error);
    return {docs: []}
   }
}

const fetchCommonFormList = async () => {
  try {
   const res = await axios.get(`${baseUrl}/common?page=1&limit=10`, authHeader())
   return res.data
  } catch (error) {
   console.log(error);
   return {docs: []}
  }
}

const fetchFormById = async (id: string) => {
  try {
   const res = await axios.get(`${baseUrl}/${id}`, authHeader())
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
    const res = await axios.post(`${baseUrl}`, form, authHeader())
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
    const res = await axios.put(`${baseUrl}/${formId}`, form, authHeader())
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
    const res = await axios.delete(`${baseUrl}/${formId}`, authHeader())
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
