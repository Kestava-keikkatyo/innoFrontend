
import { EditProfileActionTypes, GET_ALL_PROFILES, ProfileState } from "../types/state";
import { Profile} from "../types/types";
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

const initialProfile: Profile = {
  name: "Firstname Lastname",
  phone: "044 444 4444",
  email: "user@email.com",
  streetAddress: "Streetaddress A 12",
  zipCode: "00100",
  city: "Helsinki",
  coverPhoto: "",
  profilePicture: "",
  video: "",
  website: "https//:www.google.com",
  instructions: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry", "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"],
  occupationalSafetyRules: [
    "Työturvallisuuslain mukaan työntekijän velvollisuuksina on",
    "Noudattaa työnantajan antamia ohjeita ja määräyksiä,",
    "Huolehtia omasta ja muiden työntekijöiden turvallisuudesta käytettävissä olevin keinoin",
    "Olla kohdistamatta häirintää tai epäasiallista kohtelua muihin työntekijöihin",
    "Käyttää ja hoitaa työssä tarvittavia henkilönsuojaimia ja apuvälineitä",
    "Viipymättä ilmoittaa viasta tai puutteesta (omalle esimiehelle tai työsuojeluvaltuutetulle), jos se voi aiheuttaa joko omalle tai työnkaverin turvallisuudelle/terveydelle haittaa tai vaaraa",
    "Korjata edellä mainittu havaitsemansa vika, mikäli oma kokemus tai ammattitaito riittää",
    "Olla poistamatta turva- tai suojalaitetta käytöstä"
]
};

const initialState: ProfileState = {
 currentProfile: initialProfile,
 profiles: []
}

const profileReducer = (state = initialState, action: EditProfileActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return{
        ...state,
        currentProfile: action.data
      }
    case GET_ALL_PROFILES:
        return {
          ...state,
          profiles: action.data
        }
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
      console.log("CHANGE_VIDEO state:", action.data)
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
