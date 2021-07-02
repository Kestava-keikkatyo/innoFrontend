import profileService from "../services/profileService";
import {
  CHANGE_COVER_IMAGE,
  CHANGE_PROFILE_PIC,
  CHANGE_CONTACT_INFORMATION,
  SET_CURRENT_PROFILE,
  CHANGE_VIDEO,
  CHANGE_INSTRUCTION,


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


export const updateProfile = (profile: Object, profileId: any) => async (dispatch: any) => {
  try {
    const response = await profileService.updateProfile(profile, profileId);
    const data = await profileService.fetchProfileById(response?._id)
    dispatch({type: SET_CURRENT_PROFILE , data})
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

export const fetchProfileById = (id: string) => async (dispatch: any) => {
  try {
    const data = await profileService.fetchProfileById(id)
    dispatch({type: SET_CURRENT_PROFILE, data : data})

  } catch (error) {
    console.log(error);
  }
};

