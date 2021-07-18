import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import React from 'react';
import Spacing from '../../components/Spacing';
import banner from '../../assets/form-banner.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import {
  updateProfile,
  setProfile,
  fetchProfileById,
} from '../../actions/profileActions';

import FileUploader from '../../components/FileUploader';
import fileService from '../../services/fileService';
import ReactPlayer from 'react-player';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

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
  information: {
    display: 'flex',
    alignItems: 'row',
  },
  cover: {
    textAlign: 'center',
    marginRight: '22%',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  picture: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  root: {
    color: '#f50057',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const EditProfilePage: React.FC<any> = () => {
  const currentProfile: any = useSelector(
    (state: IRootState) => state.profile.currentProfile
  );

  const currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const userData: any = useSelector((state: IRootState) => state.user.data);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId));
  }, [dispatch, userData.profileId]);

  const profileEdit = async (e: any) => {
    e.preventDefault();
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
    history.push('/profile');
  };
  console.log('lopullinen current profile:  ', currentProfile);

  const handleInstructionsChange = (event: any, index: any) => {
    let copyOfInstructions = [...currentProfile.instructions];
    copyOfInstructions[index] = event.target.value;
    dispatch(
      setProfile({ ...currentProfile, instructions: copyOfInstructions })
    );
  };

  const handleSafetyRulesChange = (event: any, index: any) => {
    let copyOfSaftyRules = [...currentProfile.occupationalSafetyRules];
    copyOfSaftyRules[index] = event.target.value;
    dispatch(
      setProfile({
        ...currentProfile,
        occupationalSafetyRules: copyOfSaftyRules,
      })
    );
  };

  return (
    <Container className="relative">
      {/* ### HEADER ### */}
      <Grid container direction="row" justify="space-between">
        <Grid item xs={6}>
          <Button color="primary" className={classes.button}>
            <Link style={{ textDecoration: 'none' }} to="/profile">
              Return
            </Link>
          </Button>
        </Grid>
      </Grid>
      <form>
        {/* ### Cover photo / banner ### */}
        <img
          src={
            currentProfile.coverPhoto !== ''
              ? currentProfile.coverPhoto
              : banner
          }
          alt="Banner"
          className="profile-banner"
        />
        {/* ### Profile picture & name ### */}
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
            <Avatar
              style={{ margin: 'auto' }}
              className={classes.avatar}
              src={currentProfile.profilePicture || ''}
              alt="profilePicture"
            />
            <div className={classes.picture}>
              <FileUploader name="Change picture" accept="image/*" />
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className={classes.cover}>
              <FileUploader name="Change cover" accept="image/*" />
            </div>
            <Typography variant="h5">Name</Typography>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%' }}
              name="name"
              fullWidth
              value={currentProfile.name || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({ ...currentProfile, name: e.target.value })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Spacing m5 />
        {/* ### Contact information ### */}
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Contact information</Typography>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: 24 }}>
            <Typography
              style={{ fontWeight: 500 }}
              variant="body1"
              color="primary"
            >
              <LocationOnIcon
                fontSize="small"
                style={{ marginBottom: -3, color: '#eb5a02' }}
              />{' '}
              Address
            </Typography>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="phone"
              fullWidth
              value={currentProfile.streetAddress || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({
                    ...currentProfile,
                    streetAddress: e.target.value,
                  })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 16 }}
              name="phone"
              fullWidth
              value={currentProfile.zipCode || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({
                    ...currentProfile,
                    zipCode: e.target.value,
                  })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 16 }}
              name="phone"
              fullWidth
              value={currentProfile.city || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({ ...currentProfile, city: e.target.value })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Typography
              style={{ fontWeight: 500, marginTop: 24 }}
              variant="body1"
              color="primary"
            >
              <PublicIcon
                fontSize="small"
                style={{ marginBottom: -3, color: '#eb5a02' }}
              />{' '}
              Website
            </Typography>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="phone"
              fullWidth
              value={currentProfile.website}
              onChange={(e) =>
                dispatch(
                  setProfile({
                    ...currentProfile,
                    website: e.target.value,
                  })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: 24 }}>
            <Typography
              style={{ fontWeight: 500 }}
              variant="body1"
              color="primary"
            >
              <EmailIcon
                fontSize="small"
                style={{ marginBottom: -3, color: '#eb5a02' }}
              />{' '}
              Email
            </Typography>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="email"
              fullWidth
              value={currentProfile.email || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({ ...currentProfile, email: e.target.value })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Typography
              style={{ fontWeight: 500, marginTop: 24 }}
              variant="body1"
              color="primary"
            >
              <PhoneIcon
                fontSize="small"
                style={{ marginBottom: -3, color: '#eb5a02' }}
              />{' '}
              Phone
            </Typography>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="phone"
              fullWidth
              value={currentProfile.phone || ''}
              onChange={(e) =>
                dispatch(
                  setProfile({ ...currentProfile, phone: e.target.value })
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>

        <Spacing m5 />
        {/* ### Introduction video ### */}
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Introduction video</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 24 }}>
            <ReactPlayer
              //width="100%"
              //height="600"
              url={
                currentProfile.video
                  ? currentProfile.video
                  : 'https://www.youtube.com/watch?v=UTLcTLs8dwk&ab_channel=Kest%C3%A4v%C3%A4Keikkaty%C3%B62021'
              }
              controls
            />
          </Grid>
          <Grid item xs={12}>
            <FileUploader name="Change introduction video" accept="video/*" />
          </Grid>
        </Grid>

        <Spacing m5 />
        {/* ### Occupational Safety Rules ### */}
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Occupational Safety Rules</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 24 }}>
            {currentProfile.occupationalSafetyRules.map(
              (item: any, index: number) => (
                <div key={index}>
                  <TextField
                    id="standard-full-width"
                    style={{ maxWidth: '97%', marginTop: 12 }}
                    name="phone"
                    fullWidth
                    value={item || ''}
                    onChange={(event) => handleSafetyRulesChange(event, index)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              )
            )}
          </Grid>
        </Grid>

        <Spacing m5 />
        {/* ### Instructions ### */}
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Instructions</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 24 }}>
            {currentProfile.instructions.map((item: any, index: number) => (
              <div key={index}>
                <TextField
                  id="standard-full-width"
                  style={{ maxWidth: '97%', marginTop: 12 }}
                  name="phone"
                  fullWidth
                  value={item || ''}
                  onChange={(event) => handleInstructionsChange(event, index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            ))}
          </Grid>
        </Grid>

        <Spacing m5 />
        {/* ### Submit button ### */}
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          onClick={profileEdit}
        >
          Save changes and return
        </Button>
        <Spacing m5 />
      </form>
    </Container>
  );
};

export default EditProfilePage;
