import { Container } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileToBeViewed } from '../../actions/profileActions';
import Spacing from '../../components/Spacing';
import { useLocation } from 'react-router-dom';

import ProfileViewHeader from './ProfileComponents/ProfileViewHeader';
import CoverPhoto from './ProfileComponents/CoverPhoto';
import ProfilePictureAndName from './ProfileComponents/ProfilePictureAndName';
import ContactInformation from './ProfileComponents/ContactInformation';
import IntroductionVideo from './ProfileComponents/IntroductionVideo';
import Instructions from './ProfileComponents/Instructions';
import OccupationalSafetyRules from './ProfileComponents/OccupationalSafetyRules';

/**
 * @desc Renders profile view page.
 */
const ProfileViewPage: React.FC = () => {
  const location: any = useLocation();

  const profileId: any = location.state.profileId;

  const profileToBeViewed = useSelector(
    (state: any) => state.profile.profileToBeViewed
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileToBeViewed(profileId));
  }, [dispatch, profileId]);

  return (
    <Container style={{ marginTop: 10 }} className="relative">
      <ProfileViewHeader />

      <CoverPhoto profile={profileToBeViewed} />

      <ProfilePictureAndName profile={profileToBeViewed} />
      <Spacing m5 />

      <ContactInformation profile={profileToBeViewed} />
      <Spacing m5 />

      <IntroductionVideo profile={profileToBeViewed} />
      <Spacing m5 />

      <OccupationalSafetyRules profile={profileToBeViewed} />
      <Spacing m5 />

      <Instructions profile={profileToBeViewed} />
      <Spacing m5 />
    </Container>
  );
};

export default ProfileViewPage;
