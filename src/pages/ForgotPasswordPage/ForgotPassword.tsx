import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import FormikField from '../../components/FormField'
import * as Yup from 'yup'
import history from '../../utils/history'

import '../LoginPage/forms.css'
import logo_kk from '../../assets/logo_keikkakaveri_navbar.svg'

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  createTheme,
  ThemeProvider,
  Grid,
  Stack,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { verifyToken } from '../../actions/userActions'
import i18next from 'i18next'
import i18n from '../../i18nextInit'
import { resetPassword } from '../../actions/usersActions'

interface FormValues {
  newPassword: string
  confirmNewPassword: string
  token: string
}

const initialValues: FormValues = {
  newPassword: '',
  confirmNewPassword: '',
  token: '',
}

const ChangePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required(i18next.t('change_password_new_password_is_required'))
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      i18n.t('change_password_validation'),
    ),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), undefined],
    i18next.t('passwords_must_match'),
  ),
})

const ForgotPassword: React.FC<any> = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const fontTheme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  })

  function getLastPart(url: string) {
    const parts = url.split('=')
    return parts.at(-1)
  }

  useEffect(() => {
    const url = window.location.href
    const userToken = getLastPart(url)
    const tokenObject = {
      token: userToken,
    }
    verifyTokenSubmit(tokenObject)
  }, [])

  const verifyTokenSubmit = async ({ ...token }: any) => {
    dispatch(verifyToken(token))
  }

  const handleSubmit = (values: FormValues) => {
    dispatch(resetPassword(values.newPassword))
  }

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
                {t('set_new_password_header')}
              </Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ChangePasswordSchema}
              >
                {() => {
                  return (
                    <Form>
                      <FormikField
                        name='newPassword'
                        label={t('new_password')}
                        type='password'
                        required
                      />
                      <FormikField
                        name='confirmNewPassword'
                        label={t('confirm_password')}
                        type='password'
                        required
                      />
                      <Stack direction='row' spacing={2}>
                        <Button type='submit' variant='contained' color='primary'>
                          {t('set_new_password_submit')}
                        </Button>
                        <Button
                          variant='outlined'
                          color='primary'
                          onClick={() => history.push('/')}
                        >
                          {t('button_cancel')}
                        </Button>
                      </Stack>
                    </Form>
                  )
                }}
              </Formik>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </ThemeProvider>
  )
}

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default ForgotPassword
