import { compose } from 'redux'

export enum feelingType {
  FEELING_GET_ALL_REQUEST = 'FEELING_GET_ALL_REQUEST',
  FEELING_GET_ALL_SUCCESS = 'FEELING_GET_ALL_SUCCESS',
  FEELING_ACTION_FAILURE = 'FEELING_ACTION_FAILURE',
  FEELING_GET_CURRENT_REQUEST = 'FEELING_GET_CURRENT_REQUEST',
  FEELING_GET_CURRENT_SUCCESS = 'FEELING_GET_CURRENT_SUCCESS',
  FEELING_DELETED_REQUEST = 'FEELING_DELETED_REQUEST',
  FEELING_DELETED_SUCCESS = 'FEELING_DELETED_SUCCESS',
  FEELING_CREATED_REQUEST = 'FEELING_CREATED_REQUEST',
  FEELING_CREATED_SUCCESS = 'FEELING_CREATED_SUCCESS',
  FEELING_UPDATED_REQUEST = 'FEELING_UPDATED_REQUEST',
  FEELING_UPDATED_SUCCESS = 'FEELING_UPDATED_SUCCESS',
}

export enum feedbackType {
  FEEDBACK_POSTED_REQUEST = 'FEEDBACK_POSTED_REQUEST',
  FEEDBACK_POSTED_SUCCESS = 'FEEDBACK_POSTED_SUCCESS',
  FEEDBACK_ACTION_FAILURE = 'FEEDBACK_ACTION_FAILURE',
  FEEDBACK_GET_ALL_REQUEST = 'FEEDBACK_GET_ALL_REQUEST',
  FEEDBACK_GET_ALL_SUCCESS = 'FEEDBACK_GET_ALL_SUCCESS',
  FEEDBACK_GET_CURRENT_REQUEST = 'FEEDBACK_GET_CURRENT_REQUEST',
  FEEDBACK_GET_CURRENT_SUCCESS = 'FEEDBACK_GET_CURRENT_SUCCESS',
  FEEDBACK_UPDATED_REQUEST = 'FEEDBACK_UPDATED_REQUEST',
  FEEDBACK_UPDATED_SUCCESS = 'FEEDBACK_UPDATED_SUCCESS',
}

export enum usersType {
  USER_CREATED_REQUEST = 'USER_CREATED_REQUEST',
  USER_CREATED_SUCCESS = 'USER_CREATED_SUCCESS',
  USER_ACTION_FAILURE = 'USER_ACTION_FAILURE',
  USER_GET_ALL_REQUEST = 'USER_GET_ALL_REQUEST',
  USER_GET_ALL_SUCCESS = 'USER_GET_ALL_SUCCESS',
  USER_GET_CURRENT_REQUEST = 'USER_GET_CURRENT_REQUEST',
  USER_GET_CURRENT_SUCCESS = 'USER_GET_CURRENT_SUCCESS',
  USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
  USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
  USER_DELETED_REQUEST = 'USER_DELETED_REQUEST',
  USER_DELETED_SUCCESS = 'USER_DELETED_SUCCESS',
  USER_UPDATE_STATUS_REQUEST = 'USER_UPDATE_STATUS_REQUEST',
  USER_UPDATE_STATUS_SUCCESS = 'USER_UPDATE_STATUS_SUCCESS',
  USERSTATUS_UPDATE_REQUEST = 'USERSTATUS_UPDATE_REQUEST',
  USERSTATUS_UPDATE_SUCCESS = 'USERSTATUS_UPDATE_SUCCESS',
}

export enum jobType {
  JOB_GET_ALL_REQUEST = 'JOB_GET_ALL_REQUEST',
  JOB_GET_ALL_SUCCESS = 'JOB_GET_ALL_SUCCESS',
  JOB_ACTION_FAILURE = 'JOB_ACTION_FAILURE',
  JOB_GET_CURRENT_REQUEST = 'JOB_GET_CURRENT_REQUEST',
  JOB_GET_CURRENT_SUCCESS = 'JOB_GET_CURRENT_SUCCESS',
  JOB_DELETED_REQUEST = 'JOB_DELETED_REQUEST',
  JOB_DELETED_SUCCESS = 'JOB_DELETED_SUCCESS',
  JOB_CREATED_REQUEST = 'JOB_CREATED_REQUEST',
  JOB_CREATED_SUCCESS = 'JOB_CREATED_SUCCESS',
  JOB_UPDATED_REQUEST = 'JOB_UPDATED_REQUEST',
  JOB_UPDATED_SUCCESS = 'JOB_UPDATED_SUCCESS',
}

export enum roles {
  Worker = 'worker',
  Agency = 'agency',
  Business = 'business',
  Admin = 'admin',
}

export enum topicType {
  TOPIC_CREATED_REQUEST = 'TOPIC_CREATED_REQUEST',
  TOPIC_CREATED_SUCCESS = 'TOPIC_CREATED_SUCCESS',
  TOPIC_ACTION_FAILURE = 'TOPIC_ACTION_FAILURE',
  TOPIC_DELETED_REQUEST = 'TOPIC_DELETED_REQUEST',
  TOPIC_DELETED_SUCCESS = 'TOPIC_DELETED_SUCCESS',
  TOPIC_GETALL_REQUEST = 'TOPIC_GETALL_REQUEST',
  TOPIC_GETALL_SUCCESS = 'TOPIC_GETALL_SUCCESS',
  TOPIC_GET_CURRENT_REQUEST = 'TOPIC_GET_CURRENT_REQUEST',
  TOPIC_GET_CURRENT_SUCCESS = 'TOPIC_GET_CURRENT_SUCCESS',
  TOPIC_UPDATED_REQUEST = 'TOPIC_UPDATED_REQUEST',
  TOPIC_UPDATED_SUCCESS = 'TOPIC_UPDATED_SUCCESS',
}

export enum responsibilityType {
  RESPONSIBILITY_CREATED_REQUEST = 'RESPONSIBILITY_CREATED_REQUEST',
  RESPONSIBILITY_CREATED_SUCCESS = 'RESPONSIBILITY_CREATED_SUCCESS',
  RESPONSIBILITY_ACTION_FAILURE = 'RESPONSIBILITY_ACTION_FAILURE',
  RESPONSIBILITY_DELETED_REQUEST = 'RESPONSIBILITY_DELETED_REQUEST',
  RESPONSIBILITY_DELETED_SUCCESS = 'RESPONSIBILITY_DELETED_SUCCESS',
  RESPONSIBILITY_GETALL_REQUEST = 'RESPONSIBILITY_GETALL_REQUEST',
  RESPONSIBILITY_GETALL_SUCCESS = 'RESPONSIBILITY_GETALL_SUCCESS',
  RESPONSIBILITY_GET_CURRENT_REQUEST = 'RESPONSIBILITY_GET_CURRENT_REQUEST',
  RESPONSIBILITY_GET_CURRENT_SUCCESS = 'RESPONSIBILITY_GET_CURRENT_SUCCESS',
  RESPONSIBILITY_UPDATED_REQUEST = 'RESPONSIBILITY_UPDATED_REQUEST',
  RESPONSIBILITY_UPDATED_SUCCESS = 'RESPONSIBILITY_UPDATED_SUCCESS',
}

export enum workRequestType {
  WORKREQUEST_SEND_REQUEST = 'WORKREQUEST_SEND_REQUEST',
  WORKREQUEST_SEND_SUCCESS = 'WORKREQUEST_SEND_SUCCESS',
  WORKREQUEST_FAILURE = 'WORKREQUEST_FAILURE',
  WORKREQUEST_GETALL_REQUEST = 'WORKREQUEST_GETALL_REQUEST',
  WORKREQUEST_GETALL_SUCCESS = 'WORKREQUEST_GETALL_SUCCESS',
  WORKREQUEST_GET_CURRENT_REQUEST = 'WORKREQUEST_GET_CURRENT_REQUEST',
  WORKREQUEST_GET_CURRENT_SUCCESS = 'WORKREQUEST_GET_CURRENT_SUCCESS',
  WORKREQUEST_UPDATED_REQUEST = 'WORKREQUEST_UPDATED_REQUEST',
  WORKREQUEST_UPDATED_SUCCESS = 'WORKREQUEST_UPDATED_SUCCESS',
}

export enum notificationType {
  NOTIFICATION_ACTION_FAILURE = 'NOTIFICATION_ACTION_FAILURE',
  NOTIFICATION_GET_ALL_REQUEST = 'NOTIFICATION_GET_ALL_REQUEST',
  NOTIFICATION_GET_ALL_SUCCESS = 'NOTIFICATION_GET_ALL_SUCCESS',
  NOTIFICATION_CLEARED_REQUEST = 'NOTIFICATION_CLEARED_REQUEST',
  NOTIFICATION_CLEARED_SUCCESS = 'NOTIFICATION_CLEARED_SUCCESS',
}

export type businessContractType = roles.Business | roles.Worker

export enum severity {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success',
}

export enum fontSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum inputTypes {
  number = 'number',
  text = 'text',
  date = 'date',
}

export interface BreadcrumbLink {
  name: string
  link: string
}

export interface UserInformation {
  firstName: string
  lastName: string
  email: string
  city?: string
  street?: string
  zipCode?: string
  phoneNumber?: string
  website?: string
  licenses?: string
  profilePicture?: string
  category?: string
}

export interface User extends UserInformation {
  companyName?: string
  firstName: string
  lastName: string
  _id?: string
  userType: roles
  active: boolean
  password: string
  contacts?: any[]
}

export interface SignUpUser extends User {
  password: string
}

export interface LoggedInUser extends User {
  token: string
}

export interface Credentials {
  email: string
  password: string
}

export interface Report {
  title: string
  details: string
  date: string
  agency: string | null
  business: string | null
  user: string
  //fileUrl: string
  //fileType: string
  type: string
  status: string
  businessArchived: string
  agencyArchived: string
  workerArchived: string
}

export interface EmploymentAgreement {
  creator: string | null
  worker: string | null
  business: string | null
  status: string
  date: string
}

export interface Job {
  _id?: string
  title: string
  category: string
  jobType: string
  salary: string
  street: string
  zipCode: string
  city: string
  user?: User
  startDate: Date | null
  endDate: Date | null
  applicationLastDate: Date | null
  requirements: string
  desirableSkills: string
  benefits: string
  details: string
  createdAt?: string
}

export interface Feedback {
  _id?: string
  recipientId: string
  recipientFirstName: string | undefined
  recipientLastName: string | undefined
  shift: number | null
  shiftMessage?: string
  orientation: number | null
  orientationMessage?: string
  reception: number | null
  receptionMessage?: string
  appreciation: number | null
  appreciationMessage?: string
  expectation: number | null
  expectationMessage?: string
  additionalMessage?: string
  senderId: string
  senderName: string
  anonymous: boolean
  createdAt?: Date
}

export interface Topic {
  _id?: string
  question?: string
  answer?: string
}

export interface Responsibility {
  _id?: string
  responsible: string
  rule: string
}

export interface WorkRequest {
  _id?: string
  sender?: User
  recipient: string
  headline: string
  workersNumber: number | null
  requirements: string
  desirableSkills: string
  details: string
  startDate: Date | null
  endDate: Date | null
  createdAt?: Date
}

export interface Notification {
  _id?: string
  sender: User
  target: string
  createdAt: Date
  targetDoc: 'WorkRequest' | 'Agreement' | 'Form' | 'Application' | 'FeedBack'
  type:
  | 'assignmet'
  | 'signature_pending'
  | 'form_pending'
  | 'application_pending'
  | 'feedback_pending'
  | 'reply'
}

export interface MyFeeling {
  _id?: string
  worker?: User
  comfortable: number | null
  satisfied: number | null
  energetic: number | null
  enthusiastic: number | null
  frustrated: number | null
  stressed: number | null
  anxious: number | null
  comment?: string
  createdAt?: Date
}

export interface Feeling {
  value: 0 | 1 | 2 | 3
  note: string
  fileUrl: string
  isPrivate: boolean
}

export enum questionTypes {
  Comment = 'comment',
  Text = 'text',
  Textarea = 'textarea',
  CheckBox = 'checkbox',
  CheckboxGroup = 'checkbox_group',
  RadiobuttonGroup = 'radiobutton_group',
  RadiobuttonGroupHorizontal = 'radiobutton_group_horizontal',
  ContactInformation = 'contact_information',
  Datepicker = 'datepicker',
  Timepicker = 'timepicker',
}

/**
 * @interface
 */
export interface Question {
  title: string
  ordering?: number
  questionType: string
  subTitle: string
  scaleOptionTitleLeft: string
  scaleOptionTitleCenter: string
  scaleOptionTitleRight: string
  answerMinLength: number
  answerMaxLength: number
  rows: number
  scale: number
  optional: boolean
  options: string[]
  comment: string
  answer: any
  contactInfoAnswer: object
  checked: any
  optionValues: boolean[]
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export interface FormQuestion {
  question: string
  options: any
}

export interface Form {
  title: string
  description: string
  isPublic: boolean
  common: boolean
  tags: string[]
  questions: Array<Question>
  filled: boolean
}

// Business contract form types

export interface BusinessContractQuestion {
  title: string
  ordering?: number
  questionType: string
  subTitle: string
  scaleOptionTitleLeft: string
  scaleOptionTitleCenter: string
  scaleOptionTitleRight: string
  answerMinLength: number
  answerMaxLength: number
  rows: number
  scale: number
  optional: boolean
  options: string[]
  comment: string
  answer: any
  contactInfoAnswer: object
  checked: any
  optionValues: boolean[]
}

export interface BusinessContractFormQuestion {
  question: string
  options: any
}

export interface BusinessContractForm {
  title: string
  description: string
  isPublic: boolean
  common: boolean
  tags: string[]
  questions: Array<Question>
  filled: boolean
}
