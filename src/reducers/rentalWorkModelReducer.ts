import { rentalWorkModelType } from '../types/types';
import { RentalWorkModelState, RentalWorkModelActions } from '../types/state';

const initialState: RentalWorkModelState = {
  currentRentalWorkModel: undefined,
  loading: false,
}

const rentalWorkModelReducer = (state = initialState, action: RentalWorkModelActions): RentalWorkModelState => {
  switch (action.type) {
    case rentalWorkModelType.RMW_GET_MODEL_REQUEST:
    case rentalWorkModelType.RMW_CREATE_DEFAULT_REQUEST:
    case rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case rentalWorkModelType.RMW_GET_MODEL_SUCCESS:
    case rentalWorkModelType.RMW_CREATE_DEFAULT_SUCCESS:
    case rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_SUCCESS: {
      return {
        ...state,
        currentRentalWorkModel: action.data,
        loading: false,
      }
    }
    case rentalWorkModelType.RMW_GET_MODEL_FAILURE:
    case rentalWorkModelType.RMW_CREATE_DEFAULT_FAILURE:
    case rentalWorkModelType.RMW_UPDATE_CUSTOMER_CONTRACT_FAILURE: {
      return {
        ...state,
        fetchError: action.data,
        loading: false,
      }
    }
    default:
      return state
  }
}
export default rentalWorkModelReducer
