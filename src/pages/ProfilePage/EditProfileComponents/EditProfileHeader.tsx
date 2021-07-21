import { Grid, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

/**
 * @component
 * @desc Renders edit profile page header
 */
const EditProfileHeader: React.FC<any> = () => {
  const history = useHistory();
  const classes = useStyles();

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
          onClick={() => history.push('/profile')}
        >
          <Link
            style={{ textDecoration: 'none', color: '#eb5a00' }}
            to="/profile"
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
export default EditProfileHeader;
