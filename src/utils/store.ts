
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import alertReducer from '../reducers/alertReducer'
import businessContractReducer from '../reducers/businessContractReducer'
import workContractReducer from '../reducers/workContractReducer'
import breadcrumbReducer from '../reducers/breadcrumbReducer'
import feelingReducer from '../reducers/feelingReducer'
import documentReducer from '../reducers/documentReducer'
import formReducer from '../reducers/formReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * @todo define this
 */
export interface IRootState{
  
}

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  businessContracts: businessContractReducer,
  workContracts: workContractReducer,
  breadcrumb: breadcrumbReducer,
  feeling: feelingReducer,
  document: documentReducer,
  form: formReducer,
})

export default createStore<any, any, any, any>(reducer, composeEnhancer(applyMiddleware(thunk)))
