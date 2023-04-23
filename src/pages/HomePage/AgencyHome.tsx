import React, { useEffect, useState } from 'react';

// import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  Button, CardMedia, Grid, Link, ListItemButton, ListItemIcon, ThemeProvider, Typography, createTheme,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AgencyWorkers from '../Profile/AgencyWorkers';
import AgencyStatisticsSummary from '../MoodStatistics/AgencyStatisticsSummary';
import picture from '../../assets/pictures/Kirjautuminen_etusivu_Keikkakaveri_tyovaline_kuvitus.svg'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Report from '../../pages/ReportPage/SimpleReport';
import { fetchReports } from '../../actions/reportActions';

const AgencyHome = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const reports: any = useSelector((state: any) => state.report.reports);

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00'
  }

  enum displayState {
    All = 'all',
    Archived = 'archived',
    NotArchived = 'notArchived',
  }

  const [display, setDisplay] = useState(displayState.All)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      allVariants: {
        color: "#2C2C2C"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Grid container>
    <Grid sx={{ height: { md: '300px', sm: '300px', xs: '200px' }}} style={{ marginTop: '20px', marginBottom: '20px', maxHeight: '300px', width: '100%', display: 'flex', backgroundImage: 'linear-gradient(to bottom, #FDFDFD, #FDFDFD 50%, #C0CFFA 50%)', position: 'relative' }}>
          <Grid item style={{ bottom: '0', position: 'absolute' }} sx={{ width: { md: '35%', sm: '50%', xs: '90%' } }}>
            <CardMedia
              component="img"
              image={picture}
              style={{}}
            />
          </Grid>
          <Grid item sx={{ visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' } }} style={{ paddingRight: '50px', textAlign: 'right', textTransform: 'uppercase', bottom: '0', width: '100%', position: 'absolute' }}>
            <h2>{t('welcomeTextAgency')}</h2>
          </Grid>
        </Grid>
    
      <Grid className={classes.generalInfo} sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }} >
          <Grid item className={classes.item} sx={{marginRight: {md: '20px', sm: '20px', xs: '0'}, }}>
          <ListItemButton style={{ maxHeight: '50px', justifyContent: 'center', marginBottom: '20px' }}>
              <ListItemIcon>
                <MoodIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6"> {t('smileSummary')} </Typography>
            </ListItemButton>
            <Grid sx={{ margin: {md: '20px', sm: '20px', xs: '0px'}}}>
              <AgencyStatisticsSummary ></AgencyStatisticsSummary>
            </Grid>
          </Grid>
          <Grid item style={{margin: 0, paddingLeft: 12, paddingRight: 12}} className={classes.item}>
          <ListItemButton style={{ maxHeight: '50px', justifyContent: 'center', marginBottom: '20px' }}>
              <ListItemIcon>
                <ErrorOutlineIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6"> {t('newReports')} </Typography>
            </ListItemButton>
            {reports.map((report: any) => (
              <Grid sx={{ margin: {md: '20px', sm: '20px', xs: '5px'}}}>
                <Report key={report._id} report={report} />
              </Grid>
            ))}
          </Grid>
        </Grid>

    </Grid>
  </ThemeProvider>
  );
};

const useStyles = makeStyles(() => ({
  generalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  item: {
    paddingTop: '30px',
    paddingLeft: '12px',
    paddingRight: '12px',
    flex: '1',
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
    flex: 2,
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
  title: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  myWorkers: {
    flex: 2,
    padding: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    marginLeft: '20px',
  },
}));

export default AgencyHome;
