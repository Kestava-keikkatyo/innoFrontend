import { rentalWorkModelType, severity, StepRequest } from '../types/types';
import { setAlert } from './alertActions';
import { Dispatch } from 'redux';
import { RentalWorkModelActions } from '../types/state';
import rentalWorkModelService from '../services/rentalWorkModelService';
import { getUserId, saveRentalWorkModel } from '../utils/storage';

export const updateCustomerContract = (step: StepRequest) => async (dispatch: Dispatch<RentalWorkModelActions>) => {
  try {
    dispatch({ type: rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_REQUEST, data: step, })
    const { data } = await rentalWorkModelService.updateCustomerContract(step)
    dispatch({ type: rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_SUCCESS, data, })
    await setAlert('Customer contract step successfully updated!')(dispatch)
  } catch (e) {
    dispatch({ type: rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_FAILURE, data: e as string, })
    await setAlert('Failed to update customer contract!: ' + e, severity.Error, 15)(dispatch)
  }
}

export const fetchRentalWorkModel = () => async (dispatch: Dispatch<RentalWorkModelActions>) => {
  try {
    dispatch({ type: rentalWorkModelType.RMW_GET_MODEL_REQUEST, })
    const { data } = await rentalWorkModelService.fetchModel(getUserId())
    saveRentalWorkModel(data)
    dispatch({ type: rentalWorkModelType.RMW_GET_MODEL_SUCCESS, data })
  } catch (e) {
    dispatch({ type: rentalWorkModelType.RMW_GET_MODEL_FAILURE, data: e as string, })
    await setAlert('Failed to fetch rental work model!: ' + e, severity.Error, 15)(dispatch)
  }
}
