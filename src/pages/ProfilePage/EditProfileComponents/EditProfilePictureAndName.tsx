import { Grid, Typography, TextField, Avatar } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../actions/profileActions';
import FileUploader from '../../../components/FileUploader';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders profile picture and user name to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditProfilePictureAndName: React.FC<any> = ({ profile }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation()
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      style={{ marginBottom: 75 }}
    >
      <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
        <Avatar
          style={{ margin: 'auto' }}
          className={classes.avatar}
          src={profile.profilePicture || ''}
          alt="profilePicture"
        />
        <div className={classes.picture}>
          <FileUploader name={t("change_picture")} accept="image/*" />
        </div>
      </Grid>
      <Grid item xs={12} md={10}>
        <Typography variant="h5">Name</Typography>
        <TextField
          id="standard-full-width"
          style={{ maxWidth: '97%' }}
          name="name"
          fullWidth
          value={profile.name || ''}
          onChange={(e) =>
            dispatch(setProfile({ ...profile, name: e.target.value }))
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  picture: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
}));
export default EditProfilePictureAndName;
