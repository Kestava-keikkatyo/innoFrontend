import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import { loadUser } from '../utils/storage';
import { StepRequest } from '../types/types';

const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` },
  }
}

const createRentalWorkModel = async (userId: string) => {
  return await axios.post(`${baseUrl}/rentalWorkModel/create`, userId, authHeader())
}

const fetchModel = async (userId: string) => {
  return await axios.post(`${baseUrl}/rentalWorkModel/model`, userId, authHeader())
}

const updateCustomerContract = async (step: StepRequest) => {
  return await axios.put(`${baseUrl}/rentalWorkModel/update/customerContract`, step, authHeader())
}

export default {
  createRentalWorkModel,
  fetchModel,
  updateCustomerContract,
}
