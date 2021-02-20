
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import alertReducer from '../reducers/alertReducer'
import businessContractReducer from '../reducers/businessContractReducer'
import breadcrumbReducer from '../reducers/breadcrumbReducer'
import feelingReducer from '../reducers/feelingReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  businessContracts: businessContractReducer,
  breadcrumb: breadcrumbReducer,
  feeling: feelingReducer,
})

export default createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
