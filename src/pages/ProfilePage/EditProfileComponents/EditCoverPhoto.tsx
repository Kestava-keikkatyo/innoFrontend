import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import banner from '../../../assets/form-banner.jpg';
import FileUploader from '../../../components/FileUploader';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders profile's cover photo to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditCoverPhoto: React.FC<any> = ({ profile }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item xs={12}>
        <CardMedia
          className={classes.coverPhoto}
          image={profile.coverPhoto !== '' ? profile.coverPhoto : banner}
        />
        <div className={classes.cover}>
          <FileUploader name={t("change_cover")} accept="image/*" />
        </div>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  cover: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      textAlign: 'left',
    },
  },
  coverPhoto: {
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
  },
}));
export default EditCoverPhoto;
