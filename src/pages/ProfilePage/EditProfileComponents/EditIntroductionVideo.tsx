import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import ReactPlayer from 'react-player';
import FileUploader from '../../../components/FileUploader';
import baseUrl from '../../../utils/baseUrl';
import { useTranslation } from 'react-i18next';

/**
 * @component
 * @desc Renders profile's introduction video to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditIntroductionVideo: React.FC<any> = ({ profile }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12} style={{ marginBottom: 40 }}>
        <Typography variant="h5">{t('introduction_video')}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.playerWrapper}>
        {/*   https://www.npmjs.com/package/react-player   */}
        <ReactPlayer
          url={
            profile.video !== ''
              ? profile.video
              : `https://www.youtube.com/watch?v=UTLcTLs8dwk&ab_channel=Kest%C3%A4v%C3%A4Keikkaty%C3%B62021&enablejsapi=1&origin=${baseUrl}`
          }
          className={classes.reactPlayer}
          width="100%"
          height="100%"
          controls
        />
      </Grid>
      <Grid item xs={12}>
        <FileUploader name={t('change_introduction_video')} accept="video/*" />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles(() => ({
  playerWrapper: {
    position: 'relative',
    paddingTop:
      '56.25%' /* ## Percentage ratio for 16:9 ## ..... 720 / 1280 = 0.5625 */,
    //width: 'auto',
    //height: 'auto'
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
export default EditIntroductionVideo;
