/**
 * @module actions/formList
 * @desc Redux formList actions
 */
 import formServices from "../services/formServices"
import {
   FETCH_FORM_LIST,
 } from "../types/state"
 
 /**
  * @function
  * @desc Replaces the currentForm with the data imported from file systems
  */
 export const fetchFormList = () => async (dispatch: any) => {
   const data1 = await formServices.fetchMyFormList()
   const data2 = await formServices.fetchCommunityFormList()   
   dispatch({ type: FETCH_FORM_LIST, data: {myForms: data1, communityForms: data2} })
 }