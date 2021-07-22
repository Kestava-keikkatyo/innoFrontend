import { Button, Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Spacing from '../../components/Spacing';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { updateProfile, fetchProfileById } from '../../actions/profileActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import fileService from '../../services/fileService';
import { clearAlert, setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';

import EditProfileHeader from './EditProfileComponents/EditProfileHeader';
import EditCoverPhoto from './EditProfileComponents/EditCoverPhoto';
import EditProfilePictureAndName from './EditProfileComponents/EditProfilePictureAndName';
import EditContactInformation from './EditProfileComponents/EditContactInformation';
import EditIntroductionVideo from './EditProfileComponents/EditIntroductionVideo';
import EditOccupationalSafetyRules from './EditProfileComponents/EditOccupationalSafetyRules';
import EditInstructions from './EditProfileComponents/EditInstructions';
import { setFiles } from '../../actions/fileActions';

/**
 * @desc Edit profile page
 */
export const EditProfilePage: React.FC<any> = () => {
  const currentProfile: any = useSelector(
    (state: IRootState) => state.profile.currentProfile
  );

  const currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const userData: any = useSelector((state: IRootState) => state.user.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const [savingChanges, setSavingChanges] = useState(false);

  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId));
  }, [dispatch, userData.profileId]);

  const submitProfile = async (e: any) => {
    e.preventDefault();
    setSavingChanges(true);
    dispatch(setAlert('Saving changes...', severity.Info, 10));
    console.log('current profile', currentProfile);
    console.log('profileEdit current files', currentFiles);
    // currentFiles = [0, 1, 2] = [picture, cover, video]

    let fileUrls = [
      currentProfile.profilePicture,
      currentProfile.coverPhoto,
      currentProfile.video,
    ];

    let copyOfCurrentProfile = { ...currentProfile };
    console.log('### 1 copyOfCurrentProfile:  ', copyOfCurrentProfile);

    if (currentFiles.files[0] !== undefined && currentFiles.files[0] !== null) {
      const res = await fileService.postFile(currentFiles.files[0]);
      copyOfCurrentProfile = {
        ...copyOfCurrentProfile,
        profilePicture: res.data.fileUrl,
      };
    }

    if (currentFiles.files[1] !== undefined && currentFiles.files[1] !== null) {
      const res = await fileService.postFile(currentFiles.files[1]);
      copyOfCurrentProfile = {
        ...copyOfCurrentProfile,
        coverPhoto: res.data.fileUrl,
      };
    }

    if (currentFiles.files[2] !== undefined && currentFiles.files[2] !== null) {
      const res = await fileService.postFile(currentFiles.files[2]);
      copyOfCurrentProfile = {
        ...copyOfCurrentProfile,
        video: res.data.fileUrl,
      };
    }

    console.log('file urls:  ', fileUrls);
    console.log('### 2 copyOfCurrentProfile:  ', copyOfCurrentProfile);
    dispatch(updateProfile(copyOfCurrentProfile, userData.profileId));
    dispatch(clearAlert());
    setSavingChanges(false);
    dispatch(setFiles([null, null, null]));
    history.push('/profile');
  };

  console.log('lopullinen current profile:  ', currentProfile);

  return (
    <Container className="relative">
      <EditProfileHeader />

      <form>
        <EditCoverPhoto profile={currentProfile} />

        <EditProfilePictureAndName profile={currentProfile} />
        <Spacing m5 />

        <EditContactInformation profile={currentProfile} />
        <Spacing m5 />

        <EditIntroductionVideo profile={currentProfile} />
        <Spacing m5 />

        <EditOccupationalSafetyRules profile={currentProfile} />
        <Spacing m5 />

        <EditInstructions profile={currentProfile} />
        <Spacing m5 />

        {/* ### Submit button ### */}
        <Grid container style={{ marginBottom: 75 }}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            onClick={submitProfile}
            style={{ minWidth: 200 }}
          >
            {savingChanges ? <CircularProgress size={24} /> : 'Save changes'}
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default EditProfilePage;
