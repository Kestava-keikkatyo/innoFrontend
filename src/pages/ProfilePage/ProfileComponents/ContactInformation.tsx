import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Grid, Link, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders contact information of user profile.
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const ContactInformation: React.FC<any> = ({ profile }) => {
  const classes = useStyles();
  const { t } = useTranslation()

  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12}>
        <Typography variant="h5">{t('contact_information')}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} style={{ marginTop: 24 }}>
        <Typography style={{ fontWeight: 500 }} variant="body1" color="primary">
          <LocationOnIcon
            fontSize="small"
            style={{ marginBottom: -3, color: '#eb5a02' }}
          />{' '}
          {t('address')}
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
          {t('website')}
        </Typography>
        <Typography variant="body2" className={classes.typoBody2}>
          <Link target="_blank" color="inherit" href={profile.website} underline="hover">
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
          {t('email')}
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
          {t('phone')}
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
