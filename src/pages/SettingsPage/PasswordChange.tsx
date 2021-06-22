import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'

import { FormikTextField } from '../../components/FormField'

import { Card, CardContent, Typography, Button, Box } from '@material-ui/core'


/**
 * @component
 * @desc Component for changing worker/agency/business password.
 * @param {Object} props
 * @param {boolean} props.hide - Determines if form for changing password is displayed
 * @param {function} props.handleSubmit - Function for updating password
 */
const PasswordChange: React.FC<any> = ({ handleSubmit, hide }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between">
          <Typography align="center" variant="h4">
            Password
          </Typography>
          <Typography
            style={{ cursor: 'pointer', height: 'min-content' }}
            color="textSecondary"
            variant="body2"
            onClick={hide}>
          </Typography>
        </Box>
        <Typography gutterBottom color="textSecondary" variant="body2">
          create a new password
        </Typography>
        <Formik
          initialValues={{ password: '', passwordConfirm: '' }}
          validate={values => {
            const errors: any = {}
            const requiredError = 'Field is required'
            if (!values.password) {
              errors.password = requiredError
            } else if (values.password.length < 3) {
              errors.password = 'Invalid password'
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm = requiredError
            } else if (values.passwordConfirm !== values.password) {
              errors.passwordConfirm = 'Password does not match'
            }
            return errors
          }}
          onSubmit={({ password }) => {
            hide()
            handleSubmit({ password })
          }}>
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row">
                  <div style={{ padding: '0 5px', flexGrow: 1 }}>
                    <FormikTextField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="jorma123"
                      fullWidth
                    />
                  </div>
                  <div style={{ padding: '0 5px', flexGrow: 1 }}>
                    <FormikTextField
                      label="Confirm"
                      name="passwordConfirm"
                      type="password"
                      placeholder="jorma123"
                      fullWidth
                    />
                  </div>
                </Box>
                <Button
                  type="submit"
                  disabled={!dirty || !isValid}
                  variant="contained"
                  color="primary">
                  submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

PasswordChange.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired
}

export default PasswordChange