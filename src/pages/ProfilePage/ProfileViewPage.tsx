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
import { fetchProfileToBeViewed } from '../../actions/profileActions';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar, Grid, Typography } from '@material-ui/core';

import Spacing from '../../components/Spacing';
import banner from '../../assets/form-banner.jpg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import baseUrl from '../../utils/baseUrl';

const ProfileViewPage: React.FC = () => {
  const history = useHistory();
  const location: any = useLocation();

  const profileId: any = location.state.profileId;

  const profileToBeViewed = useSelector(
    (state: any) => state.profile.profileToBeViewed
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileToBeViewed(profileId));
  }, [dispatch, profileId]);

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
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={() => history.push('/profiles')}
          >
            <Link
              style={{ textDecoration: 'none', color: '#eb5a00' }}
              to="/profiles"
            >
              Return
            </Link>
          </Button>
        </Grid>
      </Grid>
      {/* ### Cover photo / banner  ### */}
      <Grid container justify="center" direction="row">
        <Grid item xs={12}>
          <CardMedia
            className={classes.coverPhoto}
            image={
              profileToBeViewed.coverPhoto !== ''
                ? profileToBeViewed.coverPhoto
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
            src={profileToBeViewed.profilePicture || ''}
            alt="profilePicture"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <div className={classes.contact}>
            <Typography variant="h6">{profileToBeViewed.name}</Typography>
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
            {profileToBeViewed.streetAddress}
          </Typography>
          <Typography variant="body2" className={classes.typoBody2}>
            {profileToBeViewed.zipCode}
          </Typography>
          <Typography variant="body2" className={classes.typoBody2}>
            {profileToBeViewed.city}
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
            {profileToBeViewed.website || 'Not Found'}
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
            {profileToBeViewed.email}
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
            {profileToBeViewed.phone}
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
              profileToBeViewed.video !== ''
                ? profileToBeViewed.video
                : `https://www.youtube.com/watch?v=UTLcTLs8dwk&ab_channel=Kest%C3%A4v%C3%A4Keikkaty%C3%B62021&enablejsapi=1&origin=${baseUrl}`
            }
            controls
            //origin={baseUrl}
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
            {profileToBeViewed?.occupationalSafetyRules?.map(
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
            {profileToBeViewed?.instructions?.map(
              (value: any, index: number) => (
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
              )
            )}
          </List>
        </Grid>
      </Grid>
      <Spacing m5 />
    </Container>
  );
};

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
    minHeight: 450,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      minHeight: 400,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      minHeight: 300,
    },
  },
}));

export default ProfileViewPage;
