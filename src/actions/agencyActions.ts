import { AGENCY_FETCH } from '../types/state'
import agencyService from '../services/agencyService'


export const fetchAgencies = (input: string) => async (dispatch: any) => {
    const res = await agencyService.searchAgencies(input)
    dispatch({ type: AGENCY_FETCH, data: res.data })
  }