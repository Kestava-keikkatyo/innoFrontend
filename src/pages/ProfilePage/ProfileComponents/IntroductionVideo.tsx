import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import baseUrl from '../../../utils/baseUrl';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc Renders the introduction video of user profile.
 * @param {profile} props currentProfile or profileToBeViewed
 * NOTICE: profile prop refers to state.profile.currentProfile OR state.profile.profileToBeViewed
 */
const IntroductionVideo: React.FC<any> = ({ profile }) => {
  const { t } = useTranslation()
  const classes = useStyles();

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
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%' /* Percentage ratio for 16:9  720 / 1280 = 0.5625 */,
    //width: 'auto',
    //height: 'auto'
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
export default IntroductionVideo;
