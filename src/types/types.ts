import { compose } from "redux";

export enum AdminActionType {
  AGENCIES_FETCH = "AGENCIES_FETCH",
  BUSINESSES_FETCH = "BUSINESSES_FETCH",
  WORKERS_FETCH = "WORKERS_FETCH",
  ADMINS_FETCH = "ADMINS_FETCH",
  AGENCY_UPDATE = "AGENCY_UPDATE",
  BUSINESS_UPDATE = "BUSINESS_UPDATE",
  WORKER_UPDATE = "WORKER_UPDATE",
  ADMIN_UPDATE = "ADMIN_UPDATE",
  DELETE_USER = "DELETE_USER",
}

export enum roles {
  Worker = "worker",
  Agency = "agency",
  Business = "business",
  Admin = "admin",
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

export interface User {
  name: string;
  email: string;
  type: roles.Agency | roles.Worker | roles.Business | roles.Admin;
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
  workTitle: string;
  reportTitle: string;
  details: string;
  date: string;
  businessAsHandler: string;
  agencyAsHandler: string;
  fileUrl: string;
  fileType: string;
}

export interface Job {
  _id?: string;
  title: string;
  category: string;
  jobType: string;
  salary: string;
  location: {
    street: string;
    zipCode: string;
    city: string;
  };
  duration: {
    startDate: Date | null;
    endDate: Date | null;
    lastApplicationDate: Date | null;
  };
  requirements: string;
  desirableSkills: string;
  benefits: string;
  details: string;
}

export interface Feedback {
  heading: string;
  message: string;
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
