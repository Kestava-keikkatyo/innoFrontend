import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { FormikTextField, FormikSelectField } from '../../components/FormField';
import SignUpModal from './SignUpModal';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  Link,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

/**
 * @component
 * @desc Signup form for worker, agency and business.
 * @param {Object} props
 * @param {function} props.handleSubmit - Function for sending user credentials
 */
const SignUpForm: React.FC<any> = ({ handleSubmit }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { loading } = useSelector((state: any) => state.user);

  const roleOptions = [
    { value: 'worker', label: t('worker') },
    { value: 'agency', label: t('agency') },
    { value: 'business', label: t('business') },
  ];

  const categoryOptions = [
    {
      value: 'Rakennus, asennus ja huolto',
      label: t('Rakennus, asennus ja huolto'),
    },
    { value: 'IT- ja tietoliikenne', label: t('IT- ja tietoliikenne') },
    { value: 'Koulutus- ja opetusala', label: t('Koulutus- ja opetusala') },
    { value: 'Tekniikka', label: t('Tekniikka') },
    {
      value: 'Lääketeollisuus- ja farmasia',
      label: t('Lääketeollisuus- ja farmasia'),
    },
    { value: 'Kiinteistö', label: t('Kiinteistö') },
  ];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          {t('sign_up')}
        </Typography>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: '',
            category: '',
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
            if(values.password.length < 3){
              errors.password = t('invalid_length');
            }
            if (!values.name) {
              errors.name = requiredError;
            } else if (values.name.length < 3) {
              errors.name = t('invalid_name');
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm = requiredError;
            } else if (values.passwordConfirm !== values.password) {
              errors.passwordConfirm = t('invalid_password');
            }
            if (!values.role) {
              errors.role = requiredError;
            }
            if (values.role !== 'worker' && !values.category) {
              errors.category = requiredError;
            }
            return errors;
          }}
          // handleSubmit doesn't need password confirmation
          // eslint-disable-next-line no-unused-vars
          onSubmit={({ passwordConfirm, ...rest }) => {
            handleSubmit(rest);
          }}
        >
          {({ isValid, dirty, values, setFieldValue }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                <FormikTextField
                  label={t('name')}
                  name="name"
                  type="text"
                  placeholder="user"
                />
                <FormikTextField
                  label={t('email')}
                  name="email"
                  type="text"
                  placeholder="user@mail.com"
                />
                <Box display="flex" flexDirection="row">
                  <Box paddingRight={1}>
                    <FormikTextField
                      label={t('password')}
                      name="password"
                      type="password"
                      placeholder="secret123"
                    />
                  </Box>
                  <FormikTextField
                    label={t('confirm')}
                    name="passwordConfirm"
                    type="password"
                    placeholder="secret123"
                  />
                </Box>
                <FormikSelectField
                  label={t('role')}
                  name="role"
                  options={roleOptions}
                />
                <FormikSelectField
                  label={t('category')}
                  name="category"
                  options={categoryOptions}
                  disabled={values.role === 'worker' ? true : false}
                  setFieldValue={setFieldValue}
                />
                <Typography gutterBottom variant="body2" color="textSecondary">
                  {t('terms_of_use')}
                  <Link
                    style={{ cursor: 'pointer' }}
                    variant="body2"
                    onClick={() => setOpen(true)}
                  >
                    {t('terms_agency')}
                  </Link>
                </Typography>
                <SignUpModal open={open} handleClose={() => setOpen(false)} />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || loading}
                  variant="contained"
                  color="primary"
                >
                  {loading ? <CircularProgress size={24} /> : t('sign_up')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
