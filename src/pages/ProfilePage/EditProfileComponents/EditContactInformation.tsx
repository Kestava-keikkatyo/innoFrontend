import { Grid, Typography, TextField } from '@material-ui/core';
import React from 'react';

import { useDispatch } from 'react-redux';
import { setProfile } from '../../../actions/profileActions';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { useTranslation } from 'react-i18next';
/**
 * @component
 * @desc Renders profile's contact information to be edited.
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditContactInformation: React.FC<any> = ({ profile }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        <TextField
          id="standard-full-width"
          style={{ maxWidth: '97%', marginTop: 12 }}
          name="phone"
          fullWidth
          value={profile.streetAddress || ''}
          onChange={(e) =>
            dispatch(
              setProfile({
                ...profile,
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
          value={profile.zipCode || ''}
          onChange={(e) =>
            dispatch(
              setProfile({
                ...profile,
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
          value={profile.city || ''}
          onChange={(e) =>
            dispatch(setProfile({ ...profile, city: e.target.value }))
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
          {t('website')}
        </Typography>
        <TextField
          id="standard-full-width"
          style={{ maxWidth: '97%', marginTop: 12 }}
          name="phone"
          fullWidth
          value={profile.website}
          onChange={(e) =>
            dispatch(
              setProfile({
                ...profile,
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
        <Typography style={{ fontWeight: 500 }} variant="body1" color="primary">
          <EmailIcon
            fontSize="small"
            style={{ marginBottom: -3, color: '#eb5a02' }}
          />{' '}
          {t('email')}
        </Typography>
        <TextField
          id="standard-full-width"
          style={{ maxWidth: '97%', marginTop: 12 }}
          name="email"
          fullWidth
          disabled // user email can not be changed
          value={profile.email || ''}
          onChange={(e) =>
            dispatch(setProfile({ ...profile, email: e.target.value }))
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
          {t('phone')}
        </Typography>
        <TextField
          id="standard-full-width"
          style={{ maxWidth: '97%', marginTop: 12 }}
          name="phone"
          fullWidth
          value={profile.phone || ''}
          onChange={(e) =>
            dispatch(setProfile({ ...profile, phone: e.target.value }))
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EditContactInformation;
