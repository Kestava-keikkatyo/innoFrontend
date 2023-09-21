import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { FormikTextField } from '../../components/FormField'

import './forms.css'

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import { useSelector } from 'react-redux'

/**
 * @component
 * @desc Login form for worker, agency and business.
 * @param {Object} props
 * @param {boolean} props.loggingIn - User currently loggin in
 * @param {function} props.handleSubmit - Function for sending user credentials
 */
const LogInForm: React.FC<any> = ({ handleSubmit }) => {
  const { t } = useTranslation()
  const { loading } = useSelector((state: any) => state.user)

  const fontTheme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={fontTheme}>
      <Card variant='outlined'>
        <CardContent>
          <Typography align='center' variant='h1' gutterBottom className='header'>
            {t('log_in')}
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values) => {
              const errors: any = {}
              const emailRegExp = /^[\p{L}\p{N}.-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,}$/u
              const requiredError = t('field_required')
              if (!values.email) {
                errors.email = requiredError
              } else if (!emailRegExp.test(values.email)) {
                errors.email = t('invalid_email_address')
              }
              if (!values.password) {
                errors.password = requiredError
              }
              return errors
            }}
            onSubmit={(values) => {
              handleSubmit(values)
            }}
          >
            {({ isValid }) => (
              <Form>
                <Box display='flex' flexDirection='column'>
                  <FormikTextField
                    label={t('email_label')}
                    name='email'
                    type='text'
                    placeholder='user@mail.com'
                  />
                  <FormikTextField
                    label={t('password')}
                    name='password'
                    type='password'
                    className='marginTop'
                  />
                  <Button
                    type='submit'
                    disabled={!isValid || loading}
                    variant='contained'
                    color='primary'
                    className='marginTop'
                  >
                    {loading ? <CircularProgress size={24} /> : t('log_in')}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default LogInForm
