
import {
  ProfileActionTypes,
  GET_ALL_PROFILES,
  ProfileState,
  SET_CURRENT_PROFILE,
  SET_PROFILE_TO_BE_VIEWED
} from "../types/state";

import { Profile} from "../types/types";

const initialProfile: Profile = {
  name: "",
  phone: "",
  email: "",
  streetAddress: "",
  zipCode: "",
  city: "",
  coverPhoto: "",
  profilePicture: "",
  video: "",
  website: "",
  instructions: [],
  occupationalSafetyRules: []
};

const initialState: ProfileState = {
 currentProfile: initialProfile,
 profileToBeViewed: initialProfile,
 profiles: []
}

const profileReducer = (state = initialState, action: ProfileActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return{
        ...state,
        currentProfile: action.data
      }
    case SET_PROFILE_TO_BE_VIEWED:
        return{
          ...state,
          profileToBeViewed: action.data
      }
    case GET_ALL_PROFILES:
        return {
          ...state,
          profiles: action.data
        }
    default:
      return state;
  }
};

export default profileReducer;
