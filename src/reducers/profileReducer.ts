
import { EditProfileActionTypes } from "../types/state";
import { editProfile } from "../types/types";
/*
export const CHANGE_PROFILE_PIC = "CHANGE_PROFILE_PIC"
  export const CHANGE_COVER_IMAGE = "CHANGE_COVER_IMAGE"
  export const CHANGE_CONTACT_INFORMATION = "CHANGE_CONTACT_INFORMATION"
  export const CHANGE_VIDEO = "CHANGE_VIDEO"
  export const CHANGE_INSTRUCTION = "CHANGE_INSTRUCTION"

*/
import {
  CHANGE_PROFILE_PIC,
  CHANGE_COVER_IMAGE,
  CHANGE_CONTACT_INFORMATION,
  CHANGE_VIDEO,
  SET_CURRENT_PROFILE,
  CHANGE_INSTRUCTION,
} from "../types/state";

const initialState: editProfile = {
  cover: {},
  profilePicture: {},
  userInformation: "",
  contactInformation: "",
  video: "",
  instructions: "",
};

const profileReducer = (
  state = initialState,
  action: EditProfileActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return action.data

    case CHANGE_PROFILE_PIC:
      return {
        ...state,
        profilePicture: action.data,
      };
    case CHANGE_COVER_IMAGE:
      return {
        ...state,
        cover: action.data,
      };
    case CHANGE_CONTACT_INFORMATION:
      return {
        ...state,
        contactInformation: action.data,
      };
    case CHANGE_VIDEO:
      return {
        ...state,
        video: action.data,
      };
    case CHANGE_INSTRUCTION:
      return {
        ...state,
        instruction: action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
