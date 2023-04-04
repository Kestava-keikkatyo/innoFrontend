import MyWorkers from '../Profile/AgencyWorkers';
import React from 'react';
import {
  CardMedia,
  createTheme,
  Grid, ListItemButton, ListItemIcon, ThemeProvider, Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import picture from '../../assets/pictures/Kirjautuminen_etusivu_Keikkakaveri_tyovaline_kuvitus.svg'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const BusinessHome = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00'
  }

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
        <Grid sx={{ height: { md: '90%', sm: '90%', xs: '60%' } }} style={{ width: '100%', display: 'flex', backgroundImage: 'linear-gradient(to bottom, #FDFDFD, #FDFDFD 50%, #C0CFFA 50%)', position: 'relative' }}>
          <Grid item style={{ bottom: '0', position: 'absolute' }} sx={{ width: { md: '35%', sm: '50%', xs: '90%' } }}>
            <CardMedia
              component="img"
              image={picture}
              style={{}}
            />
          </Grid>
          <Grid item sx={{ visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' } }} style={{ paddingRight: '50px', textAlign: 'right', textTransform: 'uppercase', bottom: '0', width: '100%', position: 'absolute' }}>
            <h2>{t('welcomeTextBusiness')}</h2>
          </Grid>
        </Grid>
        <Grid style={{}} sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }} className={classes.generalInfo}>
          <Grid item className={classes.item} sx={{ marginRight: { lg: '50px', md: '50px', sm: '0', xs: '0' } }}>
            <ListItemButton style={{ justifyContent: 'center' }}>
              <ListItemIcon>
                <MoodIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6"> {t('smileSummary')} </Typography>
            </ListItemButton>
          </Grid>
          <Grid item className={classes.item}>
            <ListItemButton style={{ justifyContent: 'center' }}>
              <ListItemIcon>
                <ErrorOutlineIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6"> {t('newReports')} </Typography>
            </ListItemButton>
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
    flex: '1',
    margin: '20px 10px 20px 10px',
    padding: '30px 0px 300px 0px',
    borderRadius: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    display: 'flex',

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

