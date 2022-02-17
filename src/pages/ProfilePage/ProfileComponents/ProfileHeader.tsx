import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
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
      style={{ marginTop: 10, marginBottom: 10 }}
    >
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
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default ProfileHeader;
