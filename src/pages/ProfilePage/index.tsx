import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { fetchProfileById } from '../../actions/profileActions';
import Spacing from '../../components/Spacing';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import CoverPhoto from './ProfileComponents/CoverPhoto';
import ProfilePictureAndName from './ProfileComponents/ProfilePictureAndName';
import ContactInformation from './ProfileComponents/ContactInformation';
import IntroductionVideo from './ProfileComponents/IntroductionVideo';
import Instructions from './ProfileComponents/Instructions';
import OccupationalSafetyRules from './ProfileComponents/OccupationalSafetyRules';

/**
 * @desc Renders profile page.
 */
const ProfilePage: React.FC = () => {
  const userData: any = useSelector((state: IRootState) => state.user.data);

  const currentProfile: any = useSelector(
    (state: IRootState) => state.profile.currentProfile
  );

  const dispatch = useDispatch();
  console.log('CURRENTPROFILE: ProfilePage > index', currentProfile);

  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId));
  }, [dispatch, userData.profileId]);

  return (
    <Container style={{ marginTop: 10 }} className="relative">
      <ProfileHeader />

      <CoverPhoto profile={currentProfile} />

      <ProfilePictureAndName profile={currentProfile} />
      <Spacing m5 />

      <ContactInformation profile={currentProfile} />
      <Spacing m5 />

      <IntroductionVideo profile={currentProfile} />
      <Spacing m5 />

      <OccupationalSafetyRules profile={currentProfile} />
      <Spacing m5 />

      <Instructions profile={currentProfile} />
      <Spacing m5 />
    </Container>
  );
};

export default ProfilePage;
