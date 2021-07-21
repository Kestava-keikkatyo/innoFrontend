import React from 'react';
import { CardMedia, Grid, makeStyles } from '@material-ui/core';
import banner from '../../../assets/form-banner.jpg';
import FileUploader from '../../../components/FileUploader';
/**
 * @component
 * @desc Renders profile's cover photo to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditCoverPhoto: React.FC<any> = ({ profile }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" direction="row">
      <Grid item xs={12}>
        <CardMedia
          className={classes.coverPhoto}
          image={profile.coverPhoto !== '' ? profile.coverPhoto : banner}
        />
        <div className={classes.cover}>
          <FileUploader name="Change cover" accept="image/*" />
        </div>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  cover: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      textAlign: 'left',
    },
  },
  coverPhoto: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
}));
export default EditCoverPhoto;
