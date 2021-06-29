import axios from 'axios'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api/profile'

const authHeader = () => {
    return {
      headers: { 'x-access-token': `${loadUser().token}` }
    }
  }

const updateProfile = async (profile: Object, id: any) => {
    const res = await axios.put(`${baseUrl}`, profile)
    return res.data
}

const createProfile = async (profile: Object) => {
  const res = await axios.post(`${baseUrl}`, profile, authHeader())
  return res.data
}

const getProfile = async (profile: Object) => {
    const res = await axios.get(`${baseUrl}`)
    return res.data
}

const fetchProfileById = async (id: string) => {
    try {
     const res = await axios.get(`${baseUrl}/${id}`, authHeader())
     return res.data
    } catch (error) {
     console.log(error);
     return {}
    }
  }




export default {
    updateProfile,
    fetchProfileById,
    getProfile,
    createProfile,
}