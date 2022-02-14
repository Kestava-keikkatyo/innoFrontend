import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import fileReducer from "../reducers/fileReducer";
import alertReducer from "../reducers/alertReducer";
import businessContractReducer from "../reducers/businessContractReducer";
import workContractReducer from "../reducers/workContractReducer";
import breadcrumbReducer from "../reducers/breadcrumbReducer";
import feelingReducer from "../reducers/feelingReducer";
import formReducer from "../reducers/formReducer";
import formListReducer from "../reducers/formListReducer";
import buisnessContractFormReducer from "../reducers/businessContractFormReducer";
import allUsersReducer from "../reducers/allUsersReducer";
import profileReducer from "../reducers/profileReducer";
import notificationsReducer from "../reducers/notificationsReducer";
import reportReducer from "../reducers/reportReducer";
import jobReducer from "../reducers/jobReducer";
import feedbackReducer from "../reducers/FeedbackReducer";
import usersReducer from "../reducers/usersReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
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
  profile: profileReducer,
  notifications: notificationsReducer,
  report: reportReducer,
  job: jobReducer,
  feedback: feedbackReducer,
  users: usersReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export default createStore<any, any, any, any>(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
