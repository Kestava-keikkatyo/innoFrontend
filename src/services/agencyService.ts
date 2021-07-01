import axios from 'axios'
import { loadUser } from '../utils/storage'

import baseUrl from '../utils/baseUrl'


const authHeader = () => {
    return {
        headers: { 'x-access-token': `${loadUser().token}`}
    }
}

const searchAgencies = async (input: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/agencies?name=${input}`,
      authHeader()
    )
    return res
  } catch (error) {
    return Promise.reject(error.response)
  }
}

  export default {
       searchAgencies
  }