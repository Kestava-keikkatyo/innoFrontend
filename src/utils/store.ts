
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import fileReducer from '../reducers/fileReducer'
import alertReducer from '../reducers/alertReducer'
import businessContractReducer from '../reducers/businessContractReducer'
import workContractReducer from '../reducers/workContractReducer'
import breadcrumbReducer from '../reducers/breadcrumbReducer'
import feelingReducer from '../reducers/feelingReducer'
import formReducer from '../reducers/formReducer'
import formListReducer from '../reducers/formListReducer'
import buisnessContractFormReducer from '../reducers/businessContractFormReducer'
import agencyReducer from '../reducers/agencyReducer'
import profileReducer from '../reducers/profileReducer'
import notificationsReducer from '../reducers/notificationsReducer'
import feedBackReducer from '../reducers/feedBackReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  businessContracts: businessContractReducer,
  workContracts: workContractReducer,
  breadcrumb: breadcrumbReducer,
  feeling: feelingReducer,
  form: formReducer,
  formList: formListReducer,
  file: fileReducer,
  businessContractForm: buisnessContractFormReducer,
  agencies: agencyReducer,
  profileForm: profileReducer,
  notifications: notificationsReducer,
  feedback: feedBackReducer
})

export type IRootState = ReturnType<typeof reducer>

export default createStore<any, any, any, any>(reducer, composeEnhancer(applyMiddleware(thunk)))
