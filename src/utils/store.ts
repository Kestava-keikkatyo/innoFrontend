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
import allUsersReducer from '../reducers/allUsersReducer'
import reportReducer from '../reducers/reportReducer'
import jobReducer from '../reducers/jobReducer'
import usersReducer from '../reducers/usersReducer'
import feedBackReducer from '../reducers/feedBackReducer'
import topicReducer from '../reducers/topicReducer'
import { LOGOUT } from '../types/state'
import workRequestReducer from '../reducers/workRequestReducer'
import notificationReducer from '../reducers/notificationReducer'
import myFeelingReducer from '../reducers/myFeelingReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const appReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  businessContracts: businessContractReducer,
  workContracts: workContractReducer,
  breadcrumb: breadcrumbReducer,
  feeling: feelingReducer,
  form: formReducer,
  formList: formListReducer,
  files: fileReducer,
  businessContractForm: buisnessContractFormReducer,
  allUsers: allUsersReducer,
  report: reportReducer,
  job: jobReducer,
  feedback: feedBackReducer,
  users: usersReducer,
  topic: topicReducer,
  workRequest: workRequestReducer,
  notification: notificationReducer,
  myFeeling: myFeelingReducer,
})

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export type IRootState = ReturnType<typeof rootReducer>

export default createStore<any, any, any, any>(rootReducer, composeEnhancer(applyMiddleware(thunk)))
