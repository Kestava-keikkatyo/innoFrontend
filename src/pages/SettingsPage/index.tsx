import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ChangePassword from './ChangePassword';
import { Link, useHistory } from 'react-router-dom';

/**
 * @desc Renders setting page
 */
const SettingsPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
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
              Back
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Typography style={{ paddingTop: '0.5rem' }} variant="h4">
        Settings
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
