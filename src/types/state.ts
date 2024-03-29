import { File, Feeling, Form, roles, severity, Profile, Report } from "./types"


/**
 * All users state & action types
 */

export interface AllUsersState {
  agencies: [],
  businesses: [],
  workers: [],
  agencyWorkers: []
}

export const SET_ALL_AGENCIES = 'SET_ALL_AGENCIES'
export const SET_ALL_BUSINESSES = 'SET_ALL_BUSINESSES'
export const SET_ALL_WORKERS = 'SET_ALL_WORKERS'
export const SET_AGENCY_WORKERS = 'SET_AGENCY_WORKERS'

interface SetAllAgenciesAction {
  type: typeof SET_ALL_AGENCIES,
  data: any
}

interface SetAllBusinessesAction {
  type: typeof SET_ALL_BUSINESSES,
  data: any
}

interface SetAllWorkersAction {
  type: typeof SET_ALL_WORKERS,
  data: any
}

interface SetAgencyWorkersAction {
  type: typeof SET_AGENCY_WORKERS,
  data: any
}

export type AllUsersActionTypes = SetAllAgenciesAction | SetAllBusinessesAction | SetAllWorkersAction | SetAgencyWorkersAction


/**
 * Report state & action types
 */
export interface ReportState {
  currentReport: Report,
  reports: [],
}

export const SET_CURRENT_REPORT = "SET_CURRENT_REPORT"
export const SET_REPORTS = "SET_REPORTS"

interface SetCurrentReportAction {
  type: typeof SET_CURRENT_REPORT
  data: any

}

interface SetReportsAction {
  type: typeof SET_REPORTS
  data: any
}

export type ReportActionTypes = SetCurrentReportAction | SetReportsAction


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

export const AGENCY_FETCH = 'AGENCY_FETCH'
export const AGENCY_UPDATE = 'AGENCY_FETCH'
export const USERCOMPANY_FETCH = 'USERCOMPANY_FETCH'
export const USERCOMPANY_UPDATE = 'AGENCY_FETCH'
export const WORKERS_FETCH = 'WORKERS_FETCH'
export const WORKER_UPDATE = 'AGENCY_FETCH'


interface FetchWorkers {
  type: typeof WORKERS_FETCH
  data: any
}

interface FetchUserCompanies {
  type: typeof USERCOMPANY_FETCH
  data: any
}

interface FetchAgencyCompanies {
  type: typeof USERCOMPANY_FETCH
  data: any
}
interface UpdateWorker {
  type: typeof WORKER_UPDATE
  data: any
}
interface UpdateAgency {
  type: typeof AGENCY_UPDATE
  data: any
}

interface UpdateUserCompany {
  type: typeof AGENCY_UPDATE
  data: any
}


export type AdminActionTypes = FetchAgencyCompanies | FetchUserCompanies | FetchWorkers | UpdateAgency | UpdateUserCompany | UpdateWorker

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
  madeContracts: object[],
  businessContract: any
}

export const ADD_B_CONTRACT = 'ADD_BUSINESS_CONTRACT'
export const ADD_B_WB_CONTRACT = 'ADD_BUSINESS_CONTRACT_WORKER_BUSINESS'
export const B_FETCH = 'FETCH_BUSINESS_CONTRACTS'
export const B_UPDATE = 'UPDATE_BUSINESS_SEARCH'
export const B_DELETE = 'DELETE_BUSINESS_CONTRACT_BY_ID'
export const ACTIVATE_B_CONTRACT = 'ACTIVATE_BUSINESS_CONTRACT'
export const DECLINE_B_CONTRACT = 'DECLINE_BUSINESS_CONTRACT'
export const B_SEND = 'SEND_BUSINESS_CONTRACT'
export const B_ACCEPT = 'ACCEPT_BUSINESS_CONTRACT'
export const SEND_BACK_B_CONTRACT = 'SEND_BACK_BUSINESS_CONTRACT'

interface ActivateBusinessContract {
  type: typeof ACTIVATE_B_CONTRACT
  data: any
}

interface AddBusinessContractAction {
  type: typeof ADD_B_CONTRACT
  data: any
}

interface AddBusinessContractWorkerBusinessAction {
  type: typeof ADD_B_WB_CONTRACT
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

interface RefuseBusinessContractAction {
  type: typeof B_DELETE
  data: any
}

interface DeclineBusinessCOntractAction {
  type: typeof DECLINE_B_CONTRACT
  data: any
}

interface SendBusinessContract {
  type: typeof B_SEND
  data: any
}

interface AcceptBusinessContract {
  type: typeof B_ACCEPT
  data: any
}

interface SendBackBusinessContract {
  type: typeof SEND_BACK_B_CONTRACT,
  data: any
}

export type BusinessContractActions = AddBusinessContractAction | AddBusinessContractWorkerBusinessAction | BusinessContractFetchAction | SendBackBusinessContract |
  UpdateBusinessSearchAction | RefuseBusinessContractAction | ActivateBusinessContract | DeclineBusinessCOntractAction | SendBusinessContract | AcceptBusinessContract

export interface WorkContractState {
  searchList: object[],
  madeContracts: object[],
  workContracts: object[]
}

export const ADD_W_CONTRACT = 'ADD_WORK_CONTRACT'
export const W_FETCH = 'FETCH_WORK_CONTRACTS'
export const W_UPDATE = 'UPDATE_WORK_SEARCH'
export const W_DELETE = 'DELETE_WORK_CONTRACT_BY_ID'
export const W_JOB = 'PUT_WORK_CONTRACT_JOB'

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

interface PutWorkContractJobAction {
  type: typeof W_JOB
  data: any
}

export type WorkContractActionTypes = AddWorkContractAction | FetchWorkContractAction | UpdateWorkContractAction | DeleteWorkContractAction | PutWorkContractJobAction 

export interface FeelingState {
  currentFeeling: Feeling,
  feelingDataSet: any,
  feelings: Feeling[]
}

export interface FileState {
  currentFiles: File
}

export interface ProfileState {
  currentProfile: Profile,
  profileToBeViewed: Profile,
  profiles: any
}

export const ADD_FEELING = 'ADD_FEELING'
export const ADD_FEELINGS = 'ADD_FEELINGS'
export const FETCH_FEELINGS = 'FETCH_FEELINGS'
export const CLEAR_CURRENT_FEELING = 'CLEAR_CURRENT_FEELING'
export const SET_CURRENT_FEELING = 'SET_CURRENT_FEELING'
export const UPDATE_FEELING_DATASET = 'UPDATE_FEELING_DATASET'

export const SET_CURRENT_FILES = 'SET_CURRENT_FILES'
export const ADD_FILE = 'ADD_FILE'

export interface SetCurrentFilesAction {
  type: typeof SET_CURRENT_FILES
  data: any
}

export interface AddFileAction {
  type: typeof ADD_FILE
  data: any
}

interface AddFeelingAction {
  type: typeof ADD_FEELING
  data: any
}

interface AddFeelingsAction {
  type: typeof ADD_FEELINGS
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
  SetCurrentFeelingAction | UpdateFeelingDatasetAction | AddFeelingsAction

export type FileActionTypes = SetCurrentFilesAction | AddFileAction

export const SET_CURRENT_FORM = "SET_CURRENT_FORM"
export const UPDATE_TITLE = "UPDATE_TITLE"
export const SET_DESCRIPTION = "SET_DESCRIPTION"
export const SET_FILLED = "SET_FILLED"
export const SET_COMMON = "SET_COMMON"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const UPDATE_QUESTION_OPTION = "UPDATE_QUESTION_OPTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const REMOVE_OPTION = "REMOVE_OPTION"
export const REMOVE_OPTION_VALUE = "REMOVE_OPTION_VALUE"
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

interface SetFilledAction {
  type: typeof SET_FILLED
  data: any
}

interface SetCommonAction {
  type: typeof SET_COMMON
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
interface RemoveOptionValueAction {
  type: typeof REMOVE_OPTION_VALUE
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
  | SetFilledAction
  | SetCommonAction
  | AddQuestionAction
  | UpdateQuestionAction
  | UpdateQuestionOptionAction
  | RemoveQuestionAction
  | RemoveOptionAction
  | RemoveOptionValueAction
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


// BUSINESS CONTRACT FORM
export const SET_CURRENT_BUSINESS_CONTRACT_FORM = "SET_CURRENT_BUSINESS_CONTRACT_FORM"
export const UPDATE_BUSINESS_CONTRACT_TITLE = "UPDATE_BUSINESS_CONTRACT_TITLE"
export const UPDATE_BUSINESS_CONTRACT_ANSWER = "UPDATE_BUSINESS_CONTRACT_ANSWER"
export const SET_BUSINESS_CONTRACT_DESCRIPTION = "SET_BUSINESS_CONTRACT_DESCRIPTION"
export const SET_BUSINESS_CONTRACT_FILLED = "SET_BUSINESS_CONTRACT_FILLED"
export const SET_BUSINESS_CONTRACT_COMMON = "SET_BUSINESS_CONTRACT_COMMON"
export const ADD_BUSINESS_CONTRACT_QUESTION = "ADD_BUSINESS_CONTRACT_QUESTION"
export const UPDATE_BUSINESS_CONTRACT_QUESTION = "UPDATE_BUSINESS_CONTRACT_QUESTION"
export const UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION = "UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION"
export const REMOVE_BUSINESS_CONTRACT_QUESTION = "REMOVE_BUSINESS_CONTRACT_QUESTION"
export const REMOVE_BUSINESS_CONTRACT_OPTION = "REMOVE_BUSINESS_CONTRACT_OPTION"
export const SET_BUSINESS_CONTRACT_QUESTIONS = "SET_BUSINESS_CONTRACT_QUESTIONS"
export const CLEAR_CURRENT_BUSINESS_CONTRACT_FORM = "CLEAR_CURRENT_BUSINESS_CONTRACT_FORM"


interface SetCurrentBusinessContractFormAction {
  type: typeof SET_CURRENT_BUSINESS_CONTRACT_FORM
  data: any
}

interface UpdateBusinessContractTitleAction {
  type: typeof UPDATE_BUSINESS_CONTRACT_TITLE
  data: any
}

interface UpdateBusinessContractAnswerAction {
  type: typeof UPDATE_BUSINESS_CONTRACT_ANSWER
  data: any
}

interface SetBusinessContractDescriptionAction {
  type: typeof SET_BUSINESS_CONTRACT_DESCRIPTION
  data: any
}

interface SetBusinessContractFilledAction {
  type: typeof SET_BUSINESS_CONTRACT_FILLED
  data: any
}

interface SetBusinessContractCommonAction {
  type: typeof SET_BUSINESS_CONTRACT_COMMON
  data: any
}

interface AddBusinessContractQuestionAction {
  type: typeof ADD_BUSINESS_CONTRACT_QUESTION
  data: any
}

interface UpdateBusinessContractQuestionAction {
  type: typeof UPDATE_BUSINESS_CONTRACT_QUESTION
  data: any
}

interface UpdateBusinessContractQuestionOptionAction {
  type: typeof UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION
  data: any
}

interface RemoveBusinessContractQuestionAction {
  type: typeof REMOVE_BUSINESS_CONTRACT_QUESTION
  data: any
}

interface RemoveBusinessContractOptionAction {
  type: typeof REMOVE_BUSINESS_CONTRACT_OPTION
  data: any
}

interface SetBusinessContractQuestionsAction {
  type: typeof SET_BUSINESS_CONTRACT_QUESTIONS
  data: any
}

interface ClearCurrentBusinessContractFormAction {
  type: typeof CLEAR_CURRENT_BUSINESS_CONTRACT_FORM
  data: any
}

export type BusinessContractFormActionTypes =
  | SetCurrentBusinessContractFormAction
  | UpdateBusinessContractTitleAction
  | UpdateBusinessContractAnswerAction
  | SetBusinessContractDescriptionAction
  | SetBusinessContractFilledAction
  | SetBusinessContractCommonAction
  | AddBusinessContractQuestionAction
  | UpdateBusinessContractQuestionAction
  | UpdateBusinessContractQuestionOptionAction
  | RemoveBusinessContractQuestionAction
  | RemoveBusinessContractOptionAction
  | SetBusinessContractQuestionsAction
  | ClearCurrentBusinessContractFormAction

export const FETCH_BUSINESS_CONTRACT_LIST = "FETCH_BUSINESS_CONTRACT_LIST"
export const ADD_TO_BUSINESS_CONTRACT_LIST = "ADD_TO_BUSINESS_CONTRACT_LIST"

interface FetchBusinessContractListAction {
  type: typeof FETCH_BUSINESS_CONTRACT_LIST
  data: any
}

interface AddToBusinessContractList {
  type: typeof ADD_TO_BUSINESS_CONTRACT_LIST
  data: Form
}

export type BusinssContractListActionTypes =
  | FetchBusinessContractListAction
  | AddToBusinessContractList

//Edit profile

export const UPDATE_CURRENT_PROFILE = "UPDATE_CURRENT_PROFILE"
export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE"
export const SET_PROFILE_TO_BE_VIEWED = "SET_PROFILE_TO_BE_VIEWED"
export const POST_PROFILE = "POST_PROFILE"
export const GET_ALL_PROFILES = "GET_ALL_PROFILES"



interface GetAllProfiles {
  type: typeof GET_ALL_PROFILES
  data: any
}

interface SetCurrentProfileAction {
  type: typeof SET_CURRENT_PROFILE
  data: any
}

interface SetProfileToBeViewedAction {
  type: typeof SET_PROFILE_TO_BE_VIEWED
  data: any
}

interface UpdateCurrentProfile {
  type: typeof SET_CURRENT_FORM
  data: any
}

interface PostProfile {
  type: typeof POST_PROFILE
  data: any
}

export type ProfileActionTypes =
  UpdateCurrentProfile
  | PostProfile
  | SetCurrentProfileAction
  | SetProfileToBeViewedAction
  | GetAllProfiles

export interface NotificationsState {
  notifications: {}
}

export const FETCH_NOTIFICATIONS = "FETCH_NOTIFICATIONS"
export const POST_NOTIFICATIONS = "POST_NOTIFICATIONS"
export const UPDATE_NOTIFICATIONS = "UPDATE_NOTIFICATIONS"
export const READ_NOTIFICATIONS = "READ_NOTIFICATIONS"
export const CLEAR_ALL_NOTIFICATION = "CLEAR_ALL_NOTIFICATION"

interface FetchNotifications {
  type: typeof FETCH_NOTIFICATIONS
  data: any
}

interface PostNotifications {
  type: typeof POST_NOTIFICATIONS
  data: any
}

interface UpdateNotifications {
  type: typeof UPDATE_NOTIFICATIONS
  data: any
}

interface ReadNotifications {
  type: typeof READ_NOTIFICATIONS
  data: any
}

interface ClearAllNotifications {
  type: typeof CLEAR_ALL_NOTIFICATION
  data: any
}

export type NotificationsActions = FetchNotifications | PostNotifications | UpdateNotifications | ReadNotifications | ClearAllNotifications

export const POST_FEEDBACK = "POST_FEEDBACK"
export const RESET_FEEDBACK = "RESET_FEEDBACK"
export const GET_USER_FEEDBACKS = "GET_USER_FEEDBACKS"
export const GET_ALL_FEEDBACKS = "GET_ALL_FEEDBACKS"


interface PostFeedBack {
  type: typeof POST_FEEDBACK
  data: any
}

interface ResetFeedBack {
  type: typeof RESET_FEEDBACK
  data: any
}

interface GetUserFeedBacks {
  type: typeof GET_USER_FEEDBACKS
  data: any
}

interface GetAllFeedBacks {
  type: typeof GET_ALL_FEEDBACKS
  data: any
}

export type FeedBackActions = PostFeedBack | ResetFeedBack | GetUserFeedBacks | GetAllFeedBacks

export interface FeedBackState {
  myFeedBacks: [],
  allFeedBacks: [],
  feedBackSaved: boolean
}
