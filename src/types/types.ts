import { compose } from "redux";

export enum feedbackType {
  FEEDBACK_POSTED_REQUEST = "FEEDBACK_POSTED_REQUEST",
  FEEDBACK_POSTED_SUCCESS = "FEEDBACK_POSTED_SUCCESS",
  FEEDBACK_ACTION_FAILURE = "FEEDBACK_ACTION_FAILURE",
  FEEDBACK_GET_ALL_REQUEST = "FEEDBACK_GET_ALL_REQUEST",
  FEEDBACK_GET_ALL_SUCCESS = "FEEDBACK_GET_ALL_SUCCESS",
  FEEDBACK_GET_CURRENT_REQUEST = "FEEDBACK_GET_CURRENT_REQUEST",
  FEEDBACK_GET_CURRENT_SUCCESS = "FEEDBACK_GET_CURRENT_SUCCESS",
  FEEDBACK_UPDATED_REQUEST = "FEEDBACK_UPDATED_REQUEST",
  FEEDBACK_UPDATED_SUCCESS = "FEEDBACK_UPDATED_SUCCESS",
}

export enum usersType {
  USER_CREATE_REQUEST = "USER_CREATE_REQUEST",
  USER_CREATE_SUCCESS = "USER_CREATE_SUCCESS",
  USER_CREATE_FAILURE = "USER_CREATE_FAILURE",
  USER_GETALL_REQUEST = "USER_GETALL_REQUEST",
  USER_GETALL_SUCCESS = "USER_GETALL_SUCCESS",
  USER_GETALL_FAILURE = "USER_GETALL_FAILURE",
  USER_CURRENT_REQUEST = "USER_CURRENT_REQUEST",
  USER_CURRENT_SUCCESS = "USER_CURRENT_SUCCESS",
  USER_CURRENT_FAILURE = "USER_CURRENT_FAILURE",
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE",
  USER_DELETED_REQUEST = "USER_DELETED_REQUEST",
  USER_DELETED_SUCCESS = "USER_DELETED_SUCCESS",
  USER_DELETED_FAILURE = "USER_DELETED_FAILURE",
  USER_UPDATE_STATUS_REQUEST = "USER_UPDATE_STATUS_REQUEST",
  USER_UPDATE_STATUS_SUCCESS = "USER_UPDATE_STATUS_SUCCESS",
  USER_UPDATE_STATUS_FAILURE = "USER_UPDATE_STATUS_FAILURE",
  USERSTATUS_UPDATE_REQUEST = "USERSTATUS_UPDATE_REQUEST",
  USERSTATUS_UPDATE_SUCCESS = "USERSTATUS_UPDATE_SUCCESS",
  USERSTATUS_UPDATE_FAILURE = "USERSTATUS_UPDATE_FAILURE",
}

export enum jobType {
  JOB_GET_ALL_REQUEST = "JOB_GET_ALL_REQUEST",
  JOB_GET_ALL_SUCCESS = "JOB_GET_ALL_SUCCESS",
  JOB_ACTION_FAILURE = "JOB_ACTION_FAILURE",
  JOB_GET_CURRENT_REQUEST = "JOB_GET_CURRENT_REQUEST",
  JOB_GET_CURRENT_SUCCESS = "JOB_GET_CURRENT_SUCCESS",
  JOB_DELETED_REQUEST = "JOB_DELETED_REQUEST",
  JOB_DELETED_SUCCESS = "JOB_DELETED_SUCCESS",
  JOB_CREATED_REQUEST = "JOB_CREATED_REQUEST",
  JOB_CREATED_SUCCESS = "JOB_CREATED_SUCCESS",
  JOB_UPDATED_REQUEST = "JOB_UPDATED_REQUEST",
  JOB_UPDATED_SUCCESS = "JOB_UPDATED_SUCCESS",
}

export enum roles {
  Worker = "worker",
  Agency = "agency",
  Business = "business",
  Admin = "admin",
}

export enum topicType {
  TOPIC_CREATED_REQUEST = "TOPIC_CREATED_REQUEST",
  TOPIC_CREATED_SUCCESS = "TOPIC_CREATED_SUCCESS",
  TOPIC_ACTION_FAILURE = "TOPIC_ACTION_FAILURE",
  TOPIC_DELETED_REQUEST = "TOPIC_DELETED_REQUEST",
  TOPIC_DELETED_SUCCESS = "TOPIC_DELETED_SUCCESS",
  TOPIC_GETALL_REQUEST = "TOPIC_GETALL_REQUEST",
  TOPIC_GETALL_SUCCESS = "TOPIC_GETALL_SUCCESS",
  TOPIC_GET_CURRENT_REQUEST = "TOPIC_GET_CURRENT_REQUEST",
  TOPIC_GET_CURRENT_SUCCESS = "TOPIC_GET_CURRENT_SUCCESS",
  TOPIC_UPDATED_REQUEST = "TOPIC_UPDATED_REQUEST",
  TOPIC_UPDATED_SUCCESS = "TOPIC_UPDATED_SUCCESS",
}

export enum workRequestType {
  WORKREQUEST_SEND_REQUEST = "WORKREQUEST_SEND_REQUEST",
  WORKREQUEST_SEND_SUCCESS = "WORKREQUEST_SEND_SUCCESS",
  WORKREQUEST_FAILURE = "WORKREQUEST_FAILURE",
  WORKREQUEST_GETALL_REQUEST = "WORKREQUEST_GETALL_REQUEST",
  WORKREQUEST_GETALL_SUCCESS = "WORKREQUEST_GETALL_SUCCESS",
  WORKREQUEST_GET_CURRENT_REQUEST = "WORKREQUEST_GET_CURRENT_REQUEST",
  WORKREQUEST_GET_CURRENT_SUCCESS = "WORKREQUEST_GET_CURRENT_SUCCESS",
  WORKREQUEST_UPDATED_REQUEST = "WORKREQUEST_UPDATED_REQUEST",
  WORKREQUEST_UPDATED_SUCCESS = "WORKREQUEST_UPDATED_SUCCESS",
}

export type businessContractType = roles.Business | roles.Worker;

export enum severity {
  Error = "error",
  Warning = "warning",
  Info = "info",
  Success = "success",
}

export enum fontSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum inputTypes {
  number = "number",
  text = "text",
  date = "date",
}

export interface BreadcrumbLink {
  name: string;
  link: string;
}

export interface UserInformation {
  name: string;
  email: string;
  city?: string;
  street?: string;
  zipCode?: string;
  phoneNumber?: string;
  website?: string;
  licenses?: string;
  profilePicture?: string;
}

export interface User extends UserInformation {
  _id?: string;
  userType: roles.Agency | roles.Worker | roles.Business | roles.Admin;
  active: boolean;
}

export interface Worker {
  name: string;
  email: string;
  userType: roles;
  active: boolean;
  profile: {};
}

export interface SignUpUser extends User {
  password: string;
}

export interface LoggedInUser extends User {
  token: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Report {
  title: string;
  details: string;
  date: string;
  agency: string | null;
  business: string | null;
  user: string;
  fileUrl: string;
  fileType: string;
  name: string;
  email: string;
  phoneNumber: string;
  status: string;
  businessArchived: string;
  agencyArchived: string;
  workerArchived: string;
}

export interface Job {
  _id?: string;
  title: string;
  category: string;
  jobType: string;
  salary: string;
  street: string;
  zipCode: string;
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  applicationLastDate: Date | null;
  requirements: string;
  desirableSkills: string;
  benefits: string;
  details: string;
}

export interface Feedback {
  _id: string;
  heading: string;
  message: string;
}

export interface Topic {
  _id?: string;
  question?: string;
  answer?: string;
}

export interface WorkRequest {
  _id?: string;
  recipient: string;
  headline: string;
  workersNumber: Number | null;
  requirements: string;
  desirableSkills: string;
  details: string;
  startDate: Date | null;
  endDate: Date | null;
}

export interface Feeling {
  value: 0 | 1 | 2 | 3;
  note: string;
  fileUrl: string;
  isPrivate: boolean;
}

export interface File {
  files: any[];
}

export enum questionTypes {
  Comment = "comment",
  Text = "text",
  Textarea = "textarea",
  CheckBox = "checkbox",
  CheckboxGroup = "checkbox_group",
  RadiobuttonGroup = "radiobutton_group",
  RadiobuttonGroupHorizontal = "radiobutton_group_horizontal",
  ContactInformation = "contact_information",
  Datepicker = "datepicker",
  Timepicker = "timepicker",
}

/**
 * @interface
 */
export interface Question {
  title: string;
  ordering?: number;
  questionType: string;
  subTitle: string;
  scaleOptionTitleLeft: string;
  scaleOptionTitleCenter: string;
  scaleOptionTitleRight: string;
  answerMinLength: number;
  answerMaxLength: number;
  rows: number;
  scale: number;
  optional: boolean;
  options: string[];
  comment: string;
  answer: any;
  contactInfoAnswer: object;
  checked: any;
  optionValues: boolean[];
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface FormQuestion {
  question: string;
  options: any;
}

export interface Form {
  title: string;
  description: string;
  isPublic: boolean;
  common: boolean;
  tags: string[];
  questions: Array<Question>;
  filled: boolean;
}

// Business contract form types

export interface BusinessContractQuestion {
  title: string;
  ordering?: number;
  questionType: string;
  subTitle: string;
  scaleOptionTitleLeft: string;
  scaleOptionTitleCenter: string;
  scaleOptionTitleRight: string;
  answerMinLength: number;
  answerMaxLength: number;
  rows: number;
  scale: number;
  optional: boolean;
  options: string[];
  comment: string;
  answer: any;
  contactInfoAnswer: object;
  checked: any;
  optionValues: boolean[];
}

export interface BusinessContractFormQuestion {
  question: string;
  options: any;
}

export interface BusinessContractForm {
  title: string;
  description: string;
  isPublic: boolean;
  common: boolean;
  tags: string[];
  questions: Array<Question>;
  filled: boolean;
}

export interface Profile {
  name: string;
  phone: string;
  email: string;
  streetAddress: string;
  zipCode: string;
  city: string;
  coverPhoto: string;
  profilePicture: string;
  video: string;
  website: string;
  instructions: any[];
  occupationalSafetyRules: any[];
}
export interface Notifications {
  userId: string;
  message: [];
}
