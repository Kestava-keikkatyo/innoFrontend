import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders profile page header.
 * @param {profile} props
 */
const ProfileHeader: React.FC<any> = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation()
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
          onClick={() => history.push('/home')}
        >
          <Link style={{ textDecoration: 'none', color: '#eb5a00' }} to="/home">
          {t("return")}
          </Link>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row-reverse">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={() => history.push('/profile/edit-profile')}
          >
            <Link
              style={{ textDecoration: 'none', color: '#fff' }}
              to="/profile/edit-profile"
            >
              {t("edit_profile")}
            </Link>
          </Button>
        </Grid>
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
