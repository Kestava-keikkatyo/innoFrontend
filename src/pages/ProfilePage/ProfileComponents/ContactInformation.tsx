import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';

/**
 * @component
 * @desc Renders contact information of user profile.
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const ContactInformation: React.FC<any> = ({ profile }) => {
  const classes = useStyles();

  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12}>
        <Typography variant="h5">Contact information</Typography>
      </Grid>

      <Grid item xs={12} sm={6} style={{ marginTop: 24 }}>
        <Typography style={{ fontWeight: 500 }} variant="body1" color="primary">
          <LocationOnIcon
            fontSize="small"
            style={{ marginBottom: -3, color: '#eb5a02' }}
          />{' '}
          Address
        </Typography>
        <Typography variant="body2" className={classes.typoBody2}>
          {profile.streetAddress}
        </Typography>
        <Typography variant="body2" className={classes.typoBody2}>
          {profile.zipCode}
        </Typography>
        <Typography variant="body2" className={classes.typoBody2}>
          {profile.city}
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
          <Link target="_blank" color="inherit" href={profile.website}>
            {profile.website}
          </Link>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} style={{ marginTop: 24 }}>
        <Typography style={{ fontWeight: 500 }} variant="body1" color="primary">
          <EmailIcon
            fontSize="small"
            style={{ marginBottom: -3, color: '#eb5a02' }}
          />{' '}
          Email
        </Typography>
        <Typography variant="body2" className={classes.typoBody2}>
          {profile.email}
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
          {profile.phone}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  typoBody2: {
    marginTop: 10,
  },
}));
export default ContactInformation;
