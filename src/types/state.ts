import { Feeling, Form, roles, severity } from "./types"

export interface User {
  _id: string,
  name: string,
  email: string,
  type: roles.Agency | roles.Business | roles.Business
}

export interface SignUpUser extends User {
  password: string
}

export interface LoggedInUser extends User {
  token: string,
}

export const LOGIN = 'USER_LOGIN'
export const LOGOUT = 'USER_LOGOUT'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_FAILURE = 'USER_FAILURE'
export const USER_PROFILE = 'USER_PROFILE'

interface UserProfileAction {
  type: typeof USER_PROFILE
  data: any
}

interface LoginAction {
  type: typeof LOGIN
  data: any
}

interface UserFailureAction {
  type: typeof USER_FAILURE
  data: any
}

interface UserRequestAction {
  type: typeof USER_REQUEST
  data: any
}

interface LogoutAction {
  type: typeof LOGOUT
  data: any
}

export type UserActionTypes = LoginAction | LogoutAction | UserProfileAction | UserRequestAction | UserFailureAction

export interface AlertState {
  severity: severity.Error | severity.Success | severity.Info | severity.Warning,
  message: string,
  open: boolean
}

export const ALERT_CLEAR = 'ALERT_CLEAR'
export const ALERT_SET = 'ALERT_SET'

interface AlertClearAction {
  type: typeof ALERT_CLEAR
  data: any
}

interface AlertSetAction {
  type: typeof ALERT_SET
  data: any
}

export type AlertActionTypes = AlertClearAction | AlertSetAction

export interface BreadcrumbState {
  severity: severity.Error | severity.Success | severity.Info | severity.Warning,
  message: string,
  open: boolean
}

export const BREADCRUMB_ADD = 'BREADCRUMB_ADD'
export const BREADCRUMB_SET = 'BREADCRUMB_SET'

interface BreadcrumbAddAction {
  type: typeof BREADCRUMB_ADD
  data: any
}

interface BreadcrumbSetAction {
  type: typeof BREADCRUMB_SET
  data: any
}

export type BreadcrumbActionTypes = BreadcrumbAddAction | BreadcrumbSetAction

export interface BusinessContractState {
  searchList: object[],
  madeContracts: object[]
}

export const ADD_B_CONTRACT = 'ADD_BUSINESS_CONTRACT'
export const B_FETCH = 'FETCH_BUSINESS_CONTRACTS'
export const B_UPDATE = 'UPDATE_BUSINESS_SEARCH'
export const B_DELETE = 'DELETE_BUSINESS_CONTRACT_BY_ID'
export const ACTIVATE_B_CONTRACT = 'ACTIVATE_BUSINESS_CONTRACT'

interface ActivateBusinessContract {
  type: typeof ACTIVATE_B_CONTRACT
  data: any
}

interface AddBusinessContractAction {
  type: typeof ADD_B_CONTRACT
  data: any
}

interface BusinessContractFetchAction {
  type: typeof B_FETCH
  data: any
}

interface UpdateBusinessSearchAction {
  type: typeof B_UPDATE
  data: any
}

interface DeleteBusinessContractAction {
  type: typeof B_DELETE
  data: any
}

export type BusinessContractActions = AddBusinessContractAction | BusinessContractFetchAction |
UpdateBusinessSearchAction | DeleteBusinessContractAction | ActivateBusinessContract

export interface WorkContractState {
  searchList: object[],
  madeContracts: object[]
}

export const ADD_W_CONTRACT = 'ADD_WORK_CONTRACT'
export const W_FETCH = 'FETCH_WORK_CONTRACTS'
export const W_UPDATE = 'UPDATE_WORK_SEARCH'
export const W_DELETE = 'DELETE_WORK_CONTRACT_BY_ID'

interface AddWorkContractAction {
  type: typeof ADD_W_CONTRACT
  data: any
}

interface FetchWorkContractAction {
  type: typeof W_FETCH
  data: any
}

interface UpdateWorkContractAction {
  type: typeof W_UPDATE
  data: any
}

interface DeleteWorkContractAction {
  type: typeof W_DELETE
  data: any
}

export type WorkContractActionTypes = AddWorkContractAction | FetchWorkContractAction | UpdateWorkContractAction | DeleteWorkContractAction

export interface FeelingState {
  currentFeeling: Feeling,
  feelingDataSet: any,
  feelings: Feeling[]
}

export const ADD_FEELING = 'ADD_FEELING'
export const FETCH_FEELINGS = 'FETCH_FEELINGS'
export const CLEAR_CURRENT_FEELING = 'CLEAR_CURRENT_FEELING'
export const SET_CURRENT_FEELING = 'SET_CURRENT_FEELING'
export const UPDATE_FEELING_DATASET = 'UPDATE_FEELING_DATASET'

interface AddFeelingAction {
  type: typeof ADD_FEELING
  data: any
}

export interface FetchFeelingsAction {
  type: typeof FETCH_FEELINGS
  data: any
}

interface ClearCurrentFeelingAction {
  type: typeof CLEAR_CURRENT_FEELING
  data: any
}

interface SetCurrentFeelingAction {
  type: typeof SET_CURRENT_FEELING
  data: any
}

interface UpdateFeelingDatasetAction {
  type: typeof UPDATE_FEELING_DATASET
  data: any
}

export type FeelingActionTypes = AddFeelingAction | FetchFeelingsAction | ClearCurrentFeelingAction |
SetCurrentFeelingAction | UpdateFeelingDatasetAction

export const SET_CURRENT_FORM = "SET_CURRENT_FORM"
export const UPDATE_TITLE = "UPDATE_TITLE"
export const SET_DESCRIPTION = "SET_DESCRIPTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const UPDATE_QUESTION_OPTION = "UPDATE_QUESTION_OPTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const REMOVE_OPTION = "REMOVE_OPTION"
export const SET_QUESTIONS = "SET_QUESTIONS"
export const CLEAR_CURRENT_FORM = "CLEAR_CURRENT_FORM"

interface SetCurrentFormAction {
  type: typeof SET_CURRENT_FORM
  data: any
}

interface UpdateTitleAction {
  type: typeof UPDATE_TITLE
  data: any
}

interface SetDescriptionAction {
  type: typeof SET_DESCRIPTION
  data: any
}

interface AddQuestionAction {
  type: typeof ADD_QUESTION
  data: any
}

interface UpdateQuestionAction {
  type: typeof UPDATE_QUESTION
  data: any
}

interface UpdateQuestionOptionAction {
  type: typeof UPDATE_QUESTION_OPTION
  data: any
}

interface RemoveQuestionAction {
  type: typeof REMOVE_QUESTION
  data: any
}

interface RemoveOptionAction {
  type: typeof REMOVE_OPTION
  data: any
}

interface SetQuestionsAction {
  type: typeof SET_QUESTIONS
  data: any
}

interface ClearCurrentFormAction {
  type: typeof CLEAR_CURRENT_FORM
  data: any
}

export type FormActionTypes =
  | SetCurrentFormAction
  | UpdateTitleAction
  | SetDescriptionAction
  | AddQuestionAction
  | UpdateQuestionAction
  | UpdateQuestionOptionAction
  | RemoveQuestionAction
  | RemoveOptionAction
  | SetQuestionsAction
  | ClearCurrentFormAction

  export const FETCH_FORM_LIST = "FETCH_FORM_LIST"
  export const ADD_TO_FORM_LIST = "ADD_TO_FORM_LIST"

  interface FetchFormListAction {
    type: typeof FETCH_FORM_LIST
    data: any
  }

  interface AddToFormList {
    type: typeof ADD_TO_FORM_LIST
    data: Form
  }

export type FormListActionTypes =
  | FetchFormListAction
  | AddToFormList