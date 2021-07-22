/**
 * @module service/feeling
 * @desc Feeling requests to backend.
 */
import axios from 'axios'
import { Feeling } from '../types/types'
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
 * @desc Fetches all feelings avaible with current token.
 */
const getFeelings = async () => {
  let allData: any = []
  let currentPage = 1

  let res = await axios.get(`${baseUrl}/feelings?page=${currentPage}&limit=10`, authHeader())
  console.log("feelingService:getFeelings: res", res)

  for (currentPage; currentPage <= res.data.totalPages; currentPage++) {

    res = await axios.get(`${baseUrl}/feelings?page=${currentPage}&limit=10`, authHeader())
    let docs = res?.data?.docs
    docs.map((doc: any) => allData.push(doc))
  }

  console.log("feelingService:getFeelings: all data", allData)
  return allData

}

/**
 * @function
 * @desc Posts new feeling to the route.
 * @param {Feeling} feeling new Feeling object
 */
const postFeeling = async (feeling: Feeling) => {
  return await axios.post(`${baseUrl}/feelings`, feeling, authHeader())
}

export default {
  getFeelings,
  postFeeling
}