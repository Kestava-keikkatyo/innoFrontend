import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import banner from '../../../assets/form-banner.jpg';

/**
 * @component
 * @desc Renders cover photo of user profile.
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const CoverPhoto: React.FC<any> = ({ profile }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item xs={12}>
        <CardMedia
          className={classes.coverPhoto}
          image={profile.coverPhoto !== '' ? profile.coverPhoto : banner}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  coverPhoto: {
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
  },
}));
export default CoverPhoto;
