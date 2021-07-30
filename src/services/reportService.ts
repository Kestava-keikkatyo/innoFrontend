/**
 * @module service/report
 * @desc Report requests to backend.
 */
 import axios from 'axios'
 import { Report } from '../types/types'
 import { loadUser } from '../utils/storage'
 import baseUrl from '../utils/baseUrl'


 /**
  * @function
  * @desc Helper function for setting up request header.
  */
 const authHeader = () => {
   return {
     headers: { 'x-access-token': `${loadUser().token}` }
   }
 }

 /**
  * @function
  * @desc Fetches all reports avaible with current token.
  */
 const getReports = async () => {
    try {
        const res = await axios.get(`${baseUrl}/reports`,authHeader())
        return res
      } catch (error) {
        return Promise.reject(error.response)
      }
 }

 /**
  * @function
  * @desc Posts new report to the route.
  * @param {Report} report new Report object
  */
 const postReport = async (report: Report) => {
   return await axios.post(`${baseUrl}/reports`, report, authHeader())
 }


 export default {
    getReports,
    postReport,

 }