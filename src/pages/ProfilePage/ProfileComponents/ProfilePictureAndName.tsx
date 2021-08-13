import React from 'react';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders profile page picture and user's name
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const ProfilePictureAndName: React.FC<any> = ({ profile }) => {
  const classes = useStyles();
  const { t } = useTranslation()

  return (
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
          src={profile.profilePicture || ''}
          alt="profilePicture"
        />
      </Grid>
      <Grid item xs={12} md={10}>
        <div className={classes.contact}>
          <Typography variant="h6">{profile.name}</Typography>
        </div>
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
  contact: {
    display: 'flex',
    flexDirection: 'row',
  },
}));
export default ProfilePictureAndName;
