import React, { useEffect } from 'react'
import { Grid, Link, ThemeProvider, Typography, createTheme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useTranslation } from 'react-i18next'
import SendFeeling from '../Feeling/SendFeeling'
import { useDispatch } from 'react-redux'
import { getMyReports } from '../../actions/reportActions'
import SrcFile from '../../pages/ResponsibilitiesPage/SrcFile'
import Header from './Header'

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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyReports())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Header welcomeText={t('welcomeTextWorker')} />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', sm: 'row', xs: 'column' },
        }}
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
    </ThemeProvider>
  )
}

const useStyles = makeStyles(() => ({
  item: {
    flex: '1',
    padding: '30px',
    borderRadius: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
}))

export default WorkerHome
