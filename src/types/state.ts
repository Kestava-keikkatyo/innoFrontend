import { roles, severity } from "./types"

export interface User {
  id?: string,
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

export interface Credentials {
  email: string,
  password: string
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
UpdateBusinessSearchAction | DeleteBusinessContractAction

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