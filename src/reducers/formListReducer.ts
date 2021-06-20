/**
 * @module reducer/formList
 * @desc Redux formList reducer
 */
 import {
   FormListActionTypes,
   FETCH_FORM_LIST,
 } from "../types/state"

 const initialState = {
   communityForms: {
     docs: []
   },
   myForms: {
    docs: []
  },
  commonForms: {
    docs: []
  }
 }

 /**
  * @function
  * @desc Redux form reducer that controls the form generator tool state.
  * @param {Form} state - initial state
  * @param {FormListActionTypes} action - dispatched action
  * @todo - Figure out immutability: formListReducer is not a pure function. Ditch temp?
  */
 const formListReducer = (state = initialState, action: FormListActionTypes) => {
   const { data, type } = action
   switch (type) {
     case FETCH_FORM_LIST:
       return {
         ...state,
         myForms: data.myForms,
         communityForms: data.communityForms
       }
     default:
       return state
   }
 }

 export default formListReducer
