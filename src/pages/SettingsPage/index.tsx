import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Button, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChangePassword from './ChangePassword';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
/**
 * @desc Renders setting page
 */
const SettingsPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={() => history.push('/home')}
          >
            <Link
              style={{ textDecoration: 'none', color: '#eb5a00' }}
              to="/home"
            >
              {t('back')}
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Typography style={{ paddingTop: '0.5rem' }} variant="h4">
        {t('settings')}
      </Typography>
      <div style={{ marginTop: '1rem' }}>
        {/* ChangePassword component */}
        <ChangePassword />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 24,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default SettingsPage;
