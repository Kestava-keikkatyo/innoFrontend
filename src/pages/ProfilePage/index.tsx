import {
  Container,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { fetchProfileById } from '../../actions/editProfileActions';
import EditProfilePage from './EditProfilePage';
import UserProfilePage from './UserProfilePage';


const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
  },
  contactButton: {
    marginLeft: '1%',
  },
}));

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const userData: any = useSelector((state: IRootState) => state.user.data);
  
  console.log('USER DATA INDEX', userData)
  
 
  
  const currentProfile: any = useSelector((state: IRootState) => state.profileForm);

  console.log('CURRENTPROFILE INDEX', currentProfile)
  //let form:any = await formServices.fetchFormById(formId)

  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId))
  }, [dispatch, userData.profileId])
  
  return (
    <Container className="relative">
      <UserProfilePage/>    
      <EditProfilePage/>
    </Container>
  );
};

export default Profile;
