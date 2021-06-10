import axios from 'axios'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api'


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