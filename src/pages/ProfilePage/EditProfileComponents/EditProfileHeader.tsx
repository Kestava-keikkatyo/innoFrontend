import { Grid, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';
/**
 * @component
 * @desc Renders edit profile page header
 */
const EditProfileHeader: React.FC<any> = ({ submitProfile, savingChanges }) => {
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      style={{ marginTop: 20, marginBottom: 10 }}
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
      {/* ### Submit button ### */}
      <Grid item xs={6}>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
          onClick={submitProfile}
          style={{ minWidth: 200, float: 'right' }}
        >
          {savingChanges ? <CircularProgress size={24} /> : t('save_changes')}
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
