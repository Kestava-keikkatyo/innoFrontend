import React from 'react';
import { Grid, makeStyles, Typography, List } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders occupational safety rules of user profile.
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const OccupationalSafetyRules: React.FC<any> = ({ profile }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12}>
        <Typography variant="h5">{t('occupational')}</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 24 }}>
        <List>
          {profile?.occupationalSafetyRules?.map(
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
  );
};

const useStyles = makeStyles(() => ({
  typoBody2: {
    marginTop: 10,
  },
}));
export default OccupationalSafetyRules;
