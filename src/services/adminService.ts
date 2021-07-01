/**
 * @module service/user
 * @desc User requests to backend.
 */
 import axios from 'axios'
 import baseUrl from '../utils/baseUrl'


 const fetchAllWorkers = async () => {
   try {
     const res = await axios.get(
       `${baseUrl}/workers?page=1&limit=10`,
     )
     return res.data.docs[0].workers
   } catch (error) {
     return Promise.reject(error.response)
   }
 }

 export default {
   fetchAllWorkers
 }
