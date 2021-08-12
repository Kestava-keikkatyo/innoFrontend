import { Grid, Typography, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../actions/profileActions';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders profile's occupational safety rules to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditOccupationalSafetyRules: React.FC<any> = ({ profile }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const handleSafetyRulesChange = (event: any, index: any) => {
    let copyOfSaftyRules = [...profile.occupationalSafetyRules];
    copyOfSaftyRules[index] = event.target.value;
    dispatch(
      setProfile({
        ...profile,
        occupationalSafetyRules: copyOfSaftyRules,
      })
    );
  };

  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12}>
        <Typography variant="h5">{t('occupational')}</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 24 }}>
        {profile.occupationalSafetyRules.map((item: any, index: number) => (
          <div key={index}>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="phone"
              fullWidth
              value={item || ''}
              onChange={(event) => handleSafetyRulesChange(event, index)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
export default EditOccupationalSafetyRules;
