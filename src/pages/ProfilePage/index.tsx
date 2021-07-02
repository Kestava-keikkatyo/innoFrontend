import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Spacing from '../../components/Spacing';
import banner from '../../assets/form-banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { fetchProfileById } from '../../actions/editProfileActions';
export interface ProfilePageProps {}

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

const Profile: React.FC<ProfilePageProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userData: any = useSelector((state: IRootState) => state.user.data);
  const currentProfile: any = useSelector(
    (state: IRootState) => state.profileForm
  );

  const profileInfo = (id: any) => {
    dispatch(fetchProfileById(userData.profileId));
  };

  return (
    <Container className="relative">
      <img src={banner} alt="Banner" className="profile-banner" />
      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
          <Avatar
            style={{ margin: 'auto' }}
            className={classes.avatar}
            aria-label="recipe"
          >
            JB
          </Avatar>
        </Grid>
        <Grid item xs={12} md={10}>
          <div className={classes.contact}>
            <Typography variant="h4">User information</Typography>
          </div>
          <Typography>{currentProfile.userInformation}</Typography>
        </Grid>
      </Grid>
      <Spacing m5 />
      <div className={classes.contact}></div>
      <Typography variant="h4">Contact information</Typography>

      <Typography variant="body1">
        {currentProfile.contactInformation}
      </Typography>
      <Spacing m5 />
      <div className={classes.contact}>
        <Typography variant="h4"> information</Typography>
      </div>

      <iframe
        width="100%"
        height="600"
        src={currentProfile.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1>{profileInfo}</h1>
      <Typography variant="h4">Instructions</Typography>
      <Typography>{currentProfile.instructions}</Typography>
    </Container>
  );
};

export default Profile;
