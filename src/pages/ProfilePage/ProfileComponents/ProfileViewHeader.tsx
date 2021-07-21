import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

/**
 * @component
 * @desc Renders profile page header.
 * @param {profile} props
 */
const ProfileHeader: React.FC<any> = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
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
          onClick={() => history.push('/profiles')}
        >
          <Link
            style={{ textDecoration: 'none', color: '#eb5a00' }}
            to="/profiles"
          >
            Return
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default ProfileHeader;
