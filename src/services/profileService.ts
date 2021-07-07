import axios from 'axios'
import { loadUser } from '../utils/storage'
import baseUrl from '../utils/baseUrl'


const authHeader = () => {
    return {
      headers: { 'x-access-token': `${loadUser().token}` }
    }
  }

const updateProfile = async (profile: Object, profileId: any) => {
    const res = await axios.put(`${baseUrl}/profile/${profileId}`, profile, authHeader())
    console.log('res##',res)
    return res.data
}

const createProfile = async (profile: Object) => {
  const res = await axios.post(`${baseUrl}/profile`, profile, authHeader())
  return res.data
}

const getProfile = async (profile: Object) => {
    const res = await axios.get(`${baseUrl}/profile`)
    return res.data
}

const fetchProfileById = async (id: string) => {
    try {
     const res = await axios.get(`${baseUrl}/profile/${id}`, authHeader())
     return res.data
    } catch (error) {
     console.log(error);
     return {}
    }
  }

  const fetchProfiles = async (input: string) => {
    try {
      const res = await axios.get(
        `${baseUrl}/profile?name=${input}`,
        authHeader()
      )
      return res
    } catch (error) {
      return Promise.reject(error.response)
    }
  }
  




export default {
    updateProfile,
    fetchProfileById,
    getProfile,
    createProfile,
    fetchProfiles
}