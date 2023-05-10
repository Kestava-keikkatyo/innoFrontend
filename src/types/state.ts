import {
  Feeling,
  Form,
  severity,
  Report,
  Feedback,
  Job,
  feedbackType,
  usersType,
  jobType,
  Topic,
  topicType,
  WorkRequest,
  workRequestType,
  User,
  notificationType,
  Notification,
  feelingType,
  MyFeeling,
  Responsibility,
  responsibilityType,
  EmploymentAgreement,
} from './types'

export interface UserState {
  loggedIn: boolean
  loading: boolean
  data: any
  contacts: any[]
}

export interface UsersState {
  currentUser: User | undefined
  loading: boolean
  users: User[]
  fetchError?: string
}

export interface UserGetAll {
  type: typeof usersType.USER_GET_ALL_REQUEST
}

export interface UserGetAllSuccess {
  type: typeof usersType.USER_GET_ALL_SUCCESS
  data: User[]
}

export interface UserGetCurrentRequest {
  type: typeof usersType.USER_GET_CURRENT_REQUEST
}

export interface UserGetCurrentSuccess {
  type: typeof usersType.USER_GET_CURRENT_SUCCESS
  data: User
}

export interface UserActionFailure {
  type: typeof usersType.USER_ACTION_FAILURE
  data: string
}
export interface UserAction {
  type:
  | typeof usersType.USER_UPDATE_REQUEST
  | typeof usersType.USER_UPDATE_SUCCESS
  | typeof usersType.USER_CREATED_REQUEST
  | typeof usersType.USER_CREATED_SUCCESS
  | typeof usersType.USER_DELETED_REQUEST
  | typeof usersType.USER_DELETED_SUCCESS
  data: User
}

export interface UserUpdateStatus {
  type: typeof usersType.USER_UPDATE_STATUS_REQUEST | typeof usersType.USER_UPDATE_STATUS_SUCCESS
  data: { user: User; active: boolean }
}

export type UsersAction =
  | UserGetAll
  | UserGetAllSuccess
  | UserGetCurrentRequest
  | UserGetCurrentSuccess
  | UserActionFailure
  | UserAction
  | UserUpdateStatus

/**
 * All notification state & action types
 */
export interface NotificationState {
  loading: boolean
  notifications: Notification[]
  fetchError?: string
}
export interface NotificationGetAllRequest {
  type: typeof notificationType.NOTIFICATION_GET_ALL_REQUEST
}

export interface NotificationGetAllSuccess {
  type: typeof notificationType.NOTIFICATION_GET_ALL_SUCCESS
  data: Notification[]
}

export interface NotificationActionFailure {
  type: typeof notificationType.NOTIFICATION_ACTION_FAILURE
  data: string
}

export interface NotificationCleared {
  type:
  | typeof notificationType.NOTIFICATION_CLEARED_REQUEST
  | typeof notificationType.NOTIFICATION_CLEARED_SUCCESS
  data: Notification
}

export type NotificationsAction =
  | NotificationGetAllRequest
  | NotificationGetAllSuccess
  | NotificationActionFailure
  | NotificationCleared

/**
 * All users state & action types
 */

export interface AllUsersState {
  agencies: User[]
  businesses: User[]
  workers: User[]
  agencyWorkers: User[]
  admins: User[]
}

export const SET_ALL_AGENCIES = 'SET_ALL_AGENCIES'
export const SET_ALL_BUSINESSES = 'SET_ALL_BUSINESSES'
export const SET_ALL_WORKERS = 'SET_ALL_WORKERS'
export const SET_AGENCY_WORKERS = 'SET_AGENCY_WORKERS'
export const SET_ALL_ADMINS = 'SET_ALL_ADMINS'

interface SetAllAgenciesAction {
  type: typeof SET_ALL_AGENCIES
  data: any
}

interface SetAllBusinessesAction {
  type: typeof SET_ALL_BUSINESSES
  data: any
}

interface SetAllWorkersAction {
  type: typeof SET_ALL_WORKERS
  data: any
}

interface SetAgencyWorkersAction {
  type: typeof SET_AGENCY_WORKERS
  data: any
}

interface SetAllAdminsAction {
  type: typeof SET_ALL_ADMINS
  data: any
}

export type AllUsersActionTypes =
  | SetAllAgenciesAction
  | SetAllBusinessesAction
  | SetAllWorkersAction
  | SetAgencyWorkersAction
  | SetAllAdminsAction

/**
 * Report state & action types
 */
export interface ReportState {
  currentReport: Report
  reports: []
}

export const SET_CURRENT_REPORT = 'SET_CURRENT_REPORT'
export const SET_REPORTS = 'SET_REPORTS'

interface SetCurrentReportAction {
  type: typeof SET_CURRENT_REPORT
  data: any
}

interface SetReportsAction {
  type: typeof SET_REPORTS
  data: any
}

export type ReportActionTypes = SetCurrentReportAction | SetReportsAction


export interface SignUpUser extends User {
  password: string
}

export interface LoggedInUser extends User {
  token: string
}

/**
 * Feedback state & action types
 */
export interface FeedbackState {
  currentFeedback: Feedback | undefined
  loading: boolean
  feedbacks: Feedback[]
  fetchError?: string
}
export interface FeedbackSimilarActions {
  type:
  | typeof feedbackType.FEEDBACK_POSTED_REQUEST
  | typeof feedbackType.FEEDBACK_POSTED_SUCCESS
  | typeof feedbackType.FEEDBACK_UPDATED_REQUEST
  | typeof feedbackType.FEEDBACK_UPDATED_SUCCESS
  data: Feedback
}

export interface FeedbackActionFailure {
  type: typeof feedbackType.FEEDBACK_ACTION_FAILURE
  data: string
}

export interface FeedbackGetAllRequest {
  type: typeof feedbackType.FEEDBACK_GET_ALL_REQUEST
}

export interface FeedbackGetAllSuccess {
  type: typeof feedbackType.FEEDBACK_GET_ALL_SUCCESS
  data: Feedback[]
}

export interface FeedbackGetCurrentRequest {
  type: typeof feedbackType.FEEDBACK_GET_CURRENT_REQUEST
}
export interface FeedbackGetCurrentSuccess {
  type: typeof feedbackType.FEEDBACK_GET_CURRENT_SUCCESS
  data: Feedback
}

export type FeedbackAction =
  | FeedbackSimilarActions
  | FeedbackActionFailure
  | FeedbackGetAllRequest
  | FeedbackGetAllSuccess
  | FeedbackGetCurrentRequest
  | FeedbackGetCurrentSuccess

/**
 * Topic state & action types
 */
export interface TopicState {
  currentTopic: Topic | undefined
  loading: boolean
  topics: Topic[]
  fetchError?: string
}
export interface TopicSimilarActions {
  type:
  | typeof topicType.TOPIC_CREATED_REQUEST
  | typeof topicType.TOPIC_CREATED_SUCCESS
  | typeof topicType.TOPIC_DELETED_REQUEST
  | typeof topicType.TOPIC_DELETED_SUCCESS
  | typeof topicType.TOPIC_UPDATED_REQUEST
  | typeof topicType.TOPIC_UPDATED_SUCCESS
  data: Topic
}

export interface TopicActionFailure {
  type: typeof topicType.TOPIC_ACTION_FAILURE
  data: string
}
export interface TopicGetAllRequest {
  type: typeof topicType.TOPIC_GETALL_REQUEST
}

export interface TopicGetAllSuccess {
  type: typeof topicType.TOPIC_GETALL_SUCCESS
  data: Topic[]
}

export interface TopicGetCurrentRequest {
  type: typeof topicType.TOPIC_GET_CURRENT_REQUEST
}

export interface TopicGetCurrentSuccess {
  type: typeof topicType.TOPIC_GET_CURRENT_SUCCESS
  data: Topic
}

export type TopicActions =
  | TopicSimilarActions
  | TopicActionFailure
  | TopicGetAllRequest
  | TopicGetAllSuccess
  | TopicGetCurrentRequest
  | TopicGetCurrentSuccess

/**
 * Responsibility state & action types
 */
export interface ResponsibilityState {
  currentResponsibility: Responsibility | undefined
  loading: boolean
  responsibilities: Responsibility[]
  fetchError?: string
}
export interface ResponsibilitySimilarActions {
  type:
  | typeof responsibilityType.RESPONSIBILITY_CREATED_REQUEST
  | typeof responsibilityType.RESPONSIBILITY_CREATED_SUCCESS
  | typeof responsibilityType.RESPONSIBILITY_DELETED_REQUEST
  | typeof responsibilityType.RESPONSIBILITY_DELETED_SUCCESS
  | typeof responsibilityType.RESPONSIBILITY_UPDATED_REQUEST
  | typeof responsibilityType.RESPONSIBILITY_UPDATED_SUCCESS
  data: Responsibility
}

export interface ResponsibilityActionFailure {
  type: typeof responsibilityType.RESPONSIBILITY_ACTION_FAILURE
  data: string
}
export interface ResponsibilityGetAllRequest {
  type: typeof responsibilityType.RESPONSIBILITY_GETALL_REQUEST
}

export interface ResponsibilityGetAllSuccess {
  type: typeof responsibilityType.RESPONSIBILITY_GETALL_SUCCESS
  data: Responsibility[]
}

export interface ResponsibilityGetCurrentRequest {
  type: typeof responsibilityType.RESPONSIBILITY_GET_CURRENT_REQUEST
}

export interface ResponsibilityGetCurrentSuccess {
  type: typeof responsibilityType.RESPONSIBILITY_GET_CURRENT_SUCCESS
  data: Responsibility
}

export type ResponsibilityActions =
  | ResponsibilitySimilarActions
  | ResponsibilityActionFailure
  | ResponsibilityGetAllRequest
  | ResponsibilityGetAllSuccess
  | ResponsibilityGetCurrentRequest
  | ResponsibilityGetCurrentSuccess

/**
 * Work request state & action types
 */
export interface WorkRequestState {
  currentWorkRequest: WorkRequest | undefined
  loading: boolean
  workRequests: WorkRequest[]
  fetchError?: string
}
export interface WorkRequestSimilarActions {
  type:
  | typeof workRequestType.WORKREQUEST_SEND_REQUEST
  | workRequestType.WORKREQUEST_SEND_SUCCESS
  | typeof workRequestType.WORKREQUEST_UPDATED_REQUEST
  | workRequestType.WORKREQUEST_UPDATED_SUCCESS
  data: WorkRequest
}

export interface WorkRequestFailure {
  type: typeof workRequestType.WORKREQUEST_FAILURE
  data: string
}

export interface WorkRequestGetAllRequest {
  type: typeof workRequestType.WORKREQUEST_GETALL_REQUEST
}

export interface WorkRequestGetAllSuccess {
  type: workRequestType.WORKREQUEST_GETALL_SUCCESS
  data: WorkRequest[]
}

export interface WorkRequestGetCurrent {
  type: typeof workRequestType.WORKREQUEST_GET_CURRENT_REQUEST
}

export interface WorkRequestGetCurrentSuccess {
  type: workRequestType.WORKREQUEST_GET_CURRENT_SUCCESS
  data: WorkRequest
}

export type WorkRequestActions =
  | WorkRequestSimilarActions
  | WorkRequestFailure
  | WorkRequestGetAllRequest
  | WorkRequestGetAllSuccess
  | WorkRequestGetCurrent
  | WorkRequestGetCurrentSuccess

/**
 * Job state & action types
 */
export interface JobState {
  currentJob: Job | undefined
  loading: boolean
  jobs: Job[]
  fetchError?: string
}

export interface JobGetAllRequest {
  type: typeof jobType.JOB_GET_ALL_REQUEST
}

export interface JobGetAllSuccess {
  type: typeof jobType.JOB_GET_ALL_SUCCESS
  data: Job[]
}

export interface JobActionFailure {
  type: typeof jobType.JOB_ACTION_FAILURE
  data: string
}

export interface JobGetCurrentRequest {
  type: typeof jobType.JOB_GET_CURRENT_REQUEST
}

export interface JobGetCurrentSuccess {
  type: typeof jobType.JOB_GET_CURRENT_SUCCESS
  data: Job
}
export interface JobSimilarActions {
  type:
  | typeof jobType.JOB_CREATED_REQUEST
  | typeof jobType.JOB_CREATED_SUCCESS
  | typeof jobType.JOB_UPDATED_REQUEST
  | typeof jobType.JOB_UPDATED_SUCCESS
  | typeof jobType.JOB_DELETED_REQUEST
  | typeof jobType.JOB_DELETED_SUCCESS
  data: Job
}

export type JobActions =
  | JobGetAllRequest
  | JobGetAllSuccess
  | JobActionFailure
  | JobGetCurrentRequest
  | JobGetCurrentSuccess
  | JobSimilarActions

/**
 * Worker feeling state & action types
 */
export interface MyFeelingState {
  currentMyFeeling: MyFeeling | undefined
  loading: boolean
  myFeelings: MyFeeling[]
  fetchError?: string
}

export interface FeelingGetAllRequest {
  type: typeof feelingType.FEELING_GET_ALL_REQUEST
}

export interface FeelingGetAllSuccess {
  type: typeof feelingType.FEELING_GET_ALL_SUCCESS
  data: MyFeeling[]
}

export interface FeelingActionFailure {
  type: typeof feelingType.FEELING_ACTION_FAILURE
  data: string
}

export interface FeelingGetCurrentRequest {
  type: typeof feelingType.FEELING_GET_CURRENT_REQUEST
}

export interface FeelingGetCurrentSuccess {
  type: typeof feelingType.FEELING_GET_CURRENT_SUCCESS
  data: MyFeeling
}
export interface FeelingSimilarActions {
  type:
  | typeof feelingType.FEELING_CREATED_REQUEST
  | typeof feelingType.FEELING_CREATED_SUCCESS
  | typeof feelingType.FEELING_UPDATED_REQUEST
  | typeof feelingType.FEELING_UPDATED_SUCCESS
  | typeof feelingType.FEELING_DELETED_REQUEST
  | typeof feelingType.FEELING_DELETED_SUCCESS
  data: MyFeeling
}

export type MyFeelingActions =
  | FeelingGetAllRequest
  | FeelingGetAllSuccess
  | FeelingActionFailure
  | FeelingGetCurrentRequest
  | FeelingGetCurrentSuccess
  | FeelingSimilarActions

export const LOGIN = 'USER_LOGIN'
export const LOGOUT = 'USER_LOGOUT'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_FAILURE = 'USER_FAILURE'
export const USER_PROFILE = 'USER_PROFILE'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS'
export const SEND_MAIL_FAILED = 'SEND_MAIL_FAILED'

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

interface FetchContactsSuccessAction {
  type: typeof FETCH_CONTACTS_SUCCESS
  data: User[]
}

interface LogoutAction {
  type: typeof LOGOUT
  data: any
}

export type UserActionTypes =
  | LoginAction
  | LogoutAction
  | UserProfileAction
  | UserRequestAction
  | UserFailureAction
  | FetchContactsSuccessAction

export interface AlertState {
  severity: severity.Error | severity.Success | severity.Info | severity.Warning
  message: string
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
  severity: severity.Error | severity.Success | severity.Info | severity.Warning
  message: string
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
  searchList: object[]
  madeContracts: object[]
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
  type: typeof SEND_BACK_B_CONTRACT
  data: any
}

export type BusinessContractActions =
  | AddBusinessContractAction
  | AddBusinessContractWorkerBusinessAction
  | BusinessContractFetchAction
  | SendBackBusinessContract
  | UpdateBusinessSearchAction
  | RefuseBusinessContractAction
  | ActivateBusinessContract
  | DeclineBusinessCOntractAction
  | SendBusinessContract
  | AcceptBusinessContract

export interface WorkContractState {
  searchList: object[]
  madeContracts: object[]
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

export type WorkContractActionTypes =
  | AddWorkContractAction
  | FetchWorkContractAction
  | UpdateWorkContractAction
  | DeleteWorkContractAction
  | PutWorkContractJobAction


/**
 * Employment form state & action types
 */

export interface EmploymentAgreementState {
  currentAgreement: EmploymentAgreement
  agreements: any[]
}

export const E_SET_CURRENT = 'SET_CURRENT_EMPLOYMENT_AGREEMENT'
export const E_SAVE = 'E_SAVE'
export const E_FETCH = 'E_FETCH'
export const E_CLEAR_CURRENT = 'CLEAR_CURRENT_EMPLOYMENT_FORM'

interface SetCurrentEmploymentAgreementAction {
  type: typeof E_SET_CURRENT
  data: any
}

interface SaveEmploymentAgreementAction {
  type: typeof E_SAVE
  data: any
}

interface SetEmploymentAgreementsAction {
  type: typeof E_FETCH
  data: EmploymentAgreement[]
}

interface ClearCurrentEmploymentAgreement {
  type: typeof E_CLEAR_CURRENT
  data: any
}

export type EmploymentAgreementActionTypes = 
SetCurrentEmploymentAgreementAction
| SaveEmploymentAgreementAction
| SetEmploymentAgreementsAction
| ClearCurrentEmploymentAgreement


export interface FeelingState {
  currentFeeling: Feeling
  feelingDataSet: any
  feelings: Feeling[]
}

export interface FileState {
  currentFiles: (File | null)[]
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

export type FeelingActionTypes =
  | AddFeelingAction
  | FetchFeelingsAction
  | ClearCurrentFeelingAction
  | SetCurrentFeelingAction
  | UpdateFeelingDatasetAction
  | AddFeelingsAction

export type FileActionTypes = SetCurrentFilesAction | AddFileAction

export const SET_CURRENT_FORM = 'SET_CURRENT_FORM'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const SET_FILLED = 'SET_FILLED'
export const SET_COMMON = 'SET_COMMON'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const UPDATE_QUESTION_OPTION = 'UPDATE_QUESTION_OPTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const REMOVE_OPTION = 'REMOVE_OPTION'
export const REMOVE_OPTION_VALUE = 'REMOVE_OPTION_VALUE'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const CLEAR_CURRENT_FORM = 'CLEAR_CURRENT_FORM'

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

export const FETCH_FORM_LIST = 'FETCH_FORM_LIST'
export const ADD_TO_FORM_LIST = 'ADD_TO_FORM_LIST'

interface FetchFormListAction {
  type: typeof FETCH_FORM_LIST
  data: any
}

interface AddToFormList {
  type: typeof ADD_TO_FORM_LIST
  data: Form
}

export type FormListActionTypes = FetchFormListAction | AddToFormList

// BUSINESS CONTRACT FORM
export const SET_CURRENT_BUSINESS_CONTRACT_FORM = 'SET_CURRENT_BUSINESS_CONTRACT_FORM'
export const UPDATE_BUSINESS_CONTRACT_TITLE = 'UPDATE_BUSINESS_CONTRACT_TITLE'
export const UPDATE_BUSINESS_CONTRACT_ANSWER = 'UPDATE_BUSINESS_CONTRACT_ANSWER'
export const SET_BUSINESS_CONTRACT_DESCRIPTION = 'SET_BUSINESS_CONTRACT_DESCRIPTION'
export const SET_BUSINESS_CONTRACT_FILLED = 'SET_BUSINESS_CONTRACT_FILLED'
export const SET_BUSINESS_CONTRACT_COMMON = 'SET_BUSINESS_CONTRACT_COMMON'
export const ADD_BUSINESS_CONTRACT_QUESTION = 'ADD_BUSINESS_CONTRACT_QUESTION'
export const UPDATE_BUSINESS_CONTRACT_QUESTION = 'UPDATE_BUSINESS_CONTRACT_QUESTION'
export const UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION = 'UPDATE_BUSINESS_CONTRACT_QUESTION_OPTION'
export const REMOVE_BUSINESS_CONTRACT_QUESTION = 'REMOVE_BUSINESS_CONTRACT_QUESTION'
export const REMOVE_BUSINESS_CONTRACT_OPTION = 'REMOVE_BUSINESS_CONTRACT_OPTION'
export const SET_BUSINESS_CONTRACT_QUESTIONS = 'SET_BUSINESS_CONTRACT_QUESTIONS'
export const CLEAR_CURRENT_BUSINESS_CONTRACT_FORM = 'CLEAR_CURRENT_BUSINESS_CONTRACT_FORM'

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

export const FETCH_BUSINESS_CONTRACT_LIST = 'FETCH_BUSINESS_CONTRACT_LIST'
export const ADD_TO_BUSINESS_CONTRACT_LIST = 'ADD_TO_BUSINESS_CONTRACT_LIST'

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

export interface NotificationsState {
  notifications: []
}

export const FETCH_GIGS = 'FETCH_GIGS'
export const ACCEPT_WORKERS = 'ACCEPT_WORKERS'

interface FetchGigs {
  type: typeof FETCH_GIGS
  data: any
}

interface AcceptWorkers {
  type: typeof ACCEPT_WORKERS
  data: any
}



export type WorkAddActions = FetchGigs | AcceptWorkers