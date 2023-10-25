import React, { useEffect } from 'react'
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import AgencyStatistics from '../MoodStatistics/AgencyStatistics'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Report from '../../pages/ReportPage/SimpleReport'
import { fetchReports } from '../../actions/reportActions'
import Header from './Header'

const BusinessOrAgencyHome: React.FC<{ welcomeText: string }> = ({ welcomeText }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const reports: any = useSelector((state: any) => state.report.reports)

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00',
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReports())
  }, [dispatch])

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      allVariants: {
        color: '#2C2C2C',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Header welcomeText={welcomeText} />
        <Grid
          className={classes.generalInfo}
          sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }}
        >
          <Grid
            item
            className={classes.item}
            sx={{ marginRight: { md: '20px', sm: '20px', xs: '0' } }}
          >
            <ListItemButton
              style={{ maxHeight: '50px', justifyContent: 'center', marginBottom: '20px' }}
            >
              <ListItemIcon>
                <MoodIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align='center' variant='h6'>
                {' '}
                {t('smileSummary')}{' '}
              </Typography>
            </ListItemButton>
            <Grid sx={{ margin: { md: '20px', sm: '20px', xs: '0px' } }}>
              <AgencyStatistics></AgencyStatistics>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ margin: 0, paddingLeft: 12, paddingRight: 12 }}
            className={classes.item}
          >
            <ListItemButton
              style={{ maxHeight: '50px', justifyContent: 'center', marginBottom: '20px' }}
            >
              <ListItemIcon>
                <ErrorOutlineIcon sx={{ color: iconColor.base }} />
              </ListItemIcon>
              <Typography style={{ fontWeight: 'bold' }} align='center' variant='h6'>
                {' '}
                {t('newReports')}{' '}
              </Typography>
            </ListItemButton>
            {reports.map((report: any) => (
              <Grid key={report._id} sx={{ margin: { md: '20px', sm: '20px', xs: '5px' } }}>
                <Report report={report} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(() => ({
  generalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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
}))

export default BusinessOrAgencyHome
