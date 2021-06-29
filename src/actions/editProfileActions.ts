import profileService from "../services/profileService";
import {
  CHANGE_COVER_IMAGE,
  CHANGE_PROFILE_PIC,
  CHANGE_CONTACT_INFORMATION,
  CHANGE_VIDEO,
  CHANGE_INSTRUCTION,
  UPDATE_CURRENT_PROFILE,
} from "../types/state";



export const setContactInformation =
  (contactInformation: string) => async (dispatch: any) => {
    dispatch({ type: CHANGE_CONTACT_INFORMATION, data: contactInformation });
  };

export const setInstruction =
  (instructions: string) => async (dispatch: any) => {
    dispatch({ type: CHANGE_INSTRUCTION, data: instructions });
  };

export const setVideo = (videoLink: string) => async (dispatch: any) => {
  dispatch({ type: CHANGE_VIDEO, data: videoLink });
};

export const setCoverImage = (coverimg: Object) => async (dispatch: any) => {
  dispatch({ type: CHANGE_COVER_IMAGE, data: coverimg });
};

export const setProfilePic = (profilepic: Object) => async (dispatch: any) => {
  dispatch({ type: CHANGE_PROFILE_PIC, data: profilepic });
};

/*
export const updateProfile = (profile: Object) => async (
  dispatch: any
)  =>  {
  const response = await ProfileService.updateProfile(profile)
  return response
} catch (error) {
  console.log(error);
}
*/

export const updateProfile = (profile: Object, profileId: any) => async (dispatch: any) => {
  try {
    const response = await profileService.updateProfile(profile, profileId);
    const data = await profileService.fetchProfileById(response?.data._id)
    dispatch({type: UPDATE_CURRENT_PROFILE , data})
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = (profile: Object) => async (dispatch: any) => {
  try {
    const response = await profileService.createProfile(profile);
    return response

  } catch (error) {
    console.log(error);
  }
};

