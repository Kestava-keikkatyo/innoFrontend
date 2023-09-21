import React, { useEffect, useState } from 'react'
import {
  Button,
  CardMedia,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import LatestJobAds from '../JobPage/LatestJobAds'
import WorkerPieChart from '../../components/chart/WorkerPieChart'
import { useTranslation } from 'react-i18next'
import picture from '../../assets/pictures/Kirjautuminen_etusivu_Keikkakaveri_tyovaline_kuvitus.svg'
import SendFeeling from '../Feeling/SendFeeling'
import { useDispatch, useSelector } from 'react-redux'
import { getMyReports } from '../../actions/reportActions'
import Report from '../ReportPage/Report'
import SrcFile from '../../pages/ResponsibilitiesPage/SrcFile'

const WorkerHome = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      allVariants: {
        color: '#2C2C2C',
      },
    },
  })

  const reports: any = useSelector((state: any) => state.report.reports)

  enum displayState {
    All = 'all',
    Archived = 'archived',
    NotArchived = 'notArchived',
  }
  const [display] = useState(displayState.All)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyReports())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid
          sx={{ height: { md: '40%', sm: '30%', xs: '20%' } }}
          style={{
            marginBottom: '20px',
            maxHeight: '300px',
            width: '100%',
            display: 'flex',
            backgroundImage: 'linear-gradient(to bottom, #FDFDFD, #FDFDFD 50%, #C0CFFA 50%)',
            position: 'relative',
          }}
        >
          <Grid
            item
            style={{ bottom: '0', position: 'absolute' }}
            sx={{ width: { md: '35%', sm: '50%', xs: '90%' } }}
          >
            <CardMedia component='img' image={picture} style={{}} />
          </Grid>
          <Grid
            item
            sx={{ visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' } }}
            style={{
              paddingRight: '50px',
              textAlign: 'right',
              textTransform: 'uppercase',
              bottom: '0',
              width: '100%',
              position: 'absolute',
            }}
          >
            <h2>{t('welcomeTextWorker')}</h2>
          </Grid>
        </Grid>
        <Grid
          className={classes.generalInfo}
          sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }}
        >
          <Grid
            item
            className={classes.item}
            sx={{ marginRight: { md: '20px', sm: '20px', xs: '0' } }}
          >
            <Typography align='center' variant='h6'>
              {' '}
              <Link style={{ color: 'black' }} href='/feeling/send' underline='hover'>
                {t('feelings')}
              </Link>{' '}
            </Typography>
            <SendFeeling></SendFeeling>
          </Grid>
          <Grid
            item
            style={{ margin: 0, paddingLeft: 12, paddingRight: 12 }}
            className={classes.item}
          >
            <Typography align='center' variant='h6' style={{ marginBottom: '20px' }}>
              {' '}
              <Link style={{ color: 'black' }} href='/responsibilities' underline='hover'>
                {t('responsibilities')}
              </Link>{' '}
            </Typography>
            <Typography variant='subtitle1'>
              <SrcFile inputString='workerResponsibilitiesArray' inputIndex={0} />
              <SrcFile inputString='workerResponsibilitiesArray' inputIndex={1} />
              <SrcFile inputString='workerResponsibilitiesArray' inputIndex={2} />
              <SrcFile inputString='workerResponsibilitiesArray' inputIndex={3} />
              <SrcFile inputString='workerResponsibilitiesArray' inputIndex={4} />
            </Typography>
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
    flex: '1',
    padding: '30px',
    borderRadius: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  container: {
    margin: '10px 0px',
    display: 'flex',
    alignItems: 'center',
  },
  pageContent: {
    flex: '4',
    padding: '5px',
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
}))

export default WorkerHome
