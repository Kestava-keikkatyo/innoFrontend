/**
 * @module reducer/businessContractForm
 * @desc Redux businessContractForm reducer
 */
 import { BusinessContractForm } from "../types/types"
 import {
    SET_CURRENT_BUSINESS_CONTRACT_FORM,
    UPDATE_BUSINESS_CONTRACT_TITLE,
    SET_BUSINESS_CONTRACT_DESCRIPTION,
    SET_BUSINESS_CONTRACT_FILLED,
    SET_BUSINESS_CONTRACT_COMMON,
    ADD_BUSINESS_CONTRACT_QUESTION,
    UPDATE_BUSINESS_CONTRACT_QUESTION,
    UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION,
    REMOVE_BUSINESS_CONTRACT_QUESTION,
    REMOVE_BUSINESS_CONTRACT_OPTION,
    SET_BUSINESS_CONTRACT_QUESTIONS,
    CLEAR_CURRENT_BUSINESS_CONTRACT_FORM,
   BusinessContractFormActionTypes,
 } from "../types/state"

 const initialState: BusinessContractForm = {
   title: "",
   description: "",
   tags: [],
   isPublic: true,
   questions: [],
   filled: false,
   common: false
 }

 /**
  * @function
  * @desc Redux form reducer that controls the form generator tool state.
  * @param {Form} state - initial state
  * @param {FormActionTypes} action - dispatched action
  * @todo - Figure out immutability: formReducer is not a pure function. Ditch temp?
  */
 const bunsinessContractFormReducer = (state = initialState, action: BusinessContractFormActionTypes) => {
   switch (action.type) {
     case SET_CURRENT_BUSINESS_CONTRACT_FORM:
       return action.data

     case UPDATE_BUSINESS_CONTRACT_TITLE:
       return {
         ...state,
         title: action.data,
       }

     case SET_BUSINESS_CONTRACT_DESCRIPTION:
       return {
         ...state,
         description: action.data,
       }
     case SET_BUSINESS_CONTRACT_FILLED:
        return {
          ...state,
          filled: action.data,
        }

      case SET_BUSINESS_CONTRACT_COMMON:
        return {
            ...state,
            common: action.data,
        }
     case ADD_BUSINESS_CONTRACT_QUESTION:
       return {
         ...state,
         questions: [...state.questions, action.data],
       }

       case UPDATE_BUSINESS_CONTRACT_QUESTION:
         return {
           ...state,
           questions: state.questions.map((q, i) => i === action.data.index
             ? action.data.question : q),
         }

     // Is this broke? check tests: expects the option to be an object but seems to output
       // only string. Intended?
     case UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION:
       return {
         ...state,
         questions: state.questions.map((q, i) => i !== action.data.questionIndex
           ? q : {
             ...q, options: q.options.map((o: any, j: number) => j === action.data.optionIndex
               ? action.data.option : o
             )
           }),
       }

     case REMOVE_BUSINESS_CONTRACT_QUESTION:
       return {
         ...state,
         questions: state.questions.filter((_, i) => i !== action.data)
       }

     case REMOVE_BUSINESS_CONTRACT_OPTION:
      return {
         ...state,
         questions: state.questions.map((q, i) => i !== action.data.questionIndex
           ? q : {
             ...q, options: q.options.filter((_: any,j: number) => j !== action.data.optionIndex)
           }
         ),
       }

     case SET_BUSINESS_CONTRACT_QUESTIONS:
       return {
         ...state,
         questions: action.data,
       }

     case CLEAR_CURRENT_BUSINESS_CONTRACT_FORM:
       return initialState
     default:
       return state
   }
 }

 export default bunsinessContractFormReducer