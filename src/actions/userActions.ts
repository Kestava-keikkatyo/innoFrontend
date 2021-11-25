/**
 * @module userActions
 * @desc Redux user actions
 */
import userService from '../services/userService';
import profileService from '../services/profileService';
import contractsService from '../services/contractsService';
import { saveUser, logoutUser } from '../utils/storage';
import history from '../utils/history';
import { setAlert } from './alertActions';
import {
  LOGIN,
  LOGOUT,
  USER_FAILURE,
  USER_PROFILE,
  USER_REQUEST,
  SignUpUser,
  SET_CURRENT_PROFILE,
} from '../types/state';
import { Credentials, roles, severity } from '../types/types';
import notificationsService from '../services/notificationsService';
import { useTranslation } from 'react-i18next';

/**
 * Logs user in
 * @function
 * @param {Object} credentials - User's email and password
 *  @param {string} role - User's role
 * @param {Object} from - User redirection path
 */
export const login = (credentials: Credentials, from: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const { data } = await userService.login(credentials);
      dispatch({
        type: LOGIN,
        data,
      });
      saveUser(data);

      if (from) {
        history.push(from);
      }

      dispatch(setAlert('login successful', severity.Success));

      const profile: any = await profileService.fetchProfileById(data.profileId);
      dispatch({ type: SET_CURRENT_PROFILE, data: profile });

    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      });
      dispatch(setAlert('login failed', severity.Error));
    }
  };
};

/**
 * Logs Admin in
 * @function
 * @param {Object} credentials - Admin's email and password
 * @param {Object} from - User redirection path
 */
export const adminLogin = (credentials: Credentials, from: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const { data } = await userService.adminLogin(credentials);
      dispatch({
        type: LOGIN,
        data,
      });
      saveUser(data);

      history.push(from);
      dispatch(setAlert('login successful', severity.Success));


      const profile: any = await profileService.fetchProfileById(data.profileId);
      dispatch({ type: SET_CURRENT_PROFILE, data: profile });


    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      });
      dispatch(setAlert('login failed', severity.Error));
    }
  };
};

/**
 * Signs user up
 * @function
 * @param {Object} user - Basic user information (name, email, password...)
 * @param {string} role - User's role
 */
export const signup = (user: SignUpUser, role: roles) => {
  //const { t } = useTranslation();
  return async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const { data } = await userService.signup(user, role);
      dispatch({
        type: LOGIN,
        data,
      });
      saveUser(data);

      // if the signed up user is an agency, create a business contract for it
      if (data.role === 'agency') {
        try {
          const res = await contractsService.createBusinessContract();
          console.log("res", res)
        } catch (error) {
          statusHandler(dispatch, error);
        }
      }

      const profile = {
        name: data.name,
        phone: '000 000 0000',
        email: data.email,
        streetAddress: 'Streetaddress A 12',
        zipCode: '00100',
        city: 'Helsinki',
        coverPhoto: '',
        profilePicture: '',
        video: '',
        website: 'https://www.google.com',
        instructions: [
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        ],
        occupationalSafetyRules: [
          'Työturvallisuuslain mukaan työntekijän velvollisuuksina on',
          'Noudattaa työnantajan antamia ohjeita ja määräyksiä,',
          'Huolehtia omasta ja muiden työntekijöiden turvallisuudesta käytettävissä olevin keinoin',
          'Olla kohdistamatta häirintää tai epäasiallista kohtelua muihin työntekijöihin',
          'Käyttää ja hoitaa työssä tarvittavia henkilönsuojaimia ja apuvälineitä',
          'Viipymättä ilmoittaa viasta tai puutteesta (omalle esimiehelle tai työsuojeluvaltuutetulle), jos se voi aiheuttaa joko omalle tai työnkaverin turvallisuudelle/terveydelle haittaa tai vaaraa',
          'Korjata edellä mainittu havaitsemansa vika, mikäli oma kokemus tai ammattitaito riittää',
          'Olla poistamatta turva- tai suojalaitetta käytöstä',
        ],
      };

      history.push('/home');
      dispatch(setAlert('signup successful', severity.Success));

      const notificationsResponse =
        await notificationsService.postNotifications();
      console.log('notifications res ', notificationsResponse.status);

      const profileResponse = await profileService.createProfile(profile);
      dispatch({ type: SET_CURRENT_PROFILE, data: profileResponse });
      console.log('profile res ', profileResponse);

    } catch (error) {
      dispatch({
        type: USER_FAILURE,
      });
      dispatch(setAlert('signup failed: email is already in use', severity.Error));

      /*
        if


      */
    }
  };
};

/**
 * Logs user out
 * @function
 */
export const logout = () => {
  return async (dispatch: any) => {
    logoutUser();
    dispatch({ type: LOGOUT });
    history.push('/');
    dispatch(setAlert('user logged out'));
  };
};

/**
 * Gets user profile information using user's role and token
 * @function
 * @param {string} role - user's role
 */
export const me = (role: roles) => async (dispatch: any) => {
  dispatch({
    type: USER_REQUEST,
  });
  try {
    //TODO: PURKKAMALLIRATKAISU
    // Kirjautuessa sisään setItem ei ehdi päivittää loggedInnoAppUseria
    if (!localStorage.getItem('loggedInnoAppUser')) return;
    const { data } = await userService.me(role);
    dispatch({
      type: USER_PROFILE,
      data,
    });
  } catch (error) {
    statusHandler(dispatch, error);
  }
};

/**
 * Updates user profile information
 * @function
 * @param {Object} updateData - updated profile information
 * @param {string} role - user's role
 */
export const update =
  (updateData: any, role: roles) => async (dispatch: any) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const { data: profile } = await userService.update(updateData, role);
      dispatch({
        type: USER_PROFILE,
        profile,
      });
      dispatch(setAlert('User information updated'));
    } catch (error) {
      console.log('update error');
      statusHandler(dispatch, error);
    }
  };

/**
 * Updates user password
 * @function
 * @param {Object} updateData - the object has two properties: currentPassword and
 * and newPassword
 * @param {string} role - user's role
 */
export const updatePassword =
  (updateData: any, role: roles) => async (dispatch: any) => {
    try {
      const res: any = await userService.updatePassword(updateData, role);
      if (res.status === 200) {
        dispatch(setAlert('Password updated successfully!', severity.Success));
        window.location.reload();
      } else {
        dispatch(setAlert(res.data.message, severity.Error));
      }
    } catch (error) {
      console.log('UpdatePassword error');
      statusHandler(dispatch, error);
    }
  };

/**
 * Logs out user if token or role is wrong
 * @function
 * @param {function} dispatch - dispatch function
 * @param {Object} response - error response object
 * @todo Why on earth would you do that?
 */
const statusHandler = (dispatch: Function, response: any) => {
  if (!response || response.status === 401 || response.status === 500) {
    // logoutUser()
    dispatch({ type: USER_FAILURE });
    dispatch(setAlert('invalid token', severity.Error));
  } else {
    window.location.reload();
  }
};
