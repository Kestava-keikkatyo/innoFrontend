import React from 'react';
import { Grid, Link, Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import LatestJoinedWorkers from '../Profile/LatestJoinedWorkers';

const BusinessHome = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.generalInfo}>
        <div className={classes.item}>
          <Typography color="primary" align="center" variant="h6"> Latest received reports </Typography>
        </div>
        <div className={classes.item}>
          <Typography color="primary" align="center" variant="h6"> <Link href="/information" underline="hover">Information</Link> </Typography>
        </div>
        <div className={classes.item}>
          <Typography color="primary" align="center" variant="h6"> Areas of responsibility </Typography>
        </div>
      </div>
      <div className={classes.pageContent}>
        <div className={classes.contentContainer}>
            <div className={classes.feelingAnalysis}>
             
            </div>
            <div className={classes.latestJobAds}>
            <LatestJoinedWorkers />
            </div>
        </div>
      </div> 
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  generalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  item: {
    flex: '1',
    margin: '0px 20px',
    padding: '30px',
    borderRadius: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  container: {
    margin: '10px 0px',
    display: 'flex',
    alignItems: 'center'
  },
  pageContent: {
    flex: '4',
    padding: '5px'
},
feelingAnalysis: {
    flex: 1,
    padding: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
},
latestJobAds: {
    flex: 2,
    padding: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    marginLeft: '20px',
},
contentContainer: {
    display: 'flex',
    marginTop: '10px',
    hight: '500',
},
}));

export default BusinessHome;
