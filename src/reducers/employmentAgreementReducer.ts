/**
 * @module reducer/form
 * @desc Redux form reducer
 */
import { EmploymentAgreement } from '../types/types'
import {
  E_CLEAR_CURRENT,
  EmploymentAgreementActionTypes,
  EmploymentAgreementState,
  E_SET_CURRENT,
  E_SAVE,
  E_FETCH,
} from '../types/state'

const initialEmploymentAgreement: EmploymentAgreement = {
  creator: null,
  worker: null,
  business: null,
  status: '',
  date: '',
}

const initialState: EmploymentAgreementState = {
  currentAgreement: initialEmploymentAgreement,
  agreements: [],
}

/**
 * @function
 * @desc Redux employment form reducer that controls the form generator tool state.
 * @param {EmploymentAgreement} state - initial state
 * @param {FormActionTypes} action - dispatched action
 */
const employmentAgreementReducer = (
  state = initialState,
  action: EmploymentAgreementActionTypes,
) => {
  switch (action.type) {
    case E_SET_CURRENT:
      return {
        ...state,
        currentAgreement: action.data,
      }
    case E_SAVE:
      return {
        ...state,
        agreements: [...state.agreements, action.data],
      }
    case E_FETCH:
      return {
        currentAgreement: state.currentAgreement,
        agreements: action.data,
      }

    case E_CLEAR_CURRENT:
      return {
        currentAgreement: initialEmploymentAgreement,
      }
    default:
      return state
  }
}

export default employmentAgreementReducer
