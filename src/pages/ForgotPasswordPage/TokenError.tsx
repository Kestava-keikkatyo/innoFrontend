import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { FormikTextField } from '../../components/FormField'

import '../LoginPage/forms.css'
import logo_kk from '../../assets/logo_keikkakaveri_navbar.svg'

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
  Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'

const EmailSent: React.FC<any> = ({ handleSubmit }) => {
  const { t } = useTranslation()
  const { loading } = useSelector((state: any) => state.user)

  const fontTheme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={fontTheme}>
      <Grid
        container
        justifyContent='center'
        spacing={0}
        alignItems='center'
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Box display='flex' justifyContent='center'>
          <Card variant='outlined' style={{ width: '320px' }}>
            <CardContent>
              <Typography align='center' className='marginTop2'>
                <img src={logo_kk} style={{ width: '200px' }} />
              </Typography>
              <Typography align='center' className='marginTop2'>
                {t('token_error_text')}
              </Typography>
              <Box display='flex' flexDirection='column'>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className='marginTop2'
                  onClick={() => {
                    window.location.href = '/'
                  }}
                >
                  {t('back_to_landingpage')}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </ThemeProvider>
  )
}

EmailSent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default EmailSent
