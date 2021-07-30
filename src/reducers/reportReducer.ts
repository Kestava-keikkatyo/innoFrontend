/**
 * @module reducer/report
 * @desc Redux report reducer
 */
import {
    SET_CURRENT_REPORT,
    FETCH_REPORTS,
    ReportActionTypes,
    ReportState
} from './../types/state';
import {Report} from '../types/types'

const initialReport: Report = {
    workerName: "",
    workerPhone: "",
    workerEmail:"",
    job: "",
    buisnessAsHandler: "",
    agencyAsHandler: "",
    message: "",
    date: "",
    fileUrl: ""
}

const initialState: ReportState = {
    currentReport: initialReport,
    reports: []

}

/**
 * @function
 * @desc report reducer that controls report state
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const reportReducer = (state = initialState, action: ReportActionTypes) => {
    switch (action.type) {
        case SET_CURRENT_REPORT:
            return {
                ...state,
                currentReport: action.data
            }
        case FETCH_REPORTS:{
            return {
                ...state,
                reports: action.data
            }
        }
        default:
            return state

    }

}
export default reportReducer;