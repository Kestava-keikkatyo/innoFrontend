import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { FormikTextField, FormikRadioField } from '../../components/FormField'

import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@material-ui/core'

/**
 * Login form for worker, agency and business.
 * @exports components/LandingPage/LogInForm
 * @param {Object} props
 * @param {boolean} props.loggingIn - User currently loggin in
 * @param {function} props.handleSubmit - Function for sending user credentials
 */
const LogInForm = ({ loggingIn, handleSubmit }) => {
  const { t } = useTranslation()

  const roleOptions = [
    { value: 'worker', label: t('worker') },
    { value: 'agency', label: t('agency') },
    { value: 'business', label: t('business') }
  ]

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          {t('log_in')}
        </Typography>
        <Formik
          initialValues={{ email: '', password: '', role: '' }}
          validate={values => {
            const errors = {}
            const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const requiredError = t('field_required')
            if (!values.email) {
              errors.email = requiredError
            } else if (!emailRegExp.test(values.email)) {
              errors.email = t('invalid_email_address')
            }
            if (!values.password) {
              errors.password = requiredError
            }
            if (!values.role) {
              errors.role = requiredError
            }
            return errors
          }}
          onSubmit={(values) => {
            handleSubmit(values)
          }}>
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <FormikRadioField
                  label={t('role')}
                  name="role"
                  options={roleOptions}
                />
                <FormikTextField
                  label={t('email_label')}
                  name="email"
                  type="text"
                  placeholder="test@test.com"
                />
                <FormikTextField
                  label={t('password')}
                  name="password"
                  type="password"
                  placeholder="jorma123"
                />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || loggingIn}
                  variant="contained"
                  color="primary">
                  {loggingIn ? <CircularProgress size={24} /> : t('submit')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

LogInForm.propTypes = {
  loggingIn: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
}

export default LogInForm