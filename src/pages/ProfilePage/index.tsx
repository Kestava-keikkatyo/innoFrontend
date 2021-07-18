import {
  Button,
  CardMedia,
  Container,
  List,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { fetchProfileById } from '../../actions/profileActions';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar, Grid, Typography } from '@material-ui/core';

import Spacing from '../../components/Spacing';
import banner from '../../assets/form-banner.jpg';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
  button: {
    margin: theme.spacing(1),
  },
  typoBody2: {
    marginTop: 10,
  },
  coverPhoto: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  videoWrapper: {
    display: 'flex',
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

const ProfilePage: React.FC = () => {
  const userData: any = useSelector((state: IRootState) => state.user.data);

  const currentProfile: any = useSelector(
    (state: IRootState) => state.profile.currentProfile
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  console.log('USER DATA: ProfilePage > index', userData);
  console.log('CURRENTPROFILE: ProfilePage > index', currentProfile);

  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId));
  }, [dispatch, userData.profileId]);

  return (
    <Container style={{ marginTop: 10 }} className="relative">
      {/* ### HEADER ### */}
      <Grid
        container
        direction="row"
        justify="space-between"
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <Grid item xs={6}>
          <Button color="primary" variant="outlined" className={classes.button}>
            <Link
              style={{ textDecoration: 'none', color: '#eb5a00' }}
              to="/home"
            >
              Return
            </Link>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row-reverse">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to="/profile-edit"
              >
                Edit profile
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* ### Cover photo / banner  ### */}
      <Grid container justify="center" direction="row">
        <Grid item xs={12}>
          <CardMedia
            className={classes.coverPhoto}
            image={
              currentProfile.coverPhoto !== ''
                ? currentProfile.coverPhoto
                : banner
            }
          />
        </Grid>
      </Grid>
      {/* ### profile picture & name ### */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        style={{ marginBottom: 75 }}
      >
        <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
          <Avatar
            style={{ margin: 'auto' }}
            className={classes.avatar}
            aria-label="recipe"
            src={currentProfile.profilePicture || ''}
            alt="profilePicture"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <div className={classes.contact}>
            <Typography variant="h6">{currentProfile.name}</Typography>
          </div>
          <Typography>status</Typography>
        </Grid>
      </Grid>
      <Spacing m5 />
      {/* ### Contact information ### */}
      <Grid container style={{ marginBottom: 75 }}>
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
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.streetAddress}
          </Typography>
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.zipCode}
          </Typography>
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.city}
          </Typography>

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
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.website || 'Not Found'}
          </Typography>
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
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.email}
          </Typography>

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
          <Typography variant="body2" className={classes.typoBody2}>
            {currentProfile.phone}
          </Typography>
        </Grid>
      </Grid>
      <Spacing m5 />
      {/* ### Introduction video ### */}
      <Grid container style={{ marginBottom: 75 }}>
        <Grid item xs={12} style={{ marginBottom: 40 }}>
          <Typography variant="h5">Introduction video</Typography>
        </Grid>
        <Grid item xs={12} className={classes.videoWrapper}>
          {/*   https://www.npmjs.com/package/react-player   */}
          <ReactPlayer
            width="100%"
            height="100%"
            url={
              currentProfile.video !== ''
                ? currentProfile.video
                : 'https://www.youtube.com/watch?v=UTLcTLs8dwk&ab_channel=Kest%C3%A4v%C3%A4Keikkaty%C3%B62021'
            }
            controls
          />
        </Grid>
      </Grid>
      <Spacing m5 />
      {/* ### Occupational Safety Rules ### */}
      <Grid container style={{ marginBottom: 75 }}>
        <Grid item xs={12}>
          <Typography variant="h5">Occupational Safety Rules</Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 24 }}>
          <List>
            {currentProfile?.occupationalSafetyRules?.map(
              (value: any, index: number) => (
                <div key={index}>
                  {index === 0 ? (
                    <Typography variant="body1">{value}:</Typography>
                  ) : (
                    <Typography variant="body2" className={classes.typoBody2}>
                      <FiberManualRecordIcon
                        style={{
                          width: 16,
                          height: 16,
                          marginBottom: -3,
                          color: '#eb5a02',
                        }}
                      />{' '}
                      {value}
                    </Typography>
                  )}
                </div>
              )
            )}
          </List>
        </Grid>
      </Grid>
      <Spacing m5 />
      {/* ### Instructions ### */}
      <Grid container style={{ marginBottom: 75 }}>
        <Grid item xs={12}>
          <Typography variant="h5">Instructions</Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 24 }}>
          <List>
            {currentProfile?.instructions?.map((value: any, index: number) => (
              <div key={index}>
                <Typography variant="body2" className={classes.typoBody2}>
                  <FiberManualRecordIcon
                    style={{
                      width: 16,
                      height: 16,
                      marginBottom: -3,
                      color: '#eb5a02',
                    }}
                  />{' '}
                  {value}
                </Typography>
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
      <Spacing m5 />
    </Container>
  );
};

export default ProfilePage;
