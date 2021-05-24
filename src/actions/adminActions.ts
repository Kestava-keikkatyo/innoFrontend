/**
 * @module userActions
 * @desc Redux user actions
 */
 import adminService from '../services/adminService'

 import { setAlert } from './alertActions'
 import { AGENCY_FETCH, AGENCY_UPDATE,USERCOMPANY_FETCH, USERCOMPANY_UPDATE ,WORKERS_FETCH, WORKER_UPDATE } from '../types/state'
 import { Credentials, roles, severity } from '../types/types'
 
