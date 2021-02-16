import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import userReducer from "../reducers/userReducer"
import alertReducer from "../reducers/alertReducer"
import formReducer from "../reducers/formReducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  form: formReducer,
})

export default createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
