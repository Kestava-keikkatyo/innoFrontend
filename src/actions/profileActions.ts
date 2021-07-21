
import profileService from "../services/profileService";
import {
  SET_CURRENT_PROFILE,
  GET_ALL_PROFILES,
  SET_PROFILE_TO_BE_VIEWED
} from "../types/state";


/**
 * @function
 * @desc updateProfile
 */
export const setProfile = (profile: any) => async (dispatch: any) => {
  dispatch({type: SET_CURRENT_PROFILE, data: profile})
};

export const updateProfile  = (profile: any, profileId: string) => async (dispatch: any) => {

  try {
    const data = await profileService.updateProfile(profile, profileId);
    dispatch({type: SET_CURRENT_PROFILE, data : data})
    console.log("done")

  } catch (error) {
    console.log(error);
  }

};

export const createProfile = (profile: Object) => async (dispatch: any) => {
  try {
    const data = await profileService.createProfile(profile);
    dispatch({type: SET_CURRENT_PROFILE, data : data})
    console.log("done")

  } catch (error) {
    console.log(error);
  }
};

export const fetchProfileById = (id: string ) => async (dispatch: any) => {
  try {
    const data = await profileService.fetchProfileById(id)
    console.log("profileAction data", data)
    dispatch({type: SET_CURRENT_PROFILE, data: data})

  } catch (error) {
    console.log(error);
  }
};

export const fetchProfileToBeViewed = (id: string ) => async (dispatch: any) => {
  try {
    const data = await profileService.fetchProfileById(id)
    dispatch({type: SET_PROFILE_TO_BE_VIEWED, data: data})

  } catch (error) {
    console.log(error);
  }
};

export const fetchProfiles = () => async (dispatch: any) => {
  try {
    const res = await profileService.fetchProfiles()
    dispatch({type: GET_ALL_PROFILES, data: res.data})

  } catch (error) {
    console.log(error);
  }
};

