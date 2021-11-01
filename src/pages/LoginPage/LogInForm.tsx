import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { FormikTextField, FormikRadioField } from '../../components/FormField';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

/**
 * @component
 * @desc Login form for worker, agency and business.
 * @param {Object} props
 * @param {boolean} props.loggingIn - User currently loggin in
 * @param {function} props.handleSubmit - Function for sending user credentials
 */
const LogInForm: React.FC<any> = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const { loading } = useSelector((state: any) => state.user);

  /*
  const roleOptions = [
    { value: 'worker', label: t('worker') },
    { value: 'business', label: t('business') },
    { value: 'agency', label: t('agency') },
  ];
  */

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          {t('log_in')}
        </Typography>
        <Formik
          initialValues={{
            email: 'jarmo-agency@test.com',
            password: 'jarmo123',
          }}
          validate={(values) => {
            const errors: any = {};
            const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const requiredError = t('field_required');
            if (!values.email) {
              errors.email = requiredError;
            } else if (!emailRegExp.test(values.email)) {
              errors.email = t('invalid_email_address');
            }
            if (!values.password) {
              errors.password = requiredError;
            }
            /*    if (!values.role) {
              errors.role = requiredError;1
            }*/
            return errors;
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                {/*
                <FormikRadioField
                  label={t('role')}
                  name="role"
                  options={roleOptions}
                />
                */}
                <FormikTextField
                  label={t('email_label')}
                  name="email"
                  type="text"
                  placeholder="jarmo@test.com"
                />
                <FormikTextField
                  label={t('password')}
                  name="password"
                  type="password"
                  placeholder="jarmo123"
                />
                <Button
                  type="submit"
                  disabled={!isValid || loading}
                  variant="contained"
                  color="primary"
                >
                  {loading ? <CircularProgress size={24} /> : t('log_in')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LogInForm;
